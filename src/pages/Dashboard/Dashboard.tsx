import { useMemo } from 'react'
import './dashboard.styles.scss'
import UserlistIcon from '/assets/icons/users-list.svg'
import ActiveUsers from '/assets/icons/active-users.svg'
import UserLoans from '/assets/icons/users-loans.svg'
import UserSavings from '/assets/icons/users-savings.svg'
import UserList from '../../components/UserList/UserList'
import { useAllUsersStore } from '../../lib/store/useAllUsers'


const Dashboard = () => {

  const numberofUsers = useAllUsersStore((state) => state.allUsers.length)
  const filteredUsers = useAllUsersStore((state) => state.filteredUsers)
  
  const activeUsers = useMemo(() => filteredUsers.filter((user) => user.status === 'active').length, [filteredUsers])


  return (
    <div className='dashboard-container'>
      <section className='title'>
        Users
      </section>
      <section className='stats'>
        <div className='stat-card'>
          <div><img src={UserlistIcon} alt='users list icon'/></div>
          <p className='users'>Users</p>
          <div className='number'>{numberofUsers}</div>
        </div>
        <div className='stat-card'>
          <div><img src={ActiveUsers} alt='active users icon'/></div>
          <p className='users'>Active Users</p>
          <div className='number'>{activeUsers}</div>
        </div>
        <div className='stat-card'>
          <div><img src={UserLoans} alt='users with loans icon'/></div>
          <p className='users'>Users with loans</p>
          <div className='number'>12,453</div>
        </div>
        <div className='stat-card'>
          <div><img src={UserSavings} alt='users with savings icon'/></div>
          <p className='users'>Users with savings</p>
          <div className='number'>102,453</div>
        </div>
      </section>
      <section>
        <UserList />
      </section>
    </div>
  )
}

export default Dashboard