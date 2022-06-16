import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./compornent/router/ScrollTotop";
import { Router } from "./compornent/router/Router";
import {Header} from "./compornent/header/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

const theme = createTheme(
  {
    typography: {
      fontFamily: [
        "Noto Sans JP",
        "Lato",
        "游ゴシック Medium",
        "游ゴシック体",
        "Yu Gothic Medium",
        "YuGothic",
        "ヒラギノ角ゴ ProN",
        "Hiragino Kaku Gothic ProN",
        "メイリオ",
        "Meiryo",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
        "sans-serif",
      ].join(","),
      button: {
        textTransform: "none",
        //  fontWeight: "bold",
        fontSize: 12,
        height: 28,
      },
    },
    palette: {
      primary: {
        light: "#003D69",
        main: "#003D69",
        dark: "#003D69",
        contrastText: "#FFFFFF",
      },
    },
    mixins: {
      toolbar: {
        minHeight: 45,
        maxHeight: 45,
      },
    },
  },

);


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ScrollToTop />
      <Header>
        <Router />
      </Header>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
