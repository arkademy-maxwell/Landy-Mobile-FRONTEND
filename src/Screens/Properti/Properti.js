import React from 'react';
import {Container, Content, View, Text, Grid, Col, Row} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Header from '../../Components/Header/parent/Header';
import LinearGradient from 'react-native-linear-gradient';
import promo from '../../Assets/Images/promo.png';
import Styles from './Properti.style';

const Properti = props => {
  return (
    <Container>
      <Header icon="close" />
      <Content>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#013c64', '#008bbf']}>
          <Grid>
            <Col>
              <Text>Airy</Text>
            </Col>
            <Col>
              <Grid>
                <Row>
                  <Col></Col>
                  <Col>
                    <Text>08874573687</Text>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <Text>partner@landy.com</Text>
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Grid>
        </LinearGradient>
      </Content>
    </Container>
  );
};

export default Properti;
