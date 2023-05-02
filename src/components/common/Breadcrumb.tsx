import * as React from 'react';
import { useNavigate } from 'react-router-dom';
 
const Breadcrumb = () => {

     const navigate = useNavigate();

  return (
       <section className="breadcrumb">
            <span className="text__label-color mr-sm cursor-pointer" onClick={() => navigate('/list')}>Practitioner List</span>
            <span className="text__label-muted mr-sm"> &gt; </span>
            <span className="text__label-muted mr-sm"> Diane Cooper </span>
       </section>
  );
};


export default Breadcrumb;
