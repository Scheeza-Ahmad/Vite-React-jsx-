
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState("scheeza")
  const handleClick=()=>{
    alert("I am clicked");
  }
  const handleChange=(e)=>{
    setname(e.target.value);
  }
  return (
<>
<div>

<button onClick={handleClick}>Click me</button>
</div>
{/* Agar hum aesa input lain ga to hum isa change nhi kar sakta iss main type nhi ho sakta */}
<input type="text" value={name}/>

{/* ismain type ho sakta hai  */}
<input type="text" value={name} onChange={handleChange}/>
</>
  );
}

export default App;
