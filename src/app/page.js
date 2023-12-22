'use client'
import Link from 'next/link'
import './home.css'
import { users } from './uitls/userList'
import Image from 'next/image'
import Profile from '../../public/vercel.svg'


export default function Home() {
  console.log(Profile)

  return (
    <div>

    <div className='homeLayout'>
      Home Page
    </div>
      {/* <Image src={Profile}  />
      <img src={Profile.src}/> */}
      <Image src= 'https://images.unsplash.com/photo-1703001376280-fbd9fc684136?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={1300}
      height={1400}/>
      <h3>
        <Link href={'./products'}>Go to server Products</Link>
      </h3>
      <h3>
        <Link href={'./productlist'}>Go to Client Products</Link>
      </h3>
      <h3>
        <Link href={'./allproducts'}>Go to All Products</Link>
      </h3>
    </div>
  )
}


const User = (props)=>(
  <div>My name is {props.name}</div>
)