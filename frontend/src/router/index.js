import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView";
import LayOut from "@/layout/LayOut";
import PersonView from "@/views/PersonView";
// import UserView from "@/views/UserView";
// import PreView from "@/views/PreView";
import TestView from "@/views/TestView";
import GradeView from "@/views/GradeView";
import TrainView from "@/views/TrainView";
import SubmitView from "@/views/SubmitView";

const routes = [
  {
    path: '/',
    redirect:'/login',   
  },
  {
    path: '/login',       
    name: 'login',
    component: LoginView
  },
  {
    path: '/layout',         
    name: 'layout',
    component: LayOut,
    children:[
      {
        path: 'person',          
        name: 'person',
        component: PersonView,
      },
      {
        path: 'user',          
        name: 'user',
        component: GradeView
      },
      {
        path: 'preview',             
        name: 'preview',
        component: TrainView
      },
      {
        path: 'test',
        name: 'test',
        component: TestView
      },
      {
        path: 'submit',
        name: 'submit',
        component: SubmitView
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
