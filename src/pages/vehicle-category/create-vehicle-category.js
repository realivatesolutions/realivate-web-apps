import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from "redux";
import * as globalAction from "../../action/globalAction";
import {withStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

class CreateVehicleCategoryPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>THIS IS CREATE CATEGORY</p>
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
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateVehicleCategoryPage))
)