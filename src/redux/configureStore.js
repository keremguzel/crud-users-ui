import {createStore} from "redux"
import authReducer from "./authReducer"

  const configureStore = () => {

    const mngAuth = localStorage.getItem("user-mng")

    let stateInLocalStorage = {
        isLoggedIn:false,
        username:undefined,
        password:undefined
    }

    if(mngAuth){
        stateInLocalStorage = JSON.parse(mngAuth)
    }

      const store = createStore(authReducer, stateInLocalStorage, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
      
      store.subscribe(() => { //to track difference
          localStorage.setItem("user-mng", JSON.stringify(store.getState()))
      })
      
      return store;
    }


  export default configureStore