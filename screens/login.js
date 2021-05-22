import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import * as firebase from "firebase";


export default class loginscreen extends React.Component {
    constructor(){
        super();

        this.state={
            emailid:'',
            password:'',
                    }
    }
    login=async(email,password)=>{
        if(email && password){
            try {
                const response=await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    this.props.navigation.navigate('Transaction')
                }
            }
catch(error){
    switch(error.code){
        case 'auth/user-not-found':
            alert("user dosent exsist")
            break
            case 'auth/invalid-email':
            alert('incorrect email or password')
            break
    }
}
        }else {
            alert ('enter email or password')
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style ={{alignItems:'center',marginTop:20}}>
<View>
    <Image source={require("../booklogo.jpg")
     }style={{width:200,height:200}}
    />
    <Text style={{textAlign:'justify',fontSize:30}}>WILY</Text>
</View>
<View>
    <TextInput 
    style={styles .loginbox}
    placeholder="abc@gmail.com"
    keyboardType='email-address'

    onChangeText={(Text)=>{
        this.setState({
            emailid:text
        })
    }}
    />
       <TextInput 
    style={styles .loginbox}
    secureTextEntry={true}
    placeholder="ENTER PASSWORD"
    

    onChangeText={(Text)=>{
        this.setState({
            password:text
        })
    }}
    />
</View>
<View>
    <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
    onPress={()=>{
        this.login(this.state.emailid,this.state.password)
    }}>

<Text style={{textAlign:'center'}}>LOGIN</Text>
    </TouchableOpacity>
</View>
            </KeyboardAvoidingView>
        )
    }
}
const styles=StyleSheet.create({
    loginbox:{
        width:300,
        height:40,
        borderWidth:2.5,
        fontSize:20,
        margin:10,
        paddingleft:10,

    }
})