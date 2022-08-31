import React,{useState} from 'react';
import { View, StyleSheet ,FlatList,TouchableOpacity,Image,Modal,TextInput} from 'react-native';
import {Header,ResponsiveText,Button,Container,iconPath,AppTheme} from '../../../components/index';
import { wp,hp} from '../../../FontResponsiveness/FontResponsiveness';
import {ScrollView} from 'react-native-virtualized-view';
import { learnandearn } from '../../../Constants/Coursesarray';
import { connect } from "react-redux";
import { CommonActions } from "@react-navigation/routers";
import { rememberData } from '../../../redux/actions/userDataAction';
import { regisretuser } from '../../../redux/actions/userDataAction';
import {openDatabase} from 'react-native-sqlite-storage';
// import LottieView from 'lottie-react-native';
const LearnandEarn = (props) => {
    const [alertModel,setalertModel]=useState(false);
    const [name,setname]=useState(props.user.Name);
  // database connection
  const db = openDatabase(
    {name: 'Nabana.db', createFromLocation: 1},
    successCB,
    errorCB,
    openCB,
  );

  const errorCB = err => {
    console.log('SQL Error: ' + err);
  };

  const successCB = () => {
    console.log('SQL executed fine');
  };
  const openCB = () => {
    console.log('Database OPENED');
  };
 

const logoutuser=()=>{
    props.rememberData(false)


    props.regisretuser({})
    props.navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [
                {
                    name: "Login",
                },
            ],
        }))
}

const edituser=()=>{
    // user

    db.transaction(tx => {
        tx.executeSql(
          'UPDATE Users set Name=? where id=?',
          [name, props.user.id],
          (tx, results) => {
  if(results.rowsAffected>0){
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM Users where id=?',
      [props.user.id],
      (tx, results) => {   
    if (results.rows.length>0) {
          
      props.regisretuser(results.rows.item(0))
  
      setalertModel(false)
       
    }})})
  
  }
          })})
}
const namehandle=(text)=>{
    console.log(text);
    setname(text)
}

    const ListFooterComponent=({item,index})=>{
        return(
            <View style={{height:20}}>
              
                        
                            </View>
        )
    }
    let counttotalcompleted=(item)=>{

      var res = props.completed.filter(obj=>obj.category===item.name);
      
   

if(res.length>0){

      const result = [...props.completed.reduce( (mp, o) => {
        if (!mp.has(o.category)) mp.set(o.category, { ...o, count: 0 });
        mp.get(o.category).count++;
        return mp;
    }, new Map).values()];
    
    console.log('result',result);
    var foundValue = result.filter(obj=>obj.category===item.name);
     return foundValue[0].count
  }
  else{
    return 0
  }

  }
    const renderItem=({item,index})=>{

      // const countfunction=(item)=>{

      // }
      
 
        // props.completed


        return(
            <View style={styles.flatlistmainview}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Courses',{
                    Courses:item.Courses,title:item.name,
                })}style={{borderWidth:0,marginHorizontal:wp(4),borderColor:'green',alignItems:'center'}}>
                <Image source={item.banner} style={styles.imagestyle} resizeMode='stretch'/>
                <View style={styles.numberofscore}>
                <ResponsiveText
                    color={'#856F45'}
                    size="h6"
                    fontWeight={'500'}
                >
                 {'Courses Completed'}{' '}
                 </ResponsiveText>
<View style={{alignItems: 'center',}}>
                <ResponsiveText
                    color={'black'}
                    size="h5"
                    fontWeight={'700'}
                  
                >
                 {props.completed.length>0?counttotalcompleted(item):0}/
                 <ResponsiveText
                    color={'black'}
                    size="h5"
                     >
                  {item.Courses.length}
                </ResponsiveText>
                </ResponsiveText>
</View>
                </View>

                </TouchableOpacity>
                                                               

                            </View>
        )
    }
    return (
        <Container backgroundColor={AppTheme.tabBackGroundcolor} style={{backgroundColor:AppTheme.background}}>
                <Header
                name={props.user.Name}
                profileimage={iconPath.profile}
                logout={iconPath.logout}
                logoutPress={()=>logoutuser()}
                navigation={props.navigation}
                logoPress={()=>props.navigation.navigate('BottomTab', {
                  screen: 'Home',
                
                })}
              
                
                />




                {/* teast loti */}

                {/* <LottieView
              style={{    
                width:70,
                height:70}}
              source={require('./sharing-knowledge.json')}
              autoPlay={true}
              loop={true}
              speed={2} 
         /> */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:Platform.OS=='ios'?hp(10):hp(12)}} style={styles.Fullcontainer}>
         
                <View style={{marginHorizontal:wp(3),marginTop:hp(3)}}>
  <FlatList
                    data={learnandearn}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    ListFooterComponent={ListFooterComponent}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                
                />
                </View>

   
     
                </ScrollView>
                <Modal
        animationType="slide"
        transparent={true}
        visible={alertModel}
        onRequestClose={() => {
          setalertModel(!alertModel);
        }}
      >
        
        <View style={styles.centeredView}>
            
          <View style={styles.modalView}>
          <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                    marginTop={10}
                 
                >
                    {'Edit name'}
                </ResponsiveText>
         
                <TextInput
                value={name}
                onChangeText={text => namehandle(text)}
                style={{height:hp(7),width:wp(88),marginTop:hp(3),
                    borderWidth:1,borderRadius:10,paddingLeft:15,
                    color:AppTheme.textColorWhite,backgroundColor:AppTheme.background
                    ,borderColor:AppTheme.bordercolor}}
            />
    
          <View style={{alignItems:'center',alignSelf:'center',marginTop:hp(3),marginBottom:10}}>
               
               <Button
               title={'Save'}
               onPress={()=>edituser()}
               />

        
                        
                            </View>
          </View>
        </View>
     
      </Modal>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        regisretuser: (data) => dispatch(regisretuser(data)),
        rememberData: (data) => dispatch(rememberData(data)),
    }
  }
  const mapStateToProps = (state) => {
    console.log('state===>>>', state)
    return {
        user: state.userdataReducer.user,
        completed: state.userdataReducer.completed,
  
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(LearnandEarn)

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: AppTheme.background
    },
    numberofscore:{
      borderWidth:0,position:'absolute',top:hp(14),left:wp(2),flexDirection:'row',alignItems:"center"
    },
    flatlistmainview:{
        borderWidth:0,borderColor:'red',alignItems:'center',justifyContent:'center',marginHorizontal:wp(3),marginTop:hp(1.5)
    },
    inputview:{
        borderWidth:0,
        marginTop:hp(3),
    },
    imagestyle:{width:wp(90),height:hp(20)},
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(17, 21, 58, 0.8)'
      
      },
      modalView: {
        margin: 20,
        backgroundColor: AppTheme.tabBackGroundcolor,
        borderRadius: 10,
        padding: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
});

