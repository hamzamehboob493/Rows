import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const tableData = {
  projects: [
    {
      id: 1,
      name: "Project A",
      tasks: [
        {
          id: 2,
          name: "Task A1",
          notes: [
            { id: 3, name: "Note A1.1" },
            { id: 4, name: "Note A1.2" },
          ],
        },
        {
          id: 5,
          name: "Task A2",
          notes: [
            { id: 6, name: "Note A2.1" },
            { id: 7, name: "Note A2.2" },
            { id: 8, name: "Note A2.3" },
          ],
        },
        {
          id: 9,
          name: "Task A3",
          notes: [{ id: 10, name: "Note A3.1" }],
        },
      ],
    },
    {
      id: 11,
      name: "Project B",
      tasks: [
        {
          id: 12,
          name: "Task B1",
          notes: [{ id: 13, name: "Note B1.1" }],
        },
      ],
    },
  ],
};
ReactDOM.render(
  <React.StrictMode>
    <App data={tableData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
