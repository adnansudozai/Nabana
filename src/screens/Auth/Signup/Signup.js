import React,{useState} from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity ,TouchableWithoutFeedback,Keyboard } from 'react-native'
import {Container,Button,iconPath,AppTheme,ResponsiveText,InputField} from '../../../components/index';
import { wp,hp} from '../../../FontResponsiveness/FontResponsiveness';
import { connect } from "react-redux";
import {openDatabase} from 'react-native-sqlite-storage';


const Signup = (props) => {
    const [isshow, setisshow]=useState(true)
    const [isshowconfirm, setisshowconfirm]=useState(true)
    const [error, seterror]=useState(false)
    const [email, setEmail]=useState('');
    const [name, setname]=useState('');
    const [phoneno, setphoneno]=useState('');
    const [confirmpassword, setconfirmpassword]=useState('');
    const [password, setpassword]=useState('');
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
const saveTodatabase=()=>{
    try {
        db.transaction(function (tx) {
            tx.executeSql(
              'INSERT INTO Users(Name, Email,Password,Score) VALUES (?,?,?,?)',
              [
                name,email.trim(),password.trim(),0
              ],
              (tx, results) => {
                console.log('results=====>>', results);
                if (results.rowsAffected > 0) {
                 
                    props.navigation.navigate('Login')
                  
              }
              }
            );
    
            
          });
    } catch (error) {
        
    }
}
    const signupuser=()=>{
        let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

console.log('====================================');
console.log('password.match(check)',password.match(check));
console.log('====================================');


 if (!name || !email || !password ||!confirmpassword) {
    seterrormessage('All field required')
    seterror(true)
 } else if(password != confirmpassword)
  {
    seterrormessage('password does not match')
    seterror(true)
 }
  else if(!password.match(check))
  {
  
    seterrormessage('password must be 8 characters with atleast 1 Upper case & number')
    seterror(true)
 }
 else{


try {
    db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM Users',
          [],
          (tx, results) => {   
        if (results.rows.length>0) {
            // saveTodatabase()
            let temp=[]
            for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
              }
              let emailstringify = JSON.stringify(temp);

if (emailstringify.includes(email)==true) {
    seterrormessage('Email already exist!')
    seterror(true)
} else {
    saveTodatabase()
}

    }
    else{
        saveTodatabase()
    }

})})
} catch (error) {
    console.log('error=====>>>>>',error);
}
 }
   
    }
  return (
    <Container backgroundColor={AppTheme.tabBackGroundcolor} style={{backgroundColor:AppTheme.background}}>
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>

<ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.textview}>
    <ResponsiveText
                        color={AppTheme.textColorWhite}
                        size="h3"
                        fontWeight={'bold'}
                     
                    >
                        {'Create new account'}
                    </ResponsiveText>
    <ResponsiveText
                        color={AppTheme.txtgray}
                        size="h5"
                        marginTop={10}
                    
                     
                    >
                        {'Fill the form to become our member'}
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
        placeholder={'Full Name'}
  
        onrighticonpress={()=>setisshow(!isshow)}
      
        value={name}
        onChangeText={(text)=>{setname(text),seterror(false)}}
        placeholderTextColor={AppTheme.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
    </View>
    
    <View style={styles.inputview}>
        <InputField
        placeholder={'Email address'}
        value={email}
        keyboardType={'email-address'}
        onChangeText={(text)=>{setEmail(text),seterror(false)}}
        placeholderTextColor={AppTheme.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
    </View>
    {/* <View style={styles.inputview}>
        <InputField
        placeholder={'Phone number'}
   
        value={phoneno}
        onChangeText={(text)=>{seterror(false),setphoneno(text)}}
        placeholderTextColor={AppTheme.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
    </View> */}
    
    <View style={styles.inputview}>
        <InputField
        placeholder={'Password'}
        secureTextEntry={isshow}
        onrighticonpress={()=>setisshow(!isshow)}
        righticon={isshow?iconPath.showpassword:iconPath.hidepassword}
        value={password}
        onChangeText={(text)=>{seterror(false),setpassword(text)}}
        placeholderTextColor={AppTheme.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
    </View>
    <View style={styles.inputview}>
        <InputField
        placeholder={'Confirm password'}
        secureTextEntry={isshowconfirm}
        onrighticonpress={()=>setisshowconfirm(!isshowconfirm)}
        righticon={isshowconfirm?iconPath.showpassword:iconPath.hidepassword}
        value={confirmpassword}
        onChangeText={(text)=>{seterror(false),setconfirmpassword(text)}}
        placeholderTextColor={AppTheme.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
    </View>
    
    <View style={{alignItems:'center',alignSelf:'center',marginTop:hp(6)}}>
                   
                   <Button
                   title={'Create Account'}
                   onPress={()=>signupuser()}
                   />
    
                   <TouchableOpacity
                    onPress={()=>props.navigation.navigate('Login')}
                   style={styles.createacount}>
                    <ResponsiveText
                        color={AppTheme.txtgray}
                        size="h6"
               
                     
                    >
                        {'Already have an account?'}
    
                        <ResponsiveText
                        color={'#FF3F5E'}
                        size="h6"
                      
                     
                    >
                       {' '} {'Sign In'}
                    </ResponsiveText>
                    </ResponsiveText>
                   </TouchableOpacity>
                            
                                </View>
</ScrollView>
</TouchableWithoutFeedback>

       </Container>
  )
}



  const mapDispatchToProps = (dispatch) => {
    return {
        regisretuser: (data) => dispatch(regisretuser(data)),
    }
  }
  const mapStateToProps = (state) => {
    console.log('state===>>>', state)
    return {
        user: state.userdataReducer.user,
  
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Signup)


const styles = StyleSheet.create({
    logoview:{
        borderWidth:0,
        marginHorizontal:wp(6),
        alignContent:'center',
        justifyContent:'center',
        marginTop:hp(6)
    },
    createacount:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp(3)
    },
    errormessage:{
        marginHorizontal:wp(6)
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