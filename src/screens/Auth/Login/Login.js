import React,{useState} from 'react'
import { StyleSheet, Image, View, TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native'
import {Container,Button,iconPath,AppTheme,ResponsiveText,InputField} from '../../../components/index';
import { wp,hp} from '../../../FontResponsiveness/FontResponsiveness';
import { connect } from "react-redux";
import { CommonActions } from "@react-navigation/routers";
import {openDatabase} from 'react-native-sqlite-storage';
import { regisretuser } from '../../../redux/actions/userDataAction';
import { rememberData } from '../../../redux/actions/userDataAction';

const Login = (props) => {
    const [isshow, setisshow]=useState(true)
    const [email, setEmail]=useState(props.isRemember==true?props.user.Email:'');
    const [checked, setchecked]=useState(props.isRemember);
    const [password, setpassword]=useState(props.isRemember==true?props.user.Password:'');
    const [errormessage, seterrormessage]=useState('');
    const [error, seterror]=useState(false)

    console.log('====================================');
    console.log(props.isRemember,props.user.Email);
    console.log('====================================');
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


    const loginuser=()=>{



        
        if (!email || !password ) {
            seterrormessage('All field required')
            seterror(true)
         } 
         else{

          try {
            db.transaction(tx => {
                tx.executeSql(
                  'SELECT * FROM Users where Email=? AND Password=?',
                  [email,password],
                  (tx, results) => {   
                if (results.rows.length>0) {
                      
                      props.rememberData(checked)


                    props.regisretuser(results.rows.item(0))
                          props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: "BottomTab",
                        },
                    ],
                })
            );
                } else {
                    seterrormessage('Invalid Email or Password')
                    seterror(true)
                }
                console.log('result========>>>>>>',results.rows.length);

                  })})

          } catch (error) {
            console.log('errrr====>>>>',error);
          }

      
         }
    }
  return (

    <Container backgroundColor={AppTheme.tabBackGroundcolor} style={{backgroundColor:AppTheme.background}}>
<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>

<View>
<View style={styles.logoview}>
<Image source={iconPath.nabanaIcon} style={styles.splash} />

</View>
<View style={styles.textview}>
<ResponsiveText
                    color={AppTheme.textColorWhite}
                    size="h3"
                    fontWeight={'bold'}
                 
                >
                    {'Let’s sign you in.'}
                </ResponsiveText>
<ResponsiveText
                    color={AppTheme.txtgray}
                    size="h5"
                    marginTop={10}
                
                 
                >
                    {'Welcome back you’ve been missed!'}
                </ResponsiveText>
</View>
{error?
    <View style={styles.errormessage}>
    <ResponsiveText
                        color={'red'}
                        size="h6"
                        fontWeight={'bold'}
                        marginTop={10}
                     
                    >
                        {errormessage}
                    </ResponsiveText>
    </View>
:null}
<View style={styles.inputview}>
    <InputField
    placeholder={'Email address'}
    onrighticonpress={()=>setisshow(!isshow)}
    value={email}
    onChangeText={(text)=>{setEmail(text),seterror(false)}}
    placeholderTextColor={AppTheme.txtgray}
    textinputstyle={styles.textinputstyle}
    
    />
</View>
<View style={styles.inputview}>
    <InputField
    placeholder={'Password'}
    secureTextEntry={isshow}
    onrighticonpress={()=>setisshow(!isshow)}
    righticon={isshow?iconPath.showpassword:iconPath.hidepassword}
    value={password}
    onChangeText={(text)=>{setpassword(text),seterror(false)}}
    placeholderTextColor={AppTheme.txtgray}
    textinputstyle={styles.textinputstyle}
    
    />
</View>
<View style={styles.rememberview}>
    <TouchableOpacity onPress={()=>setchecked(!checked)}>
<Image source={checked?iconPath.ckeck:iconPath.unckeck} style={styles.checkbox} />
</TouchableOpacity>
<ResponsiveText
                    color={AppTheme.txtgray}
                    size="h5"
                    marginLeft={20}
                 
                >
                    {'Remember me'}
                </ResponsiveText>
</View>

<View style={{alignItems:'center',alignSelf:'center',marginTop:hp(10)}}>
               
               <Button
               title={'Sign In'}
               onPress={()=>loginuser()}
               />

               <TouchableOpacity
                onPress={()=>props.navigation.navigate('Signup')}
               style={styles.createacount}>
                <ResponsiveText
                    color={AppTheme.txtgray}
                    size="h6"
           
                 
                >
                    {'Don’t have an account?'}

                    <ResponsiveText
                    color={'#FF3F5E'}
                    size="h6"
                  
                 
                >
                   {' '} {'Create Account'}
                </ResponsiveText>
                </ResponsiveText>
               </TouchableOpacity>
                        
                            </View>
                            </View>
   </TouchableWithoutFeedback>

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
    return {
        user: state.userdataReducer.user,
        isRemember: state.userdataReducer.isRemember,
  
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Login)


const styles = StyleSheet.create({
    logoview:{
        borderWidth:0,
        marginHorizontal:wp(6),
        alignContent:'center',
        justifyContent:'center',
        marginTop:hp(6)
    },
    errormessage:{
        marginHorizontal:wp(6)
    },
    createacount:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp(3)
    },
    rememberview:{
        borderWidth:0,
        marginHorizontal:wp(5),
        marginTop:hp(3),
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
    },
    splash: {
        alignSelf: 'center',
        width: wp(60),
        height: wp(20),
        resizeMode: 'contain'
    },
    checkbox:{
        width: wp(8),
        height: wp(8),
    },
    textview:{
        borderWidth:0,
        marginHorizontal:wp(5),
        marginTop:hp(6)
    },
    inputview:{
        borderWidth:0,
        marginTop:20,
        marginHorizontal:wp(5),
        justifyContent:'center',
        alignContent:'center'    }
})