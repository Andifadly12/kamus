import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './scr/screen/Home';
import Detail from './scr/screen/Detail';
import { View, Text } from 'react-native';
const stack=createBottomTabNavigator();
function Tab(){
    return (
        <stack.Navigator
        tabBarOptions={{
            showLabel:false,
            style: {
                position:'absolute',
                borderWidth:10
            }
        }}
        >
          <stack.Screen name='Home' component={Home}
          options={{
            tabBarIcon:({focus})=>(
                <View>
                    <Text>blass</Text>
                    <View style={{
                        borderWidth:focus?'':1, borderColor:'black', marginTop:4
                    }}/>
                </View>
             
            )
          }}
          />
          <stack.Screen name='Detail' component={Detail}/>
        </stack.Navigator>
      
    )
  }

  export default Tab