import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from './component/Home/Home/Chat';
import People from './component/Home/Home/People';
import ChattingPage from './component/Home/Home/Chat/ChattingPage';
import Calls from './component/Home/Home/Calls';
import Settings from './component/Home/Home/Settings';
import color from './constant/color';
import normalization from './constant/normalize';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Profile from './component/Home/Home/Settings/Profile';
import Signup from './component/Auth/Signup/SignUp';
import UserInformation from './component/Auth/Signup/UserInformation';
import Congratulation from './component/Auth/Signup/Congratulation';

// os-chatbubble-sharp --chatting - ionicons
// md-people-circle--peoples - ionicons
// md-call -- calls
// md-settings-sharp -- settings

const chattingIconName = 'chatbubble-sharp';
const peopleIconName = 'md-people-circle';
const callIconName = 'ios-call';
const settingsIconName = 'md-settings-sharp';

const iconActiveColor = '#128C7E';

const ChatStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const SignUpStack = createStackNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          let iconColor;
          if (route.name === 'Chat') {
            iconName = chattingIconName;
            iconColor = focused ? color.primary_color : color.tab_icon_color;
          } else if (route.name === 'Calls') {
            iconName = callIconName;
            iconColor = focused ? color.primary_color : color.tab_icon_color;
          } else if (route.name === 'People') {
            iconName = peopleIconName;
            iconColor = focused ? color.primary_color : color.tab_icon_color;
          } else if (route.name === 'Settings') {
            iconName = settingsIconName;
            iconColor = focused ? color.primary_color : color.tab_icon_color;
          }

          return <IonIcons name={iconName} size={size} color={iconColor} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: color.primary_color,
        inactiveTintColor: color.tab_icon_color,
        labelStyle: {
          fontSize: normalization(10),
          marginBottom: normalization(3),
        },
      }}
      initialRouteName="Chat">
      <Tab.Screen component={Chat} name="Chat" />
      <Tab.Screen component={Calls} name="Calls" />
      <Tab.Screen component={People} name="People" />
      <Tab.Screen component={SettingsStackNavigation} name="Settings" />
    </Tab.Navigator>
  );
}

function SettingsStackNavigation() {
  return (
    <SettingsStack.Navigator
      initialRouteName="SettingsPage"
      screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="SettingsPage" component={Settings} />
      <SettingsStack.Screen name="Profile" component={Profile} />
    </SettingsStack.Navigator>
  );
}

function SignUpStackNavigation() {
  return (
    <SignUpStack.Navigator
      initialRouteName="SignUp"
      screenOptions={{headerShown: false}}>
      <SignUpStack.Screen name="SignUp" component={Signup} />
      <SignUpStack.Screen name="Congratulation" component={Congratulation} />
      <SignUpStack.Screen name="UserInformation" component={UserInformation} />
      <SignUpStack.Screen name="LoginScreen" component={LoginNavigation} />
    </SignUpStack.Navigator>
  );
}

function LoginNavigation() {
  return (
    <ChatStack.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{headerShown: false}}>
      <ChatStack.Screen name="TabNavigation" component={TabNavigation} />
      <ChatStack.Screen name="Chatting" component={ChattingPage} />
    </ChatStack.Navigator>
  );
}

function AppNavigation() {
  const isLogin = true;
  return isLogin ? <LoginNavigation /> : <SignUpStackNavigation />;
}
export default AppNavigation;
