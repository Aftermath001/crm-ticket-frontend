import React,{useState} from 'react'
import './entrystyle.css'
import Login from '../../components/login/Login'



const Entrypage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnChange = e =>{
        const {name, value} = e.target;
        switch(name){
            case 'email':
                setEmail(value)
                break
            
            case 'password':
                setPassword(value)
                break

            default:
                break
        }

        // console.log (name, value)

    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!email || !password){
           return alert("Fill User Credentials");
        }
        console.log(email,password)
    }
  return (
    <div className='entry-page bg-black'>
        <Login
        handleOnSubmit={handleOnSubmit} 
        handleOnChange={handleOnChange}
        email={email}
        password={password}
        />
    </div>
  )
}

export default Entrypage