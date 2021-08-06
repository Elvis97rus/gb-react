import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {AppHooks} from "./app.hooks";

class Test extends React.Component {
    state = {
        isVisible: true,
    }

    toggle = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    render() {
        const { isVisible } = this.state

        return (
            <div>
                <button onClick={this.toggle}>toggle</button>
                {isVisible && <App toggle={this.toggle} />}
            </div>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <AppHooks />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
