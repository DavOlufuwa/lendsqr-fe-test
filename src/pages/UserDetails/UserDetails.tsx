import { Link, useParams } from 'react-router-dom'
import { useAllUsersStore } from '../../lib/store/useAllUsers'
import BackArrow  from '/assets/icons/back-arrow.svg'
import Button from '../../components/Button/Button'
import UserDetailsCard from '../../components/UserDetailsCard/UserDetailsCard'
import './userdetails.styles.scss'

const UserDetails = () => {

  const { id } = useParams()

  const filteredUsers = useAllUsersStore((state) => state.filteredUsers)

  const user = filteredUsers.find((user) => user.id === id)!

  return (
    <div className='details-container'>
      <section>
        <Link to={'/users'}>
          <img src={BackArrow} alt='back arrow'/>
          <span>Back to Users</span>
        </Link>
      </section>
      <section>
        <h1>User Details</h1>
        <div>
          <Button buttonType='blacklist'>BlackList user</Button>
          <Button buttonType='activate'>Activate user</Button>
        </div>
      </section>
      <section>
        <UserDetailsCard  userDetails={user}/>
      </section>
    </div>
  )
}

export default UserDetails