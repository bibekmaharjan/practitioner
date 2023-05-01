import * as React from 'react';
import PractitionerListTable from '../components/common/PractitionerListTable';
import Header from '../components/layout/Header';
 
const PractitionerList = () => {

  return (
    <>
       <Header/>
       <section className="practitionerList">
          <div className="practitionerList__menu">
            <span className="text__title-lg--color mr-sm">76</span>
            <span className="text__label-muted">practitioners</span>
          </div>
          <PractitionerListTable/>
       </section>
    </>
  );
};


export default PractitionerList;
