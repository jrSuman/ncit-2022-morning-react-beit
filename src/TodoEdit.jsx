import { useState } from "react";

const TodoEdit = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      {/* <span>TodoEdit</span> */}
      <button onClick={() => setIsVisible(!isVisible)}> {isVisible && 'Close'}Edit</button>

      {
        isVisible && 
        <div className="" style={{ 
        border: "1px solid red", padding: 4 }}>
          <input type="text" />
          <button>Submit</button>
        </div>
      }
      
    </>
  );
};

export default TodoEdit;
