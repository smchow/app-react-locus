import React, { Component } from 'react'

import {
   View,
   Text,
   TouchableHighlight,
   TextInput,
   StyleSheet
} from 'react-native'

export default Login = (props) => {
   return (
      <View style = {styles.container}>
          <Text style = {styles.title}> Welcome to Locus </Text>
         <Text style = {styles.text}>Please enter you email:</Text>
         <TextInput
            style = {styles.input}
            placeholder = 'Email'
            autoCapitalize = 'none'
            onChangeText = {props.updateEmail}
         />
         <Text style = {styles.text}>Please enter you password:</Text>
         <TextInput
            style = {styles.input}
            secureTextEntry={true}
            placeholder = 'Password'
            autoCapitalize = 'none'
            onChangeText = {props.updatePassword}
         />
         <TouchableHighlight
            style = {styles.submit}
            onPress = { () => props.login(props.email, props.password)}>
            <Text>
               Submit
            </Text>
         </TouchableHighlight>
      </View>
   )
}


var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
   input: {
      marginTop: 5,
      marginBottom: 30,
      height: 40,
      width : 200,
      borderColor: 'grey',
      borderWidth: 1
   },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
   submit: {
      backgroundColor: 'skyblue',
      width : 80,
      padding: 10
   }
});