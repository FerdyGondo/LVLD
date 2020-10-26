import React from 'react'
import { Alert,Modal,StyleSheet,Text,TouchableHighlight,View } from "react-native";
import styled from 'styled-components'

export default function index({ modalVisible, setModalVisible }) {
    return (
        <Container>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
                >
                <Container>
                    <ModalView>
                        <ModalText>{`Set 10.5 as Default Size?`}</ModalText>
                        <SubContainer>
                            <Square></Square>
                            <ModalSubText>Dont ask me again</ModalSubText>
                        </SubContainer>
                    <ModalButton
                        onPress={() => {
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <NameText>Set Size</NameText>
                    </ModalButton>
                    <ModalButton
                        onPress={() => {
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <NameText>Skip</NameText>
                    </ModalButton>
                    </ModalView>
                </Container>
                </Modal>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.7)
`
const ModalView = styled.View`
    background-color: #fff;
    border-radius: 20px;
    padding: 20px 0px;
    width: 90%;
    align-items: center;
`
const ModalText = styled.Text`
    font-family: "Montserrat-Bold";
    font-size: 27px;
`
const SubContainer = styled.View`
    margin: 10px;
    flex-direction: row;
    align-items: center;
`
const Square = styled.View`
    width: 10px;
    height: 10px;
    border-color: #000;
    border-width: 1px;
    opacity: 0.5px;
`
const ModalSubText = styled.Text`
    font-family: "Montserrat";
    font-size: 16px;
`
const ModalButton = styled.TouchableHighlight`
    background-color: #d2a747;
    border-radius: 5px;
    padding: 15px;
`
const NameText = styled.Text`
`


  