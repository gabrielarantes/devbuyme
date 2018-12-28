import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Usuarios extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button title="USUÁRIOS" onPress={() => this.props.navigation.goBack()} />
                <Button title="PRODUTOS" onPress={() => this.props.navigation.popToTop()} />
            </View>
        );
    }
}
export default Usuarios;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});