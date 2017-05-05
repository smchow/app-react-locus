import React, { Component } from 'react'

import {
   View,
   ListView,
   Text,
   Button,
   Image,
   StyleSheet
} from 'react-native'

export default ProjectList = (props) => {
  
   return (

      <View>
         <Text style = {styles.headerItem}> My Projects </Text>
         <ListView
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
      <Image source = {{uri: rowData.image_url}} style = {{ height: 200}} />

                      <Button title="View Data"
                       onPress={props._handleData} 
                      /></View> 
                     </View>
               )
            }
         />
      </View>
   )
}

const styles = StyleSheet.create ({
   listContainer: {
      paddingTop: 22
   },
   listItem: {
      paddingBottom: 22,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
       backgroundColor:'lightblue'

   },
   headerItem: {
      fontSize: 50,
      marginTop: 50,
      fontWeight: 'bold',
      textAlign: 'center',
   }
})