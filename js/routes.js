
import MainPage from './pages/MainPage/MainPage.js'
import MailPage from './pages/MailPage/MailPage.js'
import NotesPage from './pages/NotesPage/NotesPage.js'
import MapPage from './pages/MapPage/MapPage.js'
import MailMenu from './comps/mailComps/MailMenu.js' //NOT NEEDED AFTER DOIN THE NEW MAIL PAGE


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
    },
    {
        path:'/mail/compose',//TODO: make this page too. currtently routing to mailMenu
        component:MailMenu
    }
];

export default routes;