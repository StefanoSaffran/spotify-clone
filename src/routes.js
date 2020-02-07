import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Feather,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import Main from '~/pages/Main';
import Search from '~/pages/Search';
import Playlists from '~/pages/Library/Musica/Playlists';
import Artistas from '~/pages/Library/Musica/Artistas';
import Albuns from '~/pages/Library/Musica/Albuns';
import Episodios from '~/pages/Library/PodCasts/Episodios';
import Downloads from '~/pages/Library/PodCasts/Downloads';
import Programas from '~/pages/Library/PodCasts/Programas';
import Premium from '~/pages/Premium';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Início: {
        screen: createStackNavigator(
          {
            Main: {
              screen: Main,
            },
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="home" size={24} color={tintColor} />
              ),
            },
            defaultNavigationOptions: {
              headerShown: false,
            },
          }
        ),
      },
      Busca: {
        screen: createStackNavigator(
          {
            Search,
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <Feather name="search" size={24} color={tintColor} />
              ),
            },
            defaultNavigationOptions: {
              headerShown: false,
            },
          }
        ),
      },
      Library: {
        screen: createStackNavigator(
          {
            screen: createMaterialTopTabNavigator(
              {
                Musica: createMaterialTopTabNavigator(
                  {
                    Playlists,
                    Artistas,
                    Albuns,
                  },
                  {
                    navigationOptions: {
                      tabBarLabel: 'Música',
                    },
                    tabBarOptions: {
                      scrollEnabled: true,
                      activeTintColor: 'white',
                      inactiveTintColor: '#999',
                      upperCaseLabel: false,
                      labelStyle: {
                        fontWeight: 'bold',
                        fontSize: 14,
                      },
                      style: {
                        backgroundColor: '#121212',
                      },
                      tabStyle: {
                        width: 90,
                      },
                      indicatorStyle: {
                        backgroundColor: '#00e868',
                      },
                    },
                  }
                ),
                Podcasts: createMaterialTopTabNavigator(
                  {
                    Episodios,
                    Downloads,
                    Programas,
                  },
                  {
                    tabBarOptions: {
                      activeTintColor: 'white',
                      inactiveTintColor: '#999',
                      upperCaseLabel: false,
                      labelStyle: {
                        fontWeight: 'bold',
                      },
                      tabStyle: {
                        width: 90,
                        padding: 0,
                        margin: 0,
                        textAlign: 'Left',
                      },
                      style: {
                        backgroundColor: '#121212',
                      },
                      indicatorStyle: {
                        backgroundColor: '#00e868',
                      },
                    },
                  }
                ),
              },
              {
                tabBarOptions: {
                  scrollEnabled: true,
                  activeTintColor: 'white',
                  inactiveTintColor: '#999',
                  upperCaseLabel: false,
                  labelStyle: {
                    fontWeight: 'bold',
                    fontSize: 29,
                  },
                  indicatorStyle: {
                    backgroundColor: '#121212',
                  },
                  tabStyle: {
                    width: 160,
                    padding: 0,
                    margin: 0,
                    textAlign: 'Left',
                  },
                  style: {
                    backgroundColor: '#121212',
                    paddingTop: Platform.OS === 'ios' ? 45 : 0,
                  },
                },
              },
              {
                navigationOptions: {},
              }
            ),
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="book" size={24} color={tintColor} />
              ),
              tabBarLabel: 'Sua Biblioteca',
            },
            defaultNavigationOptions: {
              headerShown: false,
            },
          }
        ),
      },
      Premium: {
        screen: createStackNavigator(
          {
            Premium,
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="spotify" size={24} color={tintColor} />
              ),
            },
            defaultNavigationOptions: {
              headerShown: false,
            },
          }
        ),
      },
    },
    {
      navigationOptions: {
        initialRouteName: 'Library',
      },
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#272829',
          borderTopColor: '#010101',
        },
      },
    }
  )
);

export default Routes;
