export default [
    {
        path:'/EMS',
        component:'../layouts/EMSLayout',
        routes:[
            {path:'/EMS', redirect:'/EMS/login'},
            {path:'/EMS/login', component:'./LoginPage/index'},
            {path:'/EMS/homepage', component:'./HomePage/HomePage'}
        ]
    }
]