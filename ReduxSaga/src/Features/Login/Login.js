import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';

// action redux
import {ActionLogin} from '../../Store/Action/ActionLogin';

const mapStateToProps = (state) => ({
  username: state.Login.username,
});

const mapDispatchToProps = {
  ActionLogin,
};

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    props.ActionLogin(username, password);
  };

  return (
    <View>
      <TextInput
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        placeholder="password"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={doLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
