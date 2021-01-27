import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Login from '../Login/Login';
import {connect} from 'react-redux';
import {ActionLogout} from './action';

const mapStateToProps = (state) => ({
  isLogged: state.LoginReducer.isLogged,
});

const mapDispatchToProps = {
  ActionLogout,
};

function Home(props) {
  const logout = () => {
    props.ActionLogout();
  };

  return (
    <React.Fragment>
      {props.isLogged ? (
        <>
          <TouchableOpacity>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Login />
      )}
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
