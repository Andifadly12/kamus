import React, {Component} from "react";
import { View, Text } from "react-native";
class Fadly extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <View><Text>{this.props.route.params.nama}</Text></View>
         );
    }
}
 
export default Fadly;