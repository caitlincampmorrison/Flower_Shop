import React from "react"
import { connect } from "react-redux"
import { selectedFlower, addSale, selectFlower} from "../store";


const SingleFlower = ({selectedFlower, addSale}) => {
    return (
        <div className="flower-details"> 
            <img src={selectedFlower.image} />
            <h2>{selectedFlower.name} </h2>
            <ul>
              <li>Price: ${selectedFlower.cost}</li>
              <li>Color: {selectedFlower.color}</li>
            </ul>
            <button href="" onClick={() => addSale(selectedFlower)}>
                Add To Order
            </button>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      selectedFlower: state.selectedFlower,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addSale: (selectedFlower) => dispatch(addSale(selectedFlower)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SingleFlower);