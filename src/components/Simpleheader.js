import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppTheme,iconPath,ResponsiveText } from './index';
import { hp, wp } from '../FontResponsiveness/FontResponsiveness';

const Simpleheader = (props) => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.mainview}>
        <TouchableOpacity hitSlop={{left:25,right:25,bottom:25,top:25}} onPress={()=>props.navigation.goBack()}>
    <Image source={iconPath.lefticon} style={styles.rightarrow} resizeMode='contain'/>
    </TouchableOpacity>
    <View style={{borderWidth:0,alignSelf:'center'}}>
    <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h3"
                >
                    {props.title}
                </ResponsiveText>
                </View>
                <View></View>
    </View>
    </View>
  )
}

export default Simpleheader

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppTheme.tabBackGroundcolor,
        borderBottomLeftRadius: wp(10),
        borderWidth:0,
        // marginTop:Platform.OS=='ios'?0:0

    },
    mainview:{alignItems:'center',flexDirection:'row',borderWidth:0,marginHorizontal:wp(5),paddingVertical:hp(2),justifyContent:'space-between'},
    rightarrow:{width:wp(4),height:wp(4)}
})