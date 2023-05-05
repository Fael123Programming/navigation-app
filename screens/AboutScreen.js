import {
    View,
    StyleSheet
} from 'react-native';
import { AppButton } from '../components/AppButton';


const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.outerContainer}>
            <AppButton
                textInside={'About again'}
                onPress={() => navigation.push('About')}
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

export { AboutScreen };
