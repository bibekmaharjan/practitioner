 import * as React from 'react';
 
 const Signin = () => {
 
   return (
     <React.Fragment>
        <div className="signin">
          <div className="signin__wrapper">
            <div className="text__title-lg--color mb-lg">Welcome!</div>
            <input type="text" className="input__text mb-md" placeholder='YOUR MAIL'/>
            <input type="text" className="input__text mb-sm" placeholder='YOUR PASSWORD'/>
            <div className="disp-flex mb-lg flex-space-between ">
              <span className="text__label-sm">Remember my password</span>
              <button className="btn btn__link">Sign up?</button>
            </div>
            <div className="btn__wrapper">
              <button className="btn btn__primary">LOGIN</button>
            </div>
          </div>
        </div>
     </React.Fragment>
   );
 };
 
 
 export default Signin;
 