import {useState} from "react";
import {TextInput, View} from "react-native";
import styles from "./css";
import Button from "./Button";


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
                    setGoals([Text,...Goals]);
                    setText("");
                }
                }
            />
        </View>
    )
}

export default InputGoal;