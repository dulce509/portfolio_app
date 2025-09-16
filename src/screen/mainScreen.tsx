import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import imgFoto from '../../assets/foto-2.png';

function CaixaGreen(){
    return(
        <View style={{height:100, width:100, backgroundColor:'#61fbaeff'}}></View>
    );
}
function CaixaBlue(){
    return(
        <View style={{height:310, width:310, justifyContent: 'space-evenly',backgroundColor:'#3e6475ff'}}>
            <Text style={styles.input}>Solicitação de contato</Text>
            <Text style={styles.titletwo}>email: aplicativodulce421@gmail.com</Text>
            <Text style={styles.titletwo}>GitHub:  dulce509</Text>
        </View>
    );
}

export function MainScreen (){
    return(
        <View style={styles.container}>
        <View>
          
                            <Image  source={imgFoto}></Image>
                            <Text style={styles.text}> Dulce Maria</Text>   
                           
        </View>
        <CaixaGreen></CaixaGreen>
        <CaixaBlue></CaixaBlue>            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {flex: 1,flexDirection:'column', backgroundColor: '#61fbaeff',
    alignItems: 'center', justifyContent: 'space-evenly', },
  input: {height:40, margin:12, borderWidth:1, padding: 8, 
    textAlign:'center', backgroundColor:'white'}, 
  title:{ marginTop:8, paddingVertical:2, borderWidth:1,textAlign:'center',fontSize:20},
  text:{ fontSize:30, fontWeight: 'bold', color:'black', padding: 20},
  item:{backgroundColor: '#3e6475ff',padding:20, marginVertical:8, marginHorizontal:10},
  titletwo: {height: 40, margin:12, borderWidth:1, padding: 8, 
    fontStyle:'italic', backgroundColor: 'white'},  
});