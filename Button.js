import {Pressable, Text} from "react-native";
import styles from "./css";

const Button = (props) => {
    const { onPress, title = 'Save',setBackgroundColor='' } = props;
    return (
        <Pressable style={[styles.button,{backgroundColor: setBackgroundColor}]} onPress={onPress}>
            <Text style={styles.textButton}>{title}</Text>
        </Pressable>
    );
}

export default Button;