const Button = (props) => {
  const {outline, secondary, children} = props;
  console.log("props", props)

  if(outline){
    return(
      <button className="bg-white border border-blue-500 text-blue-500 p-4">{children}</button>
    )
  }

  if(secondary){
    return(
      <button className="bg-gray-500 text-white p-4">{children}</button>
    )
  }

  return(
    <button className="bg-blue-500 p-4">{children}</button>
  )
}

export default Button