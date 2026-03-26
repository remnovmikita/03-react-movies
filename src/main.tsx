import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";


createRoot(document.querySelector("#root") as HTMLDivElement).render(
<React.StrictMode>
<App />
</React.StrictMode>
)