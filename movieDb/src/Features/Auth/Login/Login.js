import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../Shared/Component/Button';
import {GlobalStyles} from '../../../Shared/Style/GlobalStyle';
import {moderateScale} from 'react-native-size-matters';
import {ActionLogin, getListMenu} from './Redux/Action';
import {connect} from 'react-redux';
import Loading from '../../../Shared/Component/Loading/Loading';
import {setLoading} from '../../../Store/GlobalAction';
import FastImage from 'react-native-fast-image';
import {AuthStyle} from '../style';
import {LoginStyles} from './style';
import Roboto from '../../../Shared/Component/Roboto/Roboto';

function Login(props) {
  const {navigation} = props;
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validatePassword = (text) => {
    setPassword(text);
  };

  const validateUsername = (text) => {
    setUsername(text);
  };

  const moveToRegister = () => {
    navigation.navigate('Register');
  };

  const loginAction = () => {
    props.ActionLogin({
      email,
      password,
    });
  };

  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          contentContainerStyle={[GlobalStyles().flex]}
          style={GlobalStyles().paddingHorizontal}>
          {/* top Comp */}

          <View style={[GlobalStyles().flex, GlobalStyles().container]}>
            <FastImage
              source={require('../../../Assets/images/logo.png')}
              style={LoginStyles.image}
            />
            <Roboto title="Movie Review" />
          </View>
          {/* Center Comp */}
          <View style={[GlobalStyles().flex, GlobalStyles().container]}>
            <View>
              <TextInput
                onChangeText={(text) => validateUsername(text)}
                placeholder="Username"
                placeholderTextColor="white"
                style={LoginStyles.textInput}
              />
            </View>
            <View>
              <TextInput
                onChangeText={(text) => validatePassword(text)}
                placeholder="Password"
                placeholderTextColor="white"
                style={LoginStyles.textInput}
                secureTextEntry={true}
              />
            </View>
            <View style={LoginStyles.forgotPassword}>
              <Roboto title="Forgot Password ?" />
            </View>
          </View>
          {/* Bottom Comp */}
          <View
            style={[GlobalStyles().flex, GlobalStyles('flex-start').container]}>
            <Button onPress={loginAction} title="Login" />

            <View style={AuthStyle.Conditions}>
              <Roboto title="Don't have an account ?" />
              <TouchableOpacity onPress={moveToRegister}>
                <Roboto title=" Register" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.GlobalReducer.isLoading,
});

const mapDispatchToProps = {
  ActionLogin,
  getListMenu,
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
