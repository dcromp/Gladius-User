import React from "react";
import ReactDOMClient from "react-dom/client";
import { ItemsOwnedUsed } from "./screens/ItemsOwnedUsed";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ItemsOwnedUsed />);
