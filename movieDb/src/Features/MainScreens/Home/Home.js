import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {getListMenu} from './Redux/Action';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function Home(props) {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    wait(1).then(() => {
      setRefreshing(false);
    });
  };

  const renderItem = ({item}) => {
    return <Text>{item.id}</Text>;
  };

  return (
    <View>
      <FlatList
        onRefresh={onRefresh}
        refreshing={refreshing}
        data={props.listMenu.length && props.listMenu}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        maxToRenderPerBatch={2}
        initialNumToRender={2}
      />
    </View>
  );
}

const mapStateToProps = (state) => ({
  listMenu: state.HomeReducer.listMenu,
});

const mapDispatchToProps = {
  getListMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
