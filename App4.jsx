import { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState([]);
  let URL = "https://jsonplaceholder.typicode.com/posts";
  const result = async () => {
    let response = await fetch(URL);
    let d = await response.json();
    setdata(d);
  };
  useEffect(() => {
    result();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {data.map((i) => {
          return (
            <div className="border border-4 w-70 text-center" key={i.id}>
              <h1 className="text-xl font-bold">{i.title} </h1>
              <p>{i.body}</p>
              <span className="font-bold">By user id{i.id}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
