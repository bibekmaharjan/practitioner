import axios from 'axios';
import * as React from 'react';
import { AuthContext } from 'src/context/AuthContext';
import PractitionerActionForm from './PractitionerActionForm';
import PractitionerListItem from './PractitionerListItem';
import { ToastContainer, toast } from 'react-toastify';

interface PractitionerListTableProps {
  isActionMenu: boolean;
  userData: any;
  setIsActionMenu: (e: any) => void;
  setUserData: (e: any) => void;
}

const PractitionerListTable = (props: PractitionerListTableProps) => {
  const [editData, setEditData] = React.useState(null);

  const token = React.useContext(AuthContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchUserData = () => {
    axios.get('http://localhost:8080/practitioners', config).then(
      (d) => props.setUserData(d.data),
      (e) => console.log(e)
    );
  };

  const deleteUserData = (id: number) => {
    axios.delete(`http://localhost:8080/practitioners/${id}`, config).then(
      () => {
        fetchUserData();
        toast.success('Practitioner deleted successfully');
      },
      (e) => {
        console.log(e);
        toast.error('Sorry action cannot be completed');
      }
    );
  };

  const addUserData = (practitionerData: any) => {
    axios.post(`http://localhost:8080/practitioners`, practitionerData, config).then(
      () => {
        fetchUserData();
        toast.success('Practitioner added successfully');
      },
      (e) => {
        console.log(e);
        toast.error('Practitioner couldnot be added');
      }
    );
  };

  const editUserData = (id: number) => {
    if (props.userData) {
      setEditData(props.userData.find((el: any) => el.id === id));
    }
  };

  const handleUserEdit = (userData: any, id: number) => {
    axios.put(`http://localhost:8080/practitioners/${id}`, userData, config).then(
      () => {
        fetchUserData();
        toast.success('Practitioner edited successfully');
      },
      (e) => {
        console.log(e);
        toast.error('Practitioner could not be edited');
      }
    );
  };

  const handleActionMenuClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    props.setIsActionMenu(true);
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="practitionerListTable__wrapper">
        <table className="practitionerListTable" cellSpacing="0">
          <tr className="practitionerListTable__header">
            <th className="text__label-muted">Basic Info</th>
            <th className="text__label-muted">Phone Number</th>
            <th className="text__label-muted">DOB</th>
            <th className="text__label-muted">Start time</th>
            <th className="text__label-muted">End time</th>
          </tr>
          {props.userData.map((data: any) => (
            <PractitionerListItem
              data={data}
              handleActionMenuClick={handleActionMenuClick}
              deleteUserData={deleteUserData}
              editUserData={editUserData}
            />
          ))}
        </table>
        {props.isActionMenu && (
          <PractitionerActionForm
            editData={editData}
            setEditData={setEditData}
            handleUserEdit={handleUserEdit}
            addUserData={addUserData}
            setIsVisible={props.setIsActionMenu}
          />
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default PractitionerListTable;
