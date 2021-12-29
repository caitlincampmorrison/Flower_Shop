import React from "react";
import { connect } from "react-redux";
import { deleteAllSales } from "../store";
import SaleItem from "./SaleItem"

const Sale = ({ sales, deleteAllSales }) => {
  return (
    <div id="sales-list">
        {sales.map((sale) => (
            <SaleItem key={sale.id} sale={sale}/>
        ))}
        <button id="delete_all_button" onClick={() => deleteAllSales()}>Delete All</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      sales: state.sales
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteAllSales: () => dispatch(deleteAllSales()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Sale)