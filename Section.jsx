import React from "react";
import "./Section.css";
const Section = (props) => {
  const { users } = props;
  return (
    <>
      {" "}
      <h2>Пользователи</h2>
      <section>
        <table border={1}>
          <thead>
            <tr>
              <th className="id">ID</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th className="id">Возраст</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Section;
