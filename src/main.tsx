import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./components/header-section/Header.module.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/400-italic.css";
import "@fontsource/dm-sans/700-italic.css";
import "@fontsource/montserrat/700.css";


createRoot(document.getElementById("root")!).render(<App />);
