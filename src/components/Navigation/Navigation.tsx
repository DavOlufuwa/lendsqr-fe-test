import './navigation.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '/assets/logo/lendsqr-icon.svg';
import SearchIcon from '/assets/icons/search-icon.svg';
import Bell from '/assets/icons/bell.svg';
import DropDown from '/assets/icons/dropdown.svg';
import ArrowDown from '/assets/icons/arrow-down.svg';
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
  return (
    <nav>
      <section>
        <div>
          <img src={Logo} alt='lendsquare icon'/>
        </div>
        <div className='horizontal-options'>
          <div>
            <input />
            <div>
              <img src={SearchIcon} alt='search icon'/>
            </div>
          </div>
          <div>
            <div>
              Docs
            </div>
            <div>
              <img src={Bell} alt='bell icon'/>
            </div>
            <div>
              <img src="" alt='avatar'/>
              <p>Adedeji</p>
              <img src={DropDown} alt='drop down icon'/>
            </div>
          </div>
          <div>
          </div>
        </div>
      </section>
      {/* Side Navigation Bar */}
      <section className='side-navbar'>
        <ul>
          <li>
            <Link to="/">              
              <img src={Briefcase} alt='switch organization'/>
              <p>Switch Organization</p>
              <img src={ArrowDown} alt='arrow down icon'/>
            </Link>
          </li>
          <li>        
            <img src={Dashboard} alt='dashboard icon'/>
            <p>Dashboard</p>
          </li>
        </ul>
        <div>
          CUSTOMERS
        </div>
        <ul>
          <li>
            <Link to="/users">
              <img src={Users} alt='users icon'/>
              <p>Users</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Guarantors} alt='guarantors icon'/>
              <p>Guarantors</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Loans} alt='loans icon'/>
              <p>Loans</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={DecisionModels} alt='decision models icon'/>
              <p>Decision Models</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Savings} alt='savings icon'/>
              <p>Savings</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={LoanRequests} alt='loan requests icon'/>
              <p>Loan Requests</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={WhiteList} alt='whitelist icon'/>
              <p>Whitelist</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Karma} alt='karma icon'/>
              <p>Karma</p>
            </Link>
          </li>
        </ul>
        <div>
          BUSINESSES
        </div>
        <ul>
          <li>
            <Link to="">
              <img src={Briefcase} alt='organization icon'/>
              <p>Organization</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={LoanRequests} alt='loan products icon'/>
              <p>Loan Products</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={SavingsProducts} alt='savings products icon'/>
              <p>Savings Products</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={FeesAndCharges} alt='fees and charges icon'/>
              <p>Fees and Charges</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Transactions} alt='transactions icon'/>
              <p>Transactions</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Services} alt='services icon'/>
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={ServiceAccount} alt='service account icon'/>
              <p>Service Account</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Settlements} alt='settlements icon'/>
              <p>Settlements</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Reports} alt='reports icon'/>
              <p>Reports</p>
            </Link>
          </li>
        </ul>
        <div>
          SETTINGS
        </div>
        <ul>
          <li>
            <Link to="">
              <img src={Preferences} alt='preferences icon'/>
              <p>Preferences</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={FeesAndPricing} alt='fees and pricing icon'/>
              <p>Fees and Pricing</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={AuditLogs} alt='audit logs icon'/>
              <p>Audit Logs</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={SystemsMessages} alt='systems messages icon'/>
              <p>Systems Messages</p>
            </Link>
          </li>
        </ul>
        <div>
          <div>
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