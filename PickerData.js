import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerData extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Pound" value = "Pound" />
               <Picker.Item label = "Dollar" value = "Dollar" />
               <Picker.Item label = "Euro" value = "Euro" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}
export default PickerData

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})