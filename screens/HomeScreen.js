import {
    View,
    StyleSheet,
} from 'react-native';
import { AppButton } from '../components/AppButton';

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.outerContainer}>
            <AppButton
                textInside={'About'}
                onPress={() => navigation.navigate('About')}
            />
            <AppButton
                textInside={'Profile'}
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
    }
});

export { HomeScreen };
