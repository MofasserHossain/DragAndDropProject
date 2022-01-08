import { Redirect } from 'react-router-dom'
import Home from '../pages/Home/Home'
import FinancialStatement from '../pages/Statement/FinancialStatement'

// open route
// export const publicRoutes = [{ path: '/', component: Home }]

// authenticate route
export const authProtectedRoutes = [
  {
    path: '/financial-statement',
    component: FinancialStatement,
    protected: true,
  },
  { path: '/home', component: Home, protected: false },
  {
    path: '/',
    component: () => <Redirect to="/financial-statement" />,
    protected: true,
  },
]
