import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserData } from "../types/typesAndInterfaces";


interface UserStore {
  allUsers: UserData[];
  setAllUsers: (allusers: UserData[]) => void;
  changeUserStatus: (id: string, newStatus: string) => void;
  filteredUsers: UserData[];
  setFilteredUsers: (filterData: UserData[]) => void;
  resetUsers: () => void;
}


export const useAllUsersStore = create<UserStore>()(persist(
  (set,) => (
    {
      allUsers: [],
      // setting all users data 
      setAllUsers: (users: UserData[]) => set(() => ({ allUsers: users })),
      // changing the user status
      changeUserStatus: (id, newStatus) => set((state) => (
        {
          filteredUsers: state.filteredUsers.map((user) => (
            user.id === id ? {...user, status: newStatus} : user
          ))
        } 
      )),
      // filtering the users
      filteredUsers: [],
      setFilteredUsers: (filterData) => set({filteredUsers: filterData}),
      resetUsers: () => set((state)=> ({filteredUsers: state.allUsers}))
        
    }),

  // Creating the name of the data that will be stored in the local storage
  {
    name: "lendsqrUsers"
  }
))

// Fetching the Mock User Data from the API
fetch("https://run.mocky.io/v3/f7a41ca7-df9f-4769-a28c-7b81886456f1")
.then(res => res.json())
.then(data => {
  useAllUsersStore.getState().setAllUsers(data.reverse())
})
