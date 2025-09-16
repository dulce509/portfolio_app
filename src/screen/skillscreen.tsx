import { StatusBar } from "expo-status-bar";
import {View, Text, StyleSheet, Image, TextInput } from 'react-native';
import imgFoto from '../../assets/foto-2.png';
import React, { useState } from 'react';

function CaixaGreen(){
    return(
        <View style={{height:350, width:350, backgroundColor:'#61fbaeff'}}>
          <Text style={styles.text}> Dulce Maria</Text>
          <Text style={styles.input}>Minhas Habilidades:
            Expo Go 💎💎
          </Text>
          <Text style={styles.input}>JavaScrip💎</Text>
          <Text style={styles.input}> node.js 💎</Text>
          <Text style={styles.input}> Excel básico 💎</Text>
          
        </View>
    );
}

export function SkillScreen(){
  const[usuario, setUsuario ]= useState('')  
        
    return(
         <View style={styles.container}>
             <Image style={styles.foto} source={imgFoto}></Image>
            
            <CaixaGreen> 
            </CaixaGreen>
            <View>             
               <Text selectable = {true}>Deixe sua mensagem!</Text>
               <TextInput style={styles.input}
               onChange={(text)=> setUsuario (text.nativeEvent.text)}
               value= {usuario}></TextInput>
            </View>
          
        </View>

  )
} 
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#61fbaeff',alignItems: 'center',justifyContent: 'center',
  },
  input: {height:40, margin:12, borderWidth:1, padding: 10, 
    textAlign:'center',backgroundColor: 'white'},
  text:{ fontSize:40, fontWeight: 'bold', color:'black', padding: 20},
  title:{ marginTop:16, paddingVertical:2, borderWidth: 2,textAlign:'center',fontSize:20},
  foto:{borderTopLeftRadius: 2,}
});