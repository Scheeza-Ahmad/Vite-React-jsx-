//React is a library not a framework
//Library aik specific chez ko target karti hai
//Framework sab kuch jo bhi aik app ko banana ka liya use hota hai usa target karta hai
//jsx--->html aur ismain hum javascript ko bhi use kar sakta hain
//hum sirf aik chez return kar sakta hain matlab agar aik div banai hai to woh return kar do magar hum na agara aik sa ziyada chezzon ko return karna hai to rapper <> </> main return kar sakta hai

import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Props from "./components/Props";
import "./components/Card.css";
import { useEffect, useState } from "react";
function App() {
  let a = 10;
  //Hooks in general hota hai aik function yeh hamain do chezain provide karta hai aik state aur aik function
  //count naam ki aik satte hai aur aik function hai jo ka iss state ko update karta hai

  // ------------------------------------------------------------------------------------------------

  const [count, setCount] = useState(0); //iska matlab hai ka count naam ka variable hai aur uski initial value hai 0 aur aik function hai setCount ka yeh value ko change karna ka liya hai
  // -------------------------------------------------------------------------------------------------

  // useeffect aik aesa react hook jo tab tab chala ga jab jab woh component render hoga
  //useeffect ka andar jo bhi chez likhi hui hai woh do bar chal rahi hai aesa isliya hai kyun ka main main aik strictmode hai jo code ko do bar chalata hai developer phase main aik bar test karna ka liya aur aik bar sahi main

  // //case 1:Run on every render--->yeh tab chala ga agar koi aik bhi chez change hogi toh yeh chala ga
  // useEffect(() => {
  //   alert("This is the useEffect");
  // });

  //case 2:Run on first render
  useEffect(() => {
    alert("This is the useEffect");
  }, []);

  //case 3:Run when a certain condition is reached
  useEffect(() => {
    if (count == 2) {
      alert("Count is 2 ");
    }
  }, [count]);

  //array main sirf woh cheez batani hoti hai jiska hona sa farak parta ho

  // jo end par array hai woh un cheezon ka array hota hai jo kuch hona par yeh useeffect ka hook mount hona chahiya

  // -------------------------------------------------------------------------------------------------
  return (
    <>
      <Navbar />

      {/* ------------------------------------------------------------------------------------------------  */}

      {/* Props  */}
      <div className="card">
        <Props title="Card 1" description="This is first Card" />
        <Props title="Card 1" description="This is first Card" />
        <Props title="Card 1" description="This is first Card" />
      </div>

      {/* ----------------------------------------------------------------------------------------------------- */}

      {/* React Hooks  */}
      {/* Ab iss case main hum na aik simple javascript variable banaya hai ab main isa print kara diya aik bar ab agar main isa baad main update karana chahoon to yeh update ho jai ga magar print jahan ho raha hai wahan uski value wahi raha gi  */}
      <div>The count is {a}</div>
      <button
        onClick={() => {
          a = a + 1;
        }}
      >
        Update
      </button>
      <div>The count is {a}</div>

      {/* ------------------------------------------------------------------------------------------------- */}

      <div>The count is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update{" "}
      </button>

      {/* ------------------------------------------------------------------------------------------------------ */}
      
      
      
      {/* ------------------------------------------------------------------------------------------------------ */}

      <Footer />
    </>
  );
}

export default App;
