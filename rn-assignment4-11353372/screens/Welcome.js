import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import React from 'react'

function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Jobbizz}>Jobbizz</Text>
      <Text style={styles.Welcome}>Welcome Back 👋</Text>
      <Text style={styles.apply}>Let’s log in. Apply to jobs!</Text>

      <TextInput style={styles.input} placeholder='Name'/>
      <TextInput style={styles.input} placeholder='Email'/>


      <TouchableOpacity 
      onPress={ () => navigation.navigate("Jobs")}
      style={{
        marginTop: 20,
        backgroundColor: '#356899',
        height: 50,
        width: 317,
        marginLeft: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      }}
    >
      <Text style={{color: 'white', fontSize: 17}}>Log in</Text>
    </TouchableOpacity>


      <Text style= {{textAlign: 'center', marginTop: 70, color: '#AFB0B6'}}>or continue with</Text>

      <View style= {{alignItems: 'center', flexDirection: 'row', columnGap: 20, justifyContent: 'center'}}>
        <Image style={styles.logo} source={require('../assets/apple-logo.png')}/>
        <Image style={styles.logo} source={require('../assets/facebook.png')}/>
        <Image style={styles.logo} source={require('../assets/google.png')}/>
      </View>

      <Text style= {{textAlign: 'center', marginTop: 70, color: '#AFB0B6'}}>Haven’t an account?  <Text style={{color: '#356899'}}>Register</Text></Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFD',
  },

  Jobbizz:{
    marginTop: 100,
    fontSize: 20,
    marginLeft: 30,
    color: '#356899'
  },

  Welcome:{
    fontSize: 25,
    marginLeft: 30,
    fontWeight: 'bold',
    color: '#0D0D26'
  },

  apply:{
    fontSize: 14,
    marginLeft: 32,
    marginTop: 10,
    color: '#AFB0B6'
  },

  input: {
    height: 45,
    margin: 10,
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 8,
  },

  logo: {
    marginTop: 50,
    width: 28,
    height: 28,
  },


});
