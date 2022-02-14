import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";
const Input = ({ onChangeText, style, value, label, icon, iconPosition, error }) => {
    const [focused, setFocused] = React.useState(false)
    getFlexDirection = () => {
        if (icon && iconPosition === "left") {
            return "row"
        } else if (icon && iconPosition === "right") {
            return "row-reverse"
        } else {
            return "row"
        }
    }

    getBorderColor = () => {
        if (focused) {
            return colors.primary
        }
        else if (error) {
            return colors.danger
        } else {
            return colors.grey
        }
    }
    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.wrapper, { flexDirection: getFlexDirection(), borderColor: getBorderColor() }, { alignItems: icon ? "center" : "baseline" }]}>
                <View>{icon && icon}</View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => { setFocused(true) }}
                    onBlur={() => { setFocused(false) }}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}
export default Input;