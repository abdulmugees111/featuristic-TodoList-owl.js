import "./index.css";
import { App } from "@odoo/owl";
import { Root } from "./Root";
// import {mount} from "@odoo/owl"


 const app = new App(Root, { dev: true });
 app.mount(document.getElementById("app"), {});

//mount(Root, document.getElementById("app"));