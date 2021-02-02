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
import {BigCard, SmallCard} from '../../../Shared/Component/Card/Card';
import {connect} from 'react-redux';
import {changeEmail, getGenres} from './Redux/Action';
import {logOut} from '../../Auth/Login/Redux/Action';
import Button from '../../../Shared/Component/Button';

function Home(props) {
  console.log(props, 'props from home');
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [active, setAactive] = useState(false);

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

  const expand = () => {
    setAactive(!active);
  };

  const LogOut = () => {
    props.logOut();
    props.navigation.navigate('Auth');
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
        <BigCard
          title="Wonder Woman 1984 "
          desc="Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
          genre="Thriller"
          image="https://image.tmdb.org/t/p/w500/srYya1ZlI97Au4jUYAktDe3avyA.jpg"
          poster="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
          year="1991"
          totalMessage={121}
          active={active}
          onPress={expand}
        />

        <Button onPress={LogOut} title="Logout" />
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
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
