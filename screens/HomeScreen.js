import React, { Component } from "react";
//import { View, Text, StyleSheet, Button } from "react-native";

import { StyleSheet, Image } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Thumbnail, Text } from 'native-base';

import BigFoot from './partials/BigFoot'
import logo from '../assets/logo.png'

class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <Image style={styles.logo} source={logo} />
                    <Text  style={styles.welcome}>Seja bem vindo(a)</Text>
                </Content>

                <Footer>
                    <FooterTab >
                        <Button onPress={() => this.props.navigation.navigate('Produtos')}>
                            <Icon type="FontAwesome" name="cart" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon type="FontAwesome" name="home" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Usuarios')}>
                            <Icon type="FontAwesome" name="profile" />
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor : '#F5F0F0'
    },
    logo : {
        marginBottom : 35,
        textAlign : 'center',
        alignSelf : 'center'
    },
    welcome : {
        fontSize : 20,
        color : 'red',
        textAlign : 'center'
    }
});