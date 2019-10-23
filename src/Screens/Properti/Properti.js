import React from 'react'
import { Container, Content, View, Text, Grid, Col, Row } from 'native-base'
import {TouchableOpacity} from 'react-native'
import Header from '../../Components/Header/parent/Header'
import LinearGradient from 'react-native-linear-gradient';

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
            </Content>
        </Container>
    )
}

export default Properti