/* eslint-disable react/no-unstable-nested-components */
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';

import {
  faBarsStaggered,
  faBookmark,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';

import Favorite from '../screens/Favorite/Favorite';
import Home from '../screens/Home/Home';
import {MainColor} from '../utils/constant';
import GenreList from '../screens/GenreList/GenreList';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarActiveTintColor: `${MainColor.PRIMARY_BLUE}`,
  tabBarInactiveTintColor: `${MainColor.PRIMARY_GRAY}`,
  headerShown: false,
  tabBarHideOnKeyboard: true,
};

export default function TabNavigator() {
  return (
    <Tab.Navigator {...{screenOptions}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faHouse} size={18} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Genre"
        component={GenreList}
        options={{
          headerShown: true,
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faBarsStaggered} size={18} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: true,
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faBookmark} size={18} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderBottomWidth: 0.2,
    borderBottomColor: MainColor.SECONDARY_GRAY,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
});

export {styles};
