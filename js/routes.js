
import MainPage from './pages/MainPage.js'
import MailPage from './pages/MailPage.js'
import NotesPage from './pages/NotesPage.js'
import MapPage from './pages/MapPage.js'


const routes = [
    {
        path:'/',
        component:MainPage
    }, 
    {
        path:'/mail',
        component:MailPage
    }, 
    {
        path:'/notes',
        component:NotesPage
    },
    {
        path:'/map',
        component:MapPage
    }
];

export default routes;