// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Auth/Splash/Splash';
import BottomTab from './BottomTab';
import Quiz from '../screens/Dashboard/LearnandEarn/Quiz'
import Courses from '../screens/Dashboard/LearnandEarn/Courses';
import Description from '../screens/Dashboard/LearnandEarn/Description'

import Questions from '../screens/Dashboard/LearnandEarn/Questions';
import Login from '../screens/Auth/Login/Login';
import Signup from '../screens/Auth/Signup/Signup';

const Stack = createNativeStackNavigator();
function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="Description" component={Description} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav

