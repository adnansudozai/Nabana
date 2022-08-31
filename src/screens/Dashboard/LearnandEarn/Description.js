import React,{useState} from 'react';
import { View, StyleSheet ,Platform,TouchableOpacity,Image} from 'react-native';
import {Button,ResponsiveText,Container,iconPath,AppTheme,Header} from '../../../components/index';
import { wp,hp} from '../../../FontResponsiveness/FontResponsiveness';
import {ScrollView} from 'react-native-virtualized-view';
import { useSwipe } from '../../../components/Useswipe';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import LottieView from 'lottie-react-native';

const Description = (props) => {

  const [totalnumberofcontent,settotalNumofcontent]=useState(props.route.params.item.content.length-1)
  const [conentindex,setconentindex]=useState(0)
  const [btnshow,setbtnshow]=useState(false)
  const [activeindex,setactiveindex]=useState(0)
 console.log('====================================');
 console.log(props.route.params.title);
 console.log('====================================');

  function onSwipeLeft(){
    console.log('SWIPE_LEFT')
    console.log('totalnumberofcontent next',totalnumberofcontent);
    if(totalnumberofcontent>=1){
     settotalNumofcontent(totalnumberofcontent-1)
    
     setconentindex(conentindex+1)
   
   }
    else{
    
     setbtnshow(true)
     console.log('Content Ended');
   }
}

function onSwipeRight(){
    console.log('SWIPE_RIGHT')
    console.log('totalnumberofcontent prev',totalnumberofcontent);

    if(conentindex>=1){
        settotalNumofcontent(totalnumberofcontent+1)

        console.log('before',conentindex);
        setconentindex(conentindex-1)
        console.log(conentindex);
    }
}
  const checkcontent=(index)=>{
     
    setactiveindex(index)
    
    console.log('totalnumberofcontent index',totalnumberofcontent);
       if(index==totalnumberofcontent){
              setbtnshow(true)

      
      }
       else{
       
        setbtnshow(false)
       
      }
    }
    


    const pagination= ()=> {

        return (
            <Pagination
              dotsLength={props.route.params.item.content.length}
              activeDotIndex={activeindex}
              containerStyle={{ alignItems:"center",borderWidth:0,width:wp(98),overflow:'scroll',justifyContent:"center",alignSelf:"center" }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                
              }}
            
            dotColor={'white'}
            inactiveDotColor={'#202253'}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
                  backgroundColor: 'red'
              }}
              inactiveDotOpacity={5.4}
              inactiveDotScale={0.4}
              animatedFriction={5}
            />
        );
    }


    const  _renderItem = ({item, index}) => {
  
        return (
            <View style={styles.flatlistmainview}>
           {item.heading?     
            <View style={styles.textview}>
            <ResponsiveText
                  color={AppTheme.textColorWhite}
                  size="h5"
                  fontWeight={'bold'}

                 
              >
                  {item.heading}
              </ResponsiveText>


            </View>
    :null}
            {item.pointHeading?
            <View style={{marginTop:10,borderWidth:0,alignItems:"center"}}>
           <ResponsiveText
                  color={AppTheme.textColorWhite}
                  size="h5"
                  fontWeight={'bold'}

                 
              >
                  {item.pointHeading}
              </ResponsiveText>
             
              </View>

            :null}
            {item.content &&(
            <View style={styles.contentview}>
         <Image source={iconPath.swapleft} style={styles.swapimage} resizeMode='contain'/>
<View style={{width:wp(80),borderWidth:0,alignItems:"center"}}>
            <ResponsiveText
                  color={AppTheme.textColorWhite}
                  size="h6"
                  lineHeight={20}
              >
                  {item.content}
              </ResponsiveText>
              </View>
              <Image source={iconPath.swapright} style={styles.swapimage} resizeMode='contain'/>

            </View>
  )}
           
         {item.blankimage?
         <View style={{borderWidth:0,marginVertical:2,alignItems:'center',marginTop:hp(10)}}>
         <Image source={item.blankimage} style={styles.imagestyle} resizeMode='contain'/>


         </View>
         :null}
         {item.lotijason ?
         <View style={{borderWidth:0,marginVertical:5,alignItems:'center',marginTop:hp(6)}}>
         
         <LottieView
              style={styles.lottieStyle}
              source={item.lotijason}
              autoPlay={true}
              loop={true}
              speed={2}
            />
         </View>
         :null}

                       
                          </View>
        );
    }
    return (
        <Container backgroundColor={AppTheme.tabBackGroundcolor} style={{backgroundColor:AppTheme.background}}>
        <Header
          navigation={props.navigation}/>
        {/* <FlatList
                    data={props.route.params.item.content[conentindex].descreption}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                
                
                /> */}
                  <Carousel
                data={props.route.params.item.content}

              renderItem={_renderItem}
              sliderWidth={wp(100)}
              itemWidth={wp(100)}
              loop={false}
              autoplay={false}
              onSnapToItem={(index) =>checkcontent(index)}
              
            />

            {!btnshow?pagination():null}
              
            {btnshow?
            <View style={{bottom:0,marginBottom:hp(2)}}>
               
               <Button
               title={'Quiz'}
               onPress={()=>props.navigation.navigate('Quiz',{
                Quiz:props.route.params.item.Quiz,
                category:props.route.params.category,
                coursename:props.route.params.title
               })}
               />
                        
                            </View>
                            :null}
                          
        </Container>
    )
}

export default Description;

const styles = StyleSheet.create({
    flatlistmainview:{borderWidth:0,marginHorizontal:wp(1),marginTop:hp(10)},
    textview:{borderWidth:0,marginTop:hp(1.5),alignItems:"center"},
    contentview:{borderWidth:0,marginTop:hp(1.5),alignItems:"center",flexDirection:'row',justifyContent:"space-between"},
    scrolview:{borderWidth:1,borderColor:'red',flex:1},
    nextpreviview:{borderWidth:0,marginHorizontal:wp(3)
    ,flexDirection:'row',justifyContent:'space-around',paddingVertical:5},
    aroow:{width:30,height:20},
    btnview:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    imagestyle:{width:wp(85),height:hp(28)},
    swap:{borderWidth:0,alignSelf:'center',borderColor:'red',position:'absolute',bottom:hp(50),flexDirection:'row',justifyContent:'space-between',width:wp(99)},
    swapimage:{width:35,height:35},
    lottieStyle:{
      width:wp(85),height:hp(28)
  
    
    }
});

