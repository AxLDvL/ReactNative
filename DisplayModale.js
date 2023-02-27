import {Alert, Modal, TextInput, View} from "react-native";
import styles from "./css";
import Button from "./Button";



const DisplayModale = (props) => {
    const {Goals, setGoals,SelectedItem,modalVisible, setModalVisible} =props;
    const handleModalDismiss = () => {
        setModalVisible(false);
    }
    let goalModified;

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
            onDismiss={handleModalDismiss}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style = {{alignSelf: 'stretch',alignItems:'flex-end'}}>
                        <Button
                            style = {{borderRadius:1}}
                            title = 'X'
                            setBackgroundColor = 'red'
                            onPress={() => handleModalDismiss()}
                        />
                    </View>
                   <TextInput
                        style = {[styles.input,{marginVertical:10}]}
                        onChangeText={editGoal => goalModified = editGoal}
                        defaultValue={Goals[SelectedItem]}
                    />
                    <View style={{flexDirection:'row',alignSelf: 'stretch',justifyContent:'flex-end'}}>
                    <Button
                        title = 'Delete'
                        setBackgroundColor = 'dimgrey'
                        onPress={() => {
                            const newGoals = [...Goals];
                            newGoals.splice(SelectedItem,1);
                            setGoals(newGoals);
                            handleModalDismiss();

                        }}
                    />
                    <Button

                        title = 'Edit'
                        setBackgroundColor = 'dimgrey'
                        onPress={() => {
                            goalModified = Goals[SelectedItem];
                            const newGoals = [...Goals];
                            newGoals[SelectedItem] = goalModified;
                            setGoals(newGoals);
                            handleModalDismiss()
                        }}
                    />

                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DisplayModale;
