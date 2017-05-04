import React, { Component } from 'react'

import {
   View, 
   ListView,
   Text
} from 'react-native'

import Login from './app/components/Login.js'
import ProjectList from './app/components/ProjectList.js'
//import Projects from './app/components/Projects.js'


export default class App extends Component {
   constructor(props) {
      super(props)
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      
    };
      this.state = {
         email: '',
         password: '',
         loggedin:false,
         showProjects :false,
         student:true,
         userid: '',
         projectid:'',
         //projects: ds.cloneWithRows([]),
         dataSource: ds.cloneWithRows([
            'Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 
               'Item9', 'Item10'
         ]),
         studentId: "2"
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
      //this.state.loggedin = true;
      this.setState({
          loggedin : true
      })
   }

  getProjects(){
    console.log("test")
    fetch("https://react-locus.herokuapp.com/view/1")
    .then(res => res.json())
    .then(projects => {
      console.log(projects[1]);
      this.setState({
        projects : this.state.projects.cloneWithRows(projects)
      })
    })
  }

   render(){
      let showLogin = null;
    
    if (!this.state.loggedin) {
      showLogin =  
        <View>
        <Login
               updateEmail = {this.updateEmail}
               updatePassword = {this.updatePassword}
               login = {this.login}
               // getProjects = {this.getProjects}
            />
        </View>
      } 
      return(
         <View>
            {showLogin}
            <View>
            <ProjectList dataSource = {this.state.dataSource} />
         </View>
         </View>
      )
   }
}