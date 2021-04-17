import React,{useEffect} from 'react'
import { View, Text, StatusBar } from 'react-native'
import WhatsAppScreen from './screens/whatsAppScreen/index'
const Main = () => {
   
    return (
        <View style={{flex:1,backgroundColor:'red'}}>
           <WhatsAppScreen/>
        </View>
    )
}

export default Main
