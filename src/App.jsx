import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import PaymentPage from './Components/PaymentPage'
import UserInfoForm from './Components/UserInfoForm'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/second-page' element={<PaymentPage/>} />
        <Route path="/form" element={<UserInfoForm />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
