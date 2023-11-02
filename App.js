import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/components/stack";
import { StatusBar } from 'react-native';
import { NativeBaseProvider} from "native-base";

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending']);

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'}/>
        <MyStack/>
      </NavigationContainer>
  </NativeBaseProvider>
  );
}

