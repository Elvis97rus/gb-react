import {createElement, Component} from "react";
import "./app.css";
import styles from "./app.module.css";

export function Message(props) {
  return (
    <div className='App'>
      <header className="App-header">
          {props.text}
      </header>
    </div>
  );
}
export function App(props) {
  return (
    <div className={styles.app}>
      <header className="App-header">
          {props.render}
      </header>
    </div>
  );
}
// export function App(props) {
//   return (
//     <div className={styles.app}>
//       <header onClick={props.handleClick} className="App-header">
//         Hello from the other side :3 {props.user.name}
//       </header>
//         {props.children}
//     </div>
//   );
// }

export const AppWithoutJSX = () => createElement(
    "div" ,
    {className: "App"},
    createElement("header",
        {className: "App -header"}, "hello W/o JSX")
    );

export class AppClass extends Component {
  constructor(props) {
      super(props);
      // console.log(props);
  }

  render() {
      return (
          <div className="app">
              <header onClick={this.props.handleClick} className="App-header">
                  Hello Class :3 {this.props.user.name}
              </header>
          </div>
      );
  }
}