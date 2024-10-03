import { FormEventHandler, useState } from 'react'
import './App.css'

function App() {

  const [email, setEmail] = useState<string>('')

  const handleSetEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setEmail(e.target.value)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    if (email) {
      console.log(email)
    }else{
      
    }
 
  }

  return (
    <div className="container">
      <header>
        <img src="./logo.svg" alt="" />
      </header>
      <section className='heading'>
        <h1>We are launching <span>soon</span></h1>
        <p>Subscribe and get notified</p>
      </section>
      <form className='form-control' onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="email..." required autoComplete='off' value={email} onChange={handleSetEmail}/>
        <button type='submit'>Notify Me</button>
      </form>
      <section className="showcase">
        <img src="./images/illustration-dashboard.png" alt="" />
      </section>
      <footer >
        <ul>
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <p>&copy; Copyright ping all rights</p>
      </footer>
      
    </div>
  )
}

export default App
