import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

export default function Authenticate() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <KeyboardAwareScrollView style={styles.safeArea}>
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
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.button}>
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