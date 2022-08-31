import React,{useState} from 'react';
import { View, StyleSheet ,TouchableOpacity,Image} from 'react-native';
import {Simpleheader,Container,iconPath,AppTheme,ResponsiveText} from '../../../components/index';
import { wp,hp} from '../../../FontResponsiveness/FontResponsiveness';
import {ScrollView} from 'react-native-virtualized-view';

const Scoredetail = (props) => {

    return (
        <Container backgroundColor={AppTheme.tabBackGroundcolor} style={{backgroundColor:AppTheme.background}}>
                <Simpleheader
                title={'Balance'}
                navigation={props.navigation}
                
                />

            <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.scoreimageview}>

            <Image source={iconPath.Scorebackground} style={styles.scoreimage} resizeMode='contain'/>

            <View style={styles.insideview}>
            <ResponsiveText
                    color={'#FBD3C0'}
                    size="h5"
                    fontWeight={'500'}
                >
                 {'Nabana Balance'}
                 </ResponsiveText>
                 <View style={styles.nabanascore}>
                 {/* <Image source={iconPath.nabanatoken} style={styles.nabanatoken} resizeMode='contain'/> */}



                <View style={{borderWidth:0}}>
                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                    marginLeft={6}

                >
                 {'    Points'} /
                 </ResponsiveText>
                 <View style={{flexDirection:'row',alignItems:"center",borderWidth:0,justifyContent:'center'}}>
                 <Image source={iconPath.nabanatoken} style={styles.nabanatoken} resizeMode='contain'/>
                 <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                   

                >
                 {props.route.params.nabanascore} / 
                 </ResponsiveText>
                 </View>
                 </View>
                <View style={{borderWidth:0}}>
                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                >
                 {' '+'USD'}
                 </ResponsiveText>
                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                >
                 { ` $${props.route.params.dolorscore}`}
                 </ResponsiveText>
                </View>
                 </View>
                
            </View>
            </View>
            <View
            style={styles.textview}>

<ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                    marginLeft={6}

                >
                 {'What you can do with them?'}
                 </ResponsiveText>

                 <ResponsiveText
                    color={AppTheme.darktext}
                    size="h6"
                    marginLeft={6}
                    lineHeight={20}
                    marginTop={hp(2)}

                >
                 {'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}
                 </ResponsiveText>
            </View>
       
            <View
            style={styles.textview}>

<ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                    marginLeft={6}

                >
                 {'What happens if you hold/sell them?'}
                 </ResponsiveText>

                 <ResponsiveText
                    color={AppTheme.darktext}
                    size="h6"
                    marginLeft={6}
                    lineHeight={20}
                    marginTop={hp(2)}

                >
                 {'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}
                 </ResponsiveText>
            </View>
       
                </ScrollView>
        </Container>
    )
}

export default Scoredetail;

const styles = StyleSheet.create({
    scoreimageview:{borderWidth:0,marginTop:hp(5),marginHorizontal:wp(5),alignItems:"center"},
    scoreimage:{width:wp(88),height:hp(15)},
    nabanatoken:{width:wp(5),height:wp(5),borderWidth:1,alignSelf:'center'},
    insideview:{position:'absolute',borderWidth:0,alignSelf:'center',alignItems:'center',top:hp(3)},
    nabanascore:{flexDirection:'row',alignContent:'center',alignItems:'center',marginTop:5,marginBottom: 5,},
    textview:{borderWidth:0,marginTop:hp(4),marginHorizontal:wp(5)}
});

