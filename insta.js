
import React, {Component} from 'react';


import {Platform, StyleSheet,Button, Text, TextInput,Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OneSignal from 'react-native-onesignal'; // Import package from node modules


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor(properties) {
  super(properties);
  OneSignal.init("ce5fa3b1-0396-4555-9177-93ee40845e54");

  OneSignal.addEventListener('received', this.onReceived);
  OneSignal.addEventListener('opened', this.onOpened);
  OneSignal.addEventListener('ids', this.onIds);
  OneSignal.configure(); 	// triggers the ids event
}

componentWillUnmount() {
  OneSignal.removeEventListener('received', this.onReceived);
  OneSignal.removeEventListener('opened', this.onOpened);
  OneSignal.removeEventListener('ids', this.onIds);
}

onReceived(notification) {
  console.log("Notification received: ", notification);
}

onOpened(openResult) {
  console.log('Message: ', openResult.notification.payload.body);
  console.log('Data: ', openResult.notification.payload.additionalData);
  console.log('isActive: ', openResult.notification.isAppInFocus);
  console.log('openResult: ', openResult);
}

onIds(device) {
  console.log('Device info: ', device);
}

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.topbar}>
          <View style ={{flex:1,backgroundColor:'white',height: 50,
     elevation:10,marginTop:10,fontSize:25,alignItems:"center",justifyContent:"space-between",
    flexDirection:'row',}}>
           
      <Icon name='camera-alt' size={25} color='black' />
             
            
            
      <Text style={{fontWeight: "bold"}}> Instagram</Text>
              <Icon name='near-me' size={25} color='black'/>
           </View>
          </View>
        
          <View style = {styles.body}>

     
<View>
  <View style ={{backgroundColor:'white',height: 55,justifyContent:"space-between",
     fontSize:80,alignItems:"center",flexDirection:'row',
    }}>
<View style ={{backgroundColor:'white',height: 55,
     fontSize:80,alignItems:"center",flexDirection:'row',
    }}>
      <Image
          source={{uri: 'https://static4.depositphotos.com/1000992/512/i/950/depositphotos_5126892-stock-photo-dove-in-the-air-with.jpg'}}
          style={{width: 35, height: 40,borderRadius:16}}
        />
        <Text style={{fontWeight: "bold"}}>nandu_tejaswini</Text>
</View>
<View>
     <Icon name='more-horiz' size={25} color='black'/>
</View>

     </View>
    
     <Image
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qulP--9w-s5Fi3YPy1-uW2RGBpzZSHhxwm2hp3lNwb3DnpOg'}}
          style={{width: 425, height: 450,}} />
         <View style ={{backgroundColor:'white',height: 55,
     fontSize:80,alignItems:"center",flexDirection:'row',
    }}>
      <Icon name='favorite-border' size={25} color='black'/>
       <Icon name='insert-comment' size={25} color='black'/>
          <Icon name='near-me' size={25} color='black'/>
     </View>
     </View>
     </View>
  <View style = {styles.bottombar}>
          <View style ={{flex:1,backgroundColor:'white',height: 50,
    justifyContent:'space-around',elevation:10,alignItems:"center", 
    flexDirection:'row',}}>
           <Icon name='home' size={25} color='black'/>
           
             
           
            <Icon name='search' size={25} color='black'/>
              
              <Icon name='control-point' size={25} color='black'/>
              
              <Icon name='favorite-border' size={25} color='black'/>
              <Icon name='person' size={25} color='black'/>
           </View>
          </View>
          </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
backgroundColor:"#fff"
},
topbar: {
  height: 50,
},

body: {
  flex:1, 
}, 
bottombar:{
  height:50,
  fontSize:25,
},
});
