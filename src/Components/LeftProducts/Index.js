import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Buttons from "../../Common/Buttons/Buttons"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    quantity: {
        background: 'aliceblue',
        borderRadius: '50%',
        width: 29,
        height: 29,
        textAlign: 'center',

        color: '#3f51b5;'
    }

});

export default function Index({ IncrementValue, DecrementValue, data }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className="media"
                // component="img"
                // alt="Contemplative Reptile"
                // image="/static/images/cards/contemplative-reptile.jpg"
                // title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Laptop Surface Pro
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."

          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                Quantity
                <IconButton aria-label="delete" onClick={IncrementValue}>
                    <AddIcon />
                </IconButton>
                <span className={classes.quantity}>{data}</span>
                <IconButton aria-label="delete" onClick={DecrementValue} disabled={data == 0}>
                    <RemoveIcon />
                </IconButton>
            </CardActions>
            <Buttons text={'Add to Cart'} />
        </Card>
    );
}