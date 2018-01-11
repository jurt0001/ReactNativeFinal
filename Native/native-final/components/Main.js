import React, {Component} from 'react';
import {
    Spinner,
    List,
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Center,
    Thumbnail
} from 'native-base';
import {connect} from 'react-redux';
import * as actions from '../actions';
import RestaurantDetails from './RestaurantDetails';
import RestaurantList from './RestaurantList';
import {PAGE_LOAD, PAGE_LIST, PAGE_DETAILS} from '../Pages';

class Main extends Component {

    render() {
        let myContent;
        let myHeader;

        switch (this.props.page) {

            case PAGE_LOAD:
                myContent = <Spinner/>;
                break;
            case PAGE_DETAILS:
                myHeader =
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                myContent = <RestaurantDetails/>;

                break;
            case PAGE_LIST:
                myContent = (
                    <Content>
                        <Button full onPress={this.props.getLocation}>
                            <Text>
                                Show Restaurants
                            </Text>
                        </Button>
                        <RestaurantList/>
                    </Content>
                )
                break;

        }

        return (

            <Container>
                <Header>
                    {myHeader}
                    <Right>
                        <Body>
                        <Title Center>Near Food</Title>
                        </Body>
                    </Right>
                </Header>
                <Content>
                    {myContent}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Christian Jurt</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>

        )
    }

};


const mapStateToProps = (state) => {
    return {
        page: state.page,
        selectedItem: state.selectedItem
    }

};

const mapDispatchToProps = (dispatch) => {

    return {

        getLocation: () => dispatch(actions.getGeolocalizedList())
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Main);