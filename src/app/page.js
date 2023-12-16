'use client'
import Link from 'next/link'
import './home.css'
import { users } from './uitls/userList'


export default function Home() {

  
  return (
    <div>

    <div className='homeLayout'>
      Home Page
    </div>
      <li className='lists'>
        {users.map(ele=>
        <ul>
              {/* {ele.name} */}
          <Link href={`./${ele.name}`}>{ele.name}</Link>

          </ul>)}
      </li>
    </div>
  )
}


const User = (props)=>(
  <div>My name is {props.name}</div>
)