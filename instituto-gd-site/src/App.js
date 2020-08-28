import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Papa from 'papaparse';
import _ from 'lodash';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import data from './data/data';
import Navmenu from './Components/Nav';
import Home from './Pages/Home';
import Movimento from './Pages/Movimento';
import Category from './Pages/Category';
import ScrollToTop from './Components/ScrollToTop';
import Laboratorio from './Pages/Laboratorio';
import Footer from './Components/Footer';

data.categories.inspiracional.videos = [];

class App extends Component {
  state = {
    data: data,
    lang: 'pt',
    videosToFetch: [
      {
        category: 'inspiracional',
        url:
          'https://docs.google.com/spreadsheets/d/1YHPPm57RCGaZk8sgzbkWHjWlBgplILzXka6W6REtRLk/gviz/tq?tqx=out:csv',
      },
    ],
  };
  componentDidMount() {
    const queryString = window.location.href;
    console.log(queryString);
    if (queryString.includes('lang=en')) {
      console.log('lalalala');
      const lang = 'en';
      this.setState({ lang });
    }
    this.state.videosToFetch.map((item) => {
      Papa.parse(item.url, {
        download: true,
        header: true,
        complete: (results) => {
          var res = results.data;
          res = _.filter(res, { publicar_no_site: 'SIM' });
          res = _.orderBy(res, ['destaque', 'ordem'], ['desc', 'desc']);
          res = res.map((video) => {
            video.identificador = video.identificador.trim();
            return video;
          });
          data.categories[item.category].videos = res;
          this.setState({ data });
        },
      });
    });
  }
  _handleLang = (selectedLang) => {
    const lang = selectedLang;
    this.setState({ lang });
  };
  render() {
    const settings = {
      data: this.state.data,
      lang: this.state.lang,
    };
    return (
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navmenu
            {...settings}
            navClass=""
            onChangeLang={(selectedLang) => this._handleLang(selectedLang)}
          />
          <Switch>
            <Route path={`/category/:slug`}>
              <Category {...settings} />
            </Route>
            <Route path={`/`}>
              <Home {...settings} />
            </Route>
          </Switch>
          <Footer
            {...settings}
            onChangeLang={(selectedLang) => this._handleLang(selectedLang)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
