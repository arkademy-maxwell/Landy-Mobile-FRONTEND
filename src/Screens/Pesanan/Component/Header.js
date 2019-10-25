import React from 'react';
import {View, Text, Grid, Col, Row, Header} from 'native-base';
import {ScrollView} from 'react-native';
import Styles from './Header.styles';
const HeaderDotted = props => {
  return (
    <Header style={{backgroundColor: '#017fef', elevation: 0}}>
      <ScrollView scrollEventThrottle={16}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Grid>
            <Row>
              <Col style={{width: 100}}>
                <Row style={{alignItems: 'center'}}>
                  <Col>
                    <View style={Styles.dottedActive}>
                      <Text style={Styles.number}>1</Text>
                    </View>
                  </Col>
                  <Col>
                    <Text style={Styles.noticeActive}>PESAN</Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Col>
                  <Row style={{alignItems: 'center'}}>
                    <Col size={1}>
                      <View style={Styles.dotted}>
                        <Text style={Styles.number}>3</Text>
                      </View>
                    </Col>
                    <Col style={{paddingLeft: 20, paddingRight: 20}}>
                      <Text style={Styles.notice}>KONFIRMASI</Text>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col>
                <Col style={{width: 100}}>
                  <Row style={{alignItems: 'center'}}>
                    <Col>
                      <View style={Styles.dotted}>
                        <Text style={Styles.number}>3</Text>
                      </View>
                    </Col>
                    <Col>
                      <Text style={Styles.notice}>BAYAR</Text>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col>
                <Col style={{width: 100}}>
                  <Row style={{alignItems: 'center'}}>
                    <Col>
                      <View style={Styles.dotted}>
                        <Text style={Styles.number}>4</Text>
                      </View>
                    </Col>
                    <Col>
                      <Text style={Styles.notice}>SELESAI</Text>
                    </Col>
                  </Row>
                </Col>
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </ScrollView>
    </Header>
  );
};

export default HeaderDotted;
