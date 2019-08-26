import { call, put, takeLatest } from "redux-saga/effects";
import { systemSuccess, systemFailure } from "./actions";
import * as service from "./services";

import { PokemonTypes } from "./types";


export function* watchGetPokemon() {
   yield takeLatest(PokemonTypes.SYSTEM, getPokemon )
}

export function* getPokemon(action) {
	try {
		const response = yield call(service.getSystem);
		console.log("Try:", response)
		return yield put(systemSuccess(response));
	} catch (error) {
		console.log("Error:", error)
		return yield put(systemFailure(error.message));
	}
}
