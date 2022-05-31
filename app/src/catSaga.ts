import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from './components/catSlice';

function* workGetCatsFetch(): any {
    const cats: any = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats = yield cats.json();
    const formatedCatsShortened = formattedCats.slice(0, 10);
    yield put(getCatsSuccess(formatedCatsShortened));
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

export default catSaga;