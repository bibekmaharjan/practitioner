import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import dotsIcon from '../../assets/images/dots-icon.png';
import PractitionerActionForm from './PractitionerActionForm';
 
interface PractitionerListItemProps {data: {
    dob: string,
    name: string,
    email: string,
    userImg: string,
    contact: string,
    endTime: string,
    startTime: string
  }}

const PractitionerListItem = (props:PractitionerListItemProps) => {

   const { data } = props;
   const navigate = useNavigate();
    const [isMenu, setIsMenu] = React.useState(false)
    const [isActionMenu, setIsActionMenu] = React.useState(false)

    const onRowClick = () => {
        navigate('/profile/19')
    }

    const handleMenuClick = (e:any) => {
        e.stopPropagation();
        e.preventDefault();
        setIsMenu(!isMenu)
    }

    const handleActionMenuClick = (e:any) => {
        e.stopPropagation();
        e.preventDefault();
        setIsActionMenu(true);
        setIsMenu(false);
    }

  return (
    <>
        <tr className='practitionerListTable__row' onClick={onRowClick}>
            <td className='practitionerListTable__userInfo'>
                <img src={data.userImg} alt="" className="practitionerListTable__userInfo-img" />
                <div className="practitionerListTable__userInfo-wrapper">
                    <span className="text__title-med">{data.name}</span>
                    <span className="text__sm--mute">{data.email}</span>
                </div>
            </td>
            <td><span className="text__label">{data.contact}</span></td>
            <td><span className="text__label">{data.dob}</span></td>
            <td><span className="text__label">{data.startTime}</span></td>
            <td><span className="text__label">{data.endTime}</span></td>
            <td className='practitionerListTable__userInfo-dotsMenu--container'>
                <img src={dotsIcon} onClick= {handleMenuClick} className="practitionerListTable__userInfo-dotsIcon" alt="" />
                {
                    isMenu &&
                    <div className="practitionerListTable__userInfo-dotsMenu">
                        <span className="text__label-muted" onClick= {handleActionMenuClick}>Edit Practitioner</span>
                        <span className="text__label-muted" onClick= {handleActionMenuClick}>Delete Practitioner</span>
                    </div>
                }
            </td>
        </tr>
        {
            isActionMenu &&
            <PractitionerActionForm setIsVisible= {setIsActionMenu}/>
        }
    </>
  );
};


export default PractitionerListItem;
