import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../Shared/Component/Button';
import {GlobalStyles} from '../../../Shared/Style/GlobalStyle';
import FastImage from 'react-native-fast-image';
import {AuthStyle} from '../style';
import {RegisterStyles} from './style';
import Roboto from '../../../Shared/Component/Roboto/Roboto';
import {Badge} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Register(props) {
  const moveToLogin = () => {
    props.navigation.navigate('Login');
  };
  return (
    <ScrollView
      contentContainerStyle={[GlobalStyles().flex]}
      style={GlobalStyles().paddingHorizontal}>
      {/* top Comp */}

      <View style={[GlobalStyles().flex, GlobalStyles().container]}>
        <View>
          <FastImage
            source={require('../../../Assets/images/profile.png')}
            style={RegisterStyles.image}
          />
          <Badge
            status="success"
            size="large"
            containerStyle={{
              position: 'absolute',
              bottom: 4,
              right: 8,
            }}
            Component={() => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[RegisterStyles.BadgeStyle, GlobalStyles().container]}>
                <MaterialCommunityIcons
                  name="lead-pencil"
                  size={moderateScale(14)}
                  color="white"
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <Roboto title="Movie Review" />
      </View>
      {/* Center Comp */}
      <View style={[GlobalStyles().flex, GlobalStyles().container]}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="white"
          style={RegisterStyles.textInput}
        />

        <TextInput
          placeholder="Username"
          placeholderTextColor="white"
          style={RegisterStyles.textInput}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="white"
          style={RegisterStyles.textInput}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          style={RegisterStyles.textInput}
          secureTextEntry={true}
        />
      </View>
      {/* Bottom Comp */}
      <View style={[GlobalStyles().flex, GlobalStyles().container]}>
        <Button title="Login" />
        <View style={AuthStyle.Conditions}>
          <Roboto title="Already have an account ?" />
          <TouchableOpacity onPress={moveToLogin}>
            <Roboto title=" Login" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
