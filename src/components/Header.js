import React from 'react';
import { View, StyleSheet, Image ,Platform, TextInput, TouchableOpacity} from 'react-native';
import { iconPath } from '../Constants/iconandImages';
import { hp, wp } from '../FontResponsiveness/FontResponsiveness';
import { AppTheme } from '../theme/theme';
import ResponsiveText from '../components/RnText';
import { connect } from "react-redux";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Header = (props) => {

    function abbreviateNumber(num) {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        if (num >= 0 && num<999){
          return num.toFixed(2)
        }
        return num;
      }
      

      function earningcalculate(num) {
       
        let num2= num*0.10
        if (num2 >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num2 >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num2 >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        if (num2 >= 0 && num2<999){
          return num2.toFixed(2)
        }
        return num2;
      }
      

    return (
        <View style={styles.mainContainer}>
            <View style={styles.toprowView}>
                <TouchableOpacity onPress={props.logoPress}>
                    <Image source={iconPath.nabanaIcon} style={styles.nabanaicon} />
                </TouchableOpacity>


             
                <TouchableOpacity onPress={()=>props.navigation.navigate('Scoredetail',{
                    dolorscore:earningcalculate(props.totalScore),nabanascore:abbreviateNumber(props.totalScore)
                })} style={styles.points}>
                <View>

                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h6"
                    fontWeight={'bold'}
                 
                >
                    {abbreviateNumber(props.totalScore)}
                </ResponsiveText>
                <ResponsiveText
                    color={'#8688AC'}
                    size="h7"
                 
                >
                    {'Balance'}
                </ResponsiveText>

              
                </View>
<View style={styles.pointsview}/>
                <View>

<ResponsiveText
    color={AppTheme.textColorWhite}
    size="h6"
    fontWeight={'bold'}
 
>
    ${earningcalculate(props.totalScore)}
</ResponsiveText>
<ResponsiveText
    color={'#8688AC'}
    size="h7"
 
>
    {'Earning'}
</ResponsiveText>


</View>
</TouchableOpacity>
             
               
                <View style={styles.notificationProfilecontainer}>
                    {props.logout?
                <TouchableOpacity onPress={props.logoutPress}>
                        <Image source={props.logout} style={{...styles.notificationimage,marginRight:10}} />
                    </TouchableOpacity>
                    :null}
                    <View>
                        <Image source={iconPath.notificationIcon} style={styles.notificationimage} />
                    </View>
                    {props.profileImage ?
                        <View>
                            <Image source={{ uri: props.profileImage }} style={styles.profileImage} />
                        </View>
                        : null
                    }
                    

                </View>
            </View>
            {props.name &&(
            <View style={{borderWidth:0,marginBottom:20,marginHorizontal:wp(6)}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderWidth:0,paddingBottom:15}}>
<View style={{borderWidth:0,width:wp(70)}}>
<ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h6"
                 
                >
                    {'Hello'}
                </ResponsiveText>
                <View style={styles.nameedit}>
                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h1"
                    fontWeight={'500'}
                    marginTop={5}

                >
                    {props.name}
                </ResponsiveText>
                {/* <TouchableOpacity hitSlop={{left:20,right:20,bottom:20,top:20}}  onPress={props.editPress} style={{marginLeft:10}}>
                <Image source={iconPath.edit} style={styles.notificationimage} />
                </TouchableOpacity> */}
                </View>
                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h6"
                    marginTop={5}
                >
                    {'Let’s Learn&Earn today!'}
                </ResponsiveText>

</View>

<View style={{borderWidth:0,alignItems:"center",justifyContent:"center"}}>
<Image source={props.profileimage} style={styles.profileicon} resizeMode='contain' />

</View>

    </View>
{/* <View style={styles.inputview}>
<Image source={iconPath.search}style={styles.search} resizeMode='cover' />

<TextInput
                     placeholder="Search courses"
                        maxLength={25}
                    
                        fontWeight={'400'}
                        width={wp(79)}
                       
                        height={hp(6)}
                        paddingLeft={10}
                        placeholderTextColor={AppTheme.textColorWhite}
                        color={AppTheme.textColorWhite}
                      
                    />
</View> */}
            </View>
            )}
        </View>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
    //   createPin: (data) => dispatch(createPin(data)),
    }
  }
  const mapStateToProps = (state) => {
    console.log('state===>>>', state)
    return {
        totalScore: state.userdataReducer.user.Score,

    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Header)


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppTheme.tabBackGroundcolor,
        borderBottomLeftRadius: wp(10),
        borderWidth:0,
        
        // marginTop:Platform.OS=='ios'?0:0

    },
    pointsview:{
borderWidth:0,borderColor:AppTheme.tabBackGroundcolor,height:hp(4),
borderRightWidth:2
    },
    points:{
        borderWidth:0,borderColor:'red',width:wp(35),
        flexDirection:'row',
        alignItems:'center',paddingVertical:8,borderRadius:50,
        backgroundColor:AppTheme.background,
        justifyContent:'space-between',
        paddingHorizontal:wp(4)
    },
    inputview:{ 
        borderWidth:0,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:30,
        paddingLeft:10,
        marginTop:10,
    backgroundColor:AppTheme.texinputbackground
    },
    toprowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        borderWidth:0,
        paddingBottom:15,

        
    },
    nameedit:{
        borderWidth:0,flexDirection:'row',alignItems:'center',width:wp(80)
    },
    notificationProfilecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    nabanaicon: {
        width: wp(30),
        height: wp(15),
        resizeMode: 'contain'
    },
    notificationimage: {
        width: wp(8),
        height: wp(8)
    },
    profileImage: {
        width: wp(8),
        height: wp(8),
        marginLeft: 5,
        borderRadius: 30
    },
    profileicon: {
        width: wp(15),
        height: wp(15),
       
     
    },
    search: {
        width: wp(8),
        height: wp(8),
     
    },

});

