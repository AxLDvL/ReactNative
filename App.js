import { ImageBackground, StatusBar, View} from 'react-native';
import { useState} from "react";
import styles from "./css";
import GoalList from "./Goallist";
import InputGoal from "./InputGoal";
import DisplayModale from "./DisplayModale";


export default function App() {

    const [Goals, setGoals] = useState([]);
    const [SelectedItem, setSelectedItem] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
            <ImageBackground source={require('./assets/lac.jpg')} resizeMode="cover" style={styles.image}>
                <DisplayModale
                    Goals = {Goals}
                    setGoals = {setGoals}
                    SelectedItem = {SelectedItem}
                    modalVisible = {modalVisible}
                    setModalVisible = {setModalVisible}
                />
                <InputGoal
                    Goals = {Goals}
                    setGoals={setGoals}/>
                <GoalList
                    Goals = {Goals}
                    setModalVisible={setModalVisible}
                    setSelectedItem = {setSelectedItem}
                />
            </ImageBackground>
        </View>
    );
}


