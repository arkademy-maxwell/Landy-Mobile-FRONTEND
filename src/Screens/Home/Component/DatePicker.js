// import React, {Component, useState, useEffect} from 'react';
// import {
//   Container,
//   Header,
//   Content,
//   DatePicker,
//   Text,
//   Left,
//   Button,
//   Right,
//   Body,
//   Icon,
//   Title,
// } from 'native-base';
// import transformer from 'babel-jest';

// class DatePickers extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {chosenDate: new Date()};
//     this.setDate = this.setDate.bind(this);
//   }
//   setDate(newDate) {
//     this.setState({chosenDate: newDate});
//   }
//   render() {
//     return (
//       <Container>
//         <Header style={{backgroundColor: '#0185EF'}}>
//           <Left>
//             <Button transparent onPress={() => this.props.navigation.goBack()}>
//               <Icon name="close" />
//             </Button>
//           </Left>
//           <Body>
//             <Title style={{fontSize: 18}}>Tanggal Berangkat</Title>
//           </Body>
//         </Header>
//         <Content>
//           <DatePicker
//             defaultDate={new Date(2019, 4, 4)}
//             minimumDate={new Date(2018, 1, 1)}
//             maximumDate={new Date(2018, 12, 31)}
//             locale={'ID'}
//             timeZoneOffsetInMinutes={undefined}
//             modalTransparent={false}
//             animationType={'none'}
//             androidMode={'default'}
//             placeHolderText="Select date"
//             textStyle={{color: '#fff'}}
//             placeHolderTextStyle={{color: '#fff'}}
//             onDateChange={this.setDate}
//           />
//           <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text>
//         </Content>
//       </Container>
//     );
//   }
// }
// export default DatePickers;
