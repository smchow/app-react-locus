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
                  <View style={styles.container}>
                  <View>
                  <Text style = {styles.listItem}>
                     {rowData.name} {"\n"}
                     Description: {rowData.tagLine}
                      </Text>
                      <TouchableHighlight 
                       style = {styles.viewData}
                       onPress={props.handleData} >
                      <Text>
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
       


   },
   listItem: {
      paddingBottom: 32,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left'
   },
   headerItem: {
      fontSize: 50,
      marginTop: 50,
      fontWeight: 'bold',
      textAlign: 'center',
   },
   viewData: {
     backgroundColor: 'lightblue',
      width : 100,
      paddingBottom: 30,
      marginBottom:50
  },
   button: {
      fontSize: 50,
     backgroundColor: 'pink',
      width : 80,
      paddingBottom: 30
  }
})