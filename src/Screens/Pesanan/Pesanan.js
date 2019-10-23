import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import { Text, Container,Content,Card,View } from 'native-base'
// import { styles } from './Home.style';
const WIDTH_DEVICE = Dimensions.get('window').width;
const Pesanan = props => {
    return (
        <Container>
            <Content style={{flex:1, backgroundColor:'#0180ef',}}>
                    <Text style={{color:'white',margin:25}}>Pesanan Saya</Text>
            <ScrollView style={{paddingHorizontal:10, flexDirection: 'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card style={{backgroundColor:'#00aeef',height:130, width: WIDTH_DEVICE - 140}}>
                        <Text style={{color:'white',margin:5}}>Belum ada Ticket dan Voucher Aktif Ticket atau Voucher yang telah terbit akan ditampilkan di sini</Text>
                    </Card>
                    <Card style={{backgroundColor:'#00aeef',height:130, width: WIDTH_DEVICE - 250}}>
                        <Text style={{color:'white',margin:5}}>Belum ada Ticket dan Voucher Aktif</Text>
                        <Text style={{color:'white',margin:5}}>Ticket atau Voucher yang telah terbit akan</Text>
                        <Text style={{color:'white',margin:5}}>ditampilkan di sini</Text>
                    </Card>     
            </ScrollView>
            </Content>
            <Content style={{backgroundColor:'white'}}>
                    <Text>Pesanan Saya</Text> 
            </Content>
            <Content style={{backgroundColor:'white'}}>
                    <Text>Pesanan Saya</Text> 
            </Content>
        </Container>
    )
}

export default Pesanan