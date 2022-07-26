import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createStore , configureStore } from "redux";
import { Provider } from "react-redux";
import firebase from "firebase/compat/app";
import { rootReducer } from "./reducers";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PostDetails from './PostDetails';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './SignIn';
import SignUp from './SignUp';
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const firebaseConfig = {
  apiKey: "AIzaSyB8sUUwuQibl10fCxV1cbGLbWoqAn2vaBo",
  authDomain: "guewelo.firebaseapp.com",
  projectId: "guewelo",
  storageBucket: "guewelo.appspot.com",
  messagingSenderId: "885765508070",
  appId: "1:885765508070:web:28b456e58cc902517ea427",
  measurementId: "G-DEJMLGCJSN"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()
const initialState = {};


const store = createStore(rootReducer, initialState);
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps} > 
    <Router>
    <NavBar />
      <Routes>
        <Route  path='/' element={ <App />} />
        <Route path='/post/:slug' element={<PostDetails />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  </ReactReduxFirebaseProvider> 
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
