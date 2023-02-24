import {Alert, ImageBackground, Modal, Pressable, StatusBar, View, Text} from 'react-native';
import { useState} from "react";
import styles from "./css";
import GoalList from "./Goallist";
import InputGoal from "./InputGoal";


export default function App() {
const [Goals, setGoals] = useState([])
    const [SelectedItem, setSelectedItem] = useState(0)
const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <ImageBackground source={require('./assets/lac.jpg')} resizeMode="cover" style={styles.image}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Es tu sûr de vouloir supprimer cet objectif ?</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                const newGoals = [...Goals];
                                    newGoals.splice(SelectedItem,1);
                                console.log(newGoals);
                                setGoals(newGoals);
                                setModalVisible(!modalVisible)
                            }}>
                            <Text style={styles.textStyle}>Yes</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                            setModalVisible(!modalVisible)
                        }}>
                            <Text style={styles.textStyle}>No</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        <InputGoal
          Goals = {Goals}
          setGoals={setGoals}/>
      <GoalList
          Goals = {Goals}
          setModalVisible={setModalVisible}
      />
        </ImageBackground>
    </View>
  );
}


