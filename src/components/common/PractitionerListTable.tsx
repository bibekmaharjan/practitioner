import * as React from 'react';
 
import user1 from '../../assets/images/user1.jpg';
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';
import user4 from '../../assets/images/user4.jpg';

const PractitionerListTable = () => {

  return (
    <>
    <div className="practitionerListTable__wrapper">

        <table className="practitionerListTable" cellSpacing="0">
        <tr className='practitionerListTable__header'>
            <th className='text__label-muted'>Basic Info</th>
            <th className='text__label-muted'>Phone Number</th>
            <th className='text__label-muted'>DOB</th>
            <th className='text__label-muted'>Start time</th>
            <th className='text__label-muted'>End time</th>
        </tr>
        <tr className='practitionerListTable__row'>
            <td className='practitionerListTable__userInfo'>
                <img src={user1} alt="" className="practitionerListTable__userInfo-img" />
                <div className="practitionerListTable__userInfo-wrapper">
                    <span className="text__title-med">Diane Cooper</span>
                    <span className="text__sm--mute">dianecooper@test.com</span>
                </div>
            </td>
            <td><span className="text__label">+007-12345678</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
        </tr>
        <tr className='practitionerListTable__row'>
            <td className='practitionerListTable__userInfo'>
                <img src={user2} alt="" className="practitionerListTable__userInfo-img" />
                <div className="practitionerListTable__userInfo-wrapper">
                    <span className="text__title-med">Diane Cooper</span>
                    <span className="text__sm--mute">dianecooper@test.com</span>
                </div>
            </td>
            <td><span className="text__label">+007-12345678</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
        </tr>
        <tr className='practitionerListTable__row'>
            <td className='practitionerListTable__userInfo'>
                <img src={user3} alt="" className="practitionerListTable__userInfo-img" />
                <div className="practitionerListTable__userInfo-wrapper">
                    <span className="text__title-med">Diane Cooper</span>
                    <span className="text__sm--mute">dianecooper@test.com</span>
                </div>
            </td>
            <td><span className="text__label">+007-12345678</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
        </tr>
        <tr className='practitionerListTable__row'>
            <td className='practitionerListTable__userInfo'>
                <img src={user4} alt="" className="practitionerListTable__userInfo-img" />
                <div className="practitionerListTable__userInfo-wrapper">
                    <span className="text__title-med">Diane Cooper</span>
                    <span className="text__sm--mute">dianecooper@test.com</span>
                </div>
            </td>
            <td><span className="text__label">+007-12345678</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
            <td><span className="text__label">Jan 06, 1996</span></td>
        </tr>
        </table>
    </div>
    </>
  );
};


export default PractitionerListTable;
