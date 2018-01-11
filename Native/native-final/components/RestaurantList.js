import React, { Component } from 'react';
import { Spinner, List, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Icon } from 'native-base';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';

class RestaurantList extends Component {

  render() {



      const restaurantList = this.props.resArray.map((item) => {
            
            return (
                <Restaurant {...item} key={item.id}/>
            );
        });
      
      return(
      
      <Container>
            <Content>
                {restaurantList}
            </Content>
        </Container>
      )
      
    } 

  };
  


const mapStateToProps = (state) => {
    return {
    resArray: state.data,
    isFetching: state.isFetching
    }
    
};

const mapDispatchToProps = () => {
    
    return {
        
    }
    
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);