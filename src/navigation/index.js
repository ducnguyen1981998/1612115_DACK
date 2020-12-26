import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../components/Main/Home/home';
import Browse from '../components/Main/Browse/Browse';
import Course from '../components/Courses/Course';
import CourseDetail from '../components/CourseDetail/CourseDetail';
import Search from '../components/Main/Search/search';
import ResultSearch from '../components/Main/Search/ResultSearch';
import Signin from '../components/Authentication/Login';
import Signup from '../components/Authentication/Register';
import ForgotPassword from '../components/Authentication/ForgetPassword';
import Setting from '../components/Account Management/Setting';
import Profile from '../components/Account Management/Profile';
import Map from '../components/Map';
import SkillDetail from '../components/SkillDetail/SkillDetail';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Download':
      return 'Download';
    case 'Search':
      return 'Search';
    case 'Browse':
      return 'Browse';
      case 'Map':
        return 'Map';    
  }
}

function HomeTab({navigation}) {
    return (
      <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Download') {
              iconName = focused ? 'ios-download' : 'ios-download';
            } else if (route.name === 'Browse') {
              iconName = focused ? 'ios-browsers' : 'ios-browsers';
            } else if (route.name === 'Search') {
                iconName = focused ? 'ios-search' : 'ios-search';
            } else if (route.name === 'Map') {
              iconName = focused ? 'ios-map' : 'ios-map';
          }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Download" component={Course} />
        <Tab.Screen name="Browse" component={Browse} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    );
}

   
const App = () => {
  return (
    //Navigaton
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"} >
        <Stack.Screen
          name="Home"
          component={HomeTab}

          options={({ navigation,route }) => ({
            headerTitle: getHeaderTitle(route),
            headerRight: () => (
            <View style={styles.containericon}>
                <Icon 
                  name={"ios-person"} 
                  size={28}
                  color={"#000"}
                  style={styles.icon} 
                  color={"rgba(0,0,0,0.3)"} 
                  onPress={ () => { navigation.navigate('Profile')}}
                  />
                <Icon 
                  name={"ios-settings"} 
                  size={28}
                  style={styles.icon} 
                  color={"rgba(0,0,0,0.3)"} 
                  onPress={ () => { navigation.navigate('Setting')}}
                  /> 
            </View>   
            ),

          })}
        />
        <Stack.Screen
          name="ResultSearch"
          component={ResultSearch}
          options={{
            title: 'Search',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            title: 'Courses',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetail}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name="SkillDetail"
          component={SkillDetail}
          options={({route}) => (
            console.log(route),
            {
            // title: route.params.navigation,
            headerTitle:route.params.navigation,
          })}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown:true
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    marginRight:10
  },
  containericon:{
    flexDirection:'row'
  }
});

export default App;
