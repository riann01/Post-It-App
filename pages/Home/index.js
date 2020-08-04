import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('Authenticate');
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>
                Crie suas anotações com esta solução criativa :)
            </Text>
            <TouchableOpacity onPress={() => handleNavigate()} style={styles.button}>
                <View style={styles.buttonContent}>
                    <View style={styles.buttonIcon}>
                        <Icon name="log-in" size={30} color="#FFF" />
                    </View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonText}>Começar</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}