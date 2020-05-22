/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "./pages/dashboard";


const dashboardRoutes = [
    {
        path: "dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/"
    },
    {
        path: "vehicle",
        name: "Vehicle Catalog",
        icon: Person,
        component: DashboardPage,
        layout: "/"
    },
    {
        path: "table",
        name: "Table List",
        icon: "content_paste",
        component: DashboardPage,
        layout: "/"
    },
    {
        path: "typography",
        name: "Typography",
        icon: LibraryBooks,
        component: DashboardPage,
        layout: "/"
    },
    {
        path: "icons",
        name: "Icons",
        icon: BubbleChart,
        component: DashboardPage,
        layout: "/"
    },
    {
        path: "maps",
        name: "Maps",
        icon: LocationOn,
        component: DashboardPage,
        layout: "/"
    },
    {
        path: "notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        icon: Notifications,
        component: DashboardPage,
        layout: "/"
    }

];

export default dashboardRoutes;
