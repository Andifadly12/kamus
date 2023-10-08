
import React, { Component }  from "react";
import {View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity, TextInput} from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        data:[
            {nama:'fadly', umur:18},
            {nama: 'ilmi', umur:20},
            {nama: 'inf', umur:32},
            {nama:'dasdf', umur:33}
        ],
        datatampilan:[
            {nama:'fadly', umur:18},
            {nama: 'ilmi', umur:20},
            {nama: 'inf', umur:32},
            {nama:'dasdf', umur:33}
        ],
        pencarian:''
     }
     pencarian =()=>{
        let data=this.state.data;
        data=data.filter((item)=>item.nama.toLowerCase().includes(this.state.pencarian));
        this.setState({datatampilan:data})
     }
    render() { 
        return ( 
            <View style={Style.content}>
                <StatusBar backgroundColor={"#1976d2"}/>
                <View style={Style.heladers}>
                    <Text style={{fontSize:20, color:'white', fontWeight:'500'}}>Home</Text>
                </View>
                <View>
                    <TextInput style={{borderWidth:1, 
                        backgroundColor:'white', 
                        marginHorizontal:20,
                        marginVertical:10,
                        borderRadius:10,
                        paddingHorizontal:15
                        }}
                        placeholder="Masukkan Pencarian"
                        value={this.state.pencarian}
                        onChangeText={(text)=>this.setState({pencarian:text}, ()=>this.pencarian())}
                    />
                </View>
                <View>
                    <FlatList 
                        data={this.state.datatampilan}
                        renderItem={({item, index})=>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail', {
                            nama:item.nama,
                            umur:item.umur
                        })}>
                            <View style={Style.items}>
                                <Text style={Style.texItemJ}>{item.nama}</Text>
                                <Text style={Style.texItems}>{item.umur}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item=>item.nama}
                    />
                </View>
            </View>
         );
    }
}

const Style=StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:'#4e342e'
    },
    heladers:{
        backgroundColor:'#1e88e5',
        paddingVertical:15,
        alignItems:'center',
        justifyContent:'center',
        elevation:4
    },
    items:{
        marginVertical:15,
        marginHorizontal:20,
        backgroundColor:'#42a5f5',
        paddingHorizontal:6,
        borderRadius:10,
        paddingVertical:10
    },
    texItemJ:{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },
    texItems:{
        color:'white',
        fontSize:12,
        fontWeight:'300'
    }
})
 
export default Home;