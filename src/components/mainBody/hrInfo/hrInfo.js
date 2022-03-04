import './hrInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBell } from '@fortawesome/free-solid-svg-icons'
const HrInfo=()=>{
    let timeType="Pm";
    const date=new Date();
    const getDayName=dayindex=>{
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayindex]
    }
    const getHours=()=>{
        if(date.getHours()>=1 && date.getHours()<=12) return date.getHours();
        else return date.getHours()-12; 
    }
    const getTimeType=()=>{
        if(date.getHours()>=1 && date.getHours()<=12) timeType="Am"
        return timeType;
    }
    return(
        <ul id="info" className="pt-4">
        <li id="date">{getDayName(date.getDay())},{date.toString().slice(8,10)} {date.toString().slice(4,7)} {getHours()}:{date.getMinutes()}:{date.getSeconds()} {getTimeType()}</li>
        <li><button className="bttn">sign In</button></li>
        <li className="bell"><FontAwesomeIcon icon={faBell} className='ic_notifications_active'/></li>
        <li><img src="user.png" className="profile-circle" alt=""/></li>
        <li><span className="user-name">Ahmed Khaled</span> <FontAwesomeIcon icon={faAngleDown} className='ic_keyboard_arrow_left'/></li>
        </ul>
    )
}


export default HrInfo;