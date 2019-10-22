import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native'
import {
    Container, Content, Card, Button, Segment, Text, View,
    CardItem, Thumbnail
} from 'native-base';
import promo from '../../../Assets/Images/promo.png'
import Styles from './HeaderBanner.style'
const Home = props => {
    return (

        <Content>
            {/* <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}> */}

            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                <ScrollView
                    scrollEventThrottle={16} pagingEnabled={false}  >
                    <View style={{ flex: 1 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Card style={Styles.CardCover}>
                                <Image style={Styles.cardImage} source={promo} />
                            </Card>
                            <Card style={Styles.CardCover}>
                                <Image style={Styles.cardImage} source={promo} />
                            </Card>
                            <Card style={Styles.CardCover}>
                                <Image style={Styles.cardImage} source={promo} />
                            </Card>
                        </ScrollView>
                    </View>
                </ScrollView>

            </ScrollView>


            {/* <Card>
                    <Image style={{ width: 390, height: 200 }} source={promo} />
                </Card>
                <Card>
                    <Image style={{ width: 390, height: 200 }} source={promo} />
                </Card>
                <Card>
                    <Image style={{ width: 390, height: 200 }} source={promo} />
                </Card>
                <Card>
                    <Image style={{ width: 390, height: 200 }} source={promo} />
                </Card>
            </ScrollView> */}

        </Content>
    )

}

export default Home