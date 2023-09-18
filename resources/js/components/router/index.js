import {createRouter, createWebHistory} from "vue-router";
import invoiceIndex from '../invoices/index.vue'
import invoiceNew from '../invoices/new.vue'
import invoiceShow from '../invoices/show.vue'
import invoiceEdit from '../invoices/edit.vue'
import NotFound from '../NotFound.vue'

const routes = [
    {
        path:'/',
        component:invoiceIndex
    },
    {
        path:'/invoice/new',
        component:invoiceNew
    },{
        path: '/invoice/show/:id',
        component: invoiceShow,
        props:true
    },{
        path: '/invoice/edit/:id',
        component: invoiceEdit,
        props:true
    }
    ,{
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history:createWebHistory('/invoice-app/public/'),
    routes
})

export default router
