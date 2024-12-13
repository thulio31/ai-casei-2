import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Joao from '@/components/Fotografo/Joao.vue'
import Ana from '@/components/Fotografo/Ana.vue'
import Fabiano from '@/components/Fotografo/Fabiano.vue'
import Paulo from '@/components/Fotografo/Paulo.vue'
import Fotografos from '@/components/Fotografos.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Profile from "@/components/Profile.vue"
import Lugares from '@/components/Lugares/Lugares.vue'
import praiacosta from '@/components/Lugares/praiacosta.vue'
import pontanegra from '@/components/Lugares/pontanegra.vue'
import alameda from '@/components/Lugares/alameda.vue'
import dolees from '@/components/Lugares/dolees.vue'
import igrejacalvario from '@/components/Lugares/igrejacalvario.vue'
import Luas from '@/components/Lua/Luas.vue'
import Santorini from '@/components/Lua/Santorini.vue'
import KohSamui from '@/components/Lua/KohSamui.vue'
import Giethoorn from '@/components/Lua/Giethoorn.vue'
import Zermatt from '@/components/Lua/Zermatt.vue'
import BoraBora from '@/components/Lua/Bora-Bora.vue'
import Noiva from '@/components/Noivos/Noiva.vue'
import Noiva1 from '@/components/Noivos/Noiva1.vue'
import Noiva2 from '@/components/Noivos/Noiva2.vue'
import Noivo from '@/components/Noivos/Noivo.vue'
import Noivo1 from '@/components/Noivos/Noivo1.vue'
import Noivo2 from '@/components/Noivos/Noivo2.vue'
import buffets from '@/components/Servico/buffets.vue'
import buffet1 from '@/components/Servico/buffet1.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
  },
    {
      path: "/login",
      name: "Login",
      component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
},
    {
      path: '/Espacos',
      name: 'Espacos',
      component: () => import('../views/Espacos.vue'),
    },
    
    {
      path: '/Noivos',
      name: 'Noivos',
      component: () => import('../views/Noivos.vue'),
    },
    {
      path: '/Servicos',
      name: 'Servicos',
      component: () => import('../views/Servicos.vue'),
    },
    
    {
      path: '/LuaDeMel',
      name: 'LuaDeMel',
      component: () => import('../views/LuaMel.vue'),
    },
    
    {
      path: '/Fotografos',
      name: 'Fotografos',
      component: Fotografos,
    },
    
    {
      path: '/Joao',
      name: 'Joao',
      component: Joao,
    },

    {
      path: '/Ana',
      name: 'Ana',
      component: Ana,
    },

    {
      path: '/Fabiano',
      name: 'Fabiano',
      component: Fabiano,
    },

    {
      path: '/Paulo',
      name: 'Paulo',
      component: Paulo,
    },
    
    {
      path: '/Lugares',
      name: 'Lugares',
      component: Lugares,
    },

    {
      path: '/praiacosta',
      name: 'praiacosta',
      component: praiacosta,
    },

    {
      path: '/pontanegra',
      name: 'pontanegra',
      component: pontanegra,
    },
    {
      path: '/alameda',
      name: 'alameda',
      component: alameda,
    },
    {
      path: '/dolees',
      name: 'dolees',
      component: dolees,
    },
    {
      path: '/igrejacalvario',
      name: 'igrejacalvario',
      component: igrejacalvario,
    },
    { 
      path: '/Luas',
      name: 'Luas',
      component: Luas,
    },

    {
      path: '/Santorini',
      name: 'Santorini',
      component: Santorini,
    },

    {
      path: '/Giethoorn',
      name: 'Giethoorn',
      component: Giethoorn,
    },
    {
      path: '/KohSamui',
      name: 'KohSamui',
      component: KohSamui,
    },
    {
      path: '/Zermatt',
      name: 'Zermatt',
      component: Zermatt,
    },
    {
      path: '/Bora-Bora',
      name: 'Bora-Bora',
      component: BoraBora,
    },
    {
      path: '/Noiva',
      name: 'Noiva',
      component: Noiva,
    },
    {
      path: '/Noiva1',
      name: 'Noiva1',
      component: Noiva1,
    },

    {
      path: '/Noiva2',
      name: 'Noiva2',
      component: Noiva2,
    },
    {
      path: '/Noivo',
      name: 'Noivo',
      component: Noivo,
    },
    {
      path: '/Noivo1',
      name: 'Noivo1',
      component: Noivo1,
    },
    {
      path: '/Noivo2',
      name: 'Noivo2',
      component: Noivo2,
    },
    {
      path: '/buffets',
      name: 'buffets',
      component: buffets,
    },
    {
      path: '/buffet1',
      name: 'buffet1',
      component: buffet1,
    }
  ],
})

export default router
