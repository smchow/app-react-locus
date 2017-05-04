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
                  <Text style = {styles.listItem}>
                     {rowData.name} {"\n"}
                     Description: {rowData.tagLine}
            {/*rowData.image_url*/} 
                      </Text>

                      <Button title="View Data"
                        onPress={() => this._handleData(rowData.id)}
                      />
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
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'left',

   },
   headerItem: {
      fontSize: 50,
      marginTop: 50,
      fontWeight: 'bold',
      textAlign: 'center',
   }
})