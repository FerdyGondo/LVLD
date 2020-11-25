import React from 'react'
import styled from 'styled-components'
import ProfileComponent from '../shared/components/Profile'

export default function index() {
  return (
    <Container>
        <Profile>
            <ProfileComponent />
        </Profile>
        <MainContainer>
          <Image source={{ uri: "https://lvld-content.s3-us-west-1.amazonaws.com/login-screen/Facebook-Circle_Auth.png" }} />
          <MainText>Connect LVLD to your Facebook account.</MainText>
          <SubText>We're building feautures which will allow you to play LVLD more socially.</SubText>
        </MainContainer>
        <ButtonContainer>
          <ButtonText>Continue to Facebook</ButtonText>
        </ButtonContainer>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-bottom: 20px;
`
const Profile = styled.View`
  border-color: #979797;
  border-bottom-width: 1px;
`
const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`
const Image = styled.Image`
  width: 40px;
  height: 40px;
`
const MainText = styled.Text`
  width: 40%;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 12px;
  line-height: 14.63px;
  text-align: center;
  margin-top: 10px;
`
const SubText = styled.Text`
  width: 60%;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 12px;
  line-height: 14.63px;
  text-align: center;
  margin-top: 10px;
`
const ButtonContainer = styled.View`
  margin: 0px 20px;
  padding: 12px;
  border-radius: 25px;
  background-color: #256BB3;
  align-items: center;
  justify-content: center;
`
const ButtonText = styled.Text`
  font-family: "Montserrat";
  color: #ffffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`