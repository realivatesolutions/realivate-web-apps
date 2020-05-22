import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { bindActionCreators } from "redux";
import './index.css'
import * as globalAction from '../../action/globalAction'

class ClientsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return ( <div className='container p-3 dashboard-page'>
                <p>THIS IS clients!</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        clientsReducer: state.clientsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...globalAction}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ClientsPage)
)

