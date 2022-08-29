import React, {useState} from 'react';
import { View,Platform,Text, StyleSheet ,FlatList,TouchableOpacity,Image,ImageBackground,Modal,TouchableWithoutFeedback} from 'react-native';
import {Button,ResponsiveText,Container,iconPath,AppTheme,Header,GradientBorderButton} from '../../../components/index';
import { wp,hp} from '../../../FontResponsiveness/FontResponsiveness';
import {ScrollView} from 'react-native-virtualized-view';
import { connect } from "react-redux";
import { savePoints } from '../../../redux/actions/userDataAction';
import {openDatabase} from 'react-native-sqlite-storage';
import { regisretuser } from '../../../redux/actions/userDataAction';
import LinearGradient from 'react-native-linear-gradient';

const Quiz = (props) => {

  const [selected,setselected]=useState('')
  const [questionindex,setquestionindex]=useState(0)
  const [points,setpoints]=useState(0)
  const [iscurrecanswer,setiscurrecanswer]=useState('')
  const [alertModel,setalertModel]=useState(false)
  const [totalNumofQuestion,settotalNumofQuestion]=useState(props.route.params.Quiz.length-1)
   
  const [errormessage, seterrormessage]=useState('');
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
 

const checkNextquestion=()=>{

if(selected!='' && selected!=undefined){
  settotalNumofQuestion(totalNumofQuestion-1)
  console.log(iscurrecanswer,'iscurrecanswer');

  if(iscurrecanswer==true){
   
  console.log('+1');
  setpoints(points+1)
  }

  if(totalNumofQuestion>=1){
   

    setquestionindex(questionindex+1)
  
  }
  else{
    setalertModel(true)
    console.log('Question Ended');
  }
  setselected('')

}
else{
  console.log('Select an question')
}
}

    const ListHeaderComponent=(item)=>{
    
        return(
         
              <View style={{borderWidth:0,marginTop:hp(6),marginHorizontal:wp(3)}}>
              <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                >
                 {`Q${questionindex+1}.`}{' '}{props.route.params.Quiz[questionindex].question?props.route.params.Quiz[questionindex].question:null}
                </ResponsiveText>
                         
              <ResponsiveText
                    color={'#6B6F96'}
                    size="h6"
                    lineHeight={17}
                    marginTop={15}

                >
                 {'Select the correct answer'}
                </ResponsiveText>
                            </View>
        )
    }
  
    const selectdoption=(item)=>{
   
        if(selected==item){
           setselected('')
        }
        else{
            setselected(item)
        }
    }


    const saveScore=()=>{
      db.transaction(tx => {
      tx.executeSql(
        'UPDATE Users set Score=? where id=?',
        [props.totalScore+points, props.id],
        (tx, results) => {
if(results.rowsAffected>0){
db.transaction(tx => {
  tx.executeSql(
    'SELECT * FROM Users where id=?',
    [props.id],
    (tx, results) => {   
  if (results.rows.length>0) {
        
    props.regisretuser(results.rows.item(0))


     
  }})})

}
        })})
      props.savePoints(props.totalScore+points)
      props.navigation.navigate('BottomTab')
    }
  
    const renderItem=({item,index})=>{

        return(

          <View>
             {selected==item.option?
<TouchableOpacity style={styles.btnview1} onPress={()=>{selectdoption(item.option),setiscurrecanswer(item.iscorrect)}} hitSlop={{left:20,right:20,top:20,bottom:20}}>

    <LinearGradient
    start={{x: 0.012, y: 1.002}} end={{x: 0.018, y: 0.07}}
    colors={['#FBA00E', '#FF006E']}
    locations={[0,1]}
    style={styles.linearGradient}>

      <View style={styles.question}>
      <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                    width={wp(70)}
                >
                 {item.option}
                </ResponsiveText>

              
                <View style={styles.btnview}>
                <Image source={iconPath.radiochecked} style={styles.radiobutton} resizeMode='contain'/>
</View>

                </View>

                
  </LinearGradient>
</TouchableOpacity>
:

<TouchableOpacity style={styles.btnview1} onPress={()=>{selectdoption(item.option),setiscurrecanswer(item.iscorrect)}} hitSlop={{left:20,right:20,top:20,bottom:20}}>
       
       <View style={{...styles.flatlistmainview,borderColor:AppTheme.bordercolor,borderRadius:item.option.length<=30?30:30}}>

<ResponsiveText
                   color={AppTheme.textColorWhite}
                   size="h5"
                   width={wp(70)}
               >
                {item.option}
               </ResponsiveText>
              
    
<View style={styles.btnview}>
               <Image source={iconPath.radiounchecked} style={styles.radiobutton} resizeMode='contain'/>
</View>
  
 
       </View>
    </TouchableOpacity>
    }
  </View>
        )
    }


 

    return (
        <Container backgroundColor={AppTheme.tabBackGroundcolor} style={{backgroundColor:AppTheme.background}}>
                      <View style={{marginHorizontal:wp(6)}}>
    <FlatList
                data={props.route.params.Quiz[questionindex].options?props.route.params.Quiz[questionindex].options:null}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                ListHeaderComponent={ListHeaderComponent}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              
            
            />
            </View>
       
      
            <View style={{position:'absolute',bottom:hp(10),borderWidth:0,alignSelf:'center'}}>
           
           <Button
           title={'Next'}
           onPress={()=>checkNextquestion()}
           />
                    
                        </View>
        
                        
                          
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
          <View style={styles.modalimage}>
          <Image source={iconPath.resultscore} style={styles.imaggeview} resizeMode='contain'/>
          </View>


            <View style={styles.modalimage}>
            <Image source={iconPath.modalimage} style={styles.imaggeview} resizeMode='contain'/>
<View style={styles.scoreview}>
<ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                >
                 {'Course Completed!'}
                </ResponsiveText>
<View style={{marginTop:10}}>
                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h0"
                    fontWeight={'700'}
                >
                 {points}
                 <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h5"
                     >
                 / {props.route.params.Quiz.length}
                </ResponsiveText>
                </ResponsiveText>
                </View>
                <View style={styles.earnnabana}>
                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h6"
                >
                 {'Nabana Tokens Earned'}
                </ResponsiveText>
                <Image source={iconPath.nabanatoken} style={styles.token} resizeMode='contain'/>

                <ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h6"
                    fontWeight={'bold'}
                    marginLeft={1}

                >
                 {points}
                </ResponsiveText>
                </View>
</View>
            </View>
            <View style={{borderWidth:0,marginTop:hp(3),marginBottom:hp(2),alignItems:'center'}}>
            {/* <GradientBorderButton
               title={'Back to home'}
               onPress={()=>saveScore()}
               /> */}
                 
           <Button
           title={'Back to home'}
           onPress={()=>saveScore()}
           Buttoncontainer={{width:wp(80),height:hp(7)}}
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
    savePoints: (data) => dispatch(savePoints(data)),
    regisretuser: (data) => dispatch(regisretuser(data)),
  }
}
const mapStateToProps = (state) => {
  console.log('state===>>>', state)
  return {
      totalScore: state.userdataReducer.user.Score,
      id: state.userdataReducer.user.id,

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz)



const styles = StyleSheet.create({
    flatlistmainview:{
        borderWidth:1,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between',
    paddingHorizontal:wp(5),
    paddingVertical:hp(1.8),
    width:wp(85),
    borderRadius:30,
  
backgroundColor:AppTheme.background
},
earnnabana:{
  borderWidth:0,marginTop:hp(1),flexDirection:'row',alignItems:'center',justifyContent:'space-between'
},
question:{
  borderWidth:0,
  alignItems:"center",
  flexDirection:'row',justifyContent:'space-between'
},

    textview:{borderWidth:0,marginTop:hp(2)},
    radiobutton:{width:wp(5),height:wp(5)},
    btnview1:{
        alignSelf:'center',alignItems:"center",justifyContent:'center',marginTop:hp(2),paddingHorizontal:wp(3)
    },
    btnview:{
      alignSelf:'center',alignItems:"center",justifyContent:'center'
  },
    linearGradient: {
 
      borderRadius: 30,
      height:hp(6.2),
      width:wp(85),
      alignItems:'center',
      justifyContent:'center',
      borderWidth:0,
      alignSelf:'center',
      
    },

      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#cc2b5e',
        backgroundColor: 'transparent',
      },
      image: {
        padding:1,
        justifyContent: "center",
        marginHorizontal:wp(2.2),
        marginTop:15,
        
      },
      modalimage:{
        borderWidth:0,
       
      },




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
  imaggeview:{
    width:wp(80),
    height:hp(21)
  },
  token:{
    width:wp(4),
    height:wp(4),
    marginLeft:6
  },
  scoreview:{
    borderWidth:0,alignItems:'center',position:'absolute',alignSelf:'center',top:hp(3)
  }
 
});

