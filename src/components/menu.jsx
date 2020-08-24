import React , { Component } from 'react';
import { Card ,CardBody ,CardImg,CardImgOverlay,CardText,CardTitle } from 'reactstrap';
class Menu extends Component {
  
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 mt-1">
                <Card tag="li">
                  
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                        <p>{dish.description}</p>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
          </div>
        );
    }
}

export default Menu;
       
        