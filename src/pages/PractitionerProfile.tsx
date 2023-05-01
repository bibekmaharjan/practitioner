import * as React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Header from '../components/layout/Header';
import userImg from '../assets/images/user1.jpg'
 
const PractitionerProfile = () => {

  return (
    <React.Fragment>
       <Header/>
       <section className="practitionerProfile">
        <Breadcrumb/>
        <div className="practitionerProfile__wrapper">
            <div className="practitionerProfile__userInfo">
                <img src={userImg} alt="" className="practitionerProfile__userInfo-img" />
                <span className="text__title-lg mb-sm">Diane Cooper</span>
                <span className="text__label-muted">dianecooper@test.com</span>
            </div>
            <div className="practitionerProfile__userInfo-details">
                <div className="practitionerProfile__userInfo-details--info">
                    <span className="text__label-muted mb-sm">Gender</span>
                    <span className="text__label">Female</span>
                </div>
                <div className="practitionerProfile__userInfo-details--info">
                    <span className="text__label-muted mb-sm">Birthday</span>
                    <span className="text__label">Feb 24th 1997</span>
                </div>
                <div className="practitionerProfile__userInfo-details--info">
                    <span className="text__label-muted mb-sm">Phone Number</span>
                    <span className="text__label">+077-123456789</span>
                </div>
                <div className="practitionerProfile__userInfo-details--info">
                    <span className="text__label-muted mb-sm">Address</span>
                    <span className="text__label">Somewhere -15</span>
                </div>
                <div className="practitionerProfile__userInfo-details--info">
                    <span className="text__label-muted mb-sm">City</span>
                    <span className="text__label">Earthcity</span>
                </div>
                <div className="practitionerProfile__userInfo-details--info">
                    <span className="text__label-muted mb-sm">Zip Code</span>
                    <span className="text__label">66554499</span>
                </div>
                <div className="practitionerProfile__userInfo-details--info">
                    <span className="text__label-muted mb-sm">Member Status</span>
                    <span className="text__label">Active Member</span>
                </div>
                <div className="practitionerProfile__userInfo-details--info">
                    <span className="text__label-muted mb-sm">Registered Date</span>
                    <span className="text__label">Feb 24th 1997</span>
                </div>
            </div>
        </div>
       </section>
    </React.Fragment>
  );
};


export default PractitionerProfile;
