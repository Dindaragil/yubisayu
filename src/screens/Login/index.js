import React from "react";
import { Text, View } from "react-native";
import Container from "../../components/common/Container";
import Input from "../../components/common/Input";
import CustomButton from "../../components/CustomButton";
const Login = () => {
    const [text, onChangeText] = React.useState("");
    return (
        <Container>
            <Input
                label="Username"
                onChangeText={onChangeText}
                value={text}
                // error={"This field is required!"}
            />
            <Input
                label="Password"
                onChangeText={onChangeText}
                value={text}
                icon={<Text>Icon</Text>}
                iconPosition="right"
            />
            <CustomButton secondary title="Login" loading={true} disabled="true"/>
            <CustomButton primary title="Click Me!" loading={true} />
            <CustomButton danger title="Ew" loading={false} />
        </Container>
    )
}
export default Login;