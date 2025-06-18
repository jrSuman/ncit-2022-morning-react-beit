import { useState } from "react";

const InputExample = () => {
  // const
  const [name, setName] = useState("ram");
  const [names, setNames] = useState(["poato"]);

  const handleSubmit = () => {
    console.log('handle submit', name)
    const newNames = [...names, name ]
    console.log('result', newNames)
    setNames(newNames)
    setName('')
  }

  return (
    <div className="">
      <h1>My name is {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ol>
      {
        names.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
      </ol>
    </div>
  );
};

export default InputExample;
