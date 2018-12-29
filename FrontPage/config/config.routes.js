export default [
    {
        path: '/',
        component: '../layouts/HomeLayout',
        routes:[
            {path:'/',redirect:'/home'},
            {path:'/home', component:'./HomePage/HomePage'}
        ]
    }
]