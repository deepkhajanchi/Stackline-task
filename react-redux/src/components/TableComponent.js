import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchData} from "../actions";
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";

export class TableComponent extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render () {
        return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">WEEK ENDING</TableCell>
                            <TableCell align="center">RETAIL SALES</TableCell>
                            <TableCell align="center">WHOLESALE SALES</TableCell>
                            <TableCell align="center">UNITS SOLD</TableCell>
                            <TableCell align="center">RETAILER MARGIN</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.Data.sales.map((sale) => (
                            <TableRow key={sale.weekEnding}>
                                <TableCell align="center" component="th" scope="row">
                                    {sale.weekEnding}
                                </TableCell>
                                <TableCell align="center">{sale.retailSales}</TableCell>
                                <TableCell align="center">{sale.wholesaleSales}</TableCell>
                                <TableCell align="center">{sale.unitsSold}</TableCell>
                                <TableCell align="center">{sale.retailerMargin}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        );
    }
}

const mapStateToProps = state =>{
    return {Data: state.Data};
};

export default connect(mapStateToProps,{fetchData})(TableComponent);