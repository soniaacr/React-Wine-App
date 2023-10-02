import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import { Contact } from '../pages/Contact'
import { About } from '../pages/About'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },
    {
      path: "/contact",
      component: Contact,
      name: "Contact",
      protected: false
    },
    {
      path: "/About",
      component: About,
      name: "About",
      protected: false
    },
  ];

export default routes