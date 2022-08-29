import React from 'react';
import { StyleSheet, Image, View ,Text, Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Dashboard/Home/Home';
import BurnandEarn from '../screens/Dashboard/Burnandearn/Burnandearn';
import Wallet from '../screens/Dashboard/Wallet/Wallet';
import { AppTheme } from '../theme/theme';
import { hp, wp } from '../FontResponsiveness/FontResponsiveness';
import { iconPath } from '../Constants/iconandImages';
import { Learnandearnstack } from './Learnandearnstack';
const BottomTab = () => {
    const Tab = createBottomTabNavigator();

    
    return (

<Tab.Navigator initialRouteName='Learnandearnstack' screenOptions={{
    headerShown: false,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    tabBarStyle: {
        backgroundColor: AppTheme.tabBackGroundcolor, position: 'absolute', overflow: 'hidden', borderTopWidth: 0, height: hp(9.8), borderTopLeftRadius: 20,
                   borderTopRightRadius: 20,paddingTop:hp(4.5)
     },
    
  }}>
  
    <Tab.Screen name='Home' component={Home} options={{
        headerShown: false,
        tabBarLabel: '',
        
        tabBarIcon: ({ focused }) => (
           
            focused?
            <View style={styles.mainview}>
                <Image source={iconPath.homeicon} style={styles.icons}  />
                <Text style={{...styles.labeltext,color:focused?AppTheme.activetextColor:AppTheme.textColorWhite,}}>Home</Text>
                <View style={styles.activeview}>
                <Image source={iconPath.activebotomtab} resizeMode='contain' style={styles.iconsactive}  />
                </View>
                </View>
                :
                <View style={styles.mainview1}>
                <Image source={iconPath.Inactivehome} style={styles.icons}  />
                <Text style={{...styles.labeltext,color:focused?AppTheme.activetextColor:AppTheme.textColorWhite,}}>Home</Text>
                <View style={styles.activeview}>
                </View>
                </View>
             


        )
        
    }} 
    />
   

    <Tab.Screen name='Learnandearnstack' component={Learnandearnstack} 

     options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => (
           
            focused?
            <View style={styles.mainview}>
                <Image source={iconPath.LearntoearnIcon} style={styles.icons}  />
                <Text style={{...styles.labeltext,color:focused?AppTheme.activetextColor:AppTheme.textColorWhite,}}>Learn&Earn</Text>
                <View style={styles.activeview}>
                <Image source={iconPath.activebotomtab} resizeMode='contain' style={styles.iconsactive}  />
                </View>
                </View>
                :
                <View style={styles.mainview1}>
                <Image source={iconPath.inactivelearnandearn} style={styles.icons}  />
                <Text style={{...styles.labeltext,color:focused?AppTheme.activetextColor:AppTheme.textColorWhite,}}>Learn&Earn</Text>
                <View style={styles.activeview}>
                
                </View>
                </View>
                 )
        
      
    }} />
    <Tab.Screen name='BurnandEarn' listeners={{
    tabPress: e => {
      // Prevent default action
      e.preventDefault();
    },
  }} component={BurnandEarn} options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => (
           
        focused?
        <View style={styles.mainview}>
            <Image source={iconPath.BurntoEarnIcon} style={styles.icons}  />
            <Text style={{...styles.labeltext,color:focused?AppTheme.activetextColor:AppTheme.textColorWhite,}}>Burn&Earn</Text>
            <View style={styles.activeview}>
                <Image source={iconPath.activebotomtab} resizeMode='contain' style={styles.iconsactive}  />
                </View>
            </View>
            :
            <View style={styles.mainview1}>
            <Image source={iconPath.inactiveburnandearn} style={styles.icons}  />
            <Text style={{...styles.labeltext,color:'#8499B1'}}>Burn&Earn</Text>
            <View style={styles.activeview}>
          
            </View>
            </View>
             )
    }} />

    
    <Tab.Screen name='Wallet' component={Wallet} listeners={{
    tabPress: e => {
      // Prevent default action
      e.preventDefault();
    },
  }} options={{
        headerShown: false,
        tabBarLabel: '',
     
        tabBarIcon: ({ focused }) => (
           
            focused?
            <View style={styles.mainview}>
                <Image source={iconPath.WalletIcon} style={styles.icons}  />
                <Text style={{...styles.labeltext,color:focused?AppTheme.activetextColor:AppTheme.textColorWhite,}}>Wallet</Text>
                <View style={styles.activeview}>
                <Image source={iconPath.activebotomtab} resizeMode='contain' style={styles.iconsactive}  />
                </View>
                </View>
                :
                <View style={styles.mainview1}>
                <Image source={iconPath.inactivewallet} style={styles.icons}  />
                <Text style={{...styles.labeltext,color:'#8499B1'}}>Wallet</Text>
                <View style={styles.activeview}>
                </View>
                </View>
                 )
    }} />

</Tab.Navigator>
    );
}

export default BottomTab;

const styles = StyleSheet.create({
    TabStyle: {
        backgroundColor: AppTheme.tabBackGroundcolor,
        borderTopWidth: 0,
        height: wp(10),
    },
    labeltext:{borderWidth:0,marginTop:5,fontSize:wp(3),fontWeight:'500',alignSelf:'center'},
    mainview:{borderWidth:0,borderColor:'red',alignItems:'center',justifyContent:'space-between'},
    mainview1:{borderWidth:0,borderColor:'red',alignItems:'center',justifyContent:'space-between'},
    icons:{width:25,height:25},
    iconsactive:{width:25,height:25,marginTop:2},
    activeview:{borderWidth:0,height:Platform.OS=='ios'?hp(3):hp(4)}
});

