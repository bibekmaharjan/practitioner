import * as React from 'react';

import Header from '../components/layout/Header';
import PractitionerListTable from '../components/common/PractitionerListTable';

const PractitionerList = () => {
  const [userData, setUserData] = React.useState([]);
  const [isActionMenu, setIsActionMenu] = React.useState(false);

  return (
    <>
      <Header />
      <section className="practitionerList">
        <div className="practitionerList__menu">
          <div className="practitionerList__menu-wrapper">
            <div className="practitionerList__menu-item mr-md pr-md">
              <span className="text__title-lg--color mr-sm">{userData?.length}</span>
              <span className="text__label-muted">practitioners</span>
            </div>
            <div className="practitionerList__menu-item">
              <label htmlFor="sort" className="text__label-muted mr-sm">
                Sort by:
              </label>
              <div className="practitionerList__menu-item--select">
                <select className="text__label-muted" name="sort" id="sort">
                  <option value="Basic Info">Basic Info</option>
                  <option value="Phone number">Phone number</option>
                  <option value="DOB">DOB</option>
                  <option value="Start time">Start time</option>
                  <option value="End time">End time</option>
                </select>
              </div>
            </div>
          </div>
          <div className="btn__wrapper">
            <button className="btn btn__primary" onClick={() => setIsActionMenu(true)}>
              Add Practitioner
            </button>
          </div>
        </div>
        <PractitionerListTable
          setUserData={setUserData}
          userData={userData}
          setIsActionMenu={setIsActionMenu}
          isActionMenu={isActionMenu}
        />
      </section>
    </>
  );
};

export default PractitionerList;
