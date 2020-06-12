import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from "redux";
import { withStyles} from "@material-ui/core/styles";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import Button from "../../components/CustomButtons";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import CustomDataTable from '../../components/CustomDataTable'
import {actions as departmentsActions} from '../../action/departmentsAction'
import styles from "../../assets/jss/material-dashboard-react/views/commonStyle";
import Paper from "@material-ui/core/Paper";

class DepartmentsPage extends Component {
    constructor(props) {
        super(props);
        this.handleAddCategoryEvent = this.handleAddCategoryEvent.bind(this)
        this.handleViewCategoryEvent = this.handleViewCategoryEvent.bind(this)
    }

    componentDidMount() {
        this.props.actions.getAllDepartments()
    }

    handleAddCategoryEvent() {
        this.props.history.push('/departments/create')
    }

    handleEditCategoryEvent = value => {
        this.props.history.push({
            pathname: '/departments/edit',
            state: { id : value }
        })
    }

    handleViewCategoryEvent = value => {
        this.props.history.push({
            pathname: '/departments/view',
            state: { id : value }
        })

    }

    render() {
        const { classes, departmentsReducer } = this.props;
        const departmentList = departmentsReducer.data
        const tableHeadMapping = [
            { id: 'name', numeric: false, disablePadding: false, label: 'NAME' },
            { id: 'description', numeric: false, disablePadding: false, label: 'DESCRIPTION' },
            { id: 'status', numeric: false, disablePadding: false, label: 'STATUS' },
            { id: 'action', numeric: false, disablePadding: false, label: '' }
        ];
        return (

            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card plain>
                            <CardHeader plain color="info">
                                <h4 className={classes.cardTitleWhite}>
                                    Departments
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
                                        tableData={departmentList}
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
        departmentsReducer: state.departmentsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...departmentsActions}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DepartmentsPage))
)