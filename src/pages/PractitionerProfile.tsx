import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/layout/Header';
import userImg from '../assets/images/user1.jpg';
import { AuthContext } from 'src/context/AuthContext';
import Breadcrumb from '../components/common/Breadcrumb';
import UserDetailResponse from 'src/domain/responses/UserDetailResponse';

const PractitionerProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = React.useState<UserDetailResponse>();
  const token = React.useContext(AuthContext);

  React.useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(`http://localhost:8080/practitioners/${id}`, config).then(
      (d) => setUserData(d.data),
      (e) => console.log(e)
    );
  }, []);

  return (
    <React.Fragment>
      <Header />
      <section className="practitionerProfile">
        <Breadcrumb name={userData?.fullName} />
        <div className="practitionerProfile__wrapper">
          <div className="practitionerProfile__userInfo">
            <img src={userImg} alt="" className="practitionerProfile__userInfo-img" />
            <span className="text__title-lg mb-sm">{userData?.fullName}</span>
            <span className="text__label-muted">{userData?.email}</span>
          </div>
          <div className="practitionerProfile__userInfo-details">
            <div className="practitionerProfile__userInfo-details--info">
              <span className="text__label-muted mb-sm">Gender</span>
              <span className="text__label">{userData?.gender}</span>
            </div>
            <div className="practitionerProfile__userInfo-details--info">
              <span className="text__label-muted mb-sm">Birthday</span>
              <span className="text__label">{userData?.dob}</span>
            </div>
            <div className="practitionerProfile__userInfo-details--info">
              <span className="text__label-muted mb-sm">Phone Number</span>
              <span className="text__label">{userData?.contact}</span>
            </div>
            <div className="practitionerProfile__userInfo-details--info">
              <span className="text__label-muted mb-sm">Address</span>
              <span className="text__label">{userData?.address}</span>
            </div>
            <div className="practitionerProfile__userInfo-details--info">
              <span className="text__label-muted mb-sm">City</span>
              <span className="text__label">{userData?.city}</span>
            </div>
            <div className="practitionerProfile__userInfo-details--info">
              <span className="text__label-muted mb-sm">Zip Code</span>
              <span className="text__label">{userData?.zipcode}</span>
            </div>
            <div className="practitionerProfile__userInfo-details--info">
              <span className="text__label-muted mb-sm">Member Status</span>
              <span className="text__label">{userData?.status}</span>
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
