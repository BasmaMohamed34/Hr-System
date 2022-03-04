import './sideMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faTv,faSquare,faUserGroup,faHandsHolding } from '@fortawesome/free-solid-svg-icons'
export default function SideMenu(){
    return(
        <div id="sideMenu">
            <div id="dashboard">
            <FontAwesomeIcon icon={faSquare} className='ic_dashboard'/>
            <span className="Dashboard">Dashboard</span>
            </div>
            
            <div id="workplace">
            <FontAwesomeIcon icon={faTv} className='ic_tv'/>
            <span className="Workplace">Workplace</span>
            </div>
            
            <div id="holiday">
            <FontAwesomeIcon icon={faCoffee} className='ic_free_breakfast'/>
            <span class="Holidays">Holidays</span>
            </div>
            
            <div id="employees">
            {/* <span className="user-numbers">5</span>
            <div class="Ellipse-298"></div> */}
            <FontAwesomeIcon icon={faUserGroup} className='ic_supervisor_account'/>
            <span class="Employees">Employees</span>
            </div>
            
            <div id="requests">
            <FontAwesomeIcon icon={faHandsHolding} className='hands'/>
            <span class="inbound-requests">inbound <span id="second">requests</span></span>
            </div>
        </div>
    )
}