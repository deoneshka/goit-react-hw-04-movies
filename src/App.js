import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';
import Loader from "react-loader-spinner";
import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
);

const MoviesView = lazy(() =>
  import('./views/MoviesView/MoviesView' /* webpackChunkName: "movies-view" */),
);

const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView' /* webpackChunkName: "movie-details-view" */
  ),
);

const App = () => (
  <div className="container">
    <AppBar />

    <Suspense fallback={
      <Loader
        type="Rings"
        color="#00BFFF"
        height={80}
        width={80} />
    }>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route exact path={routes.movies} component={MoviesView} />
        <Route path={routes.movieDetails} component={MovieDetailsView} />
        <Route component={HomeView} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
