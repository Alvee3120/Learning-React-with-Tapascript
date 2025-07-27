import React from 'react'
import Usercard from './Usercard';

function Userlist() {
    const USERS = [
  {
    id: 1,
    name: "Alvee Hossain",
    age: 24,
    profileUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "alvee.hossain@example.com",
  },
  {
    id: 2,
    name: "Mahia Rahman",
    age: 22,
    profileUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mahia.rahman@example.com",
  },
  {
    id: 3,
    name: "Sakib Ahmed",
    age: 27,
    profileUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    email: "sakib.ahmed@example.com",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    age: 25,
    profileUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    email: "nusrat.jahan@example.com",
  },
  {
    id: 5,
    name: "Rafiul Karim",
    age: 23,
    profileUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "rafiul.karim@example.com",
  },
  {
    id: 6,
    name: "Meherin Tasnim",
    age: 21,
    profileUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    email: "meherin.tasnim@example.com",
  },
  {
    id: 7,
    name: "Tanvir Islam",
    age: 28,
    profileUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    email: "tanvir.islam@example.com",
  },
  {
    id: 8,
    name: "Sabina Akter",
    age: 26,
    profileUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    email: "sabina.akter@example.com",
  },
  {
    id: 9,
    name: "Ashik Mahmud",
    age: 24,
    profileUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    email: "ashik.mahmud@example.com",
  },
  {
    id: 10,
    name: "Tahia Alam",
    age: 23,
    profileUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    email: "tahia.alam@example.com",
  },
];



  return (
    <>
    
    <div className='flex flex-wrap items-center gap-4 px-10'> 
        <Usercard Users={USERS} />
    </div>
    
    
    </>
  )
}

export default Userlist