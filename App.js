import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const ListeCourse = () => {

  const sampleGoals = [
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ];

  /*
  return (
      sampleGoals.map((item,index )=>{
          return (<Text key={index}> {item} </Text>)
        } )
  )
   */
  return(
  <FlatList data={sampleGoals}
            renderItem={({item}) => <Text>{item}</Text>}
  />
  )
  }

  const InputGoal = () => {
  const [Text, setText] =  useState('');

  return(

        <TextInput
            style = {styles.input}
          placeholder="add goal to the list"
          onChangeText={newGoal => setText(newGoal)}
          defaultValue = {Text}
        />

  )
  }

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputGoal/>
      <ListeCourse/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    paddingHorizontal: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 16,
  }

});
