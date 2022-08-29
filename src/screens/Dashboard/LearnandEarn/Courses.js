import React,{useState} from 'react';
import { View, StyleSheet ,FlatList,TouchableOpacity,Image,TextInput} from 'react-native';
import {Simpleheader,Container,iconPath,AppTheme} from '../../../components/index';
import { wp,hp} from '../../../FontResponsiveness/FontResponsiveness';
import {ScrollView} from 'react-native-virtualized-view';

const Courses = (props) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(props.route.params.Courses);
    const [masterDataSource, setMasterDataSource] = useState(props.route.params.Courses);
  
    const ListFooterComponent=({item,index})=>{
        return(
            <View style={{height:20,}}>
              
                        
                            </View>
        )
    }



  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
      console.log('jhhhjhhjhj', item.name);

        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log('jhhhjhhjhj', newData);
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
    const renderItem=({item,index})=>{
        console.log(item,'djlfdjflkdjfkljdl');
        return(
            <View style={styles.flatlistmainview}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Description',{item:item,title:item.name,blankimage:item.blankimage})}style={{borderWidth:0,alignItems:'center'}}>
                <Image source={item.image} style={styles.imagestyle} resizeMode='contain'/>

                </TouchableOpacity>
                        
                            </View>
        )
    }
    return (
        <Container backgroundColor={AppTheme.tabBackGroundcolor} style={{backgroundColor:AppTheme.background}}>
                <Simpleheader
                title={props.route.params.title}
                navigation={props.navigation}
                
                />
<View style={styles.inputview}>
<Image source={iconPath.search}style={styles.search} resizeMode='cover' />

<TextInput
                     placeholder="Search courses"
                     onChangeText={(text)=>searchFilterFunction(text)}
                       
                        value={search}
                      
                        width={wp(79)}
                        height={hp(6)}
                        paddingLeft={10}
                        placeholderTextColor={AppTheme.textColorWhite}
                        color={AppTheme.textColorWhite}
                      
                    />
</View>
            <ScrollView showsVerticalScrollIndicator={false} >
            
                <View style={{marginHorizontal:wp(3),marginTop:10}}>
  <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    ListFooterComponent={ListFooterComponent}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                
                />
                </View>
                </ScrollView>
        </Container>
    )
}

export default Courses;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: AppTheme.background
    },
    flatlistmainview:{
        borderWidth:0,alignItems:'center',justifyContent:'center',marginHorizontal:wp(1),marginTop:hp(1.5)
    },
    imagestyle:{width:wp(45),height:hp(25)},
    inputview:{ 
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:30,
        paddingLeft:15,
        marginTop:20,
        borderColor:AppTheme.bordercolor,
    backgroundColor:AppTheme.background,
    marginHorizontal:wp(5)
    },
    search: {
        width: wp(8),
        height: wp(8),
     
    },
});

