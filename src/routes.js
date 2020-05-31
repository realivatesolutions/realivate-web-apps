import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Redirect} from 'react-router-dom'

import DashboardPage from "./pages/dashboard";
import ClientsPage from './pages/clients'
import CreateClientPage from './pages/clients/create-client'
import ViewClientPage from './pages/clients/view-client'
import EditClientPage from './pages/clients/edit-client'

import ClientsProductPage from './pages/products'
import CreateProductPage from './pages/products/create-product'
import ViewProductPage from './pages/products/view-product'

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
                <Route exact path={'/dashboard'} component={DashboardPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/clients'} component={ClientsPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/clients/create'} component={CreateClientPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/clients/view'} component={ViewClientPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/clients/edit'} component={EditClientPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/products'} component={ClientsProductPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/products/create'} component={CreateProductPage} {...this.props} onChange={this.onChangeRunActions}/>
                <Route exact path={'/products/view'} component={ViewProductPage} {...this.props} onChange={this.onChangeRunActions}/>
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
