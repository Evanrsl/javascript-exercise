
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'native-base';

import Profile from './screens/Profile';
import Memories from './screens/Memories';
import Add from './screens/Add';
import List from './screens/List';
import Setting from './screens/Setting';

  const Tab = createBottomTabNavigator();
  
  const MyTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown : false,
        }}
      >
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen 
        name="Memories" 
        component={Memories} options={{
            tabBarLabel: 'Memories',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            ),
          }}/>
        <Tab.Screen 
        name="Add" 
        component={Add} options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <AntDesign name="pluscircleo" size={30} color={color} />
            ),
            
          }}
          />
        <Tab.Screen
         name="List" 
         component={List} options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
            ),
          }}/>
        <Tab.Screen 
        name="Setting" 
        component={Setting} options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings" size={26} color={color} />
            ),
          }}/>
      </Tab.Navigator>
    );
  }

export default MyTabs