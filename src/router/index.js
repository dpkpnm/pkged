import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pkged from '@/components/Pkged'


Vue.use(Router)

const generateRoutes = () => {
  switch (location.hostname) {
  	case "pkged.com": {
  		return [{path:'/',component:Pkged}]
  	}
    default: {
      return [{path:'/',component:Home}]
    }
  }
}


const router = new Router({
  mode:'history',
  routes: generateRoutes()
})
export default router

