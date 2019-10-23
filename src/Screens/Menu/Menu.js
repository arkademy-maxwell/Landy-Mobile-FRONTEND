import React from 'react';
import { Text, Container, Button } from 'native-base'
// import { styles } from './Home.style';

const Menu = props => {
    return (
        <Container>
            <Button full onPress={() => props.navigation.navigate('Registration')}>
                <Text>Primary</Text>
            </Button>
        </Container>
    )
}

export default Menu