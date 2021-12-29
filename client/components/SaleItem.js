import React from "react"
import {connect} from "react-redux"
import { deleteSale } from "../store";

const SaleItem = ({ deleteSale, sale }) => {
    return (
        <div className="sale-item">
            <button onClick={() => deleteSale(sale)}> X </button>
            <img src={sale.flowerImage} />
            <p> { sale.flowerName }</p>
            <p> { sale.flowerColor }</p>
            <p> ${ sale.flowerCost }</p>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sales: state.sales
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      deleteSale: (sale) => dispatch(deleteSale(sale)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SaleItem)