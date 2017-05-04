import React, { Component } from 'react'

import {
   View, 
   Text
} from 'react-native'

import Login from './app/components/Login.js'


export default class App extends Component {
   constructor() {
      super()
      this.state = {
         email: '',
         password: '',
         loggedin:false,
         student:true,
         userid: '',
         projectid:''
      }
   }
   updateEmail = (text) => {
      this.setState({email: text})
   }
   updatePassword = (text) => {
      this.setState({password: text})
   }
   login = () => {
      alert('email: ' + this.state.email + ' password: ' + this.state.password)
   }

   render(){
      let showLogin = null;
    
    if (this.state.loggedin) {
      showLogin =  
        <View>
        <Login
               updateEmail = {this.updateEmail}
               updatePassword = {this.updatePassword}
               login = {this.login}
            />
        </View>
      }
      return(
         <View>
            {showLogin}
          
            
         </View>
      )
   }
}