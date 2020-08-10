import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import Annotation from '../../components/Annotation';

export default function UserHome() {

    const navigation = useNavigation();

    const user = useSelector(state => state.sessionInfo.user);

    const firstName = user.displayName.split(' ')[0]

    const logOut = () => {
        auth()
            .signOut()
            .then(() => navigation.navigate('Authenticate'));
    }

    const goToCreation = () => {
        navigation.navigate('CreateNewAnnotation');
    }

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <KeyboardAwareScrollView style={styles.safeArea}>
                    <View style={styles.header}>
                        <Text style={[styles.title, { textAlign: 'left' }]}>Olá, {firstName}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => logOut()}>
                            <Icon name="log-out" color="#FFF" size={30} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => goToCreation()}
                        touchSoundDisabled={false}
                        style={styles.item}
                    >
                        <Icon name="file-plus" color="#FFF" size={40} />
                        <Text style={styles.itemTitle}>Novo</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => logOut()}
                            touchSoundDisabled={false}
                            style={styles.item}
                        >
                            <Icon name="log-out" color="#FFF" size={40} />
                            <Text style={styles.itemTitle}>Sair</Text>
                        </TouchableOpacity>*/}
                    <Text style={styles.title}>Últimas anotações</Text>
                    <View style={styles.itemsContainer}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator
                        >
                            <Annotation color="#FF0C38" content="test" />
                        </ScrollView>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    );
}