import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Annotation({ color, content }) {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
            <Text>{content}</Text>
        </TouchableOpacity>
    );
}