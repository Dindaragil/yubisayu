import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Container from "../common/Container";
import Input from "../common/Input";
import CustomButton from "../CustomButton";
import styles from "./styles";
import LOGIN from "../../constans/routeNames"

const RegisterComponent = () => {
    const {navigate} = useNavigation()
    return (
        <Container>
            <Text style={styles.titlePage}>REGISTER</Text>
            <Input
                label="Full Name"
                placeholder="Enter your full name"
                style={styles.inputText}
                // error={"This field is required!"}
            />
            <Input
                label="Username"
                placeholder="Enter your username"
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
                <Text style={styles.infoText}>Already have account?</Text>
                <TouchableOpacity onPress={() => {navigate('Login')}} style={styles.linkBtn}><View><Text style={styles.linkBtn}>Login</Text></View></TouchableOpacity>
            </View>
        </Container>
    )
}
export default RegisterComponent;