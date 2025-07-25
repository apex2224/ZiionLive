
import Main from "../Components/main-container/Main";
// import Pricing from "../Components/Pricing/Pricing";
import Integrationnextsection from '../Components/integration/Integration'
import Apphero from "../Components/apps/Apphero";
import Help from '../Components/help/Help'
import HelpTopicArticles from "../Components/help/HelpTopicArticles";


// further menu 
import Widgets from '../Components/furtherMenu/widget/Widgets'
import KnowledgeBase from "../Components/furtherMenu/Knowledge/KnowledgeBase";
import AiChatbot from '../Components/furtherMenu/aichatbot/AiChatbot'
import SignUpForm from "../Components/signUp_Login/signUpForm";
import LoginForm from "../Components/signUp_Login/LoginForm";
import MainDashboard from "../Components/Dashboard/MainDashboard";
import AI from '../Components/furtherMenu/AI/AI'
import SharedInbox from "../Components/furtherMenu/SharedInbox/SharedInbox";


import ForgotPasswordForm from "../Components/signUp_Login/forgot/ForgotPasswordForm";
import ResetPassword from "../Components/signUp_Login/forgot/ResetPassword";
import Wordpress from "../Components/furtherMenu/integrateapps/Wordpress";

import CoursesCard from "../Components/allCourses/CoursesCard";


// new routing updated


import AboutUs from "../Components/AboutUs/AboutUs";



 

export const routes=[
    {path:'/',  element:<Main/> },
    // { path:'/aboutus',  element:<Pricing/> },
    { path:'/placement',  element:<Integrationnextsection/> },
    {path: '/services', element: <Apphero/>},
     { path:'/contact-us',  element:<Help/> },
      { path: "/help/:topicName", element:<HelpTopicArticles/>},

      {path: '/allcourses', element:<CoursesCard/>},

  // further menu
    { path : '/widget', element : <Widgets/>},
    {path:'/knowledge', element:<KnowledgeBase/>},
    { path: '/aichatbot', element:<AiChatbot/>},

    {path: '/ai', element:<AI/>},

    {path:'/sharedInbox', element:<SharedInbox/>},



    { path:'/signup',  element:<SignUpForm/> },
    { path:'/login',  element:<LoginForm/> },
    { path:'/inbox',  element:<MainDashboard/> },
    { path:'/forgotpassword',  element:<ForgotPasswordForm/> },
    { path:'/resetpassword',  element:<ResetPassword/> },

    // app integration
    { path : '/wordpress', element: <Wordpress/>},


    // new routing updated
 { path:'/aboutus',  element:<AboutUs/> },
    

    
]