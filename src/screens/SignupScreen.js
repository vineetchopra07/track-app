import React , { useState } from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen  = ({ navigation }) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return(
    <View style={styles.container}>
    <Spacer>
    <Text h3>Signup Screen</Text>
    </Spacer>
    <Input 
    autoCapitalize="none"
    autoCorrect={false}
    label="Email"
    value={email}
    onChangeText={setEmail}
    />
    <Spacer/>
    <Input 
    secureTextEntry
    autoCapitalize="none"
    autoCorrect={false}
    label="Password"
    value={password}
    onChangeText={setPassword}
    />
    <Spacer>
        <Button title="Signup"/>
    </Spacer>
    </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles  = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:250
    }
});

export default SignupScreen;