import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {GlobalStyles} from '../../../Shared/Style/GlobalStyle';
import {getListMenu} from './Redux/Action';
import {SearchBar} from 'react-native-elements';
import {HomeStyles} from './style';
import Roboto from '../../../Shared/Component/Roboto/Roboto';
import {SmallCard} from '../../../Shared/Component/Card/Card';
import {connect} from 'react-redux';
import {changeEmail, getGenres} from './Redux/Action';

function Home(props) {
  console.log(props, 'props from home');
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    console.log(search);
    setSearch({search});
  };

  useEffect(() => {
    props.getGenres();
  }, []);

  const updateEmail = (Email) => {
    props.changeEmail(Email);
  };

  return (
    <>
      <SearchBar
        placeholder="Search Movie"
        inputContainerStyle={HomeStyles.inputStyle}
        containerStyle={HomeStyles.inputContainer}
      />
      <ScrollView
        style={GlobalStyles().paddingHorizontal}
        contentContainerStyle={GlobalStyles().flex}>
        {/* Genre List */}
        <View>
          <View
            style={[
              HomeStyles.GenreListDesc,
              GlobalStyles('space-between').container,
            ]}>
            <Roboto title="Best Genre" type="ExtraBold" size={16} />
            <TouchableOpacity activeOpacity={0.8}>
              <Roboto title="More >>" />
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={props.listGenres}
            renderItem={({item}) => {
              console.log(item);
              return <SmallCard key={`${item.id}`} title={item.name} />;
            }}
          />
        </View>
        <Text style={{color: 'white'}}>{props.email}</Text>
      </ScrollView>
    </>
  );
}

const mapStateToProps = (state) => ({
  listMenu: state.HomeReducer.listMenu,
  token: state.LoginReducer.token,
  email: state.LoginReducer.email,
  listGenres: state.HomeReducer.listGenres,
});

const mapDispatchToProps = {
  getListMenu,
  changeEmail,
  getGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
