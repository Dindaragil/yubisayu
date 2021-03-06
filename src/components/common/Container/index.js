import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
const Container = ({ style, children }) => {
    return (
        <ScrollView>
            <View style={[style, styles.wrapper]}>{children}</View>
        </ScrollView>

    )
}
export default Container;