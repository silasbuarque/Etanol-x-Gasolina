import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert} from 'react-native';

export default function App1 (){
  
  const [gasolina, setGasolina] = useState()
  const [etanol, setEtanol] = useState()

  const calculoVantagem = ()=>{
    if(!gasolina || !etanol){
     return Alert.alert('ERRO', 'Insira os valores')
    }

    const calculo = Number(etanol) / Number(gasolina)
    let resposta

    if (calculo < 0.7 ){
      resposta = 'Vale mais usar Etanol'
    } else {
      resposta = 'Vale mais usar Gasolina'
    }
    alertaResposta(resposta)
  }

  const alertaResposta = (resposta) => {
    Alert.alert('Aviso!', resposta)
  }
  
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Calculo Etanol x Gasolina</Text>
      </View>
      <View>
        <TextInput
          style={styles.caixas}
          placeholder="Gasolina"
          placeholderTextColor='#1C1C1C'
          value={gasolina}
          onChangeText={text => setGasolina(text)}
          keyboardType= 'numeric'
        />
          <TextInput
          style={styles.caixas}
          placeholder="Etanol"
          placeholderTextColor='#1C1C1C'
          value={etanol}
          onChangeText={text => setEtanol(text)}
          keyboardType= 'numeric'
        />
      </View>
      <View>
        <TouchableOpacity onPress={calculoVantagem} style={styles.botaoCalcular}>
          <Text style={styles.txtBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#EEEE00'
  },
  botaoCalcular:{
    elevation: 50,
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 50,
  },
  txtBotao:{
    color: '#EEEE00',
    fontSize:18,
  },
  caixas:{
    borderWidth: 2,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 25,
    borderColor: '#1C1C1C',
    color: '#1C1C1C'
  },
  titulo:{
    color:'#1C1C1C',
    fontSize:30,
    marginTop:-50
  }
});