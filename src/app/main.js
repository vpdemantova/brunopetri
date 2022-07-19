import '../styles/index.scss';

import Cursor from './components/Cursor';

import HomeScene from './scenes/Home';
import GalleryScene from './scenes/Gallery';
import StoreScene from './scenes/Store';
import AboutScene from './scenes/About';

import HomePage from './pages/Home';
import GalleryPage from './pages/Gallery';
import StorePage from './pages/Store';
import AboutPage from './pages/About';

import Application from './classes/App';

const App = new Application();

const components = [
  {
    component: Cursor,
  },
];

App.initComponents(components);

const routes = [
  {
    component: HomePage,
    scene: HomeScene,
    template: 'home',
  },
  {
    component: GalleryPage,
    scene: GalleryScene,
    template: 'gallery',
  },
  {
    component: StorePage,
    scene: StoreScene,
    template: 'store',
  },
  {
    component: AboutPage,
    scene: AboutScene,
    template: 'about',
  },
];

App.initRoutes(routes);
App.init();

window.App = App;
