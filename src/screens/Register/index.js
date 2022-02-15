import React, { useState } from "react";
import { Text, View } from "react-native";
import RegisterComponent from "../../components/Register";
import envs from "../../config/env"
const Register = () => {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});

    const onChange = ({name, value}) => {
        setForm({...form, [name]: value})

        if (value !== "") {
            setError(prev => {
                return {
                    ...prev,
                    [name]: null
                }
            })
        } else {
            setError(prev => {
                return {
                    ...prev,
                    [name]: "This field is Required!"
                }
            })
        }
    }

    const onSubmit = () => {
        console.log('form:', form)
        if (!form.name) {
            setError(prev => {
                return {
                    ...prev,
                    name: "Please input your full name!"
                }
            })
        } if (!form.email) {
            setError(prev => {
                return {
                    ...prev,
                    email: "Please input your email!"
                }
            })
        } if (!form.password) {
            setError(prev => {
                return {
                    ...prev,
                    password: "Please input your password!"
                }
            })
        } if (!form.role) {
            setError(prev => {
                return {
                    ...prev,
                    role: "Please input your role!"
                }
            })
        }
        console.log('error:', error)
    }
    return (
        <RegisterComponent form={form} error={error} onChange={onChange} onSubmit={onSubmit} />
    )
}
export default Register;