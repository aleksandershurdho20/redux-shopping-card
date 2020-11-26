import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Badge from '@material-ui/core/Badge';
import { useDispatch, useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: theme.palette.common.white

    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    wrapper: {
        display: 'flex',
        justifyContent: "space-between"
    },
    menuButtonText: {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.h6.fontWeight
    },
    brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400
    },
    noDecoration: {
        textDecoration: "none !important"
    }

}));

export default function Header() {
    const classes = useStyles();
    let data = useSelector((state) => state)
    const { value } = data;
    console.log(data, 'da')
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.AppBar}>
                <Toolbar className={classes.wrapper}>
                    <div>
                        <Typography
                            variant="h4"
                            className={classes.brandText}
                            display="inline"
                            color="primary"
                        >
                            Sho
                        </Typography>
                        <Typography
                            variant="h4"
                            className={classes.brandText}
                            display="inline"
                            style={{ color: '#4e3535' }}
                        >
                            pper
                        </Typography>
                    </div>
                    <div>

                        <Badge badgeContent={value} color="primary">
                            <LocalMallIcon style={{ color: '#000' }} />
                        </Badge>

                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}