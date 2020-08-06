import React, { useState } from 'react';
import { View, Text, TextInput, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Feather';
import register from './register';
import styles from './styles';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const navigation = useNavigation();

    const handleRegister = () => {
        if(password != confirmPassword) {
            setModalMessage('Hmmm... Parece que as senhas não conhecidem.');
        }
        else {
            const message = register(name, email, password);
            setModalMessage(message);
        }
        setShowModal(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <KeyboardAwareScrollView style={styles.safeArea}>
                    <Modal
                        animationType="slide"
                        visible={showModal}
                        style={styles.modal}
                    >
                        <View>
                        <Text>{modalMessage}</Text>
                        </View>
                    </Modal>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                            <Icon name="arrow-left" size={30} color="#FFF" />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                Registrar
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.subtitle}>Nos conte um pouco sobre você</Text>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Nome completo</Text>
                        <TextInput
                            placeholder="ex.: João da Silva"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            value={name}
                            onChangeText={text => setName(text)}
                            style={[styles.input, { fontFamily:"Montserrat-Medium" }]}
                        />
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            placeholder="joao@exemplo.com"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={[styles.input, { fontFamily:"Montserrat-Medium" }]}
                        />
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            placeholder="Mínimo de 8 caracteres"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                            style={[styles.input, { fontFamily:"Montserrat-Medium" }]}
                        />
                        <Text style={styles.label}>Repita a senha</Text>
                        <TextInput
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            value={confirmPassword}
                            onChangeText={text => setConfirmPassword(text)}
                            secureTextEntry={true}
                            style={[styles.input, { fontFamily:"Montserrat-Medium" }]}
                        />
                        <TouchableOpacity onPress={() => handleRegister()} style={styles.button}>
                            <View style={styles.buttonContent}>
                                <View style={styles.buttonIcon}>
                                    <Icon name="user-check" size={30} color="#FFF" />
                                </View>
                                <View style={styles.buttonTextContainer}>
                                    <Text style={styles.buttonText}>Criar conta</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    );
}