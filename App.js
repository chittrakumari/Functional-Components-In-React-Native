
//Using functional Component
import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const mesg='Hello World'
const mesg1='Stay Safe'
const mesg2='Wear Masks'

function App(){
  return <View>
  <Text style={{marginTop:50,textAlign:'center',color:'red',fontSize:30,}}>{mesg}</Text>
 <Text style={myStyle.textStyle}>{mesg1}</Text>
 <Text style={[myStyle.textStyle, {backgroundColor:'green',color:'black'}]}>{mesg2}</Text>
  </View>
}

const myStyle=StyleSheet.create({
  textStyle:{
    marginTop:40,
    textAlign:'center',
    fontSize:30,
    color:'white',
    backgroundColor:'pink',
    padding:30,
  },
}
)

export default App