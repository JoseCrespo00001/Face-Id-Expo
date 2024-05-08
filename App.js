import { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './screens/AuthScreen';
import PaymentScreen from './screens/PaymentScreen';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  // nos deja saber si el dispositivo soporta los biometric huella o cara.
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  //aca vamos aver si acepta face id o touch identity
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })
  },[])

  // Función para autenticar utilizando la autenticación local
  function onAuthenticate () {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter Password',
    });
    auth.then(result => {
      setIsAuthenticated(result.success);
        console.log(result);
    }
    );
  }




  return (
    
    <View style = {styles.container}>
      {isAuthenticated ? <PaymentScreen
      setIsAuthenticated={setIsAuthenticated}
      /> : 
      <AuthScreen
      onAuthenticate={onAuthenticate}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
