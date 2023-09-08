// import { Component, mount, xml, useState } from "@odoo/owl";

// class Task extends Component {
//   static template = xml`
    
//     <li t-attf-style="background-color:#{state.color}" class="d-flex align-items-center justify-content-between border-bottom p-3 border rounded mb-2">
//       <div t-if="state.isEditing" class="d-flex align-items-center flex-grow-1 me-2">
//         <input t-ref="text1" t-model="state.name" class="form-control me-2"/>
//         <input style="width:60px" type="color" class="form-control-lg border-0 bg-white m-0 form-control-color" id="color" t-att-value="state.color" t-model="state.color" title="Choose your color"/>
//       </div>
//       <div t-if="!state.isEditing" class="form-check form-switch fs-5 name-dark">
//         <input class="form-check-input" type="checkbox" value="" role="switch" t-att-id="state.id" 
//         t-att-checked="state.isCompleted" t-on-click="toggleTask"/>
//         <label t-att-for="state.id" 
//           t-attf-class="#{state.isCompleted ? 'text-decoration-line-through':''}">
//           <t t-esc="state.name"/>
//         </label>
//       </div>
//       <div>
//         <button t-if="!state.isEditing" class="btn btn-primary me-2" t-on-click="editTask">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
//         <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
//       </svg>
//         </button>
//         <button t-if="state.isEditing" class="btn btn-primary me-2" t-on-click="saveTask">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
//         <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
//       </svg>
//         </button>
//         <button class="btn btn-danger" t-on-click="deleteTask"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
//   <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
// </svg></button>
//       </div>
//     </li>
//     `;

//   // use to get the states from parent component
//   static props = ["task", "onDelete", "onEdit"];

//   // initialize our state based on parent states
//   setup() {
//     this.state = useState({
//       isEditing: false,
//       name: this.props.task.name,
//       id: this.props.task.id,
//       isCompleted: this.props.task.isCompleted,
//       color: this.props.task.color,
//     });
//   }

//   // toggle task
//   toggleTask() {
//     this.state.isCompleted = !this.state.isCompleted;
//   }

//   deleteTask() {
//     this.props.onDelete(this.props.task);
//   }

//   // save the edited task
//   saveTask() {
//     this.state.isEditing = false;
//     this.props.onEdit(this.state);
//   }

//   // use to show and hide form input
//   editTask() {
//     this.state.isEditing = true;
//   }
// }

// class Root extends Component {
//   static template = xml`
//     <div class="m-0 p-4 bg-white rounded">
//       <div class="input-group-lg bg-white rounded border d-flex w-100 align-items-center">
//         <input type="name" class="form-control-lg fs-5 flex-fill border-0" placeholder="Add your new task" aria-label="Add your new task" id="name" name="name" aria-describedby="button-addon2" t-att-value="state.name" t-model="state.name"/>
//         <input type="color" class="form-control-lg border-0 bg-white m-0 form-control-color" id="color" title="Choose your color" t-att-value="state.color" t-model="state.color"/>
//         <button class="btn btn-primary" type="button" id="button-addon2" t-on-click="addTask">
//           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
//           <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
//           <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
//           </svg>
//         </button>
//       </div>
      
//       <ul class="tasks d-flex flex-column p-0 mt-5">
//         <t t-foreach="tasks" t-as="task" t-key="task.id">
//           <Task task="task" onDelete.bind="deleteTask" onEdit.bind="editTask"/>
//         </t>
//       </ul>
//     </div>
//     `;

//   // use to add sub component
//   static components = { Task };

//   setup() {
//     this.state = useState({
//       name: "",
//       color: "#FFF700",
//       isCompleted: false,
//       isEditing: false,
//     });

//     this.tasks = useState([]);
//   }

//   // function to add task
//   addTask() {
//     // do not allow empty task name
//     if (!this.state.name) {
//       alert("Please add task.");
//       return;
//     }

//     // add unique id
//     const id = Math.random().toString().substring(2, 12);

//     // add new task
//     this.tasks.push({
//       id,
//       name: this.state.name,
//       color: this.state.color,
//       isCompleted: this.state.isCompleted,
//     });

//     // reset states after saving
//     let state = this.state;
//     this.state = { ...state, name: "", color: "#FFF700" };
//   }

//   // delete task
//   deleteTask(task) {
//     const index = this.tasks.findIndex((t) => t.id === task.id);
//     this.tasks.splice(index, 1);
//   }

//   // edit task
//   editTask(ta) {
//     const index = this.tasks.findIndex((t) => t.id === ta.id);
//     this.tasks.splice(index, 1, ta);
//   }
// }

// mount(Root, document.getElementById("root"));

