
import React from 'react'
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from './screens/Profile';
import Memories from './screens/Memories';
import Add from './screens/Add';
import List from './screens/List';
import Setting from './screens/Setting';

  const Tab = createBottomTabNavigator();
  
  const MyTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Memories" component={Memories} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    );
  }

export default MyTabs