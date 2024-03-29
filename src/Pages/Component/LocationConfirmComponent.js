import React,{Component} from 'react';

import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native';

class LocationConfirmComponent extends Component
{
    constructor(props)
    {
        super(props);
    }

    getvalue = (value) => {
        let itemvalue = [];
        for(let item in value)
        {
            itemvalue.push(value[item].count + " " + value[item].label);
        }

        return itemvalue.join(', ');
    }

    payment = () => {
        this.props.navigation.navigate('payment',{data:this.props.data});
    }

    render()
    {
        
        return(
            
                <View style={style.movecontainer}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={require('../../../img/icon/truck_success.png')} style={{width:hp('4.9%'),height:hp('3.71%')}}></Image>
                        <View style={{marginLeft:'auto',flexDirection:'row'}}>
                            <Text style={style.money}>R$</Text>
                            <Text style={style.amount}>1.000,00</Text>
                        </View>
                    </View>
                    <View style={{marginTop:hp('3%')}}>
                        <Text style={style.title}>{this.props.data.to}  </Text>
                    </View>
                    <View>
                        <Text style={style.datetext}>dia {this.props.data.date} </Text>
                    </View>
                    <View style={{marginTop:hp('1%'),flexDirection:'row',alignItems:'center'}}>
                        <Text style={style.locationtitle}>{this.props.data.from}</Text>
                        <Image source={require('../../../img/icon/placeholder.png')} style={{marginLeft:wp('2.8%'),width:hp('2.03%'),height:hp('2.03%')}}></Image>
                    </View>
                    <View>
                        <Text style={style.datetext}>Campo Belo</Text>
                    </View>
                    <View style={{flexDirection:'row',borderBottomColor:'#DEDEDE',borderBottomWidth:1,paddingBottom:13}}>
                        <Text style={style.datetext}>São Paulo/SP</Text>
                    </View>
                    <View style={{marginTop:13}}>
                        <Text style={{fontSize:hp('1.9%'),color:'#000'}}>Com os itens:</Text>
                        <Text style={{fontSize:hp('1.9%'),color:'#5666F9'}}>
                            {
                                this.getvalue(this.props.data.value)
                            }
                        </Text>
                    </View>
                    <View style={{marginTop:11}}>
                        <Text style={{fontSize:hp('1.9%'),color:'#000'}}>Solicitado:</Text>
                        <Text style={{fontSize:hp('1.9%'),color:'#5666F9'}}>
                            {this.props.data.box?this.props.data.box:0} caixas  
                        </Text>
                    </View>
                    <View style={{marginTop:11}}>
                        <Text style={{fontSize:hp('1.9%'),color:'#000'}}>Itens Frágeis</Text>
                        <Text style={{fontSize:hp('1.9%'),color:'#5666F9'}}>
                            {this.props.data.specialdata}
                        </Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#5160E9',paddingTop:hp('2.3%'),paddingBottom:hp('2.3%'),borderRadius:hp('0.54%'),marginTop:20}} onPress={this.payment}>
                        <Text style={{fontSize:hp('1.9%'),color:'#FFF',fontWeight:'bold',textAlign:'center'}}>IR PARA O PAGAMENTO</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

const style = StyleSheet.create({
   
    title:{
        fontSize:hp('2.4%'),
        fontWeight:'500',
        lineHeight:hp('2.8%')
    },
    state:{
        marginLeft:"auto",
        flexDirection:"row",
        alignItems:'center'
    },
    datetext:{
        color:'#939393',
        fontSize:hp('1.9%')
    },
    locationtitle:{
        color:'#939393',
        fontSize:hp('1.9%'),
        fontWeight:'bold'
    },
    movecontainer:{
        borderTopLeftRadius:wp('3.62%'),
        borderTopRightRadius:wp('3.6%'),
        paddingLeft:wp('5.8%'),
        paddingRight:wp('5.8%'),
        paddingTop:hp('2.7%'),
        paddingBottom:hp('2.7%'),
        backgroundColor:'#FFF',
        marginTop:6,
        marginLeft:wp('5.5%'),
        marginRight:wp('5.5%'),
        marginBottom:hp('2.41%')
    },
    money:{
        fontWeight:'500',
        fontSize:hp('1.63%'),
        lineHeight:hp('1.9%'),
        color:'#5666F9'
    },
    amount:{
        fontWeight:'500',
        fontSize:hp('2.99%'),
        lineHeight:hp('3.53%'),
        color:'#5666F9'
    }
})

export default LocationConfirmComponent;