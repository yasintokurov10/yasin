import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

const App = () => {
  const users = [
    { id: 1, name: "John", lastName: "Doe", age: 25 },
    { id: 2, name: "Jane", lastName: "Doe", age: 30 },
    { id: 3, name: "Bob", lastName: "Smith", age: 40 },
    { id: 4, name: "John", lastName: "Doe", age: 40 },
    { id: 5, name: "Jane", lastName: "Smith", age: 40 },
    { id: 6, name: "John", lastName: "Smith", age: 40 },
    { id: 7, name: "Bob", lastName: "Doe", age: 40 },
  ];
  return (
    <>
      <Header />
      <Section users={users} />
      <Footer />
    </>
  );
};

export default App;
