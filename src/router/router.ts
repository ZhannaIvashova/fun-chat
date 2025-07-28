//import ErrorNotFound from '../components/errorComponent/errorNotFound';

type RouteHandler = () => void;

const routes: Record<string, RouteHandler> = {};
//let rootElement: HTMLElement;

const onHashChange = () => {
  const hash = window.location.hash.slice(1) || '/';
  const route = routes[hash];

  if (route) {
    route();
  } else {
    //routes['/']();
    //ErrorNotFound(rootElement);
  }
};

const addRoute = (path: string, callback: RouteHandler) => {
  routes[path] = callback;
};

const navigate = (path: string) => {
  window.location.hash = path;
};

const initRouter = () => {
  //rootElement = root;
  window.addEventListener('hashchange', onHashChange);
  onHashChange();
};

export { addRoute, navigate, initRouter };
