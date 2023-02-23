//import { StatusBar } from 'expo-status-bar';
import {FlatList, Pressable, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";



const GoalList = () => {
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
  return(
  <FlatList
      contentContainerStyle={styles.goalList}
      data={sampleGoals}
            renderItem={({item}) => <Text>{item}</Text>}
  />
  )
  }

const Button = (props) => {
  const { onPress, title = 'Save' } = props;
  return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>{title}</Text>
      </Pressable>
  );
}

  const InputGoal = () => {
  const [Text, setText] =  useState('');

  return(
      <View style={styles.inputGoal}>
        <TextInput
            style = {styles.input}
          placeholder="add goal to the list"
          onChangeText={newGoal => setText(newGoal)}
          defaultValue = {Text}
        />
        <Button
        title={"Add"}
        />
      </View>
  )
  }

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputGoal />
      <GoalList />
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
    marginRight:3,
    paddingHorizontal: 8,
    borderWidth: 3,
    borderColor: '#20232a',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 16,
  },
  inputGoal:{
    marginVertical: 20,
    flexDirection:'row'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'steelblue',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  goalList:{

    justifyContent: 'center'
  }

});
