import React, {Component} from "react";
import { connect } from "react-redux";
import { Content, Text } from 'native-base';


class RestaurantDetails extends Component {
    render() {

        return (
        <Content>
            <Text>Restaurant Name: {this.props.selectedItem.name}</Text>
            <Text>Phone: {this.props.selectedItem.phone}</Text>
            <Text>{(this.props.selectedItem.distance/100).toFixed(1)}km away</Text>
            <Text>Price: {this.props.selectedItem.price}</Text>
        </Content>
        );
    }
}

function mapStateToProps(state){
    return {
         
         selectedItem: state.selectedItem
    };
}

function mapDispatchToProps() {
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails);