import React, { Component } from 'react'
import { Text, View, Modal, TouchableWithoutFeedback, Dimensions, FlatList, Platform } from 'react-native'
import {Picker} from '@react-native-community/picker';
import styled from 'styled-components'
import AntDesign from 'react-native-vector-icons/AntDesign';
const myIcon = <AntDesign name="caretdown" size={10} color="#979797" />;
import AndroidPicker from './AndroidPicker';

const deviceHeight = Dimensions.get("window").height

export default class PickerModal extends Component {
    constructor(props) {
      super(props) 
      this.state = {
          show: true,
          entry: 1
      }  
    }

    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
        this.props.finishEntry(this.state.entry)
        this.setState({entry: 1})
    }

    renderOutsideTouchable(onTouch) {
        const view = <TouchableScreen />
        if (!onTouch) return view

        return (
            <Touchable onPress={onTouch}>
                {view}
            </Touchable>
        )
    }

    renderTitle = () => {
       const {title} = this.props 
       return (
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
       )
    }

    renderContent = () => {
        return (
            <Cover>
                <AndroidPicker />
                <QuantityContainer onPress={this.close}>
                    <BottomText>{`Confirm: $${this.state.entry}.00/Entry`}</BottomText>
                </QuantityContainer>
            </Cover>
        )
    }

    render() {
        let {show} = this.state
        const {onTouchOutside, title} = this.props
        return (
            <Modal
                animated
                animationType="fade"
                visible={show}
                transparent
                onRequestClose={this.close}>
                    <Container>
                        {this.renderOutsideTouchable(onTouchOutside)}
                        <MainContainer>
                           {this.renderTitle()}
                           {this.renderContent()}
                        </MainContainer>
                    </Container>
            </Modal>

        )
    }
}
const Touchable = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
`
const TouchableScreen = styled.View`
    flex: 1;
    width: 100%;
`

const TitleContainer = styled.View`
    align-items: center;
`
const Title = styled.Text`
    font-size: 26px;
    margin: 20px 0px 40px;
    font-family: "Montserrat-ExtraBold"
`
const Cover = styled.View`
    margin-bottom: 50px;
    padding-bottom: 30px;
`

const Container = styled.View`
    flex: 1;
    background-color: #000000AA;
    justify-content: flex-end;
`
const MainContainer = styled.View`
    background-color: #ffffff;
    width: 100%;
    padding: 0px 10px;
    max-height: ${deviceHeight*0.4}px;
`
const RenderContainer = styled.View`
    height: 80px;
    align-items: center;
`
const QuantityContainer = styled.TouchableOpacity`
    background-color: #d2a747;
    border-radius: 20px;
    padding: 10px 20px;;
    align-items: center;
    justify-content: center;
    margin: 0px 25px;
    top: 50px;
`
const BottomText = styled.Text`
    font-family: "Montserrat-Bold";
    color: #fff;
    font-size: 18px;
`
const NumberComponent = styled.View`
    border-color: #979797;
    border-width: 1px;
    padding: 10px;
    flex-direction: row;
    width: 200px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`
const TextNumber = styled.Text`
`
const IconContainer = styled.View`
    position: absolute;
    top: 70%;
    right: 10%;
`