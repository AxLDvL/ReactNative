import {Alert, Modal, Text, View} from "react-native";
import styles from "./css";
import Button from "./Button";



const DisplayModale = (props) => {
    const {Goals, setGoals,SelectedItem,modalVisible, setModalVisible} =props;

    return(
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
                    <Button
                        title = 'Supprimer'
                        setBackgroundColor = 'springgreen'
                        onPress={() => {
                            const newGoals = [...Goals];
                            newGoals.splice(SelectedItem,1);
                            setGoals(newGoals);
                            setModalVisible(!modalVisible);

                        }}
                    />
                    <Button
                        title = 'Retour'
                        setBackgroundColor = 'dimgrey'
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default DisplayModale;