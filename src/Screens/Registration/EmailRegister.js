import React from 'react'
import { Container, Content, View, Text } from 'native-base'
import Header from '../../Components/Header/parent/Header'

const EmailLogin = props => {
    return (
        <>
            <Container>
                <Header name="Daftar" icon="" />
                <Content>
                    <View>
                        <Text>Email Dafatar</Text>
                    </View>
                </Content>
            </Container>
        </>
    )
}
export default EmailLogin