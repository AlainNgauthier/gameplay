import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

export const SignIn = () => {
    const [firstStep, setFirstStep ] = useState('My first React Native App');

    return (
        <View style={styles.container}>
            <Text>
                { firstStep }
            </Text>
            <TextInput
                style={styles.input} 
                onChangeText={ e => setFirstStep(e)}
            />
        </View>
    );
};