import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LeftProduct from "../LeftProducts/Index"
import RightProduct from "../RightProduct/Index"
import { useDispatch, useSelector } from 'react-redux'
import { AddItem, RemoveItem, AddItemToCart } from "../../Actions/ShoppingActions"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 15,
        background: 'white',
        padding: '30px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        height: '100vh',
        padding: '50px',
    }
}));
export default function Index() {
    const classes = useStyles();
    const dispatch = useDispatch();

    let data = useSelector((state) => state)
    const { value } = data;

    const IncrementValue = () => {
        dispatch(AddItem())
    }
    const DecrementValue = () => {
        dispatch(RemoveItem())
    }

    const AddCartItem = () => {
        dispatch(AddItemToCart())
    }
    // const AddItem = () => {
    //     dispatch(AddItemToCart())
    // }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        className={classes.brandText}
                        display="inline"
                        color="primary"
                    >
                        Your Shopping
                </Typography>
                    <Typography
                        variant="h4"
                        className={classes.brandText}
                        display="inline"
                        style={{ color: '#4e3535' }}
                    >
                        BAG
                        </Typography>
                </Grid>
                <Grid item xs={6}>
                    <LeftProduct IncrementValue={IncrementValue} DecrementValue={DecrementValue} data={value} />
                    {/* <Paper className={classes.paper}>xs=6</Paper> */}
                </Grid>
                <Grid item xs={6}>
                    <RightProduct IncrementValue={IncrementValue} DecrementValue={DecrementValue} data={value} AddCartItem={AddCartItem} />
                </Grid>

            </Grid>

        </div>
    )
}
