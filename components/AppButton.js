import React, { useState } from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const AppButton = ({textInside, onPress}) => {
    const [backgroundColor, setBackgroundColor] = useState('#FFDA2F');

    return (
        <Pressable 
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={onPress}
            onPressIn={() => setBackgroundColor('#FF9C2A')}
            onPressOut={() => setBackgroundColor('#FFDA2F')}
        >
            <Text style={styles.buttonText}>{textInside}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        width: .9 * Dimensions.get('screen').width,
        height: .1 * Dimensions.get('screen').height,
        borderWidth: 2,
        borderRadius: 30,
        margin: 10,
        padding: 10
    },
    buttonText: {
        fontFamily: 'serif',
        fontSize: 32,
        textAlign: 'center',
    }
});

export { AppButton };
