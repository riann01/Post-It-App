import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import auth from '@react-native-firebase/auth';

export default function Authenticate() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const authState = useSelector(state => state.sessionInfo.authState);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate('Register');
    }

    const goToUserHome = () => {
        navigation.navigate('UserHome');
    }

    useEffect(() => {
        if(authState === 'AUTHENTICATED') {
            navigation.navigate('UserHome');
        }
        else {
            const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
            return subscriber;
        }
    }, []);

    const onAuthStateChanged = user => {
        setUser(user);
        if (isLoading) setIsLoading(false);
    }

    const authenticate = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            setLoginDataAction('AUTHENTICATED', user);
            //alert(user.email);
            goToUserHome();
        })
        .catch(error => {
            console.error(error);
        });
    }

    const setLoginDataAction = (authStatus, user) => {
        dispatch({
            type: 'ADD_SESSION_DETAILS',
            authStatus,
            user
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <KeyboardAwareScrollView style={styles.safeArea}>
                    <Modal
                        animationType="slide"
                        isVisible={isLoading}
                        style={styles.modalContainer}
                    >
                        <View style={styles.modal}>
                            <ActivityIndicator size="large" color="#640AA8" />
                        </View>
                    </Modal>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                            <Icon name="arrow-left" size={30} color="#FFF" />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                Autenticar
                        </Text>
                        </View>
                    </View>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        placeholder="joao@exemplo.com"
                        placeholderTextColor="rgba(255, 255, 255, 0.75)"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={[styles.input, { fontFamily: "Montserrat-Medium" }]}
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        onChangeText={text => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                        style={[styles.input, { fontFamily: "Montserrat-Medium" }]}
                    />
                    <TouchableOpacity onPress={() => authenticate()} style={styles.button}>
                        <View style={styles.buttonContent}>
                            <View style={styles.buttonIcon}>
                                <Icon name="log-in" size={30} color="#FFF" />
                            </View>
                            <View style={styles.buttonTextContainer}>
                                <Text style={styles.buttonText}>Entrar</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.textNew}>É novo por aqui?</Text>
                    <TouchableOpacity onPress={() => goToRegister()} style={styles.button}>
                        <View style={[styles.buttonContent, { justifyContent: 'center' }]}>
                            <Text style={styles.buttonText}>Criar uma conta</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </View>

        </View>
    );
}