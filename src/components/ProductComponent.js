import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { Button, Grid } from '@material-ui/core';

class ProductComponent extends Component{
    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        return(
            <div>
                <Grid divided='vertically'>
                    <div className='productImage'>
                        <img src={this.props.Data.image} alt="product_image" width={"150px"} />
                        <h3>{this.props.Data.title}</h3>
                        <h6>{this.props.Data.subtitle}</h6>
                    </div>

                    <div className='tagsButton'>
                        {this.props.Data.tags.map((tag)=>(
                            <>
                                <Button size='small' variant='outlined'>{tag}</Button>&emsp;
                            </>
                        ))}
                    </div>
                    
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return { Data: state.Data};
}

export default connect(mapStateToProps, {fetchData})(ProductComponent);