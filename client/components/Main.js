import React from 'react';
import { connect } from 'react-redux'
import { fetchFlowers, fetchSales } from '../store'
import FlowerList from "./FlowerList"
import SingleFlower from "./SingleFlower"
import Nav from './Nav'
import Sale from './Sale'

class Main extends React.Component {
  componentDidMount(){
    this.props.fetchFlowers()
    this.props.fetchSales()
  }

  render(){
    return (
      <div id="main">
          <Nav />
          {this.props.checkBasket === 1 ? <Sale /> : 
          this.props.selectedFlower.id ? <SingleFlower /> : <FlowerList />}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    selectedFlower: state.selectedFlower,
    checkBasket: state.checkBasket
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchFlowers: () => dispatch(fetchFlowers()),
    fetchSales: () => dispatch(fetchSales())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
