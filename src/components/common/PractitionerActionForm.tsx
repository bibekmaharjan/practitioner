import * as React from 'react';
 
import closeIcon from '../../assets/images/close-icon.png'

const PractitionerActionForm = (props: any) => {

    const handleMenuClose = (e:any) => {
        e.stopPropagation();
        e.preventDefault();
        props.setIsVisible(false);
    }

  return (
       <div className="practitionerActionForm__modal modal">
            <div className="practitionerActionForm__header mb-md">
                <span className="text__title-med">Add Practitioner</span>
                <img src={closeIcon} alt="" onClick={handleMenuClose}/>
            </div>
            <div className="practitionerActionForm__content">
            <input type="text" className="input__text mb-tn" placeholder='YOUR MAIL'/>
            <input type="text" className="input__text mb-tn" placeholder='YOUR MAIL'/>
            <input type="text" className="input__text mb-tn" placeholder='YOUR MAIL'/>
            <input type="text" className="input__text mb-tn" placeholder='YOUR MAIL'/>
              <button className="btn btn__primary">Add practitioner</button>
            </div>
       </div>
  );
};


export default PractitionerActionForm;
