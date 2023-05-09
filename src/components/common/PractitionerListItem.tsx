import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { formatDate } from 'src/utils/datetime';
import dotsIcon from '../../assets/images/dots-icon.png';
import { DATETIME_FORMAT, DATE_FORMAT } from 'src/constants/date';

interface PractitionerListItemProps {
  handleActionMenuClick: (e: any) => void;
  editUserData: (e: any) => void;
  deleteUserData: (id: number) => void;
  data: any;
}

const PractitionerListItem = (props: PractitionerListItemProps) => {
  const { data } = props;
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = React.useState(false);

  const onRowClick = () => {
    navigate(`/profile/${data.id}`);
  };

  const handleMenuClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsMenu(!isMenu);
  };

  const handleEditClick = (e: any) => {
    setIsMenu(!isMenu);
    props.editUserData(data.id);
    props.handleActionMenuClick(e);
  };

  const handleDelete = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    props.deleteUserData(data.id);
  };

  return (
    <>
      <tr className="practitionerListTable__row" onClick={onRowClick}>
        <td className="practitionerListTable__userInfo">
          <img src={data.userImg} alt="" className="practitionerListTable__userInfo-img" />
          <div className="practitionerListTable__userInfo-wrapper">
            <span className="text__title-med">{data.fullName}</span>
            <span className="text__sm--mute">{data.email}</span>
          </div>
        </td>
        <td>
          <span className="text__label">{data.contact}</span>
        </td>
        <td>
          <span className="text__label">{formatDate(data.dob, DATE_FORMAT)}</span>
        </td>
        <td>
          <span className="text__label">{formatDate(data.startTime, DATETIME_FORMAT)}</span>
        </td>
        <td>
          <span className="text__label">{formatDate(data.endTime, DATETIME_FORMAT)}</span>
        </td>
        <td className="practitionerListTable__userInfo-dotsMenu--container">
          <img src={dotsIcon} onClick={handleMenuClick} className="practitionerListTable__userInfo-dotsIcon" alt="" />
          {isMenu && (
            <div className="practitionerListTable__userInfo-dotsMenu">
              <span className="text__label-muted" onClick={(e) => handleEditClick(e)}>
                Edit Practitioner
              </span>
              <span className="text__label-muted" onClick={handleDelete}>
                Delete Practitioner
              </span>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default PractitionerListItem;
