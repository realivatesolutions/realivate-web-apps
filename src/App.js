
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

/*DESIGNS*/
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from '@material-ui/core/styles';
import styles from "./assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "./assets/img/sidebar-2.jpg";
import logo from "./assets/img/reactlogo.png";

/* Components */
import Navbar from "./components/Navbars/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Routes from './routes'
import menus from './navigation'
import { history } from './utils/helper';
let ps;
class App extends Component {
    constructor(props) {
        super(props);
        this.mainPanel = React.createRef();
        this.state ={
            image: bgImage,
            color: "blue",
            fixedClasses: "dropdown show",
            mobileOpen: false,
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.mainPanel.current, {
                suppressScrollX: true,
                suppressScrollY: false
            });
            document.body.style.overflow = "hidden";
        }
        window.addEventListener("resize", this.resizeFunction);
    }

    handleDrawerToggle = () => {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        })
    };


    resizeFunction = () => {
        if (window.innerWidth >= 960) {
            this.setState({
                mobileOpen: false
            })
        }
    }

    render(){
        const { classes } = this.props;
        return(<div className={classes.wrapper}>
            <Sidebar
                routes={menus}
                logoText={"PMS-WEB"}
                logo={logo}
                image={this.state.image}
                handleDrawerToggle={this.handleDrawerToggle}
                open={this.state.mobileOpen}
                color={this.state.color}
            />
            <div className={classes.mainPanel} ref={this.mainPanel}>
                <Navbar
                    routes={menus}
                    handleDrawerToggle={this.handleDrawerToggle}
                />
                <div className={classes.content}>
                    <div className={classes.container}>
                        <Routes {...this.props} history={history}/>
                    </div>
                </div>
                <Footer />
            </div>
         </div>
        )
    }
}

function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators({}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
)
