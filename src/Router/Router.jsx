import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registation/Registation";
import Private from "../Private/Private";
import ExistPrivate from "../Private/ExistPrivate";
import SendMoneyInputSection from "../pages/send-money/SendMoney";
import CashOutInputSection from "../pages/Cashout/Cashout";
import TransactionHistory from "../pages/Transfer/Transfer";
import Layout from "../Layout/Layout";
import UserSearch from "../pages/Admin/AdminHome";
import TransactionHistoryAdmin from "../pages/Admin/FullHistory";
import AdminPrivate from "../Private/AdminPrivate";
import AgentHome from "../pages/Agent page/AgentHome";
import CashInInputSection from "../pages/Agent page/CashinFeild";
import Tran from "../pages/Agent page/Tran";
import AgentPrivate from "../Private/AgentPrivate";
import ContactUs from "../pages/Contact/Contact";
import ProfileDetails from "../pages/Admin/Profile";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Private> <UserLayout/></Private>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/sendmoney',
            element: <SendMoneyInputSection></SendMoneyInputSection>
        },
        {
            path:'/cashout',
            element: <CashOutInputSection></CashOutInputSection>
        },
        {
            path:'/contact-us',
            element: <ContactUs></ContactUs>
        },
        {
            path:'/transaction-history',
            element: <TransactionHistory></TransactionHistory>
        }
      ]
    },

    {
       path:'dashboard',
       element:<><Layout></Layout></>,
       children:[
        {
          path:'adminhome',
          element:<AdminPrivate><UserSearch></UserSearch> </AdminPrivate>
        },
        {
          path:'allhistory',
          element:<AdminPrivate><TransactionHistoryAdmin></TransactionHistoryAdmin> </AdminPrivate>
        },
        {
          path:'Admin-profile-detils',
          element:<AdminPrivate><ProfileDetails></ProfileDetails> </AdminPrivate>
        },

        {
          path:'agenthome',
          element:<AgentPrivate><AgentHome></AgentHome> </AgentPrivate>
        },
        {
          path:'cashin',
          element:<AgentPrivate><CashInInputSection></CashInInputSection> </AgentPrivate>
        },
        {
          path:'agent-pay-history',
          element:<AgentPrivate><Tran></Tran> </AgentPrivate>
        }
       ]
    },

    {
        path:'login',
        element:<ExistPrivate><Login></Login></ExistPrivate>
    },
    {
        path:'register',
        element:<ExistPrivate><Registration></Registration></ExistPrivate>
    }
  ]);