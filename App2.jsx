//React is a library not a framework
//Library aik specific chez ko target karti hai
//Framework sab kuch jo bhi aik app ko banana ka liya use hota hai usa target karta hai
//jsx--->html aur ismain hum javascript ko bhi use kar sakta hain
//hum sirf aik chez return kar sakta hain matlab agar aik div banai hai to woh return kar do magar hum na agara aik sa ziyada chezzon ko return karna hai to rapper <> </> main return kar sakta hai

import { useEffect, useState } from "react";
function App() {
  const [showbtn, setshowbtn] = useState(false);
  const [value, setvalue] = useState();
  // -------------------------------------------------------------------------------------------------

  // Making a component inside the App.jsx 

  const Todo = () => {
    return <div>I am todo;</div>;
  };

  // -------------------------------------------------------------------------------------------------
  return (
    <>
      {/* Condition Rendering  */}
      {/* Agar true pa kuch aai aur false pa bhi kuch aai to isa use karna hai  */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>Condition Rendering</div>
        {showbtn ? <button>True</button> : <button>False</button>}
        {/* Agar sirf true pa kuch hona chahia to isa use karna ha  */}
        {showbtn && <button>I am true</button>}
        <button
          onClick={() => {
            setshowbtn(!showbtn);
          }}
        >
          Click to set
        </button>
      </div>
      <Todo />
      {/* -------------------------------------------------------------------------------------------------- */}
    </>
  );
}

export default App;
