import * as React from 'react';

import FileUpload from './FileUpload';
import closeIcon from '../../assets/images/close-icon.png';

interface PractitionerActionFormProps {
  addUserData: (e: any) => void;
  setEditData: (e: any) => void;
  handleUserEdit: (practitionerData: any, id: number) => void;
  setIsVisible: (e: any) => void;
  editData: any;
}

const PractitionerActionForm = (props: PractitionerActionFormProps) => {
  const handleMenuClose = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    props.setEditData(null);
    props.setIsVisible(false);
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const initialData = props.editData
    ? props.editData
    : {
        fullName: '',
        email: '',
        contact: '',
        address: '',
        city: '',
        gender: '',
        zipcode: '',
        dob: '',
        workingDays: '',
        status: '',
        endTime: '',
        startTime: '',
      };

  const [practitionerData, setPractitionerData] = React.useState(initialData);

  const handleOnChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setPractitionerData({ ...practitionerData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    if (props.editData === practitionerData) {
      handleMenuClose(e);
      props.setEditData(null);

      return;
    }

    setIsSubmitting(true);
    props.editData ? props.handleUserEdit(practitionerData, props.editData.id) : props.addUserData(practitionerData);
    setIsSubmitting(false);
    props.setEditData(null);
    handleMenuClose(e);
  };

  return (
    <div className="practitionerActionForm__modal modal">
      <div className="practitionerActionForm__header mb-md">
        <span className="text__title-med">{props.editData ? 'Edit Practitioner' : 'Add Practitioner'}</span>
        <img src={closeIcon} alt="" onClick={handleMenuClose} />
      </div>
      <div className="practitionerActionForm__content">
        <input
          name="fullName"
          onChange={handleOnChange}
          value={practitionerData.fullName}
          type="text"
          className="input__text mb-tn"
          placeholder="YOUR FULL NAME"
          required
        />
        <input
          name="email"
          onChange={handleOnChange}
          value={practitionerData.email}
          type="email"
          className="input__text mb-tn"
          placeholder="YOUR MAIL"
          required
        />
        <input
          name="contact"
          onChange={handleOnChange}
          value={practitionerData.contact}
          type="number"
          className="input__text mb-tn"
          placeholder="YOUR CONTACT NUMBER"
          required
        />
        <input
          name="address"
          onChange={handleOnChange}
          value={practitionerData.address}
          type="text"
          className="input__text mb-tn"
          placeholder="YOUR ADDRESS"
        />
        <input
          name="city"
          onChange={handleOnChange}
          value={practitionerData.city}
          type="text"
          className="input__text mb-tn"
          placeholder="YOUR CITY"
        />
        <input
          name="gender"
          onChange={handleOnChange}
          value={practitionerData.gender}
          type="text"
          className="input__text mb-tn"
          placeholder="YOUR GENDER"
        />
        <input
          name="zipcode"
          onChange={handleOnChange}
          value={practitionerData.zipcode}
          type="number"
          className="input__text mb-tn"
          placeholder="YOUR ZIP CODE"
        />
        <input
          name="dob"
          onChange={handleOnChange}
          value={practitionerData.dob}
          type="date"
          className="input__text mb-tn"
          placeholder="YOUR DATE OF BIRTH"
          required
        />
        <input
          name="workingDays"
          onChange={handleOnChange}
          value={practitionerData.workingDays}
          type="number"
          className="input__text mb-tn"
          placeholder="YOUR WORKING DAYS"
          required
        />
        <input
          name="startTime"
          onChange={handleOnChange}
          value={practitionerData.startTime}
          type="date"
          className="input__text mb-tn"
          placeholder="START TIME"
          required
        />
        <input
          name="endTime"
          onChange={handleOnChange}
          value={practitionerData.endTime}
          type="date"
          className="input__text mb-tn"
          placeholder="END TIME"
          required
        />
        <input
          name="status"
          onChange={handleOnChange}
          value={practitionerData.status}
          type="text"
          className="input__text mb-tn"
          placeholder="YOUR STATUS"
        />
        <FileUpload />
      </div>
      <div className="disp-flex flex-justify-end ">
        <button className="btn btn__primary" disabled={isSubmitting} onClick={handleSubmit}>
          {props.editData ? ' Edit Practitioner' : 'Add practitioner'}
        </button>
      </div>
    </div>
  );
};

export default PractitionerActionForm;
