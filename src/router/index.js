import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pkged from '@/components/Pkged'
import Other from '@/components/Other'
import Cartoons from '@/components/Cartoons'
import Diy3d from '@/components/Diy3d'
import Javascript from '@/components/Javascript'
import Readtokid  from '@/components/Readtokid'


Vue.use(Router)

const generateRoutes = () => {
  switch (location.hostname) {
    case "diy3dprint.com": {
      return [{path:"/",component:Diy3d}]
    }
    case "thejavascript.com": {
      return [{path:"/", component:Javascript}]
    }
    // case "readtokid.com": {
    //   return [{path:"/", component:Readtokid}]
    // }
  	case "pkged.com": {
  		return [
        {path:'/',component:Pkged},
        {path:'/other',component:Other},
        {path:'/cartoons',component:Cartoons},
      ]
  	}
    default: {
<<<<<<< HEAD
<<<<<<< HEAD
      return [{path:'/',component:Home}]
=======
      return [{path:'/',component:Diy3d}]
>>>>>>> 258fbc373a55423217c97cad02e37dccc1d0842f
=======
      return [{path:'/',component:Javascript}]
>>>>>>> 75d31c0a96c50dcb23288276b7cc4f86c0cd2edf
    }
  }
}


const router = new Router({
  mode:'history',
  routes: generateRoutes()
})
export default router

