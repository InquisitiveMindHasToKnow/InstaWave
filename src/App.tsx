import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'
import RootLayout from './_root/RootLayout'
import './globals.css'
import { Routes, Route} from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
          {/* Public Routes (Everyone's able to see) */}
          <Route element={<AuthLayout />} >
            <Route path='/sign-in' element={<SigninForm />} />
            <Route path='/sign-up' element={<SignupForm />} />
          </Route>
            

          {/* Private Routes (Able to see only if signed inx) */}
          <Route element={<RootLayout />} >
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Toaster />
    </main>
  )
}

export default App