import {
    View,
    StyleSheet
} from 'react-native';
import { AppButton } from '../components/AppButton';


const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.outerContainer}>
            <AppButton
                textInside={'Go to Home'}
                onPress={() => navigation.popToTop('Home')}
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

export { ProfileScreen };
