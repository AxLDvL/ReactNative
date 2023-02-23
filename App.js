//import { StatusBar } from 'expo-status-bar';
import {FlatList, Pressable, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import { useState} from "react";


const Button = (props) => {
  const { onPress, title = 'Save',setBackgroundColor='' } = props;
  return (
      <Pressable style={[styles.button,{backgroundColor: setBackgroundColor}]} onPress={onPress}>
        <Text style={styles.textButton}>{title}</Text>
      </Pressable>
  );
}
const GoalList = (props) => {

  const { Goals, setGoals} = props;
  return(
  <FlatList
      contentContainerStyle = {styles.goalList}
      data = {Goals}
            renderItem = {({item,index}) =>
                <View style={styles.flatlist}>
                  <Text key={index}>{item}</Text>
                  <Button
                    setBackgroundColor={'red'}
                    title={'X'}
                    onPress={() => {
                        const newGoals = [...Goals];
                        console.log({index});
                        newGoals.splice({index},1);
                        console.log(newGoals);
                        return setGoals(newGoals)
                    }
                    }
                  />
                </View>
  }
  />
  )
  }

  const InputGoal = (props) => {

    const { Goals, setGoals} = props;
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
        setBackgroundColor={'steelblue'}
        onPress = {() => {
          setGoals([...Goals,Text]);
          setText("");
        }
        }
        />
      </View>
      )
  }

export default function App() {
const [Goals, setGoals] = useState([])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputGoal
          Goals = {Goals}
          setGoals={setGoals}/>
      <GoalList
          Goals = {Goals}
          setGoals={setGoals}/>
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
    flexDirection:'row',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal:6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
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
    justifyContent: 'center',

  },
    flatlist:{
        flexDirection:'row',
        justifyContent: 'center'
    }

});
