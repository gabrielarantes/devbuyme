import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Container, Header, Content, Footer, FooterTab, Button, Icon, Card, CardItem, Body, Item, Input } from 'native-base';
import axios from "axios"

class Produtos extends Component {

    constructor(props){
        super(props)
        this.buscar = this.buscar.bind(this);

        this.state = {
            produtos : [],
            busca : ''
        }
    }

    componentDidMount() {
        axios.get('https://seguro.sivisweb.com.br/json/produtos.php?operacao=listar')
          .then(res => {
            const produtos = res.data;
            this.setState({ produtos });
          })
      }

    async buscar(){

        const busca = this.state.busca
        await axios.get('https://seguro.sivisweb.com.br/json/produtos.php?operacao=listar&search='+busca)
          .then(res => {
            const produtos = res.data;
            this.setState({ produtos });
          })

    }

    render() {
        return (
            <Container>

                <Content>
                    
                </Content>

                <Footer>
                    <FooterTab>
                        <Button active onPress={() => this.props.navigation.navigate('Produtos')}>
                            <Icon type="FontAwesome" name="cart" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon type="FontAwesome"  name="home" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('ProdutosNew')}>
                            <Icon type="FontAwesome" name="plus" />
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }
}
export default Produtos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    prodContainer : {
        flexDirection : 'row'
    },
    prodName : {
        flex : 2,
        fontWeight : 'bold',
        fontSize : 14,
        textAlign: 'left'
    },
    prodValue : {
        flex : 2,
        fontSize : 12,
        textAlign: 'right'
    },

});