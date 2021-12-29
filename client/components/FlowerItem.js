import React from "react"
import {connect} from "react-redux"
import { selectFlower } from "../store"

const FlowerItem = ({flower, selectFlower}) => {
    return (
        <div className="flower-item">
        <a onClick={() => selectFlower(flower)}>
                <img src={flower.image} />
         </a>
            <p> {flower.name}</p>
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      selectFlower: (flower) => dispatch(selectFlower(flower)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(FlowerItem);