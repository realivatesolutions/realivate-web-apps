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
import {actions as vehicleCategoryActions} from '../../action/vehicleCategoryAction'
import styles from "../../assets/jss/material-dashboard-react/views/commonStyle";
import Paper from "@material-ui/core/Paper";



class VehicleCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.handleAddCategoryEvent = this.handleAddCategoryEvent.bind(this)
        this.handleViewCategoryEvent = this.handleViewCategoryEvent.bind(this)

        this.props.actions.getAllVehicle()
    }

    handleAddCategoryEvent() {
        this.props.history.push('/vehicle/create')
    }

    handleViewCategoryEvent = value => {
        this.props.history.push({
            pathname: '/vehicle/view',
            state: { id : value }
        })

    }

    render() {
        const { classes, vehicleCategoryReducer } = this.props;
        const vehicleList = vehicleCategoryReducer.data
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card plain>
                            <CardHeader plain color="info">
                                <h4 className={classes.cardTitleWhite}>
                                    Vehicle Category
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem item xs={3}>
                                    </GridItem>
                                    <GridItem item xs={6}>
                                    </GridItem>
                                    <GridItem item xs={3} container justify="flex-end">
                                        <Button color="info" round onClick={this.handleAddCategoryEvent}> Add </Button>
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
                                        tableData={vehicleList}
                                        handleAddCategoryEvent={this.handleAddCategoryEvent}
                                        handleViewCategoryEvent={this.handleViewCategoryEvent}
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
        vehicleCategoryReducer: state.vehicleCategoryReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...vehicleCategoryActions}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VehicleCategoryPage))
)