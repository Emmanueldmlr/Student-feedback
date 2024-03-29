import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/NavigationType';
import LoginScreen from '../screens/Login';
import RegistrationScreen from '../screens/Register';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  // const {user, isOnboarded} = useAuthPermission();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 16,
        },
        headerBackTitleVisible: false,
      }}
      // initialRouteName={user ? "Home" : isOnboarded ? "Login" : "Splash"}
      initialRouteName={"Login"}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation
