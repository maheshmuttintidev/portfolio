import React, {createRef, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {sleep} from 'utils';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GeneralStack} from './src/stacks';
import {Contact, Home, Projects, Resume, Skills} from './src/screens';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// @ts-ignore
const navigationRef: React.RefObject<NavigationContainerRef> = createRef();

function App(): JSX.Element {
  useEffect(() => {
    const init = async () => {
      await sleep(3000);
      SplashScreen.hide(); //hides the splash screen on app load.
    };
    init();
  }, []);

  return <TabNavigator />;
}

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Skills" component={Skills} />
      <Tab.Screen name="Projects" component={Projects} />
      <Tab.Screen name="Resume" component={Resume} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};

export const StackNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="General" component={GeneralStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
