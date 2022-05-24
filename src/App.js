import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './components/Home/Home';
import ShowMatch from './components/ShowMatch/ShowMatch';
import BroadcastMatchForm from './components/BroadcastMatchForm/BroadcastMatchForm';
import BroadcastMatch from './components/BroadcastMatch/BroadcastMatch';




export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer >
      <Stack.Navigator options="false" screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ShowMatch" component={ShowMatch} />
          <Stack.Screen name="BroadcastMatchForm" component={BroadcastMatchForm} />
          <Stack.Screen name="BroadcastMatch" component={BroadcastMatch} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <Home />
//       {/* <ShowMatch style={styles.ShowMatch}/> */}
//       {/* <BroadcastMatchForm /> */}
//       {/* <BroadcastMatch /> */}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padingTop: Constants.statusBarHeight,
    backgroundColor: '#004AAD',
  },
});
