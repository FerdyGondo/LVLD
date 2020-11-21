import React, {useState} from 'react';
import { 
  Text, 
  View, 
  Image,
  TouchableOpacity,
  SafeAreaView, 
  Dimensions,
  useWindowDimensions,
  StatusBar,
  Platform
} from 'react-native';
import styled from 'styled-components';
import { 
  NavigationContainer, 
  DrawerActions
}      from '@react-navigation/native';
const {width,height} = Dimensions.get("window")
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Header }             from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LvldLogo from './assets/svg/LvldLogo';
import Home     from './src/home/index';
import Account  from './src/account/index';
import Content  from './src/content/index';
import Entries  from './src/entries/index';
import Sneaker  from './src/sneaker/index';
import Context  from './src/context/index';
import MenuIcon from './assets/svg/MenuIcon';
import NotificationIcon from './assets/svg/NotificationIcon';
import BackButton from './src/shared/components/BackButton';
import CenterButton from './src/shared/components/CenterButton';
import Confirmation from './src/confirmation'
import Lobby from './src/lobby'
import Placeholder from './src/placeholder'
import LeaderBoard from './src/leaderboard'
import Video from './src/video'
import Fund from './src/fund'
import Bank from './src/bank'
import Credit from './src/credit'
import Settings from './src/settings'
import Verification from './src/verification'
import UpdatePassword from './src/updatepassword'
import Personal from './src/personal'
import History from './src/history'
import Tutorial from './src/hamburger/tutorial'
import Privacy from './src/hamburger/privacy'
import Faq from './src/hamburger/faq'
import Rules from './src/hamburger/rules'

const Stack     = createStackNavigator();
const Drawer    = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const PreStackNavigator = ({navigation}) => {
    return( <Stack.Navigator>
              <Stack.Screen name = "drawer"  component = {DrawerNavigator} 
                options={{ headerShown: false }} 
              />
            </Stack.Navigator> )
  }

const DrawerNavigator = ({navigation}) => {
  const window = useWindowDimensions();
  const insets = useSafeAreaInsets();
  return (      
      <Drawer.Navigator 
          drawerContent={props => <CustomDrawerContent {...props} />}
          drawerPosition={"right"}
          drawerType={'front'}
          headerShown={true}
          hideStatusBar={false}

          drawerStyle={{
            width: window.width,
            marginTop: Platform.OS === 'android' ? insets.top+80 : insets.top+80,
          }}
          overlayColor={0}
      >
        <Drawer.Screen name="bottomTabNavigator"    component={BottomTabNavigator} />
      </Drawer.Navigator>
    )
}

const BottomTabNavigator = ({navigation}) => {
  return(
      <BottomTab.Navigator
              initialRouteName="home"
              screenOptions={ ({ route }) => ({
                  tabBarIcon : ({ focused, color }) => {
                    let iconName;
                    switch (route.name){
                      case 'home'     : iconName = require('./assets/icons/home.png');     break;
                      case "content"  : iconName = require('./assets/icons/content.png');  break;
                      case "entries"  : iconName = require('./assets/icons/entries.png');  break;
                    }
                    return <TabImage source={ iconName } colorProps={color} />
                    },
                  tabBarLabel : () => {
                        let tabLabel;
                        switch (route.name){
                          case 'home'     : tabLabel = 'Home';     break;
                          case "content"  : tabLabel = 'Content';  break;
                          case "entries"  : tabLabel = 'Entries';  break;
                        }
                        return <TabText>{tabLabel}</TabText> 
                    }
              }) }
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                activeBackgroundColor: '#ddd',
                inactiveBackgroundColor: '#fff',
              }}
      >
        <BottomTab.Screen name="home"     component={HomeStackNavigator}  />
        <BottomTab.Screen name="content"  component={ContentStackNavigator} />
        <BottomTab.Screen name="entries"  component={Entries} />
      </BottomTab.Navigator>
  )
}

const HomeStackNavigator = ({navigation}) => {
  return( <Stack.Navigator  initialRouteName="home" >
            <Stack.Screen name = "home"    component = {Home} 
                options={{ 
                  header: (navigation) => 
                    <LVLD_Header 
                        props={navigation} 
                        leftProps={<NotificationIcon  width={20} />} 
                        centerProps={<LvldLogo />}
                    />
                  }}
              />
            <Stack.Screen name = "Account" component = {Account} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                    props={navigation} 
                    leftProps={<NotificationIcon  width={20} />} 
                    centerProps={<LvldLogo />}
                />
              }} />
            <Stack.Screen name = "Sneaker" component = {Sneaker} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                  props={navigation} 
                  leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                  centerProps={<CenterButton text={'select size'} />}
                />
              }}/>
            <Stack.Screen name = "Context" component = {Context} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'live contests'} />}
                />
              }}/>
            <Stack.Screen name= "Confirmation" component={Confirmation} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'enter contest'} />}
                />
              }}/>
              <Stack.Screen name= "Lobby" component={Lobby} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'lobby'} />}
                />
              }}/>
              <Stack.Screen name= "Placeholder" component={Placeholder} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'Placeholder'} />}
                />
              }}/>
              <Stack.Screen name= "LeaderBoard" component={LeaderBoard} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'LeaderBoard'} />}
                />
              }}/>
              <Stack.Screen name= "AddFund" component={Fund} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'Add Funds'} />}
                />
              }}/>
              <Stack.Screen name= "Bank" component={Bank} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'Online Banking'} />}
                />
              }}/>
              <Stack.Screen name= "Credit" component={Credit} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'Credit Card'} />}
                />
              }}/>
              <Stack.Screen name= "Settings" component={Settings} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'Account Settings'} />}
                />
              }}/>
              <Stack.Screen name= "Verification" component={Verification} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'Two-Step Verification'} size={14} />}
                />
              }}/>
              <Stack.Screen name= "UpdatePassword" component={UpdatePassword} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'Update Password'} />}
                />
              }}/>
              <Stack.Screen name= "Personal" component={Personal} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'Personal Info'} />}
                />
              }}/>
              <Stack.Screen name= "History" component={History} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'Transaction History'} size={14} />}
                />
              }}/>
              <Stack.Screen name= "Tutorial" component={Tutorial} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'Tutorial'} size={14} />}
                />
              }}/>
              <Stack.Screen name= "Faq" component={Faq} options={{ 
              header: (navigation) => 
                <LVLD_Header 
                props={navigation} 
                leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                centerProps={<CenterButton text={'FAQ'} size={14} />}
                
                />
              }}/>
              <Stack.Screen name= "Rules" component={Rules} options={{ 
                header: (navigation) => 
                  <LVLD_Header 
                  props={navigation} 
                  leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                  centerProps={<CenterButton text={'Rules and GamePlay'} size={14} />}
                  />
                }}/>
              <Stack.Screen name= "Privacy" component={Privacy} options={{ 
                header: (navigation) => 
                  <LVLD_Header 
                  props={navigation} 
                  leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                  centerProps={<CenterButton text={'Privacy Policy'} size={14} />}
                  />
                }}/>
          </Stack.Navigator> )
}

const ContentStackNavigator = ({navigation}) => {
  return( <Stack.Navigator  initialRouteName="content" >
            <Stack.Screen name = "content"    component = {Content}  options={{ 
              header: (navigation) => 
                <LVLD_Header 
                    props={navigation} 
                    leftProps={<NotificationIcon  width={20} />} 
                    centerProps={<CenterButton text={'Content'} />}
                />
              }}/>
              <Stack.Screen name = "Video"    component = {Video}  options={{ 
              header: (navigation) => 
                <LVLD_Header 
                    props={navigation} 
                    leftProps={<BackButton onPress={() => navigation.navigation.goBack()} />} 
                    centerProps={<CenterButton text={'Video'} />}
                />
              }}/>
          </Stack.Navigator> )
}

export const LVLD_Navigation = ({navigation}) => {
  return(
    <NavigationContainer>
      <PreStackNavigator />
    </NavigationContainer>
    )
}

const OpenCLoseDrawer = (props) => {
      return (
        <TouchableOpacity
          onPress={() => { 
            props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <MenuIcon width={25} />
        </TouchableOpacity>
      );
    }
    const LVLD_Header = ({props, leftProps, centerProps}) => { 
      return(
      <SafeAreaViewStyled statusBarProps = { Platform.OS === "android" ? StatusBar.currentHeight+'px' : 0 } >
        <Header 
            statusBarProps={{ barStyle: 'light-content' }}
              leftComponent={leftProps}
              centerComponent={centerProps}
              rightComponent={ OpenCLoseDrawer(props) }
              containerStyle={{
                backgroundColor: '#262626',
                justifyContent: 'space-around',
                paddingBottom: 20,
                height: 80
              }}
          />
      </SafeAreaViewStyled>
      )
    } 

    const CustomDrawerContent = (props) => {   
      const insetsProp = useSafeAreaInsets();
      return (
        <DrawerContentScrollView {...props}>
          <SafeAreaViewDrawer os={Platform.OS} insetsProp={insetsProp.top}>
            <TouchableOpacity  onPress={ () => { }} >
                <DrawerItemStyle><DrawerTextStyle>Support</DrawerTextStyle><Icon  name="chevron-right"  size={20} /></DrawerItemStyle>
            </TouchableOpacity>
            <TouchableOpacity  onPress={ () => props.navigation.navigate("Tutorial")} >
                <DrawerItemStyle><DrawerTextStyle>Tutorials</DrawerTextStyle><Icon  name="chevron-right"  size={20} /></DrawerItemStyle>
            </TouchableOpacity>
            <TouchableOpacity  onPress={ () => { props.navigation.navigate("Rules")}} >
                <DrawerItemStyle><DrawerTextStyle>Rules and Gameplays</DrawerTextStyle><Icon  name="chevron-right"  size={20} /></DrawerItemStyle>
            </TouchableOpacity>
            <TouchableOpacity  onPress={ () => { props.navigation.navigate("Faq")}} >
                <DrawerItemStyle><DrawerTextStyle>FAQ</DrawerTextStyle><Icon  name="chevron-right"  size={20} /></DrawerItemStyle>
            </TouchableOpacity>        
            <TouchableOpacity  onPress={ () => { }} >
                <DrawerItemStyle><DrawerTextStyle>Current Location</DrawerTextStyle><Icon  name="chevron-right"  size={20} /></DrawerItemStyle>
            </TouchableOpacity>        
            <TouchableOpacity  onPress={ () => { props.navigation.navigate("Privacy")}} >
                <DrawerItemStyle><DrawerTextStyle>Term of Use</DrawerTextStyle><Icon  name="chevron-right"  size={20} /></DrawerItemStyle>
            </TouchableOpacity>        
            <TouchableOpacity  onPress={ () => { }} >
                <DrawerItemStyle><DrawerTextStyle>Privacy Policy</DrawerTextStyle><Icon  name="chevron-right"  size={20} /></DrawerItemStyle>
            </TouchableOpacity>        
            <TouchableOpacity  onPress={ () => { }} >
                <DrawerItemStyle><DrawerTextStyle>Sign Out</DrawerTextStyle><Icon  name="chevron-right"  size={20} /></DrawerItemStyle>
            </TouchableOpacity>
            <TouchableOpacity  onPress={ () => { }} >
                <DrawerItemStyle><DrawerTextStyle>App Version 1.00.22</DrawerTextStyle><Icon  name="chevron-right"  size={20} /></DrawerItemStyle>
            </TouchableOpacity>
            </SafeAreaViewDrawer>
        </DrawerContentScrollView>
      );
    }

const TabImage = styled.Image`
width: 25px;
height: 25px;
tintColor: ${props => props.colorProps};
`
const TabText = styled.Text`
font-family: Montserrat;
font-size: 10px;
`
const SafeAreaViewStyled = styled.SafeAreaView`
background-color: #262626;
padding-top: ${props => props.statusBarProps};
`
const SafeAreaViewDrawer = styled.SafeAreaView`
  margin-top: ${props => props.os === 'android' ? -(props.insetsProp - 6) + 'px' : -(props.insetsProp - 6) + 'px'};
`
const DrawerItemStyle = styled.View`
padding-left: 20px;
flex-direction: row;
justify-content: space-between;
border-bottom-color: black;
border-bottom-width: 1px;
margin:10px;
padding-bottom: 20px;
`
const DrawerTextStyle = styled.Text`
font-family: Montserrat;
`
