import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from "redux";
import * as globalAction from '../../action/globalAction'
import { withStyles} from "@material-ui/core/styles";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CustomDataTable from '../../components/CustomDataTable'
import Button from "../../components/CustomButtons";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import {actions as clientsAction} from '../../action/clientsAction'
import styles from "../../assets/jss/material-dashboard-react/views/commonStyle";
import Paper from "@material-ui/core/Paper";


class ClientsPage extends Component {
    constructor(props) {
        super(props);
        this.handleAddClientEvent = this.handleAddClientEvent.bind(this)
        this.handleViewCategoryEvent = this.handleViewCategoryEvent.bind(this)

        this.props.actions.getAllClients()
    }

    handleAddClientEvent() {
        this.props.history.push('/clients/create')
    }

    handleViewCategoryEvent = value => {
        this.props.history.push({
            pathname: '/clients/view',
            state: { id : value }
        })

    }

    handleEditCategoryEvent = value => {
        this.props.history.push({
            pathname: '/clients/edit',
            state: { id : value }
        })
    }

    render() {
        const { classes, clientsReducer } = this.props;
        const clientsList = clientsReducer.data
        const tableHeadMapping = [
            { id: 'name', numeric: false, disablePadding: true, label: 'Client Name' },
            { id: 'data.client.businessName', numeric: false, disablePadding: false, label: 'Business Name' },
            { id: 'data.client.contactPerson', numeric: false, disablePadding: false, label: 'Contact Person' },
            { id: 'status', numeric: false, disablePadding: false, label: 'Status' }
        ];
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card plain>
                            <CardHeader plain color="info">
                                <h4 className={classes.cardTitleWhite}>
                                    Client Management
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem item xs={3}>
                                    </GridItem>
                                    <GridItem item xs={6}>
                                    </GridItem>
                                    <GridItem item xs={3} container justify="flex-end">
                                        <Button color="info" round onClick={this.handleAddClientEvent}> Add New Client</Button>
                                    </GridItem>
                                </GridContainer>
                                <br/>
                                <Paper className={classes.contentRoot} elevation={1}>
                                    
                                    <CustomDataTable
                                        uniqueId={'id'}
                                        tableHeaderColor="gray"
                                        hasCheckBox={false}
                                        withActionView={true}
                                        withActionEdit={true}
                                        tableData={clientsList}
                                        tableDataMapping={tableHeadMapping}
                                        handleAddCategoryEvent={this.handleAddClientEvent}
                                        handleViewCategoryEvent={this.handleViewCategoryEvent}
                                        handleEditCategoryEvent={this.handleEditCategoryEvent}
                                    />
                                </Paper>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
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
        actions: bindActionCreators({...clientsAction}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ClientsPage))
)