import React, { Component } from 'react';
import { Text, View, ListView , Image, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      projects: ds.cloneWithRows([]),
      studentId: "3"
    };
  }

  componentDidMount(){
    console.log("test")
    let url = "https://react-locus.herokuapp.com/view/" + this.state.studentId ;
    alert(url);
    fetch(url)
    .then(res => res.json())
    .then(projects => {
      console.log(projects[1]);
      this.setState({
        projects : this.state.projects.cloneWithRows(projects)
      })
    })
  }
  
  render() {
    return (

      <View style={styles.container}>
  
        <View style={{flex: 0.3, flexDirection: 'row'}}>
         <View style={styles.header}> 
           <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                //borderColor: 'black', 
                //borderStyle: 'solid',
                borderWidth: 1,}}
              source={{uri: 'https://locus-image-store.s3.amazonaws.com/locus.png'}}
            />
          <Text style={styles.h2}> Locus</Text>
         </View>
        </View>

       
        <ListView
          dataSource={this.state.projects}
          renderRow = {
              (rowData) => (
              <View style={{flex: 1, 
              flexDirection: 'row', 
              paddingTop: 5,
              borderColor: 'black', 
              borderStyle: 'solid',
              borderWidth: 1,
              }}>
                  <Image style={{width: 100, height: 100, justifyContent:'flex-start'}}
                   source={{uri: 'https://s3.amazonaws.com/locus-image-store/astronomy.jpg'}}
                  />
            
         
                  <Text style= {styles.listHeaderItem}> {rowData.name} {"\n"}{"\n"}
                  <Text style = {styles.listItem}> Description: {rowData.tagLine}</Text>
                  </Text>
            
              </View>
              )
          }
        //listview
        /> 

   <View style={{flexDirection: 'row', backgroundColor: '#78bcaf', height: 70}}>
   </View>

      </View> //container
    ); //return
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  h2: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginTop:35,
    marginRight:55,
    marginLeft: 20,
    color: '#2c3e50',
  },
  header:{
    //alignSelf: 'strech',
    flexDirection: 'row',
    backgroundColor: '#78bcaf',
    //textAlign: 'center',
    flex:1,
    //justifyContent: 'space-around',
    
    //padding: 10,
  },
  listItem: {
      fontSize: 12,
      fontWeight: 'bold',
      flex: 1,
      flexDirection: "row",
      borderColor: 'black', 
      borderStyle: 'solid',
      borderWidth: 1,
   },
   listHeaderItem: {
      fontSize: 14,
      fontWeight: 'bold',

   },
});
