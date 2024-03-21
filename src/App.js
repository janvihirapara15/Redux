
import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addData, DeleteData, updateData } from './action';

function App() {
  const [inputdata, setInputdata] = useState({
    fname: "",
    lname: "",
    email: "",

  })
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(-1);
  const selector = useSelector((selector) => selector);
  console.log(
    "selector",
    useSelector((selector) => selector).formReducers
  );
  const handleChange = (j) => {
    setInputdata({ ...inputdata, [j.target.name]: j.target.value })

  }
  const handleSubmit = () => {
    if (isEdit === -1) {
      dispatch(addData(inputdata));
    }
    else {
      dispatch(updateData(inputdata, isEdit));
    }
    setIsEdit(-1);

  };
  const handleDelete = (jmh) => {
    dispatch(DeleteData(jmh));

  }
  const handleEdit = (hello) => {
    setIsEdit(hello);

    setInputdata(
      selector.formReducers.find((item, index) => index === hello)
    );
  }

  return (
    <div>
      <h1>Personal Details</h1>
      <div>
        <label for='fname'>First Name</label>
        <input type='text' id='fname' name='fname' value={inputdata.fname} onChange={(j) => handleChange(j)} />
      </div>
      <div>
        <label for='lname'>Last Name</label>
        <input type='text' id='lname' name='lname' value={inputdata.lname} onChange={(j) => handleChange(j)} />
      </div>
      <div>
        <label for='email'>email</label>
        <input type='text' id='email' name='email' value={inputdata.email} onChange={(j) => handleChange(j)} />
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>


      <table></table>
      <thead>
        <th>Name</th>
        <th>Lname</th>
        <th>Email</th>
      </thead>
      <tbody>
        {(selector.formReducers || []).map((Item, index) => (
          <tr>
            <td>{Item.fname}</td>
            <td>{Item.lname}</td>
            <td>{Item.email}</td>
            <td><button onClick={() => handleDelete(index)}>Delete</button></td>
            <td><button onClick={() => handleEdit(index)}>Edit</button></td>
          </tr>
        ))
        }
      </tbody>
    </div>


  );
}

export default App;
