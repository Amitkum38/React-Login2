import React, {useState} from 'react';

import Logo from './images/logo.svg';
import './login.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
function Login () {
      
  const  [email, setEmail]  = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setallEntry] = useState([]);

    const SubmitForm = () =>{
      const newEntry  =  {email:email, password:password};
      setallEntry([...allEntry, newEntry ]);
     
      console.log(allEntry);
    };

  return (
   <form action="" onSubmit={SubmitForm}>
    <div className="login-pos">
      <div className="col-sm-12 plr0">
        <div className="logo-col">
          <div className="login-logo"> <a href="login.html"><img src={Logo} className="img-responsive" alt="logo" title="logo"/></a> </div>
            <div className="form-group">
              <div className="input-group">
                <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name="email" autoComplete="off" placeholder="User"/>
              </div>
              <div className="input-group">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" pasword="password" autoComplete="off"  placeholder="Password"/>
              </div>
              <div className="input-group">
                <input type="submit" className="btn col-sm-6 btn-default"  value="submit"/>
                </div>
            </div>
        </div>
      </div>
    </div>
   </form>
  );
}

export default Login;
