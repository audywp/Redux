import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../Shared/Component/Button';
import {GlobalStyles} from '../../../Shared/Style/GlobalStyle';
import {moderateScale} from 'react-native-size-matters';
import {ActionLogin, getListMenu} from './Redux/Action';
import {connect} from 'react-redux';
import Loading from '../../../Shared/Component/Loading/Loading';
import {setLoading} from '../../../Store/GlobalAction';

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
        <ScrollView style={[GlobalStyles().flex]}>
          {/* top Comp */}

          <View style={GlobalStyles().flex}>
            <Text>RN Class</Text>
          </View>
          {/* Center Comp */}
          <View style={[GlobalStyles().flex, GlobalStyles().container]}>
            <View>
              <TextInput
                onChangeText={(text) => validateUsername(text)}
                placeholder="Username"
              />
            </View>
            <View>
              <TextInput
                onChangeText={(text) => validatePassword(text)}
                placeholder="Password"
              />
            </View>
            <Button onPress={loginAction} title="Login" />
            <TouchableOpacity
              onPress={moveToRegister}
              style={{marginTop: moderateScale(20)}}>
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
          {/* Bottom Comp */}
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
