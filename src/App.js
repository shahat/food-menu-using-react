import React, { Component, Fragment  } from 'react';
import Menu from "./components/menu";
import Dishes from "./shared/dishes"
class App extends Component {
  state = { 
    dishes:Dishes
   }
  render() { 
    return (
      <Fragment>
         <Menu  dishes={this.state.dishes} />
      </Fragment>

      );
  }
}
 
export default App;
