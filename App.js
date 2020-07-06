import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import Explore from './screen/Explore'
import Setting from './screen/Setting'
import History from './screen/History'
import Cart from './screen/Cart'
function ExploreScreen() {
  return (
    < Explore />
  );
}

function SettingsScreen() {
  return (
    <Setting />
  );
}

function HistoryScreen() {
  return (
    < History />
  );
}

function CartScreen() {
  return (
    < Cart />
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Explore'
      activeColor='#f0edf6'
      inactiveColor='#3e2465'
      barStyle={{backgroundColor:'#694fad'}}
      >
        <Tab.Screen name="Explore" component={ExploreScreen}  options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen}
        
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="settings" color={color} size={24} />
          ),
        }}/>
        <Tab.Screen name="History" component={HistoryScreen} 
         options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={24} />
          ),
        }}
         />
        <Tab.Screen name="Cart" component={CartScreen} 
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={24} />
            ),
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}