import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function Register() {

    const navigation = useNavigation();

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
                            style={styles.input}
                        />
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            placeholder="joao@exemplo.com"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            style={styles.input}
                        />
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            placeholder="Mínimo de 8 caracteres"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            secureTextEntry={true}
                            style={styles.input}
                        />
                        <Text style={styles.label}>Repita a senha</Text>
                        <TextInput
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            secureTextEntry={true}
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.button}>
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