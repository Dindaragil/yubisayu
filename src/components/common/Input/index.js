import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";
const Input = ({ ...props }) => {
    const [focused, setFocused] = React.useState(false)
    getFlexDirection = () => {
        if (props.icon && props.iconPosition === "left") {
            return "row"
        } else if (props.icon && props.iconPosition === "right") {
            return "row-reverse"
        } else {
            return "row"
        }
    }

    getBorderColor = () => {
        if (props.error) {
            return colors.danger
        } 
        if (focused) {
            return colors.primary
        }
        else {
            return colors.grey
        }
    }
    return (
        <View style={styles.inputContainer}>
            {props.label && <Text>{props.label}</Text>}
            <View style={[styles.wrapper, { flexDirection: getFlexDirection(), borderColor: getBorderColor() }, { alignItems: props.icon ? "center" : "baseline" }]}>
                <View>{props.icon && props.icon}</View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    onFocus={() => { setFocused(true) }}
                    onBlur={() => { setFocused(false) }}
                    placeholder={props.placeholder}
                    secureTextEntry={props.secureTextEntry}
                />
            </View>
            {props.error && <Text style={styles.error}>{props.error}</Text>}
        </View>
    )
}
export default Input;