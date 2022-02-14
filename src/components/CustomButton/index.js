import React from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../../assets/theme/colors";
import styles from "./styles";
const CustomButton = ({ title, primary, secondary, danger, loading, disabled, onPress }) => {

    getBgColor = () => {
        if (disabled) {
            return colors.grey
        } else if (primary) {
            return colors.primary
        } else if (danger) {
            return colors.danger
        } else if (secondary) {
            return colors.secondary
        }
    }
    return (
        <TouchableOpacity loading={loading} onPress={onPress} style={[styles.wrapper, { backgroundColor: getBgColor() }]}>
            <View style={styles.loaderSection}>
                {loading && <ActivityIndicator color={primary ? colors.secondary : colors.primary}/> }
                {title && <Text style={{ color: disabled ? "black" : colors.white, paddingLeft: loading ? 5 : 0}}>{title}</Text>}
            </View>
        </TouchableOpacity>
    )
}
export default CustomButton;