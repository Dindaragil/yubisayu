import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Container from "../common/Container";
import Input from "../common/Input";
import CustomButton from "../CustomButton";
import styles from "./styles";
import LOGIN from "../../constans/routeNames"

const RegisterComponent = ({onSubmit, onChange, form, error}) => {
    const {navigate} = useNavigation()
    return (
        <Container>
            <Text style={styles.titlePage}>REGISTER</Text>
            <Input
                label="Full Name"
                placeholder="Enter your full name"
                style={styles.inputText}
                onChangeText={(value) => {
                    onChange({name: "name", value})
                }}
                error={error.name}
            />
            <Input
                label="Email"
                placeholder="Enter your email"
                style={styles.inputText}
                onChangeText={(value) => {
                    onChange({name: "email", value})
                }}
                error={error.email}
            />
            <Input
                label="Password"
                icon={<Text>show</Text>}
                secureTextEntry={true}
                iconPosition="right"
                placeholder="Enter your password"
                onChangeText={(value) => {
                    onChange({name: "password", value})
                }}
                error={error.password}
            />
            <Input
                label="Role"
                placeholder="Enter your role"
                style={styles.inputText}
                onChangeText={(value) => {
                    onChange({name: "role", value})
                }}
                error={error.role}
            />
            <CustomButton onPress={onSubmit} secondary title="Register" />
            <View style={styles.createSection}>
                <Text style={styles.infoText}>Already have account?</Text>
                <TouchableOpacity onPress={() => {navigate('Login')}} style={styles.linkBtn}><View><Text style={styles.linkBtn}>Login</Text></View></TouchableOpacity>
            </View>
        </Container>
    )
}
export default RegisterComponent;