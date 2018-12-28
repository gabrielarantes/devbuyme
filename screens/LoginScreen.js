import React, { Component } from "react";
import {  View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ImageBackground } from "react-native";

//import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base';

import axios from "axios"
//import background from "../assets/background.png"
//import logo from "./assets/logo.png"

class LoginScreen extends Component {

    constructor(props){
        super(props)
        this.logar = this.logar.bind(this);

        this.state = {
            email : '',
            senha : '',
            aviso : '',
            token : ''
        }
    }

    handleEmail = event => {
        this.setState({
          email : event.target.value
        })
    }

    handleSenha = event => {
        this.setState({
            senha : event.target.value
        })
    }

    async logar(){

        let email = this.state.email
        let senha = this.state.senha

        if(email === ''){
            this.setState({
                aviso : 'Email inválido'
            })
        }else if(senha === ''){
            this.setState({
                aviso : 'Senha inválida'
            })
        }else{

            this.setState({
                aviso : 'Verificando...'
            })

            await axios.get('https://seguro.sivisweb.com.br/json/usuarios.php?operacao=logar&email='+email+'&senha='+senha)
            .then(res => {
                const result = res.data;
                if(result === 'invalid'){
                    this.setState({ 
                        aviso : 'Dados inválidos',
                        token : ''
                    });
                }else{
                    this.setState({ 
                        aviso : '',
                        token : result
                    });

                    this.props.navigation.navigate('Home');
                }
                
            })

        }

    }

    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        const token = this.state.token
        if(token !=''){
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input} 
                        placeholder="Email" 
                        onChangeText={(value) => this.setState({email: value})} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Senha" 
                        secureTextEntry={true} 
                        onChangeText={(value) => this.setState({senha: value})}  
                    />

                    <TouchableOpacity style={styles.btn} onPress={this.logar}>
                        <Text style={styles.textBtn}>LOGAR</Text>
                    </TouchableOpacity>

                    <Text style={styles.aviso}>{this.state.aviso}</Text>

                </View>

            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor : '#F5F0F0'
    },
    inputContainer :{
        padding : 15,
        margin : 35
    },
    input : {
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'red',
        color : '#000000',
        marginBottom : 15,
        backgroundColor : 'white'
    },
    btn : {
        backgroundColor : 'red',
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'white',
        marginBottom : 15
    },
    textBtn : {
        color : 'white',
        textAlign : 'center',
        paddingVertical : 10
    },
    aviso : {
        color : 'red',
        textAlign : 'center',
    }
});