import {FlatList, Pressable, Text} from "react-native";
import styles from "./css";


const GoalList = (props) => {

    const { Goals, setModalVisible, setSelectedItem} = props;

    const androidRipple = {
        color: 'steelblue',
        borderless: false,
        radius: 200
    };

    return(
        <FlatList
            contentContainerStyle = {styles.goalList}
            data = {Goals}
            renderItem = {({item,index}) =>

                    <Pressable style={[styles.flatlist,{elevation:3}]}
                               onPress={() => {
                                   setModalVisible(true);
                                   setSelectedItem(index);
                               }
                               }
                               android_ripple={androidRipple}
                    >
                        <Text key={index}>{item}</Text>
                    </Pressable>

            }
        />
    )
}

export default GoalList;