import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from "redux";
import * as globalAction from '../../action/globalAction'
import { withStyles} from "@material-ui/core/styles";

// @material-ui/icons
import Icon from "@material-ui/core/Icon";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

//Components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

class DashboardPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        console.log(this.props)
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="warning" stats icon>
                                <CardIcon color="warning">
                                    <Icon>content_copy</Icon>
                                </CardIcon>
                                <p className={classes.cardCategory}>Used Space</p>
                                <h3 className={classes.cardTitle}>
                                    49/50 <small>GB</small>
                                </h3>
                            </CardHeader>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dashboardReducer: state.dashboardReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...globalAction}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DashboardPage))
)
