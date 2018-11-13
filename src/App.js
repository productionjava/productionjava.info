import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RootReducer from "./reducers/RootReducer";
import { createStore } from 'redux'
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";

const store = createStore(RootReducer);


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class App extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        const mail = localStorage.getItem('email')
        if(token != null) {
            this.props.changeConfig({...this.props.config, token: token, email: mail});
        }
    }
    render() {
        const {classes} = this.props;
        console.log(this.props);
        return (
            <div className="App">
                <AppBar position="sticky" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Production Java™
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={24}>
                    <Grid item xs={12} >
                        <Grid container style={{height:'80vh'}} >
                            <Grid container spacing={24} alignItems={"center"} alignContent={"center"} justify={"center"} >
                                <Grid item xs={12} sm={6}>
                                    <img src={require("./img/book.png")}/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography component="h3" variant="h2" gutterBottom>
                                        Production Java
                                    </Typography>
                                    <Typography component="content" variant="content" gutterBottom>
                                        This book will cure any desease, bootstrap self-driving cars and save your cat from fire. Although I wish that it'll be true, but it's just placeholder text :C
                                    </Typography>
                                    <Typography component="content" variant="content" gutterBottom>
                                        If you look closely, you'll see that on the left hand there needs to be some picture
                                    </Typography>
                                    <Button variant="contained" color="secondary" className={classes.button}>
                                        Pre-order
                                    </Button>
                                    <Typography component="caption" variant="caption">
                                        You won't be charged without your agreement
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
// Action
const increaseAction = { type: 'CONFIG_CHANGED' };

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        config: state.config,
    };
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        changeConfig: (config) => dispatch({type:"CONFIG_CHANGED", payload: config})
    }
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));

export default class AppWrapper extends Component {
    render() {
        return (
            <Provider store={store}>
                <WrappedApp/>
            </Provider>
        );
    }
}
