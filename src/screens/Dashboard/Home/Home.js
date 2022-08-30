import React, { useState } from 'react';
import { View, StyleSheet,TouchableOpacity,Platform, Image ,FlatList} from 'react-native';
import {Header,ResponsiveText,Container,iconPath,AppTheme} from '../../../components/index';
import { wp,hp} from '../../../FontResponsiveness/FontResponsiveness';
import {ScrollView} from 'react-native-virtualized-view';
import { connect } from "react-redux";

const Home = (props) => {
    const popularcourses=[
        { 
            id: '1',
        image: iconPath.blockchainbaner
    },
    { 
        id: '2',
    image: iconPath.walletbaner
},
{ 
    id: '3',
image: iconPath.Bitcoinbaner
},
    ]
    const recentlyadded=[
        { 
            id: '1',
        image: iconPath.introbitcoin
    },
    { 
        id: '2',
    image: iconPath.blockchaintech
},


    ]


    const renderPopoulerCourse=({item,index})=>{
        return(
            <View style={styles.populermainview}>
                <TouchableOpacity style={{borderWidth:0,marginHorizontal:10,borderColor:'red'}}>
                    <Image source={item.image} style={styles.populerimage} resizeMode='stretch'/>
                </TouchableOpacity>
                        
                            </View>
        )
    }
    const renderRecentlycourse=({item,index})=>{
        return(
            <View style={styles.recentmainview}>
                <TouchableOpacity style={{borderWidth:0,borderColor:'green',marginHorizontal:10}}>
                    <Image source={item.image} style={styles.recentimageimage} resizeMode='contain'/>
                </TouchableOpacity>
                        
                            </View>
        )
    }
    const ListFooterComponent=({item,index})=>{
        return(
            <View style={{height:20,}}>
              
                        
                            </View>
        )
    }
    return (
        <Container backgroundColor={AppTheme.tabBackGroundcolor} style={{backgroundColor:AppTheme.background}}>
            <View style={styles.mainContainer}>
                <Header profileImage={"https://www.adobe.com/express/create/media_11b1adffc91b8e6206e56adab00fa2bb4da3e694a.jpeg?width=400&format=jpeg&optimize=medium"}
                navigation={props.navigation}
                 
                  />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical:30,paddingBottom:Platform.OS=='ios'?wp(20):wp(30)}} style={styles.Fullcontainer}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('BottomTab', {
  screen: 'Learnandearnstack',

})
} style={styles.topBannerContainer}>
                    <Image source={iconPath.BannerImage} style={styles.topbannerImage} resizeMode='contain'/>
                </TouchableOpacity>
<View style={styles.txtview}>
                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h3"
                >
                    {'Popular Courses'}
                </ResponsiveText>
                </View>
              
                <FlatList
                    data={popularcourses}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderPopoulerCourse}
                />
          <View style={styles.txtview}>
          <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h3"
                >
                    {'Recently Added'}
                </ResponsiveText>
                </View>
                <FlatList
                    data={recentlyadded}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderRecentlycourse}
                    ListFooterComponent={ListFooterComponent}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                
                />
            </ScrollView>
         
        </Container>
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
        totalScore: state.userdataReducer.totalScore,

    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Home)



const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppTheme.background,
   
    },
    Fullcontainer: {
        backgroundColor: AppTheme.background,
        borderWidth:0,
        borderColor:'red',
        flex:1
    
  
  },
    txtview:{borderWidth:0,
    marginHorizontal:wp(6)},
    populermainview:{borderWidth:0,marginTop:wp(5),alignItems:'center',borderColor:'red',marginLeft:wp(2)},
    recentmainview:{borderWidth:0,borderColor:'red',alignItems:'center'},
    topBannerContainer: {
        borderColor: 'red',
        borderWidth: 0,
        alignItems:'center',
   marginHorizontal:wp(2),
        justifyContent:'center'
    },
    topbannerImage: {
        width: wp(90),
        height: wp(40),
        alignSelf:'center',

     
    },
    populerimage: {
        width: wp(90),
        height: wp(50)
    },
    recentimageimage: {
        width: wp(100),
        height: wp(24),
        marginTop:wp(5),
   
    }
});
