import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import CardSVG from '../components/CardSVG'

const PaymentScreen = ({ setIsAuthenticated }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Image source={{uri: 'https://thumbs.dreamstime.com/b/headshot-portrait-smiling-businessman-posing-office-profile-picture-young-caucasian-suit-glasses-pose-modern-happy-214577125.jpg'}} style={styles.image}/>
      <Text style={{color: 'gray', fontWeight: 'bold', marginTop: 15}}>PAYING </Text>
      <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 15}}>Robert Downey, Jr. </Text>
      <Text style={{fontSize: 55, fontWeight: '500', marginBottom: 15}}>$50.00</Text>
      <TextInput
          style={styles.textInput}
          placeholder="Add a note"
          placeholderTextColor="gray"
      />
      <CardSVG />
      <TouchableOpacity 
          onPress={() => setIsAuthenticated(false)}
          style={styles.btn}>
          <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
  },
  textInput: {
      width: '90%',
      height: 50,
      padding: 10,
      borderRadius: 15,
      backgroundColor: '#00000010',
      marginBottom: 20,
  },
  image: {
      width: 100,
      height: 100,
      borderRadius: 50,
  },
  btn: {
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0893FC',
      padding: 15,
      margin: 10,
      borderRadius: 30,
      marginTop: 50,
  },
  text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '500',
  },
  title: {
      fontSize: 40,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      paddingLeft: 15,
      paddingBottom: 20,
  }
})

export default PaymentScreen;

