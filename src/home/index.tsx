import React, { ReactElement } from 'react';

import styled from 'styled-components/native'
import ProfileComponent from '../shared/components/Profile'

import { Dimensions, Platform } from 'react-native'

const { width } = Dimensions.get("window")

type Props = {
  navigation: () => {}
}

const Home = React.memo(({ navigation }: Props): ReactElement => {
  return (
    <Container>
      <ShadowContainer elevation={5}>
        <ProfileComponent />
      </ShadowContainer>
      <BodyContainer>
        <LiveText os={Platform.OS}>Live contests</LiveText>
        <Scroll>
          <Center>
            <RenderItemContainer onPress={() => navigation.navigate("Sneaker")}>
              <SneakerContainer os={Platform.OS} onPress={() => navigation.navigate("Sneaker")}>
                <HeroText>{"Sneaker Contests"}</HeroText>
                <HeroSmallerText>{"Entry Fee $1.00-$5.00"}</HeroSmallerText>
                <SneakerMainText>
                  <PlayText>{"PLAY NOW"}</PlayText>
                </SneakerMainText>
              </SneakerContainer>
              <SneakerImageContainer os={Platform.OS}>
                <SneakerImage source={{ uri: "https://lvld-content.s3-us-west-1.amazonaws.com/home-screen/shoes-1.png" }} />
              </SneakerImageContainer>
            </RenderItemContainer>
            <Rockus>
              <ApparelContainer os={Platform.OS}>
                <HeroText>{"Apparel Contests"}</HeroText>
                <HeroSmallerText>{"Entry Fee $0.50-$6.00"}</HeroSmallerText>
                <ApparelMainText>
                  <PlayBlackText>{"Coming Soon"}</PlayBlackText>
                </ApparelMainText>
              </ApparelContainer>
              <ApparelImageContainer os={Platform.OS}>
                <ApparelImage source={{ uri: "https://lvld-content.s3-us-west-1.amazonaws.com/home-screen/Apparel.png" }} resizeMode={"contain"} />
              </ApparelImageContainer>
            </Rockus>
            <RokusWatch>
              <WatchContainer os={Platform.OS}>
                <HeroText>{"Watch Contests"}</HeroText>
                <HeroSmallerText>{"Entry Fee $0.50-$6.00"}</HeroSmallerText>
                <WatchMainText>
                  <PlayBlackText>{"Coming Soon"}</PlayBlackText>
                </WatchMainText>
              </WatchContainer>
              <WatchImageContainer os={Platform.OS}>
                <WatchImage source={{ uri: "https://lvld-content.s3-us-west-1.amazonaws.com/home-screen/Watches.png" }} resizeMode={"contain"} />
              </WatchImageContainer>
            </RokusWatch>
          </Center>
        </Scroll>
      </BodyContainer>
    </Container>
  )
})

export default Home;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`
const Scroll = styled.ScrollView`
  flex: 1;
`
const Center = styled.View`
  margin-bottom: 40px
`
const ShadowContainer = styled.View`
  background-color: #fff;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: 1px 5px;
  elevation: 20;
  padding: 1px;
  margin: 1px;
`
const BodyContainer = styled.View`
  padding: 12px 0px 0px;;
  flex: 1;
`
const LiveText = styled.Text`
  color: #000;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-family: "Montserrat-ExtraBold";
  font-size: 20px;
  margin-bottom: 7px;
  margin-left: ${props => (props.os === "ios" ? "25px" : "22px")};
`
const HeroText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-family: "Montserrat";
  line-height: 26.82px;
  font-weight: 900;
  height: 27px;
  text-shadow-offset: -1px 1px;
  text-shadow-radius: 10px;
  text-shadow-color: rgba(0, 0, 0, 0.75);
`
const HeroSmallerText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-family: "Montserrat";
  font-weight: 600;
  margin-top: 2px;
`
const PlayText = styled.Text`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 10px;
  color: #fff;
`
const PlayBlackText = styled(PlayText)`
  color: #000;
`
const RenderItemContainer = styled.TouchableOpacity`
`
const Rockus = styled.View`
  height: 185px;
  background-color: #292929;
  margin-top: 7px;
`
const RokusWatch = styled(Rockus)`
  background-color: #626262;
`
const CardContainer = styled.TouchableOpacity`
  padding: 10px 25px 0px;
  margin-top: 7px;
`
const MainText = styled.View`
  margin-top: 10px;
  padding: 10px 10px;
  width: 35%;
  border-radius: 30px;
  align-items: center;
`
const SneakerMainText = styled(MainText)`
  background-color: #000;
`
const ApparelMainText = styled(MainText)`
  background-color: #fff;
`
const WatchMainText = styled(MainText)`
  background-color: #fff;
`
const SneakerImageContainer = styled.View`
  position: absolute;
  bottom: ${props => (props.os === "ios" ? "8px" : "12px")};
  right: 0px;
  width: ${width*0.92}px;
  height: 100px
`
const SneakerImage = styled.Image`
  width: 100%;
  height: 100%;
  align-self: center;
`
const ApparelImageContainer = styled.View`
  position: absolute;
  bottom: ${props => (props.os === "ios" ? "8px" : "12px")};
  right: 5px;
  bottom: -50px;
`
const ApparelImage = styled.Image`
  width: ${width * 0.57}px; 
  height: ${width * 0.6}px;
`
const WatchImageContainer = styled.View`
  position: absolute;
  bottom: ${props => (props.os === "ios" ? "8px" : "12px")};
  right: 40px;
  bottom: -30px;
`
const WatchImage = styled.Image`
  width: ${width * 0.52}px; 
  height: ${width * 0.5}px;
`
const SneakerContainer = styled(CardContainer)`
  background-color: #d2a747;
  height: ${props => (props.os === "ios" ? "185px" : "195px")}
`
const ApparelContainer = styled(CardContainer)`
  background-color: #292929;
`
const WatchContainer = styled(CardContainer)`
  background-color: #626262;
`