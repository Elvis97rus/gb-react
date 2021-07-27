import React from 'react';
import ReactDOM from 'react-dom';
import {App, AppClass, AppWithoutJSX, Message} from './App';

const user = {name: 'test'}
const handleClick = () => console.log('click');

ReactDOM.render(
  <React.StrictMode>
    {/*<App user={user} handleClick={handleClick}>*/}
    {/*    <h1>*/}
    {/*        childrenApp*/}
    {/*    </h1>*/}
    {/*</App>*/}
    <App render={<Message text={'newTextForMsg'}/>}/>
    <AppClass user={user} handleClick={handleClick} />
    <AppWithoutJSX />
    <Message text={'MESSAGE_TEXT'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
