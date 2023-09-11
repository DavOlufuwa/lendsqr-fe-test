import ReactPaginate from "react-paginate"
import { useState, useMemo, ChangeEvent } from "react"
import { useAllUsersStore } from "../../lib/store/useAllUsers"
import FilterComponent from "./FilterComponent"
import UserRow from "./UserRow"
import './userlist.styles.scss'
import RightArrow from '/assets/icons/arrow-right.svg'
import LeftArrow from '/assets/icons/arrow-left.svg'



const UserList = () => {

  const userList = useAllUsersStore((state) => state.allUsers)
  
  // creating pagination
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [usersPerPage, setUsersPerPage] = useState<number>(10)
  
  // handling page changes
  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  const handleUsersPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(e.target.value)
    setUsersPerPage(newValue)
  }


  const startIndex = currentPage * usersPerPage;
  const endIndex  = startIndex + usersPerPage;

  const displayedUsers = useMemo(() => userList.slice(startIndex, endIndex), [startIndex, endIndex])

  const customNextLabel = (
    <img src={RightArrow} alt="next button"/>
  )
  const customPrevLabel = (
    <img src={LeftArrow} alt="previous button"/>
  )

  return (
    
      <div className="user-list">
        <div className="swipe-help">swipe horizontally to view more details</div>
        <section className="content">
          <section className="table">
            <div className='headers'>
              <div className='organization'>
                <p>Organization</p>
                <div className='filter'>
                  <FilterComponent />
                </div>
              </div>
              <div className='username'>
                <p>Username</p>
                <div className='filter'>
                  <FilterComponent />
                </div>
              </div>
              <div className='email'>
                <p>Email</p>
                <div className='filter'>
                  <FilterComponent />
                </div>
              </div>
              <div className='phone-num'>
                <p>Phone Number</p>
                <div className='filter'>
                  <FilterComponent />
                </div>
              </div>
              <div className='date-joined'>
                <p>Date Joined</p>
                <div className='filter'>
                  <FilterComponent />
                </div>
              </div>
              <div className='status'>
                <p>Status</p>
                <div className='filter'>
                  <FilterComponent />
                </div>
              </div>
            </div>
            {
              displayedUsers.map((user) => 
                <UserRow key={user.id} userData={user}/>
              )
            }
          </section>
        </section>
      <section className="pagination">      
        <div className="page-guide">
          <span>Showing</span> 
          <select  
            value = {usersPerPage}
            onChange={handleUsersPerPageChange}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          out of 100
        </div>
        <div>
          <ReactPaginate
            previousLabel={customPrevLabel}
            nextLabel={customNextLabel}
            breakLabel={"..."}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={Math.ceil(userList.length / usersPerPage)}
            onPageChange={handlePageChange}
            containerClassName={"pagination-container"}
            previousLinkClassName={"prevBtn"}
            nextClassName="next"
            previousClassName="prev"
            nextLinkClassName={"nextBtn"}
            disabledClassName={"disabled"}
            activeClassName={"active-page"}
            breakClassName={"break"}
            
          />
        </div>
      </section>
    </div>     
  )
}

export default UserList