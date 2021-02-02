import {Alert} from 'react-native';
import {all, takeLatest, put, call} from 'redux-saga/effects';
import {GET_MENU, setListMenu, GET_GENRES, setListGenres} from './Action';
import axios from 'axios';

import {request} from '../../../../Helpers/Api';
import {endpointBarengan} from '../../../Auth/Login/endPoint';
import {URL_MOVIE, API_KEY} from '../../../../Shared/Utils/Config';
import {genreList} from '../endPoint';

function* getSagaGenres({payload}) {
  // https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>

  try {
    const result = yield axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=781eb13279207d3b00115859616b4710$`,
    );
    yield put(setListGenres(result.data.genres.slice(0, 10)));
  } catch (error) {
    console.log(error);
  }
}

export const HomeSaga = function* () {
  yield takeLatest(GET_GENRES, getSagaGenres);
};
