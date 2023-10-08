import React, {Component} from "react";
import { Text, View } from "react-native";

class Detail extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
           <View style={{alignItems:'center', marginTop:30}}>
            <Text style={{fontSize:25, fontWeight:'600'}}>{this.props.route.params.nama}</Text>
            <Text>{this.props.route.params.umur}</Text>
           </View>
         );
    }
}
 
export default Detail;