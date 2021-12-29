import React from "react"
import {connect} from "react-redux"
import FlowerItem from "./FlowerItem"

const FlowerList = ( {flowers})  => {
     return (
        <div id="flowers-list">
            {flowers.map((flower) => (
                <FlowerItem key={flower.id} flower={flower}/>
            ))}
        </div>
     )
}

const mapStateToProps = (state) => {
    return {
        flowers: state.flowers
    }
}


export default connect(mapStateToProps)(FlowerList)