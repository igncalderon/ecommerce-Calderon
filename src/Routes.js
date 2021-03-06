import './App.css';

import { ItemList } from './screens'
import { ItemDetailContainer } from './screens/itemDetailContainer/itemDetailContainer'
import { NoMatch } from './screens/NoMatch/noMatch';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";

function Routes() {

  // Traigo mi Home con todo lo que tiene.
  
  return (

    <Router>
        <Switch>
          <Route exact path='/' component={ItemList}/>
          <Route path='/category/:categoriaId'>
          <ItemList></ItemList>
          </Route>
          <Route path='/item/:itemId'>
            {/* <ItemDetailContainer></ItemDetailContainer> */}
            <ItemDetailContainer></ItemDetailContainer>
          </Route>
          <Route path='*' component={ NoMatch }/>    
        </Switch>
    </Router>
   
     
  );
}

export default Routes;
