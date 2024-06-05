import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import Home from './components/modules/public/home'
import Services from './components/modules/public/services'
import Customise from './components/modules/public/customise'
import Consultation from './components/modules/public/consultation'
import FAQ from './components/modules/public/faq'
import Business from './components/modules/public/business'
import Subscription from './components/modules/public/subscription'
import Pricing from './components/modules/public/pricing'
import ComingSoon from './components/modules/public/comingSoon'
import BusinessFormation from './components/modules/public/businessFormation'
import CustomiseDocumentProvider from './components/modules/public/customiseDocument'
import BookConsultationProvider from './components/modules/public/bookConsultation'
import BusinessRegistrationProvider from './components/modules/public/businessRegistration'
import BusinessReservationProvider from './components/modules/public/businessReservation'
import Login from './components/modules/public/login'
import Settings from './components/modules/app/settings'
import SignUp from './components/modules/public/signUp'
import Payment from './components/modules/app/payment'
import FAQTopic from './components/modules/public/faq/FAQTopic'
import EditPayment from './components/modules/app/settings/EditPayment'
import ChangePlan from './components/modules/app/settings/ChangePlan'
import DocumentThank from './components/modules/public/customiseDocument/DocumentThank'
import BusinessThank from './components/modules/public/businessRegistration/BusinessThank'
import ConsultationThank from './components/modules/public/bookConsultation/ConsultationThank'
import AdminLogin from './components/modules/admin/login'
import Admin from './components/modules/admin/index'
import { useAuthContext } from './components/context/authContext'
import { useEffect } from 'react'

// wrap app with context, context returns isAuthenticated state

function App() {
  const { token } = useAuthContext()
  const isAuthenticated = Boolean(token)
  return (
    // prettier-ignore
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customise" element={<Customise />} />
        <Route path="/business" element={<Business />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/coming" element={<ComingSoon />} />
        <Route path="/business/formation" element={<BusinessFormation />} />
        <Route path="/business/reservation" element={<BusinessReservationProvider />} />
        <Route path="/business/registration" element={<BusinessRegistrationProvider />} />
        <Route path="/customise/document" element={<CustomiseDocumentProvider />} />
        <Route path="/consultation/book" element={<BookConsultationProvider />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/faq/topic" element={<FAQTopic />} />
        <Route path="/editpayment" element={<EditPayment />} />
        <Route path="/changeplan" element={<ChangePlan />} />
        <Route path="/documentthankyou" element={<DocumentThank />} />
        <Route path="/businessthankyou" element={<BusinessThank />} />
        <Route path="/consultationthankyou" element={<ConsultationThank />} />

        {/* Admin Login page route */}
        <Route path="/Adminlogin" element={<AdminLogin />} />

        {/* Temporarily removing admin route from protected route */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* protected route */}
        {/* if is authenticated render these routes */}
        {isAuthenticated ? <>  
        <Route path="/settings" element={<Settings />} />    
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Redirect to="/" />} />
        </> : 
        
        <Route path="/login" element={<Login />} /> 

        }


        <Route path="/*" element={<Redirect />} />


      </Routes>
    </BrowserRouter>
  )
}

function Redirect({ to }: { to?: string }) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    navigate(to ?? `/login?to=${location.pathname}`)
  }, [])
  return null
}

function AdminRoutes() {
  return (
    <Routes>
      {/* Nested routes for admin */}
      <Route path="/*" element={<Admin />} />
      {/* Add more admin sub-routes as needed */}
    </Routes>
  )
}

export default App
