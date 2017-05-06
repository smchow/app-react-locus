import React, { Component } from 'react'

import {
   View, 
   ListView,
   Text,
   Image,
   StyleSheet
} from 'react-native'

import Login from './app/components/Login.js'
import ProjectList from './app/components/ProjectList.js'
//import Projects from './app/components/Projects.js'


export default class App extends Component {
   constructor(props) {
      super(props)
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   
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
    handleData = () => {
      alert('here');
    }
   updateEmail = (text) => {
      this.setState({email: text})
   }
   updatePassword = (text) => {
      this.setState({password: text})
   }
   login = () => {
      //alert('email: ' + this.state.email + ' password: ' + this.state.password)
      //this.state.loggedin = true;
      this.setState({
          loggedin : true,
          showProjects : true
      });
   }

  componentDidMount(){
    fetch("https://react-locus.herokuapp.com/view/1")
    .then(res => res.json())
    .then(projects => {
      console.log(projects[1]);
      this.setState({
        dataSource : this.state.dataSource.cloneWithRows(projects)
      })
    })
  }

   render(){
      let showLogin = null;
      let showProjects = null;
      this.state.loggedin = true;
      this.state.showProjects =false;
      if (this.state.showProjects){
        showProjects = 
       <View>
            <ProjectList 
            dataSource = {this.state.dataSource} 
            handleData = {this.handleData.bind(this)}
            
            />
         </View>
      }
    
    
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


         <Image
                         style={{width: 50, height: 80, justifyContent:'flex-start', marginTop:15}}
                         source={{uri: 'https://locus-image-store.s3.amazonaws.com/locus.png'}}
                       />
         <Text style={{
    fontSize: 25, fontSize: 25,
    fontWeight: 'bold', color:'#2c3e50',
    justifyContent: 'space-between',
    marginTop:15, marginLeft:155}}> Locus </Text>

    <View style={{
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 40,
    marginHorizontal: 10,
  }}>
        <Text>
          <Image style={{width:50, height:50}} source={{uri: 'http://loremflickr.com/g/50/50/paris'}}/>
          Line 1
        </Text>
        <Text>
          <Image style={{width:50, height:50}} source={{uri: 'http://loremflickr.com/g/50/50/paris'}}/>
          Line 2
        </Text>
      </View>
           <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
         <View> 
    
    
           {/*<Image
                         style={{width: 50, height: 80, justifyContent:'flex-start'}}
                         source={{uri: 'https://locus-image-store.s3.amazonaws.com/locus.png'}}
                       />*/}
          <Text style={{
    fontSize: 25,
    fontWeight: 'bold', color:'pink',
    justifyContent: 'space-between',
    marginTop:5,
    //marginRight:55,
    //color: '#2c3e50',
  }}> Locus</Text>
         </View>
        </View>

        
        <View>
            {showLogin}
            {showProjects}
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
  },
  h2: {
    fontSize: 25,
    fontWeight: 'bold',
    //justifyContent: 'space-between',
    //marginTop:35,
    //marginRight:55,
    color: '#2c3e50',
  },
  header:{
    //alignSelf: 'strech',
    flexDirection: 'row',
    backgroundColor: '#78bcaf',
    //textAlign: 'center',
    flex:1,
    justifyContent: 'space-around',
    
    //padding: 10,
  },
  listItem: {
      fontSize: 12,
      fontWeight: 'bold',
      flex: 1,
      flexDirection: 'row',
   },
   listHeaderItem: {
      fontSize: 12,
      fontWeight: 'bold',
   },
   footer: {
      position: 'absolute',
      flexDirection: 'row',
      backgroundColor: '#78bcaf',
      
      justifyContent: 'space-between'
   }

});


