import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppTheme } from '../../../theme/theme';

const Wallet = () => {
    return (
        <View style={styles.mainContainer} >

        </View>
    )
}

export default Wallet;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: AppTheme.background
    }
});
