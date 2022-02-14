import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: {
        height: 42,
        borderRadius: 4,
        paddingHorizontal: 5,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    titlePage: {
        fontSize: 32,
        alignSelf: "center",
        color: "#808080"
    },

    createSection: {
        flexDirection: "row",
    },

    linkBtn: {
        paddingLeft: 5,
        color: colors.primary,
    },


})