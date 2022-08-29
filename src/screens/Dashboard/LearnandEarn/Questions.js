import React from 'react';
import { View, StyleSheet ,FlatList,TouchableOpacity,Image} from 'react-native';
import {Simpleheader,ResponsiveText,Container,iconPath,AppTheme} from '../../../components/index';
import { wp,hp} from '../../../FontResponsiveness/FontResponsiveness';
import {ScrollView} from 'react-native-virtualized-view';

const Questions = (props) => {
  
   
    const renderItem=({item,index})=>{
        console.log(item);
        return(
            <View style={styles.flatlistmainview}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Description')} style={styles.questionview}>
              <View style={{borderWidth:0,width:wp(80)}}>
                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                >
                    {item.question}
                </ResponsiveText>
                </View>
               <Image source={iconPath.rightarrow} style={styles.rightarrow} resizeMode='contain'/>

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
            <Simpleheader
                title={props.route.params.title}
                navigation={props.navigation}
                
                />
            <View style={styles.banerstyle}>         
                 <Image source={props.route.params.item.courseBaner} style={styles.imagestyle} resizeMode='contain'/>
            </View>

            <View style={{marginHorizontal:wp(3),marginTop:10}}>
  <FlatList
                    data={props.route.params.item.questions}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    ListFooterComponent={ListFooterComponent}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                
                />
                </View>


        </Container>
    )
}

export default Questions;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: AppTheme.background
    },
    banerstyle:{
  borderWidth:0,alignItems:'center',marginHorizontal:wp(5),marginTop:hp(2)
    },
 
    imagestyle:{width:wp(90),height:hp(15)},
    questionview:{
        borderBottomWidth:1,flexDirection:'row',justifyContent:'space-between',paddingVertical:hp(1.5),
    marginHorizontal:wp(3),alignItems:'center',borderColor:AppTheme.bordercolor
},
    rightarrow:{width:wp(5),height:hp(2)}
});

