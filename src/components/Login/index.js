import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Container from "../common/Container";
import Input from "../common/Input";
import CustomButton from "../CustomButton";
import styles from "./styles";
import REGISTER from "../../constans/routeNames"
const LoginComponent = () => {
    const {navigate} = useNavigation()
    return (
        <Container>
            <Text style={styles.titlePage}>LOGIN</Text>
            <Input
                label="Email"
                placeholder="Enter your email"
                style={styles.inputText}
                // error={"This field is required!"}
            />
            <Input
                label="Password"
                icon={<Text>show</Text>}
                secureTextEntry={true}
                iconPosition="right"
                placeholder="Enter your password"
            />
            <CustomButton secondary title="Login" />
            <View style={styles.createSection}>
                <Text style={styles.infoText}>First Time Here?</Text>
                <TouchableOpacity onPress={() => {navigate('Register')}} style={styles.linkBtn}><View><Text style={styles.linkBtn}>Register</Text></View></TouchableOpacity>
            </View>
        </Container>
    )
}
export default LoginComponent;