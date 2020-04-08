import { createBrowserHistory } from 'history'; 
export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

//import createHistory from 'history/createBrowserHistory';
//export default createHistory();