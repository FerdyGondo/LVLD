import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'
import ProfileIcon from '../../assets/svg/ProfileIcon'

const {width,height} = Dimensions.get("window")

  const userId = "rhazen";
type Props = {
    route: () => {};
}

export default function index({ route }: Props) {
    const [lobby, setLobby] = useState("lobby")
    const {entry, lobbyItem, users} = route?.params

    const lobbySwitch = (data: string): void => {
        setLobby(data)
    }

    const abbreviateData = (name) => {
        let names = name.split(" ")
        const firstName = names[0]
        const lastName = names[1].split("")[0]
        return `${firstName} ${lastName}.`
    }

    const renderList = ({ item, index }) => {
        return (
            <RenderContainer userId={item.userId} index={index}>
                <LvdContainer>
                    <NameTextContainer>
                        <NameText userId={item.userId} index={index}>{++index}</NameText>
                    </NameTextContainer>
                    <Profile>
                        <ProfileIcon width={32} />
                    </Profile>
                    <EbukaText userId={item.userId} index={index}>{abbreviateData(item.userName)}</EbukaText>
                </LvdContainer>
                <ScorePoint>
                    <ScoreText userId={item.userId} index={index}>{`${item.userFunds} pts`}</ScoreText>
                </ScorePoint>
            </RenderContainer>
        )
    }

    function compare(a, b) {
        const priceA = parseFloat(a.userFunds.toUpperCase());
        const priceB = parseFloat(b.userFunds.toUpperCase());

        let comparison = 0;
        if (priceA > priceB) {
            comparison = -1;
        } else if (priceA < priceB) {
            comparison = 1
        }
        return comparison;
    }

    return (
        <Container>
            <ProfileHeader>
                <ProfileContainer>
                    <ImageContainer>
                        <Image source={require('../../assets/images/shoes/sneakers.png')} />
                    </ImageContainer>
                    <NameContainer>
                        <NameText>{lobbyItem.name}</NameText>
                        <SubListContainer>
                            <ProfileContainer>
                                <ProfileIcon width={12}/>
                            </ProfileContainer>
                            <ListText>{lobbyItem.requiredParticipants}</ListText>
                        </SubListContainer>
                    </NameContainer>
                </ProfileContainer>
                <ProfileContainer>
                    <EntryContainer>
                        <EntryRow>
                            <EntryText>{`Entry:`}</EntryText>
                            <EntryText>{`$${entry}.00`}</EntryText>
                        </EntryRow>
                        <EntryRow>
                            <StartText>{`Ends:`}</StartText>
                            <StartText>{lobbyItem.startTime[0]}</StartText>
                        </EntryRow>
                    </EntryContainer>
                </ProfileContainer>
            </ProfileHeader>
                <LobbyContainer>
                    <LobbyMainContainer onPress={() => lobbySwitch("lobby")} lobby={lobby}>
                        <FirstText lobby={lobby}>{`Lobby`}</FirstText>
                    </LobbyMainContainer>
                    <ChatMainContainer onPress={() => lobbySwitch("chat")} lobby={lobby}>
                        <SecondText lobby={lobby}>{`Chat`}</SecondText>
                    </ChatMainContainer>
                </LobbyContainer>
                <List 
                    data={users.sort(compare)}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderList}
                />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`
const ProfileHeader = styled.View`
    flex-direction: row;
    padding: 10px 20px;
    justify-content: space-between;
`
const NameContainer = styled.View`
    margin: 0px 20px;
`
const EntryContainer = styled.View`
    justify-content: center;
    width: 90px
`
const EntryRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
const NameText = styled.Text`
    font-family: "Montserrat-ExtraBold";
    font-size: 12px;
    color: ${props => props.userId === userId || props.index === 0 ? "#fff" : "#000"};
`
const EntryText = styled.Text`
    font-family: "Montserrat";
    font-size: 12px;
    align-items: center;
`
const StartText = styled.Text`
    font-family: "Montserrat-Bold"
    font-size: 12px;
`
const ImageContainer = styled.View`
    width: ${width * 0.16}px;
    height: 36px;
`
const Image = styled.Image`
    align-self: center;
    width: 100%;
    height: 100%;
`
const SubListContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 1px;
`
const ListText = styled.Text`
    font-family: "Montserrat-Medium";
    opacity: 0.8;
    font-size: 12px;
`
const ProfileContainer = styled.View`
    flex-direction: row;
    margin-right: 5px;
`
const LobbyContainer = styled.View`
  background-color: #fff;
  padding: 14px 20px;
  flex-direction: row;
  justify-content: space-between;
  border-color: #3f3f3f;
  border-top-width: 0.7px;
  border-bottom-width: 0.7px;
`
const LobbyMainContainer = styled.TouchableOpacity`
  background-color: ${props => props.lobby === "lobby" ? "#fff" : "#000"};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  border-width: 0.5px;
  border-color: #3f3f3f;
  width: ${width/2.3}px;
`
const ChatMainContainer = styled(LobbyMainContainer)`
  background-color: ${props => props.lobby === "lobby" ? "#000" : "#fff"};
`
const FirstText = styled.Text`
  font-size: 16px;
  color: ${props => props.lobby === "lobby" ? "#000" : "#fff"};
  font-family: "Montserrat-Medium"
`
const SecondText = styled(FirstText)`
  color: ${props => props.lobby === "lobby" ? "#fff": "#000"};
`
const List = styled.FlatList`
`
const RenderContainer = styled.View`
    flex-direction: row;
    border-bottom-width: 0.7px;
    border-color: #3f3f3f;
    padding: 10px 27px;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.index === 0 ? "#d2a747" : props.userId === userId ? "#00AADE" : "#fff"}
`
const LvdContainer = styled.View`
   flex-direction: row;
   align-items: center;
   width: 40%
`
const Profile = styled.View`
    margin: 0px 10px 0px 5px;
    background-color: #fff;
    border-radius: 20px;
`
const NameTextContainer = styled.View`
    width: 25px;
`
const ScorePoint = styled.View`
`
const EbukaText = styled.Text`
    font-family: "Montserrat-Bold";
    color: ${props => props.userId === userId || props.index === 1 ? "#fff" : "#000"};
`
const ScoreText = styled.Text`
    font-family: "Montserrat-Bold";
    font-size: 12px;
    color: ${props => props.userId === userId || props.index === 1 ? "#fff": "#000"};
`
