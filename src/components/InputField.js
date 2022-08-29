import { StyleSheet, Image, View ,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { wp,hp} from '../FontResponsiveness/FontResponsiveness';
import { AppTheme } from '../theme/theme';


const InputField = (props) => {
  return (
    <View>
        <View style={styles.inputview}>
        <TextInput
                autoCapitalize='none'
                placeholder={props.placeholder}
                value={props.value}
                maxLength={props.maxLength}
              onChangeText={props.onChangeText}
                textAlign={props?.textAlign}
                borderColor={props.borderColor}
                keyboardType={props.keyboardType?props.keyboardType:"default"}
                placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : "#94959B"}
                secureTextEntry={props.secureTextEntry?props.secureTextEntry:false}
                style={{height:hp(7),width:props.righticon?wp(72):wp(80),paddingLeft:10,color:AppTheme.textColorWhite}}
            />
    {props.righticon &&
    <TouchableOpacity onPress={props.onrighticonpress}>
                <Image source={props.righticon} style={{width: wp(7), height: wp(7)}} resizeMode={"contain"}></Image>
                </TouchableOpacity>
            }
        </View>
      
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    inputview:{borderWidth:2,
    marginTop:10,
flexDirection:'row',
justifyContent:'space-between',
borderRadius:10,
borderColor:'#202253',
alignItems:'center',
paddingHorizontal:10
}
})