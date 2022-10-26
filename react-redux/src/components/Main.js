import React from 'react';
import Header from './Header';
import { Grid, Paper } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ProductComponent from './ProductComponent';
import ChartComponent from './ChartComponent';
import TableComponent from './TableComponent';

const useStyles= makeStyles((style)=>({
    root: {
        flexGrow: 2
    },
    header: {
        padding: style.spacing(0),
        margin: style.spacing(0),
        textAlign: 'left'
    },
    product: {
        padding: style.spacing(2),
        margin: style.spacing(3),
        textAlign: 'left'
    },
}));

export default function Main(){
    const classes= useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <Paper className= {classes.header}>
                        <Header/>
                    </Paper>
                </Grid>
                <br/><br/><br/>
                <Grid item xs={3}>
                    <Paper className={classes.product}>
                        <ProductComponent/>
                    </Paper>
                </Grid>
                 <Grid item xs={9}>
                    <Paper className={classes.product}>
                        <ChartComponent /> 
                    </Paper>    
                    <br/>
                    <Paper className={classes.product}>
                        <TableComponent />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
