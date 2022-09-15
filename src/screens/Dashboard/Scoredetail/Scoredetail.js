import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Simpleheader, Container, iconPath, AppTheme, ResponsiveText } from '../../../components/index';
import { wp, hp } from '../../../FontResponsiveness/FontResponsiveness';
import { ScrollView } from 'react-native-virtualized-view';
import NavigationBar from 'react-native-navbar-color';
const Scoredetail = (props) => {
    return (
        <Container backgroundColor={AppTheme.tabBackGroundcolor} style={{ backgroundColor: AppTheme.background }}>
            <Simpleheader
                title={'Balance'}
                navigation={props.navigation}

            />

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.scoreimageview}>

                    <Image source={iconPath.Scorebackground} style={styles.scoreimage} resizeMode='contain' />

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



                            <View style={{ }}>
                                <ResponsiveText
                                    color={AppTheme.textColorWhite}
                                    size="h5"
                                    marginLeft={6}

                                >
                                    {'    Points'} /
                                </ResponsiveText>
                                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'flex-end' }}>
                                    <Image source={iconPath.nabanatoken} style={styles.nabanatoken} resizeMode='contain' />
                                    <ResponsiveText
                                        color={AppTheme.textColorWhite}
                                        size="h5"


                                    >
                                        {props.route.params.nabanascore} /
                                    </ResponsiveText>
                                </View>
                            </View>
                            <View style={{ borderWidth: 0 }}>
                                <ResponsiveText
                                    color={AppTheme.textColorWhite}
                                    size="h5"
                                >
                                    {' ' + 'USD'}
                                </ResponsiveText>
                                <ResponsiveText
                                    color={AppTheme.textColorWhite}
                                    size="h5"
                                >
                                    {` $${props.route.params.dolorscore}`}
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
                        {'You can stake your Nabana Tokens and earn daily interest on your tokens (currently 354% APY). Staking simply means keeping them in your wallet.'}
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
                        {'You are always free to sell your Nabana tokens.  You can also send them to family and friends who can hold them, sell them or send them to others as well.You can also send Nabana Tokens to anyone with a compatible Binance Smart Chain wallet.Replace the latin default language  with this above.'}
                    </ResponsiveText>
                </View>

            </ScrollView>
        </Container>
    )
}

export default Scoredetail;

const styles = StyleSheet.create({
    scoreimageview: { borderWidth: 0, marginTop: hp(5), marginHorizontal: wp(5), alignItems: "center" },
    scoreimage: { width: wp(88), height: hp(15) },
    nabanatoken: { width: wp(5), height: wp(5), borderWidth: 0, alignSelf: 'center' },
    insideview: { position: 'absolute', borderWidth: 0, alignSelf: 'center', alignItems: 'center', top: hp(3) },
    nabanascore: { flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 5, },
    textview: { borderWidth: 0, marginTop: hp(4), marginHorizontal: wp(5) }
});

