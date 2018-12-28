import React, { Component } from "react";
//import { View, Text, StyleSheet, Button } from "react-native";

import { StyleSheet } from "react-native";
import { Footer, FooterTab, Button, Icon } from 'native-base';

class BigFoot extends Component {

    render() {
        return (

                <Footer style={styles.footer}>
                    <FooterTab>
                        <Button onPress={() => this.props.navigation.navigate('Produtos')}>
                            <Icon name="cart" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Home')} active>
                            <Icon active name="home" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Usuarios')}>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>
        );
    }
}
export default BigFoot;

const styles = StyleSheet.create({
    footer: {
        backgroundColor : 'red'
    }
});