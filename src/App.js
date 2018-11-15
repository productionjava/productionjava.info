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
import {createStore} from 'redux'
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import {Parallax, Background} from 'react-parallax';
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

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
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
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
        if (token != null) {
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
                    <Grid item xs={12}>
                        <Grid container style={{height: '80vh'}}>
                            <Grid container spacing={24} alignItems={"center"} alignContent={"center"}
                                  justify={"center"}>
                                <Grid item xs={12} sm={6}>
                                    <img src={require("./img/book.png")}/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography component="h3" variant="h2" gutterBottom>
                                        Production Java
                                    </Typography>
                                    <Typography component="content" variant="content" gutterBottom>
                                        This book will cure any desease, bootstrap self-driving cars and save your cat
                                        from fire. Although I wish that it'll be true, but it's just placeholder text :C
                                    </Typography>
                                    <Typography component="content" variant="content" gutterBottom>
                                        If you look closely, you'll see that on the left hand there needs to be some
                                        picture
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
                    <Grid item xs={12} sm={12}>
                        <Grid container alignContent={"center"} justify={"center"} style={{height: '80vh'}}>
                            <Parallax
                                blur={10}
                                bgImage={require('./img/zavod.jpg')}
                                bgImageAlt="the cat"
                                strength={200}
                                style={{height: '80vh', width: '100vw'}}
                            >
                                <Typography component="h3" variant="h2" gutterBottom
                                            style={{color: "white", marginTop: "5vh"}}>
                                    Enterprise world
                                </Typography>
                                <Typography component="content" variant="content" gutterBottom style={{color: "white"}}>
                                    In the world of enterprise development, there's no chance to fail
                                </Typography>
                            </Parallax>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} elevation={0}>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nam at mauris non odio lacinia porta. Nunc pellentesque volutpat mi a
                            mattis. Integer quis enim ultricies, tempus metus id, viverra mi. Proin non lectus id mauris
                            iaculis iaculis a id dui. Nam fermentum dui in risus pellentesque ultricies. Curabitur lacus
                            diam, maximus quis molestie ut, tempor vel lectus. Praesent ultricies magna orci, in
                            porttitor lorem egestas eu. Morbi sed sem libero. Ut in ultricies magna. Morbi ac sapien
                            fermentum mi feugiat volutpat sed in turpis. Integer mollis lectus ac tellus pharetra
                            euismod. Donec quam lacus, euismod nec leo vel, condimentum suscipit tellus. Proin at nisl
                            eu dolor venenatis porttitor. Maecenas sagittis pharetra hendrerit.

                            Integer scelerisque enim vitae neque malesuada laoreet id eget eros. Sed efficitur faucibus
                            fringilla. Mauris in arcu sed dolor posuere convallis vitae quis ipsum. Pellentesque
                            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras
                            pellentesque, lectus eget malesuada ultrices, massa dolor dapibus nisi, quis consectetur
                            enim arcu a purus. Suspendisse magna nunc, ultricies vitae fringilla eget, convallis
                            fermentum libero. Donec at tellus sem. Ut dictum risus sit amet metus facilisis tristique.
                            Ut accumsan maximus metus a aliquet.

                            Donec id dapibus sapien. Nunc vel leo at diam tempor viverra eget nec nibh. Nullam pharetra
                            egestas metus, nec lacinia velit tincidunt eu. Nunc fermentum a dui non finibus. Praesent
                            euismod ornare nunc ut varius. Praesent dapibus maximus maximus. Ut orci tellus, commodo et
                            eleifend a, pharetra ac dui. Morbi nec tellus risus. Mauris eget sodales dolor. Donec
                            imperdiet erat vitae est consequat, sit amet commodo mauris condimentum. Maecenas feugiat
                            ligula metus. Vestibulum convallis lacus maximus tortor commodo faucibus.

                            Vestibulum vitae dolor nisl. Vivamus posuere, ipsum vitae ornare consequat, sem ligula
                            volutpat metus, non scelerisque felis elit vel diam. Aliquam accumsan mattis lorem vel
                            ornare. Ut laoreet pharetra orci, ut euismod lectus iaculis vel. Aliquam vehicula nulla at
                            dictum sagittis. Nam ultricies mollis libero eget varius. Nullam porta nisi et erat lacinia
                            pulvinar. Aliquam at odio turpis. Nam nec ultrices quam, id laoreet augue. Nulla commodo
                            egestas eros nec bibendum. Praesent accumsan augue elit, at convallis turpis semper
                            eu.</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} alignItems={"center"} justify={"center"} alignContent={"center"}>
                        <Paper className={classes.paper} style={{backgroundColor: '#d8d8d8', margin: '5vh'}}>
                            <Typography component="h5" variant="h4" gutterBottom style={{marginTop: "1vh"}}>
                                What you will learn from this book
                            </Typography>
                            <List>
                                {[
                                    "Become invisible",
                                    "Take flight through space",
                                    "Gain 100kg mass",
                                    "Become invisible",
                                    "Take flight through space",
                                    "Gain 100kg mass",
                                    "Become invisible",
                                    "Take flight through space",
                                    "Gain 100kg mass",
                                ].map(title =>
                                    <ListItem>
                                        <ListItemText
                                            primary={"• " + title}
                                        />
                                    </ListItem>
                                )}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Grid container alignContent={"center"} justify={"center"}
                              style={{height: '80vh', backgroundColor: 'gray'}}>
                            <Parallax
                                blur={10}
                                strength={200}
                                style={{height: '80vh', width: '100vw'}}
                            >
                                <Typography component="h3" variant="h2" gutterBottom
                                            style={{marginTop: "5vh"}}>
                                    Step by step approach
                                </Typography>
                                <Typography component="content" variant="content" gutterBottom style={{}}>
                                    Instead of describing everything in one stream, this book takes step by step
                                    approach with each episode
                                </Typography>

                                <Grid container spacing={24}>
                                    {["Modules",
                                        "Applications",
                                        "Microservices",
                                        "Additions"].map(item =>
                                        <Grid item xs={6} sm={3}>
                                            <Paper className={classes.paper}>
                                                <img className={classes.img}
                                                     src="https://images-na.ssl-images-amazon.com/images/I/81vZaXuCQ-L._SX385_.jpg"/>
                                                <Typography component="content" variant="content" gutterBottom>
                                                    {item}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )}
                                </Grid>
                            </Parallax>
                        </Grid>

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
const increaseAction = {type: 'CONFIG_CHANGED'};

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
        changeConfig: (config) => dispatch({type: "CONFIG_CHANGED", payload: config})
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
