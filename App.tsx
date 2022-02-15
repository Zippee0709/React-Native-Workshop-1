import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// import AppNavigation from "./src/navigations/AppNavigation.js";
// import LoginScreen from "./src/screens/LoginScreen.js";

import HomeScreen from "./src/screens/Home.js";
import MyTaskScreen from "./src/screens/MyTask.js";
import SettingsScreen from "./src/screens/Settings.js";
import SplashScreen from "./src/screens/Splash.js";
import Introduction1Screen from "./src/screens/Introduction1.js";
import Introduction2Screen from "./src/screens/Introduction2.js";
import Introduction3Screen from "./src/screens/Introduction3.js";
import Introduction4Screen from "./src/screens/Introduction4.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyTask" component={MyTaskScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Introduction1Screen" component={Introduction1Screen} />
        <Stack.Screen name="Introduction2Screen" component={Introduction2Screen} />
        <Stack.Screen name="Introduction3Screen" component={Introduction3Screen} />
        <Stack.Screen name="Introduction4Screen" component={Introduction4Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
