import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppTheme,iconPath,ResponsiveText } from './index';
import { hp, wp } from '../FontResponsiveness/FontResponsiveness';

const GradientBorderButton = (props) => {
  return (
    <View style={styles.mainContainer}>

        <TouchableOpacity onPress={props.onPress} style={{borderWidth:0}}>
    <Image source={iconPath.gradientborderbutton} style={styles.btnstyle} resizeMode='contain'/>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onPress} style={{borderWidth:0}}>

    <View style={styles.btntitle}>
        <Text style={styles.titlestyle}>{props.title}</Text>
    </View>
 </TouchableOpacity>
    </View>
  )
}

export default GradientBorderButton

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppTheme.tabBackGroundcolor,
    
        borderWidth:0,
        borderRadius:20,
         marginHorizontal:wp(6),
         width:wp(70),
         justifyContent:'center',
         alignItems:'center'
      
    },
    btnstyle:{borderWidth:0,height:hp(7)},

    btntitle:{position:'absolute',alignItems:'center',alignSelf:'center',bottom:hp(2.2)},
    titlestyle:{color:AppTheme.textColorWhite,fontSize:18,fontWeight:'500'}
  
})