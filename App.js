import React, { useEffect } from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SetTimer from './components/SetTimer';
import { styles } from './styles/styles';

function App(){
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <View style={styles.container}>
      <SetTimer />
    </View>
      
    
      
  )
}
export default App;
