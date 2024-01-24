import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import Explore from '../screens/Explore/Explore';
import MovieDetail from '../screens/MovieDetail/MovieDetail';

import ViewAll from '../screens/ViewAll/ViewAll';
import {RootState} from '../store/reducer/reducer';
import TabNavigator from './TabNavigator';

interface AppNavigatorProps {}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Stack = createStackNavigator();

const AppNavigator: React.FC<AppNavigatorProps> = () => {
  const {viewAllTitle} = useSelector((state: RootState) => state.home);

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="MainApp"
        screenOptions={{...TransitionPresets.DefaultTransition}}>
        <Stack.Screen
          name="MainApp"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAll}
          options={{
            headerShown: true,
            title: viewAllTitle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
