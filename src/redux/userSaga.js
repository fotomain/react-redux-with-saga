import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {userActions} from "./userSlice.js";

///saga-2
function* workUserDataFetch() {
    try {
        const response = yield call(axios.get, 'https://api.thecatapi.com/v1/breeds');
        const cats = response.data;

        ///saga-3
        // Add the image URL to each cat object
        const catsWithImages = cats.map(cat => ({
            ...cat,
            url: `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
        }));

        const shortenedCats = catsWithImages.slice(0, 10);

        console.log("███████ shortenedCats",shortenedCats)

        ///saga-8
        yield put(userActions.getDataSuccess(shortenedCats));
    } catch (error) {
        console.error('Error fetching cats:', error);
        // You can also dispatch a failure action here if you have one
    }
}

function* userSaga() {

    console.log("███████████ here 1")
    ///saga-1-1
    yield takeEvery(userActions.getData, workUserDataFetch);
}

///saga-1-2
export default userSaga;
