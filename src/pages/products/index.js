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
import {clientsAction as clientsAction} from '../../action/clientsAction'
import {productsAction as productsAction} from '../../action/productsAction'
import styles from "../../assets/jss/material-dashboard-react/views/commonStyle";
import Paper from "@material-ui/core/Paper";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


class ClientsProductsPage extends Component {

    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

    constructor(props) {
        super(props);
        this.state = {
            selectedClientName:''
        }
        this.handleAddProductEvent = this.handleAddProductEvent.bind(this)
        this.handleViewCategoryEvent = this.handleViewCategoryEvent.bind(this)

        this.props.clientsAction.getAllClients()
       
    }

    handleAddProductEvent() {
        this.props.history.push({
            pathname: '/products/create',
            state: {  selectedClientName : this.state.selectedClientName  }
        })
       
    }

    handleViewCategoryEvent = value => {
        this.props.history.push({
            pathname: '/products/view',
            state: { id : value }
        })

    }

    handleEditCategoryEvent = value => {
        this.props.history.push({
            pathname: '/products/edit',
            state: { id : value }
        })
    }

    handleClientChangeEvent = value => {
        console.log(value);
        this.state.selectedClientName=value;
        this.props.productsAction.getAllProductsByClient(value)
    }

    render() {
        const { classes, clientsReducer,productsReducer } = this.props;
        const clientsList = clientsReducer.data
        const productsList = productsReducer.data
        const tableHeadMapping = [
            { id: 'name', numeric: false, disablePadding: true, label: 'Product Name' },
            { id: 'description', numeric: false, disablePadding: false, label: 'Description' },
            { id: 'data.product.price', numeric: false, disablePadding: false, label: 'Price' },
            { id: 'status', numeric: false, disablePadding: false, label: 'Status' }
        ];
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card plain>
                            <CardHeader plain color="info">
                                <h4 className={classes.cardTitleWhite}>
                                    Client Products Management
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem item xs={3}>
                                    </GridItem>
                                    <GridItem item xs={6}>
                                     <Autocomplete
                                        freeSolo
                                        id="free-solo-2-demo"
                                        disableClearable
                                        options={clientsList.map((option) => option.name)}
                                        onChange={(event, newValue) => {this.handleClientChangeEvent(newValue);}}
                                        renderInput={(params) => (
                                        <TextField
                                             {...params}
                                            label="Search Client"
                                             margin="normal"
                                            variant="outlined"
                                            InputProps={{ ...params.InputProps, type: 'search' }}
                                         />
                                        )}
                                        />
                                    </GridItem>
                                    <GridItem item xs={3} container justify="flex-end">
                                        <Button color="info" round onClick={this.handleAddProductEvent}> Add New Product</Button>
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
                                        tableData={productsList}
                                        tableDataMapping={tableHeadMapping}
                                        handleAddProductEvent={this.handleAddProductEvent}
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
        clientsReducer: state.clientsReducer,
        productsReducer: state.productsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clientsAction: bindActionCreators({...clientsAction}, dispatch),
        productsAction: bindActionCreators({...productsAction}, dispatch)
        
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ClientsProductsPage))
)