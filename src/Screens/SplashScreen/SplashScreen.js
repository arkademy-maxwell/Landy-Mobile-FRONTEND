import React from 'react';
// import { styles } from './SplashScreen.style';
import { Text, Button, Container } from 'native-base'

const SplashScreen = props => {
    return (
        <Container>
            <Text>Example</Text>
            <Button onPress={() => props.navigation.navigate('Home')}><Text>Masuk</Text></Button>
        </Container>
    )
}


export default SplashScreen
