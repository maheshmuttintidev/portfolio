import React from 'react';
import {BasicWrapper} from '../hocs';
import {createStackNavigator} from '@react-navigation/stack';
import {Contact, Home, Projects, Resume, Skills} from '../screens';
const Stack = createStackNavigator();

const stackScreenOptions = {
  headerShown: false,
};

export default function GeneralStack() {
  return (
    <BasicWrapper>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={stackScreenOptions}
        />
        <Stack.Screen
          name="Skills"
          component={Skills}
          options={stackScreenOptions}
        />
        <Stack.Screen
          name="Projects"
          component={Projects}
          options={stackScreenOptions}
        />
        <Stack.Screen
          name="Resume"
          component={Resume}
          options={stackScreenOptions}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={stackScreenOptions}
        />
      </Stack.Navigator>
    </BasicWrapper>
  );
}
