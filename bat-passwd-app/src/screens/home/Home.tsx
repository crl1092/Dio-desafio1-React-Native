import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './HomeStyle';
import { Batlogo } from '../../components/BatLogo/BatLogo';

export function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Batlogo />
            </View>
            <Text>Home Works!!</Text>
        </View>
    );
}