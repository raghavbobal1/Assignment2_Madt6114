import './App.css';
import React, {useRef, useState} from 'react'

function App() {

  const userName = useRef("");
  const password = useRef("");
  const isRemembered = useRef(false);

  // over kill but code for just using bot useref and use state. useRef doesnt kick rerender so using useState
  const [userNameState, setUserNameState] = useState("")
  const [passwordState, setPasswordState] = useState("")
  const [isRememberedState, setIsRememberedState] = useState(false)
  const [isFormDataShown, setisFormDataShown] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setUserNameState(userName.current.value);
    setPasswordState(password.current.value);
    setIsRememberedState(isRemembered.current.checked)
    setisFormDataShown(true);
  }
  return (
    <>
      <div className="container">
        <form className="form">
          <div className="form-control">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={userName}></input>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={password}></input>
          </div>
          <div className="form-control">
            <label htmlFor="remember">Remember</label>
            <input type="checkbox" id="remember" ref={isRemembered}></input>
          </div>
          <button type="button" onClick={clickHandler}>
            Login
          </button>
        </form>
      </div>

      {isFormDataShown && (
        <div className="container">
          <h4> You submitted following data:</h4>
          <p> Username: {userNameState}</p>
          <p> Password: {passwordState}</p>
          <p> Your data is {!isRememberedState && "not"} remembered.</p>
        </div>
      )}
    </>
  );
}

export default App;
