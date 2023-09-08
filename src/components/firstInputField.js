import { Component, useState, xml } from "@odoo/owl";
import { Task } from "./taskInputField";
import { AddBut } from "./AddButton";
const first_input_field = xml/*xml*/ `
    <div class="m-0 p-4 bg-white rounded">
      <div class="input-group-lg bg-white rounded border d-flex w-100 align-items-center">
        <input type="name" class="form-control-lg fs-5 flex-fill border-0" placeholder="Add your new task" aria-label="Add your new task" id="name" name="name" aria-describedby="button-addon2" t-att-value="state.name" t-model="state.name"/>
        <input type="color" class="form-control-lg border-0 bg-white m-0 form-control-color" id="color" title="Choose your color" t-att-value="state.color" t-model="state.color"/>
        <AddBut addTaskInList.bind="addTask" />
      </div>
      
      <ul class="tasks d-flex flex-column p-0 mt-5">
        <t t-foreach="tasks" t-as="task" t-key="task.id">
          <Task task="task" onDelete.bind="deleteTask" onEdit.bind="editTask"/>
        </t>
      </ul>
    </div>
    `;
    //t-on-click="addTask"
// use to add sub component
export class Roots extends Component {
  static template = first_input_field;
  static components = { Task, AddBut };
  
  setup() {
    this.state = useState({
      name: "",
      color: "#FFF700",
      isCompleted: false,
      isEditing: false,
    });

    this.tasks = useState([]);
  }
  // function to add task
  // addTask() {
  //   this.props.addTask(this.props.task);
  //   // console.log(this.props.task,"hola")
  // }



  addTask() {
    // do not allow empty task name
    if (!this.state.name) {
      alert("Please add task.");
      return;
    }
    console.log("hello")
    // add unique id
    const id = Math.random().toString().substring(2, 12);
    // add new task
    this.tasks.push({
      id,
      name: this.state.name,
      color: this.state.color,
      isCompleted: this.state.isCompleted,
      
    });
       
    // reset states after saving
    let state = this.state;
    this.state = { ...state, name: "", color: "#FFF700" };

  }


  // delete task
  deleteTask(task) {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks.splice(index, 1);
  }

  //edit task
  editTask(ta) {
    const index = this.tasks.findIndex((tasks) => tasks.id === ta.id);
    this.tasks.splice(index, 1, ta);
  }
}
