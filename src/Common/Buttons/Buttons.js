import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./BtnCss.css"
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    cartBtn: {
        marginBottom: 10,
        borderRadius: 8,
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1);',

    },


}));
export default function Buttons({ text, AddCartItem }) {
    const classes = useStyles();

    return (
        <div>
            <Button variant="outlined" color="primary" className={classes.cartBtn} onClick={AddCartItem}>
                {text}
            </Button>
        </div>
    )
}
