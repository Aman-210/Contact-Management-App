import { createStore , } from "redux";

import {composeWithDevTools} from 'redux-devtools-extension'
import ContactReducer from "../Reducers/Reduser";


 const  store = createStore(ContactReducer, composeWithDevTools() )
 export default store; 