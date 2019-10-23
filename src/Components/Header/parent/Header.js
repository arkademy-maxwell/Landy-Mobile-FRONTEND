import React from 'react'
import { View, Icon, Text } from 'native-base'
import styles from './Header.style'
const Header = props => {
    return (
        <View style={styles.nav}>
            <Icon
                name={props.icon}
                style={styles.iconNav}
                onPress={() => props.navigation.goBack()}
            />
            <Text style={styles.title}>{props.menu}</Text>
        </View>
    )
}

export default Header