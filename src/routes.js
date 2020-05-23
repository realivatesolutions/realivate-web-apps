import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Redirect} from 'react-router-dom'

import DashboardPage from "./pages/dashboard";
import VehicleCategoryPage from './pages/vehicle-category'
import ClientsPage from './pages/clients'
import CreateClientPage from './pages/clients/create-client'

import CreateVehicleCategoryPage from './pages/vehicle-category/create-vehicle-category'
import ViewVehicleCategoryPage from './pages/vehicle-category/view-vehicle-category'
class Routes extends Component{
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.location !== prevProps.location) {

        }
    }

    onLoadRunActions() {

    }

    onChangeRunActions(){

    }

    render() {
        return(
            <Switch>
                <Route exact path={'/vehicle'} component={VehicleCategoryPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/vehicle/create'} component={CreateVehicleCategoryPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/vehicle/view'} component={ViewVehicleCategoryPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/dashboard'} component={DashboardPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/clients'} component={ClientsPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/clients/create'} component={CreateClientPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Redirect from="/" to="/dashboard" />
            </Switch>
        )
    }
}

function mapStateToProps(state) {
    return{

    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators({}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Routes)
)
