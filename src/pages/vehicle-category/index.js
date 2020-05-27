import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from "redux";
import { withStyles} from "@material-ui/core/styles";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import Table from "../../components/Table/Table";
import Button from "../../components/CustomButtons";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import CustomDataTable from '../../components/CustomDataTable'
import {actions as vehicleCategoryActions} from '../../action/vehicleCategoryAction'
import styles from "../../assets/jss/material-dashboard-react/views/commonStyle";
import Paper from "@material-ui/core/Paper";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const dataList = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];

class VehicleCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.handleAddCategoryEvent = this.handleAddCategoryEvent.bind(this)
        this.handleViewCategoryEvent = this.handleViewCategoryEvent.bind(this)
    }

    componentDidMount() {
        this.props.actions.getAllVehicle()
    }

    handleAddCategoryEvent() {
        this.props.history.push('/vehicle/create')
    }

    handleEditCategoryEvent = value => {
        this.props.history.push({
            pathname: '/vehicle/edit',
            state: { id : value }
        })
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
        const tableHeadMapping = [
            { id: 'categoryType', numeric: false, disablePadding: true, label: 'Category Type' },
            { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
            { id: 'description', numeric: false, disablePadding: false, label: 'Description' },
            { id: 'action', numeric: false, disablePadding: false, label: '' }
        ];
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
                                    <CustomDataTable
                                        uniqueId={'id'}
                                        tableHeaderColor="gray"
                                        hasCheckBox={false}
                                        withActionView={true}
                                        withActionEdit={true}
                                        tableData={vehicleList}
                                        tableDataMapping={tableHeadMapping}
                                        handleAddCategoryEvent={this.handleAddCategoryEvent}
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