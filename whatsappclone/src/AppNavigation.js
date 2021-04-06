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

function ChatStackNavigation({route, navigation}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }

  return (
    <ChatStack.Navigator
      initialRouteName="ChatPage"
      screenOptions={{headerShown: false}}>
      <ChatStack.Screen name="ChatPage" component={Chat} />
      <ChatStack.Screen name="Chatting" component={ChattingPage} />
    </ChatStack.Navigator>
  );
}

function AppNavigation() {
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
      }}>
      <Tab.Screen component={ChatStackNavigation} name="Chat" />
      <Tab.Screen component={Calls} name="Calls" />
      <Tab.Screen component={People} name="People" />
      <Tab.Screen component={Settings} name="Settings" />
    </Tab.Navigator>
  );
}
export default AppNavigation;
