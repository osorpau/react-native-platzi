import { createStore } from 'redux'
import reducer from './reducer/videos-reducer';

const store = createStore(reducer, {
    videos:'platzi'
});
export default store;
