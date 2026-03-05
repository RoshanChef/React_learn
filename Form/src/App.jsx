import { useState } from "react"

function App() {
  let [formdata, setData] = useState({ isVisible: false, isBreak: false, mode: "" });
  function handler(e) {
    let { value, name, checked, type } = e.target;
    console.log(value, name);

    setData(prev => ({ ...prev, [name]: (type == 'checkbox') ? checked : value }));
  }
  function subHandler(e) {
    e.preventDefault();
    console.log(formdata);
  }

  return (
    <>
      <form onSubmit={subHandler} >
        <label >
          <span>Enter the email</span>
          <input type="email" name="email" onChange={handler} />
        </label>
        <br />
        <label >
          <span>Enter the FirstName</span>
          <input type="text" name="firstname" onChange={handler} />
        </label>
        <br />
        <label >
          <span>Enter the LastName</span>
          <input type="text" name="lastname" onChange={handler} />
        </label>
        <br />
        <label >
          <span>Enter the LastName</span>
          <input type="password" name="password" onChange={handler} />
        </label>
        <br />
        <label>
          <input type="checkbox" name="isVisible" onChange={handler} checked={formdata.isVisible} />
          make it
        </label>
        <label>
          <input type="checkbox" name="isBreak" onChange={handler} checked={formdata.isBreak} />
          break it
        </label>
        <br />  <label>

          <input
            type="radio"
            value={"offine mode"}
            checked={formdata.mode}
            onChange={handler}
            name="mode" />
          Mode of study
        </label>
        <br />
        <label>
          <select name="favcar" onChange={handler} value={formdata.favcar}>
            <option value="volvo">Volvo</option>
            <option value="maruti">Marutii</option>
            <option value="wolwo">wolwo</option>
          </select> 
        </label>
        <button type="sumbit">Submit</button>
      </form>
    </>
  )
}

export default App
