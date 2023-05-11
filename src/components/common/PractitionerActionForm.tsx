import * as React from 'react';

import FileUpload from './FileUpload';
import closeIcon from '../../assets/images/close-icon.png';
import PractitionerPayload from 'src/domain/requests/PractitionerPayload';

interface PractitionerActionFormProps {
  setIsVisible: (value: boolean) => void;
  editData: PractitionerPayload | undefined;
  addUserData: (data: PractitionerPayload) => void;
  setEditData: (data: PractitionerPayload | undefined) => void;
  handleUserEdit: (practitionerData: PractitionerPayload, id: number | undefined) => void;
}

const PractitionerActionForm = (props: PractitionerActionFormProps) => {
  const handleMenuClose = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    props.setEditData(undefined);
    props.setIsVisible(false);
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const initialData: PractitionerPayload = props.editData
    ? props.editData
    : {
        dob: '',
        city: '',
        email: '',
        gender: '',
        status: '',
        address: '',
        contact: '',
        zipcode: '',
        endTime: '',
        fullName: '',
        userImg: null,
        startTime: '',
        workingDays: 0,
        isICUSpecialist: false,
      };

  const [practitionerData, setPractitionerData] = React.useState(initialData);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    let value: boolean | string = e.target.value;

    if (name === 'isICUSpecialist') {
      value = e.target.checked;
    }
    setPractitionerData({ ...practitionerData, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.editData === practitionerData) {
      handleMenuClose(e);
      props.setEditData(undefined);

      return;
    }

    setIsSubmitting(true);

    props.editData ? props.handleUserEdit(practitionerData, props.editData.id) : props.addUserData(practitionerData);
    setIsSubmitting(false);
    props.setEditData(undefined);
    handleMenuClose(e);
  };

  return (
    <div className="practitionerActionForm__container">
      <div className="practitionerActionForm__modal modal">
        <div className="practitionerActionForm__header mb-md">
          <span className="text__title-med">{props.editData ? 'Edit Practitioner' : 'Add Practitioner'}</span>
          <img src={closeIcon} alt="" onClick={handleMenuClose} />
        </div>
        <div className="practitionerActionForm__content">
          <FileUpload setPractitionerData={setPractitionerData} practitionerData={practitionerData} />
          <div className="disp-flex flex-col flex-space-between">
            <input
              required
              type="text"
              name="fullName"
              onChange={handleOnChange}
              className="input__text mb-tn"
              placeholder="YOUR FULL NAME"
              value={practitionerData.fullName}
            />
            <input
              required
              name="email"
              type="email"
              placeholder="YOUR MAIL"
              onChange={handleOnChange}
              className="input__text mb-tn"
              value={practitionerData.email}
            />
            <input
              required
              type="number"
              name="contact"
              onChange={handleOnChange}
              className="input__text mb-tn"
              value={practitionerData.contact}
              placeholder="YOUR CONTACT NUMBER"
            />
            <input
              type="text"
              name="address"
              onChange={handleOnChange}
              placeholder="YOUR ADDRESS"
              className="input__text mb-tn"
              value={practitionerData.address}
            />
            <input
              name="city"
              type="text"
              placeholder="YOUR CITY"
              onChange={handleOnChange}
              value={practitionerData.city}
              className="input__text mb-tn"
            />
          </div>

          <input
            type="text"
            name="gender"
            onChange={handleOnChange}
            placeholder="YOUR GENDER"
            className="input__text mb-tn"
            value={practitionerData.gender}
          />
          <input
            type="number"
            name="zipcode"
            onChange={handleOnChange}
            placeholder="YOUR ZIP CODE"
            className="input__text mb-tn"
            value={practitionerData.zipcode}
          />
          <input
            required
            name="dob"
            type="date"
            onChange={handleOnChange}
            value={practitionerData.dob}
            className="input__text mb-tn"
            placeholder="YOUR DATE OF BIRTH"
          />
          <input
            required
            type="number"
            name="workingDays"
            onChange={handleOnChange}
            className="input__text mb-tn"
            placeholder="YOUR WORKING DAYS"
            value={practitionerData.workingDays}
          />
          <input
            required
            type="date"
            name="startTime"
            placeholder="START TIME"
            onChange={handleOnChange}
            className="input__text mb-tn"
            value={practitionerData.startTime}
          />
          <input
            required
            type="date"
            name="endTime"
            placeholder="END TIME"
            onChange={handleOnChange}
            className="input__text mb-tn"
            value={practitionerData.endTime}
          />
          <input
            type="text"
            name="status"
            onChange={handleOnChange}
            placeholder="YOUR STATUS"
            className="input__text mb-tn"
            value={practitionerData.status}
          />
          <div className="disp-flex flex-start">
            <input
              type="checkbox"
              className="mr-sm"
              id="isICUSpecialist"
              name="isICUSpecialist"
              onChange={handleOnChange}
            />
            <label className="text__label no-wrap cursor-pointer" htmlFor="isICUSpecialist">
              ICU Specialist
            </label>
          </div>
        </div>
        <div className="disp-flex flex-justify-end ">
          <button className="btn btn__primary" disabled={isSubmitting} onClick={handleSubmit}>
            {props.editData ? ' Edit Practitioner' : 'Add practitioner'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PractitionerActionForm;
