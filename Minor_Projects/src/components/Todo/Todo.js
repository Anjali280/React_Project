import React, { useEffect, useState, useRef } from "react";
import "./Todo.css";
import Task from "../Task/Task";

const Todo = () => {
  const [state, setState] = useState([]);
  const [req, setReq] = useState("");
  const idx = useRef(-1);

  //GET REQUEST
  const getData = () => {
    fetch("http://localhost:3001/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  //POST REQUEST
  const addTask = () => {
    const userTask = document.getElementById("task");

    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify({
        task: userTask.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getData();
      });

    userTask.value = "";
  };

  //DELETE REQUEST
  const deleteTask = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //PATCH REQUEST
  const editTask = () => {
    const userTask = document.getElementById("task");

    fetch(`http://localhost:3001/todos/${idx.current}`, {
      method: "PATCH",
      body: JSON.stringify({
        task: userTask.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getData();
      });

    userTask.value = "";
  };

  return (
    <div className="content">
      <div className="task-input">
        {req === "" ? (
          <h3>No Action Selected</h3>
        ) : req === "Add" ? (
          <Task inputType={`${req} task`} actionType={req} action={addTask} />
        ) : (
          <Task inputType={`${req} task`} actionType={req} action={editTask} />
        )}
      </div>

      <div className="task-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Toggle</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {state.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>{element.task}</td>
                  <td>
                    <button
                      style={{ backgroundColor: "#FFE15D" }}
                      onClick={() => {
                        idx.current = element.id;
                        setReq("Edit");
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "#EB6440", color: "white" }}
                      onClick={() => deleteTask(element.id)}
                    >
                      Finish
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <button
          onClick={() => {
            setReq("Add");
          }}
        >
          ADD Task
        </button>
        {/* <button>ADD Task</button> */}
      </div>
    </div>
  );
};

export default Todo;
