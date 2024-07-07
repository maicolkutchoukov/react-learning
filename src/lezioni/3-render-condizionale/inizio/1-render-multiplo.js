import React, {useState, useEffect} from "react";
import axios from 'axios';

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getData = async () => {
    setIsError(false)
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response);
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
      setIsError(true);
    }
    
  }

  useEffect(() => {
    getData()
  }, [])
  if (isLoading){
    return <Loading/>
  }
  if (isError){
    return <ErrorComponent/>
  }
  return (
    <article className="card d-flex align-items-center p-5 shadow mt-5">
      <img 
        src={user.avatar_url}
        alt={user.name}
        style={{ width: "100px", height: "100px" }}
        className="rounded-circle my-4 shadow"
      />
      <h2>{user.name}</h2>
    </article>
  );
};

const Loading = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  )
}
const ErrorComponent = () => {
  return (
    <div>
      <h2>Sorry, there are an error...</h2>
      
    </div>
  )
}
export default ConditionalCompining;
