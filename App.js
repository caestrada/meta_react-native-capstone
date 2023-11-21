import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './screens/Onboarding';
import Profile from './screens/Profile';
import SplashScreen from './screens/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isOnboardingCompleted, setIsOnboardingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {isOnboardingCompleted ? (
        <Stack.Screen name="Profile" component={Profile} />
      ) : (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}