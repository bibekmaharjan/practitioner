import * as React from 'react';
 
import user1 from '../../assets/images/user1.jpg';
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';
import user4 from '../../assets/images/user4.jpg';
import PractitionerListItem from './PractitionerListItem';

const PractitionerListTable = () => {
    const userData = [
        {
            name: 'Diane Cooper',
            email: 'dianecooper@test.com',
            contact: '+977-123456789',
            dob: 'Jan 21, 1997',
            startTime: 'Jan 21, 1997',
            endTime: 'Jan 21, 1997',
            userImg: user1
        },
        {
            name: 'Diane Cooper',
            email: 'dianecooper@test.com',
            contact: '+977-123456789',
            dob: 'Jan 21, 1997',
            startTime: 'Jan 21, 1997',
            endTime: 'Jan 21, 1997',
            userImg: user2
        },
        {
            name: 'Diane Cooper',
            email: 'dianecooper@test.com',
            contact: '+977-123456789',
            dob: 'Jan 21, 1997',
            startTime: 'Jan 21, 1997',
            endTime: 'Jan 21, 1997',
            userImg: user3
        },
        {
            name: 'Diane Cooper',
            email: 'dianecooper@test.com',
            contact: '+977-123456789',
            dob: 'Jan 21, 1997',
            startTime: 'Jan 21, 1997',
            endTime: 'Jan 21, 1997',
            userImg: user4
        }
    ]

    userData.map(data => console.log(data));

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
        {
            userData.map((data) => <PractitionerListItem data= {data}/>)
        }
        {/* <PractitionerListItem /> */}
        </table>
    </div>
    </>
  );
};


export default PractitionerListTable;
