import {Pressable, Text} from "react-native";
import styles from "./css";

const Button = (props) => {
    const { onPress, title = 'Save',setBackgroundColor='', rippleColor = 'white'} = props;

    const androidRipple = {
        color: rippleColor,
        borderless: false,
        radius: 200
    };
    return (
        <Pressable style={[styles.button, styles.buttonClose,{backgroundColor: setBackgroundColor}]}
                   onPress={onPress}
                   android_ripple={androidRipple}
        >
            <Text style={styles.textButton}>{title}</Text>
        </Pressable>
    );
}

export default Button;