import React from 'react'
import { 
    Container, 
    Content,
    View, 
    Text,
    Grid,
    Col,
    Row,
    Card
} from 'native-base'
import { 
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native'
import Header from '../../Components/Header/parent/Header'
import LinearGradient from 'react-native-linear-gradient';
import promo from '../../Assets/Images/promo.png'
import Styles from './Properti.style'

const Properti = props => {
    return (
        <Container>
        <Header icon="close"/>
            <Content>
            <LinearGradient colors={['#013c64', '#1a8cb5',]} style={Styles.linearGradient}>
                <Grid >
                    <Col>
                        <Text>Airy</Text>
                    </Col>
                    <Col>
                        <Grid>
                            <Row>
                                <Text>08874573687</Text>
                            </Row>
                            <Row>
                            <Text>partner@landy.com</Text>
                            </Row>
                        </Grid>
                    </Col>
                </Grid>
                </LinearGradient>
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
            </Content>
        </Container>
    )
}

export default Properti