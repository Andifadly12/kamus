import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import Tab from './Tabs';

import { createStackNavigator } from '@react-navigation/stack';
// import Fadly from './scr/screen/fadly';
// const Stack= createStackNavigator();
// function App() {
//     return(
//     <NavigationContainer>
//         <Stack.Navigator  initialRouteName='Home' screenOptions={{headerShown:false}}>
//             <Stack.Screen name='Home' component={Home} />
//             <Stack.Screen name='Detail' component={Detail} />
//             <Stack.Screen name='Fadly' component={Fadly} />
//         </Stack.Navigator>
//     </NavigationContainer>
//     )
// }
// export default App;
// function HomeScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
  
//   function SettingsScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
  
//   const Tab = createBottomTabNavigator();
  
//   export default function App() {
//     return (
//       <NavigationContainer>
//         <Tab.Navigator
//         tabBarOptions={{}}
//         screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
                
//               if (route.name === 'Home') {
//                 iconName = focused
//                   ? 'ios-information-circle'
//                   : 'ios-information-circle-outline';
//               } else if (route.name === 'Settings') {
//                 iconName = focused ? 'ios-list-box' : 'ios-list';
//               }
  
//               // You can return any component that you like here!
//               return <Ionicons name={iconName} size={size} color={color} />;
//             },
//           })}
        
//         >
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Settings" component={SettingsScreen}  />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }



function App(){
  return(
  <NavigationContainer
    
  >
    <Tab />
  </NavigationContainer>
  )
}

export default App