import React, { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    { title: "Hey", desc: "I am good todo" },
    { title: "Hello", desc: "I am good todo" },
    { title: "Hi", desc: "I am good todo" },
  ]);

  const [person, setperson] = useState([
    { id: "1", name: "scheeza" },
    { id: "2", name: "abdul" },
  ]);

//hamain aik key chahiya hoti hai jiski base pa hi hum na cheezain dhondni hoti hai aur woh key hamesha unique honi chahiya
  return (
    <>
      <div>
        {person.map((p) => (
          <div key={p.id}>
            <div>{p.id}</div>
            <div>{p.name}</div>
          </div>
        ))}
      </div>
      <div className="p-4">
        {todo.map((t) => (
          <div key={t.title} className="border p-2 my-2 rounded bg-gray-100">
            <h2 className="font-bold">{t.title}</h2>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
