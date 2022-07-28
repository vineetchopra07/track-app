import React , {useContext} from 'react';
import {StyleSheet,Text} from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen  = () => {
    const {signout} = useContext(AuthContext);

    return (
    <SafeAreaView forceInset={{top:'always'}}>
    <Text style={{fontSize:48}}>Account Screen</Text>
    <Spacer>
    <Button title="Sign Out" onPress={signout}/>
    </Spacer>
    </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title:'Account',
    tabBarIcon:<FontAwesome name='plus' size={20}/>
  }; 

const styles  = StyleSheet.create({});

export default AccountScreen;