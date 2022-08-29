import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Container from '../../../components/Container';
import { wp } from '../../../FontResponsiveness/FontResponsiveness';
import { CommonActions } from "@react-navigation/routers";
import { AppTheme } from '../../../theme/theme';
import { iconPath } from '../../../Constants/iconandImages';
import { connect } from "react-redux";

 const Splash = (props) => {
 console.log('splash===>>>>>>>>>',props);

 React.useEffect(() => {
  setTimeout(() => {

           
                props.navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Login'}],
                  }),
                );
           
            }, 3000);

          }, []);
    
          
    
  




    return (
        <Container backgroundColor={AppTheme.tabBackGroundcolor}>
            <View style={styles.mainContainer}>
                <Image source={iconPath.nabanaIcon} style={styles.splash} />
            </View>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
     
      isLogin: state.userdataReducer.isLogin,
      user: state.userdataReducer.user,
    }
  }

export default connect(mapStateToProps, null)(Splash)



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: AppTheme.background,
    },
    splash: {
        alignSelf: 'center',
        width: wp(60),
        height: wp(20),
        resizeMode: 'contain'
    },
});

