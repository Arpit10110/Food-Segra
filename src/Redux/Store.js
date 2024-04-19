import {configureStore} from "@reduxjs/toolkit"
import { LocalStorage } from "./Reducer"
const store= configureStore({
    reducer:{
        Local:LocalStorage
    }
})
export default store