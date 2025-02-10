import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ label, onPress, style, textStyle}) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        borderRadius: 100,
    },
    text:  {
        fontSize: 40,
        fontWeight: "bold",
    },
})
 
export default CustomButton;