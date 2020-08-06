import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import './styles';

export default function UserHome() {

    const user = useSelector(state => state.sessionInfo.user);

    return (
        <View>
            <Text>{user.email}</Text>
        </View>
    );
}