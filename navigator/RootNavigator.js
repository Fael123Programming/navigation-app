import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign: 'center'}}>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='About' component={AboutScreen}/>
                <Stack.Screen 
                    name='Profile' 
                    component={ProfileScreen}
                    options={{headerLeft: () => null}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { RootNavigator };
