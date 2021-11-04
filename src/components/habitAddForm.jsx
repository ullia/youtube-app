import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  console.log("addForm");
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="add-input" placeholder="Please enter your habit!" />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

// class

// import React, { PureComponent } from "react";
// import "../app.css";

// class HabitAddForm extends PureComponent {
//   inputRef = React.createRef();
//   formRef = React.createRef();

//   onSubmit = (event) => {
//     // console.log(this.inputRef.current.value);
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     // this.inputRef.current.value = "";
//     this.formRef.current.reset();
//   };

//   render() {
//     console.log("addForm");
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input ref={this.inputRef} type="text" className="add-input" placeholder="Please enter your habit!" />
//         <button className="add-button">Add</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;
