import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pkged from '@/components/Pkged'
import Other from '@/components/Other'
import Cartoons from '@/components/Cartoons'
import Diy3d from '@/components/Diy3d'


Vue.use(Router)

const generateRoutes = () => {
  switch (location.hostname) {
    case "diy3dprint.com": {
      return [{path:"/",component:Diy3d}]
    }
  	case "pkged.com": {
  		return [
        {path:'/',component:Pkged},
        {path:'/other',component:Other},
        {path:'/cartoons',component:Cartoons},
      ]
  	}
    default: {
<<<<<<< HEAD
      return [{path:'/',component:Home}]
=======
      return [{path:'/',component:Diy3d}]
>>>>>>> 258fbc373a55423217c97cad02e37dccc1d0842f
    }
  }
}


const router = new Router({
  mode:'history',
  routes: generateRoutes()
})
export default router

