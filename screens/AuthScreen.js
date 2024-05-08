import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native'
const myImage = require("../assets/1.png")




const AuthScreen = ({onAuthenticate}) => {
  return (
    <View >
        <Image source={myImage} style={styles.image}/>
        <Text style={styles.title}>EXPENIO</Text>
        <Text style={styles.description}>Going cashless has never been htis easier whit the worlds most leading expense manager. </Text>
        <TouchableOpacity
        onPress={onAuthenticate}

        style={styles.btn}
        >
            <Text style = {styles.text}>Log In</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    image:{
      width: "100%",
      height: 450,
    },
    title:{
        textAlign:"center",
        fontSize:50,
        fontWeight: "500",
        marginVertical:30,
    },
    description:{
        textAlign:"center",
        justifyContent:"center",
        fontSize:18,
        marginHorizontal:15,
        marginBottom:50
    },
    text:{
      fontSize: 20,
      color: '#f5f5f5',
      textAlign:"center"
    },
    btn:{
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0893FC',
      padding: 15,
      marginHorizontal: 20,
      borderRadius: 30,
      marginTop: 50,
    },
    
})

export default AuthScreen
