import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from "redux";
import * as globalAction from '../../action/globalAction'
import { withStyles} from "@material-ui/core/styles";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import Table from "../../components/Table/Table";
import Button from "../../components/CustomButtons";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import {actions as serviceCrewActions} from '../../action/serviceCrewAction'
import styles from "../../assets/jss/material-dashboard-react/views/commonStyle";
import Paper from "@material-ui/core/Paper";


class ServiceCrewPage extends Component {
    constructor(props) {
        super(props);
        this.handleAddServiceCrewEvent = this.handleAddServiceCrewEvent.bind(this)
        this.handleViewServiceCrewEvent = this.handleViewServiceCrewEvent.bind(this)

        this.props.actions.getAllServiceCrew()
    }

    handleAddServiceCrewEvent() {
        this.props.history.push('/service-crew/create')
    }

    handleViewServiceCrewEvent = value => {
        this.props.history.push({
            pathname: '/service-crew/view',
            state: { id : value }
        })

    }

    render() {
        const { classes, serviceCrewReducer } = this.props;
        const serviceCrewList = serviceCrewReducer.data
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card plain>
                            <CardHeader plain color="info">
                                <h4 className={classes.cardTitleWhite}>
                                    Service Crew
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem item xs={3}>
                                    </GridItem>
                                    <GridItem item xs={6}>
                                    </GridItem>
                                    <GridItem item xs={3} container justify="flex-end">
                                        <Button color="info" round onClick={this.handleAddServiceCrewEvent}> Add </Button>
                                    </GridItem>
                                </GridContainer>
                                <br/>
                                <Paper className={classes.contentRoot} elevation={1}>
                                    <Table
                                        withActionView={true}
                                        withActionEdit={true}
                                        tableHeaderColor="gray"
                                        tableHead={[ "Type", "Name", "Description", ""]}
                                        tableDataMapping={[ "categoryType", "name", "description"]}
                                        tableData={serviceCrewList}
                                        handleAddCategoryEvent={this.handleAddServiceCrewEvent}
                                        handleViewCategoryEvent={this.handleViewServiceCrewEvent}
                                        uniqueId={'categoryType'}
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
        serviceCrewReducer: state.serviceCrewReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...serviceCrewActions}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ServiceCrewPage))
)