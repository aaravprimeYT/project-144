import React from "react";
import HomeScreen from "./screens/Home";
import PopularArticlesScreen from './screens/Popular'
import RecommendedArticlesScreen from './screens/Recommended'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { recommendCommands } from "yargs";

export default function App() {
  return <AppContainer/>;
}

const AppTopNavigator = createMaterialTopTabNavigator({
  RecommendedArticles: {
    screen:RecommendedArticlesScreen,
    navigationOptions: {
      tabBarLabel:"recommended",
      tabBarOptions:{
        tabStyle:{
          backgroundColor:"#fff"
        },
        labelStyle:{
          color:"#000"
        },
        indicatorStyle:{
          backgroundColor:"#000"

        }
      }
    }
  },
  PopularArticles: {
    screen:PopularArticlesScreen,
    navigationOptions: {
      tabBarLabel:"popular",
      tabBarOptions:{
        tabStyle:{
          backgroundColor:"#fff"
        },
        labelStyle:{
          color:"#000"
        },
        indicatorStyle:{
          backgroundColor:"#000"
          
        }
      }
    }
  }
})

const AppStackNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  AppTopNav:{
    screen:AppTopNavigator,
    navigationOptions:{
      headerBackTitle:null,
      headerTintColor:"#fff",
      headerTitle:"Recommended Articles",
      headerStyle:{
        backgroundColor:"#d500f9"
      },
      headerTitleStyle:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:RFValue(18)
      }
    }
  }
},
{
  initialRouteName:"Home"
})

const AppContainer = createAppContainer(AppStackNavigator)