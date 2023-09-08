// import typescriptLogo from "./typescript.svg";
import { Component, xml } from "@odoo/owl";
import { Roots } from "./components/firstInputField";
import { Task } from "./components/taskInputField";
import { AddBut } from "./components/AddButton";
//import { AutoCompleteInput } from "./components/AutoCompleteInput";

const ROOT_TEMPLATE = xml/*xml*/ `
<Roots/>
  


`;

export class Root extends Component {
  static template =  ROOT_TEMPLATE ;
  static components = { Roots, Task, AddBut};


}
