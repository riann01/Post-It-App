import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function CreateNewAnnotation() {

    const [selectedColor, setSelectedColor] = useState('#640AA8');

    const navigation = useNavigation();

    const colors = [
        {
            name: 'Roxo',
            code: '#640AA8'
        },
        {
            name: 'Vermelho',
            code: '#FF0C38'
        },
        {
            name: 'Azul',
            code: '#4251F5'
        },
        {
            name: 'Laranjado',
            code: '#F58219'
        }
    ];

    return (
        <View style={styles.container}>
            <View style={[styles.background, { backgroundColor: selectedColor }]}>
                <KeyboardAwareScrollView style={styles.safeArea}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                            <Icon name="arrow-left" size={30} color="#FFF" />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                Criar anotação
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.subtitle}>Cor</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator
                        contentContainerStyle={{ alignItems: "center" }}
                    >
                        {colors.map((color) => (
                            <TouchableOpacity onPress={() => setSelectedColor(color.code)} key={color.name}>
                                <View style={styles.colorContainer}>
                                    <View style={[styles.colorBlock, { backgroundColor: color.code, borderColor: color.code === selectedColor ? "#F5CE42" : "#FFF" }]} />
                                    <Text style={styles.colorName}>{color.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <TextInput />
                </KeyboardAwareScrollView>
            </View>
        </View>
    );
}