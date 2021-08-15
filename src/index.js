import React from 'react';
import ReactDOM from 'react-dom';
import {ChatBody} from "./app.hooks";
import { ThemeProvider, createTheme } from "@material-ui/core"

const theme = createTheme({
    dark: {
        color: "#000",
    },
    light: {
        color: "lightgray",
    },
})

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
            <ChatBody />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);