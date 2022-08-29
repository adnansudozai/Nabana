import { StyleSheet, Text, View, Image, TouchableOpacity,  ImageBackground } from 'react-native'
import React from 'react'
import { AppTheme, iconPath, ResponsiveText } from './index';
import { hp, wp } from '../FontResponsiveness/FontResponsiveness';
import LinearGradient from 'react-native-linear-gradient';
const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ borderWidth: 0}}>

    <LinearGradient
  start={{x: 0.002, y: 1.002}} end={{x: 0.008, y: 0.07}}
  colors={['#FBA00E', '#FF006E']}
  locations={[0,1]}
  style={{...styles.linearGradient,...props.Buttoncontainer}}>
        <Text style={styles.titlestyle}>{props.title}</Text>

</LinearGradient>
</TouchableOpacity>
  //   <TouchableOpacity onPress={props.onPress} style={{ borderWidth: 0}}>

  //   <ImageBackground source={iconPath.buttonimg} resizeMode='contain' style={styles.mainContainer}>


  //       <View style={styles.btntitle}>
  //         <Text style={styles.titlestyle}>{props.title}</Text>
  //       </View>
    
  //   </ImageBackground>
  //  </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: AppTheme.background,
    marginHorizontal: wp(4),
    borderWidth: 0,
    borderColor:'red',
    alignItems: 'center',
    height: hp(7.5),
    width: wp(90),
    justifyContent: "center",
 

  },
  btnstyle: { borderWidth: 0, width: wp(90), height: hp(8) },

  btntitle: { alignItems: 'center', alignSelf: 'center', borderWidth: 0 },
  titlestyle: { color: AppTheme.textColorWhite, fontSize: 18, fontWeight: '500' },
  linearGradient: {
 
    borderRadius: 30,
    height:hp(7.2),
    width:wp(90),
    alignItems:'center',
    justifyContent:'center',
    borderWidth:0,
    alignSelf:'center'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight:'800'
  },


})