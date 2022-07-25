import React from "react";
import { useState } from "react";
import { useNavigate } from   'react-router-dom'
import { useDispatch } from "react-redux";
import { changeUser } from "../store/slices/user.slice"

const Home = () => {
  const [ user, setUser] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = (e) => {
   e.preventDefault();
   dispatch(changeUser(user));
   navigate('/pokedex')
  };

  
  return (
    <div className="home-cont">
      <h1>Hello trainer!</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button>Submit</button>
      </form> 
    </div>
  );
};

export default Home;
