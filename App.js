import React,{useEffect} from 'react';
import store from './src/store/index';
import {Provider} from 'react-redux';
import Main from './src/main/index';
import {StatusBar} from 'react-native'
const App = () => {
  useEffect(()=>{
    setTimeout(()=>{
        StatusBar.setBackgroundColor('#128c7e') 
    },1400)
    
},[])
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
export default App;
