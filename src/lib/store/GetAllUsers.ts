import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserData } from "../types/typesAndInterfaces";




export const useAllUsersStore = create<{
  allUsers: UserData[],
  setAllUsers: (allusers: UserData[]) => void,
  changeUserStatus: (specificUser: UserData, newStatus: string) => void
}>()(persist(
  (set) => (
    {
      allUsers: [],
      // setting all users data 
      setAllUsers: (users: UserData[]) => set(() => ({ allUsers: users })),
      // changing the user status
      changeUserStatus: (specificUser: UserData, newStatus: string) => set((state) => (
      // Finding the specific user and changing the user's status
        {
          // checking if the user's id is equal to the specific user's id
          // if it is true, change the user's status, else return the user
          allUsers: state.allUsers.map((user) => (
            user.id === specificUser.id ? {...user, status: newStatus} : user
          ))
        } 
      ))
    }
  ),
  // Creating the name of the data that will be stored in the local storage
  {
    name: "lendsqrUsers"
  }
))

// Fetching the Mock User Data from the API
fetch("https://run.mocky.io/v3/1c59efc1-78c7-4b15-b1b0-8ec11a454d07")
.then(res => res.json())
.then(data => {
  useAllUsersStore.getState().setAllUsers(data)
})
