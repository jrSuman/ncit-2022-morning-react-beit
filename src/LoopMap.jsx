//function
// function LoopMap(){
//   return(
//     <span>loop map</span>
//   )
// }

// arrow function
const LoopMap = () => {
  const names = ["ram", "shyam", "harai", "ketan"];
  const students = [
    {
      name: "Ram Prashad",
      age: 21,
      language: ["js", "react"],
    },
    {
      name: "Hari Prashad",
      age: 22,
      language: ["c++", "rust"],
    },
    {
      name: "Laxmi Prashad Devkota",
      age: 35,
      language: ["c", "Java"],
    },
  ];

  return (
    <div className="">
      {names.map((item, index) => (
        <h4>
          {item} {index}
        </h4>
      ))}
      <hr />
      {students.map((student, index) => (
        <div className="">
          <h1>student name: {student.name}</h1>
          <p>age: {student.age}</p>

          <ol>
          {student.language.map((item, i) => (
            <li>{item}</li>
          ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default LoopMap;
