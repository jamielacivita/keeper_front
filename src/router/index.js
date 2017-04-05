import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import register from '@/components/register'
import login from '@/components/login'
import createKeep from '@/components/createKeep'
// import readKeeps from '@/components/readKeeps'
import createVault from '@/components/createVault'
// import readVaults from '@/components/readVaults'
// import readVault from '@/components/readVault'
import keeps from '@/components/keeps'
import showKeep from '@/components/showKeep'
import vaults from '@/components/vaults'
import keepList from '@/components/KeepList'
import vaultList from '@/components/VaultList'
import showVault from '@/components/showVault'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/createKeep',
      name: 'createKeep',
      component: createKeep
    },
    // {
    //   path: '/readKeeps',
    //   name: 'readKeeps',
    //   component: readKeeps
    // },
    {
      path: '/createVault',
      name: 'createVault',
      component: createVault
    },
    // {
    //   // path: '/readVaults',
    //   // name: 'readVaults',
    //   // component: readVaults
    // },
    // {
    //   path: '/readVault',
    //   name: 'readVault',
    //   component: readVault
    // },
    {
      path: '/keeps',
      component: keeps,
      children:[
        {
          path:'',
          name:'keeps',
          component:keepList
        },
        {
          path:'new', // NO SLASH IN FRONT!!!
          name:'keeps.new',
          component:createKeep
        },
        {
          path:":id",
          name:"keeps.show",
          component:showKeep
        }
      ]
    },
    {
      path: '/vaults',
      component: vaults,
      children:[
        {
          path:'',
          name:'vaults',
          component:vaultList
        },
        {
          path:'new', // NO SLASH IN FRONT!!!
          name:'vaults.new',
          component:createVault
        },
        {
          path:":id",
          name:"vaults.show",
          component:showVault
        }
      ]
    },
  ]
})
