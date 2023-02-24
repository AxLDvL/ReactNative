import {FlatList, Text, View} from "react-native";
import styles from "./css";
import Button from "./Button";


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
                            console.log(index);
                            newGoals.splice(index,1);
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

export default GoalList;