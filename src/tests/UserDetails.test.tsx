import {it, expect, } from 'vitest';
import {render, screen} from '@testing-library/react';


import UserList from '../components/UserList/UserList';



// const mockData = {
//   "id": "9038600533",
//   "dateJoined": "Sep 11, 2023 02:11 AM",
//   "status": "blacklisted",
//   "organizationName": "Frost Ltd",
//   "personalInfo": {
//       "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/40.jpg",
//       "fullName": "Zachary Morris",
//       "userName": "zacharymorris",
//       "phoneNumber": "07190322709",
//       "emailAddress": "zacharymorris@gmail.com",
//       "bank": "Fidelity Bank",
//       "bvn": "1870750325",
//       "accountNumber": "6133152200",
//       "savings": 232145,
//       "tier": 3,
//       "specialCode": "KXPWj109k12",
//       "gender": "female",
//       "maritalStatus": "seperated",
//       "children": 2,
//       "typeOfResidence": "Flat"
//   },
//   "educationAndEmployment": {
//       "levelOfEducation": "B.A",
//       "employmentStatus": "self-employed",
//       "sectorOfEmployment": "Other",
//       "durationOfEmployment": "4 years",
//       "monthlyIncome": [
//           400000,
//           900000
//       ],
//       "loanRepayment": 51198,
//       "companyEmail": "zacharymorris@frostltd.com"
//   },
//   "socials": {
//       "twitter": "zachary_morris",
//       "facebook": "Morris Zachary",
//       "instagram": "zachary_morris"
//   },
//   "guarantors": [
//       {
//           "fullName": "Mr. Scott Simpson",
//           "phoneNumber": "01287706320",
//           "emailAddress": "mr.scottsimpson@webmail.com",
//           "relationship": "Uncle"
//       },
//       {
//           "fullName": "Shawn Greene",
//           "phoneNumber": "04128934193",
//           "emailAddress": "shawngreene@webmail.com",
//           "relationship": "Aunt"
//       }
//   ]
// }





it('renders data from api', async () => {
  
  render (<UserList/>)

  const showUser = screen.getByText('zacharymorris')

  expect(showUser).toBeInTheDocument()
})