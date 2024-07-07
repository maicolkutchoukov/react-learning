import React, {useEffect} from "react";

const CleanUp = () => {
  const [size, setSize] = React.useState(window.innerWidth);
  function dimensioneFinestra(){
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", dimensioneFinestra);
    return () => {
      window.removeEventListener("resize", dimensioneFinestra)
    }
  })
  return (
    <div className="container col-6 offset-3 bg-white shadow text-center mt-5">
      <h1> {size} </h1>
    </div>
  );
};

export default CleanUp;
