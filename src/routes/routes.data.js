import Auth from "../components/screens/auth/Auth";
import Contacts from "../components/screens/contacts/Contacts";
import Employers from "../components/screens/employers/Employers";
import Home from "../components/screens/home/Home.jsx";


export const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path:'/contacts',
    component: Contacts
  },
  {
    path: '/employers',
    component: Employers
  },
  {
    path: '/auth',
    component: Auth
  }
]