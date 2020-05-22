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
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";


class VehicleCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.props.actions.getAllVehicle()
        this.handleAddCategoryEvent = this.handleAddCategoryEvent.bind(this)
    }

    handleAddCategoryEvent() {
        this.props.history.push('/vehicle/create')
    }

    render() {
        const { classes, vehicleCategoryReducer } = this.props;
        const vehicleList = vehicleCategoryReducer.data
        console.log(vehicleCategoryReducer)
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
                                <Table
                                    withActionView={true}
                                    withActionEdit={true}
                                    tableHeaderColor="gray"
                                    tableHead={[ "Type", "Name", "Description", ""]}
                                    tableDataMapping={[ "categoryType", "name", "description"]}
                                    tableData={vehicleList}
                                    handleAddCategoryEvent={this.handleAddCategoryEvent}
                                />
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