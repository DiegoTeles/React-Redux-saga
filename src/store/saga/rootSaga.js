import { all, fork, take } from "redux-saga/effects";
import { watchGetPokemon } from './systems/sagas';


export default function* rootSaga() {
  return yield all([watchGetPokemon()
  ]);
}
