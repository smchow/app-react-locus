import React, { Component } from 'react'

import {
   View,
   ListView,
   Text,
   Button,
   Image,
   TouchableHighlight,
   StyleSheet,
   ScrollView

} from 'react-native'

export default ProjectList = (props) => {
  
   return (

      <View>
      <ScrollView style = {styles.listContainer}>

         <Text style = {styles.headerItem}> My Projects </Text>
         <ListView
            automaticallyAdjustContentInsets={false}
            initialListSize={9}

            style = {styles.listContainer}
            dataSource = {props.dataSource}
            renderRow = {
               (rowData) => (
                  <View >
                  <View style={styles.container}>
                  <Text style = {styles.listItem}>
                     <Text style= {styles.listHeaderItem}> {rowData.name} {"\n"}{"\n"}</Text>
                     Description: {rowData.tagLine}
                      </Text>
                      <TouchableHighlight 
                       style = {styles.viewDataBox}
                       onPress={props.handleData} >
                      <Text style = {styles.viewDataText}> 
                        View Data
                        </Text>
         </TouchableHighlight>
      <Image source = {{uri: rowData.image_url}} style = {{ height: 200}} />

                      
                      </View> 

                     </View>
               )
            }
         />
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create ({
      listContainer: {
      paddingTop: 22,
      backgroundColor:'lightblue', 
      paddingBottom:30,
   },
   container:{
      borderWidth: 3,
      borderColor: 'darkblue',
      borderStyle: 'solid',
      //
      justifyContent:'center',
      paddingTop: 20,
      borderTopLeftRadius: 5,
      borderTopRightRadius : 5 
   },
   listItem: {
      paddingBottom: 32,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      alignItems:'center',
   },
   listHeaderItem: {
      paddingBottom: 52,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
   },
   headerItem: {
      fontSize: 40,
      marginTop: 40,
      fontWeight: 'bold',
      textAlign: 'center',
   },
   viewDataBox: {
      backgroundColor: 'lightgreen',
      marginBottom:10,
      borderWidth: 1,
      borderColor: 'darkblue',
      borderStyle: 'solid',
      borderTopLeftRadius: 10,
      borderTopRightRadius : 10 ,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius : 10 

  },
  viewDataText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
  },
   button: {
      fontSize: 50,
      backgroundColor: 'pink',
      width : 80,
      paddingBottom: 30
  }
})