import {FlatList, Text, View} from "react-native";
import styles from "./css";
import Button from "./Button";


const GoalList = (props) => {

    const { Goals, setModalVisible} = props;
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
                            return setModalVisible(true)
                        }
                        }
                    />
                </View>
            }
        />
    )
}

export default GoalList;