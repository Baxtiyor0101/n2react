import React, { useState } from "react";
let data = [
  { id: 1, name: "Sardor", title: "Frontend" },
  { id: 2, name: "Sanjar", title: "Frontend" },
  { id: 3, name: "Sardorbek", title: "Frontend" },
  { id: 4, name: "Sardorjon", title: "Frontend" },
  { id: 5, name: "SardorAli", title: "Frontend" },
];

const Crud = () => {
  const [users, setUsers] = useState(data);
  //   console.log(users);
  const onDelete = (ids) => {
    let res = users.filter((val) => val.id !== ids);
    setUsers(res);
  };
  const onCreate = (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let title = e.target[1].value;
    let res = { id: JSON.stringify(new Date()), name, title };
    setUsers([...users, res]);
    e.target.reset();
    // e.target[0].value = "";
    // e.target[1].value = "";
    // console.log(res);
  };
  return (
    <div>
      <form onSubmit={onCreate}>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="title" />
        <button>Add</button>
      </form>
      <table border={1} width="40%">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>title</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((val,inx) => (
            <tr key={val.id}>
              <td>{inx+1}</td>
              <td>{val.name}</td>
              <td>{val.title}</td>
              <td>
                <button onClick={() => onDelete(val.id)}>delete</button>
                <button>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
