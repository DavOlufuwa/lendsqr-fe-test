import './navigation.styles.scss';
import { NavLink } from 'react-router-dom';
import Avatar from '/assets/images/avatar-icon.png';
import Logo from '/assets/logo/lendsqr-icon.svg';
import SearchIcon from '/assets/icons/search-icon.svg';
import Bell from '/assets/icons/bell.png';
import ArrowDown from '/assets/icons/dropdown.svg';
import DropDown from '/assets/icons/caret-down.svg';
import Briefcase from '/assets/icons/briefcase.svg';
import Dashboard from '/assets/icons/home.svg';
import Users from '/assets/icons/user-friends.svg';
import Guarantors from '/assets/icons/users.svg';
import Loans from '/assets/icons/sack.svg';
import DecisionModels from '/assets/icons/handshake.svg';
import Savings from '/assets/icons/piggy-bank.svg';
import LoanRequests from '/assets/icons/cash-hand.svg';
import WhiteList from '/assets/icons/user-check.svg';
import Karma from '/assets/icons/user-times.svg';
import SavingsProducts from '/assets/icons/bank.svg';
import FeesAndCharges from '/assets/icons/coins-solid.svg';
import Transactions from '/assets/icons/transactions.svg';
import Services from '/assets/icons/galaxy.svg';
import ServiceAccount from '/assets/icons/user-cog.svg';
import Settlements from '/assets/icons/scroll.svg';
import Reports from '/assets/icons/chart-bar.svg';
import Preferences from '/assets/icons/sliders.svg';
import FeesAndPricing from '/assets/icons/badge-percent.svg';
import AuditLogs from '/assets/icons/clipboard-list.svg';
import SystemsMessages from '/assets/icons/tire.svg';
import Logout from '/assets/icons/sign-out.svg';



const Navigation = () => {

  const navClassToggler = ({isActive}:{isActive: boolean}): string => isActive ? "nav-link active-link" : "nav-link"

  

  return (
    <nav>
      <section className='top-navbar'>
        <div>
          <img src={Logo} alt='lendsquare icon' className='lendsqr'/>
        </div>
        <div className='top-options'>
          <div className='search-container'>
            <input className='search-bar' type='search' placeholder='search for anything'/>
            <div>
              <img src={SearchIcon} alt='search icon'/>
            </div>
          </div>
          <div className='profile-container'>
            <p>
              Docs
            </p>
            <div className='notification'>
              <img src={Bell} alt='bell icon' className='bell'/>
              <div>
                Notifications
              </div>
            </div>
            <div className='profile'>
              <img src={Avatar} alt='avatar' className='avatar'/>
              <p>Adedeji</p>
              <img src={DropDown} alt='drop down icon'/>
            </div>
          </div>
        </div>
        <div className='menu-button '>         
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      {/* Side Navigation Bar */}
      <section className='side-navbar'>
      <div className='top-options'>
          <div className='search-container'>
            <input className='search-bar' type='search' placeholder='search for anything'/>
            <div>
              <img src={SearchIcon} alt='search icon'/>
            </div>
          </div>
          <div className='profile-container'>
            <p>
              Docs
            </p>
            <div className='notification'>
              <img src={Bell} alt='bell icon' className='bell'/>
              <div>
                Notifications
              </div>
            </div>
            <div  className='profile'>
              <img src={Avatar} alt='avatar' className='avatar'/>
              <p>Adedeji</p>
              <img src={DropDown} alt='drop down icon'/>
            </div>
          </div>
        </div>
        <div className='side-nav-options'>
          <ul>
            <li>
              <NavLink className={"nav-link organization"} to="/dashboard">              
                <img src={Briefcase} alt='switch organization'/>
                <p>Switch Organization</p>
                <img src={ArrowDown} alt='arrow down icon' className='arrow-down'/>
              </NavLink>
            </li>
            <li>
              <div className='sub-headings dashboard'>
                <img src={Dashboard} alt='dashboard icon'/>
                <p>Dashboard</p>
              </div>        
            </li>
          </ul>
          <div className='sub-headings'>
            CUSTOMERS
          </div>
          <ul>
            <li>
              <NavLink className={navClassToggler} to="/">
                <img src={Users} alt='users icon'/>
                <p>Users</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={Guarantors} alt='guarantors icon'/>
                <p>Guarantors</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={Loans} alt='loans icon'/>
                <p>Loans</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={DecisionModels} alt='decision models icon'/>
                <p>Decision Models</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={Savings} alt='savings icon'/>
                <p>Savings</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={LoanRequests} alt='loan requests icon'/>
                <p>Loan Requests</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={WhiteList} alt='whitelist icon'/>
                <p>Whitelist</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={Karma} alt='karma icon'/>
                <p>Karma</p>
              </NavLink>
            </li>
          </ul>
          <div className='sub-headings'>
            BUSINESSES
          </div>
          <ul>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={Briefcase} alt='organization icon'/>
                <p>Organization</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={LoanRequests} alt='loan products icon'/>
                <p>Loan Products</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={SavingsProducts} alt='savings products icon'/>
                <p>Savings Products</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={FeesAndCharges} alt='fees and charges icon'/>
                <p>Fees and Charges</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={Transactions} alt='transactions icon'/>
                <p>Transactions</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={Services} alt='services icon'/>
                <p>Services</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={ServiceAccount} alt='service account icon'/>
                <p>Service Account</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={Settlements} alt='settlements icon'/>
                <p>Settlements</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={Reports} alt='reports icon'/>
                <p>Reports</p>
              </NavLink>
            </li>
          </ul>
          <div className='sub-headings'>
            SETTINGS
          </div>
          <ul>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={Preferences} alt='preferences icon'/>
                <p>Preferences</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={FeesAndPricing} alt='fees and pricing icon'/>
                <p>Fees and Pricing</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={AuditLogs} alt='audit logs icon'/>
                <p>Audit Logs</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={navClassToggler} to="">
                <img src={SystemsMessages} alt='systems messages icon'/>
                <p>Systems Messages</p>
              </NavLink>
            </li>
          </ul> 
          <div className='sub-heading'>
            <img src={Logout} alt='log out icon'/>
            <p>Logout</p>
          </div>
          <div>
            v.1.2.0
          </div>         
        </div>
      </section>
    </nav>
  )
}

export default Navigation