import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearnandEarn from '../screens/Dashboard/LearnandEarn/LearnandEarn';

 export const Learnandearnstack = () => {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator initialRouteName='LearnandEarn' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LearnandEarn" component={LearnandEarn} />
       

      
      </Stack.Navigator>
    );
  
  };
