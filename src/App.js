import React, { useState } from "react";
import BasicForm from "./components/FormValidation/BasicForm";
//import Form from "./components/FormValidation/Form";
// import BackwardCounter from './components/BackwardCounter';
// import ForwardCounter from './components/ForwardCounter';

function App() {
  const [name, setName] = useState([]);
  const addnameHandler = (nameText, emailText) => {
    setName((prevState) => {
      const updateData = [...prevState];
      updateData.unshift({
        text: nameText,
        email: emailText,
        id: Math.random().toString(),
      });
      return updateData;
    });
  };

  const deleteItemHandler = (goalId) => {
    setName((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  return (
    <React.Fragment>
      <div className="app">
        {/* <Form
          onAddName={addnameHandler}
          items={name}
          ondelete={deleteItemHandler}
        /> */}
        <BasicForm />
      </div>
      {/* <ForwardCounter />
      <BackwardCounter /> */}
    </React.Fragment>
  );
}

export default App;
