import { UserData } from "../../lib/types/typesAndInterfaces"


interface UserRowProps {
  userData: UserData
}


const UserRow = ({userData}: UserRowProps) => {
  
  const {
    id,
    dateJoined,
    status,
    organizationName,
    personalInfo,
  } = userData


  return (
    <div className="user-row">
      <div className="org">
        {organizationName}      
      </div>
      <div className="username">
        {personalInfo.userName}
      </div>
      <div className="email">
        {personalInfo.emailAddress}
      </div>
      <div className="phone-number">
        {personalInfo.phoneNumber}
      </div>
      <div className="date">
        {dateJoined}
      </div>
      <div className="status">
        <span className={`${status}`}>
          {status}
        </span>
      </div>
      <div className="options">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default UserRow