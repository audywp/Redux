import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../Shared/Component/Button';
import {GlobalStyles} from '../../../Shared/Style/GlobalStyle';

export default function Register() {
  return (
    <ScrollView style={[GlobalStyles().flex]}>
      {/* top Comp */}
      <Text>RN Class</Text>
      {/* Center Comp */}
      <View>
        <View>
          <TextInput placeholder="Full Name" />
        </View>
        <View>
          <TextInput placeholder="Email" />
        </View>
        <View>
          <TextInput placeholder="Username" />
        </View>
        <View>
          <TextInput placeholder="Password" />
        </View>
        <View>
          <TextInput placeholder="Phone" />
        </View>
        <Button title="Register" />
      </View>
      {/* Bottom Comp */}
    </ScrollView>
  );
}
