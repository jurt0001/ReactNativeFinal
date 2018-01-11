import React, {Component} from "react";
import { Text, Body, ListItem, Icon, Right, Left, H2, Styles} from 'native-base';
import * as actions from "../actions";
import { connect } from "react-redux";

class Restaurant extends Component {
    render() {
        
        return (
            <ListItem id={this.props.id} onPress={this.props.getInfo}>
            
        <Left>
            <Body>
            <H2>{this.props.name} </H2>
            <Text note>{(this.props.distance/100).toFixed(2)}Kilometers </Text>
            </Body>
        </Left>
        <Right>
            <Icon name='arrow-forward' />
        </Right>
              
            </ListItem>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
    Info: state.data
    
}
    
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        getInfo: () => dispatch(actions.getInfo(ownProps.id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);