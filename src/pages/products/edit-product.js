import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from "redux";
import * as globalAction from "../../action/globalAction";
import {withStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-react/views/commonStyle";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import GridItem from "../../components/Grid/GridItem";
import TextField from "../../components/CustomInput"
import Paper from '@material-ui/core/Paper';
import Button from "../../components/CustomButtons";
import {productsAction as productsAction} from '../../action/productsAction'
import MatTextField from '@material-ui/core/TextField';

class EditProductPage extends Component {

	
    constructor(props) {
        super(props);
        this.state = {
            product:undefined,
            id: props.location && props.location.state && props.location.state.id || undefined    
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    	this.handleCancelEventButton = this.handleCancelEventButton.bind(this)
    }

     handleChange(e) {
        this.setState({
            product: {
                ...this.state.product,
                [e.target.id]: e.target.value
            }
        })
    };

    handleSubmit() {
    	console.log('UPDATE PRODUCT PAGE')
    	console.log(this.state.product)
        this.props.productsAction.updateProduct(this.state.product)
        this.props.history.push('/products')
    }
   
    handleCancelEventButton(){
        this.props.history.push('/products')
    }

     componentDidMount() {
        if(this.state && this.state.id){
            this.props.productsAction.getProduct(this.state.id);
        }else{
            this.props.history.push('/products')
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
       const { productsReducer } = nextProps
        if(!this.state.product && productsReducer.selectedProduct){
            this.setState({
                ...this.state,
                product: productsReducer.selectedProduct
            })
        }
    }

    render() {
        const {classes} = this.props
        console.log(this.state);
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card plain>
                            <CardHeader plain color="info">
                                <h4 className={classes.cardTitleWhite}>
                                    View Product Details
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <Paper className={classes.contentRoot} elevation={1}>
                                    <form className={classes.container}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="name"
                                                    value={this.state.product && this.state.product.name}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: false
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                	id="description"
                                                    value={this.state.product && this.state.product.description}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: false
                                                    }}
                                                 />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="price"
                                                    value={this.state.product && this.state.product.data.product.price}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: false
                                                    }}
                                                />
                                            </GridItem>
                                           
                                            <GridItem xs={12} sm={12} md={7}>
                                               <MatTextField
                                                    id="startDate"
                                                    label="Effective Start Date"
                                                    type="date"
                                                    value={this.state.product && this.state.product.startDate}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: false
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                               <MatTextField
                                                    id="endDate"
                                                    label="Effective End Date"
                                                    type="date"
                                                    value={this.state.product && this.state.product.endDate}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: false
                                                    }}
                                                />
                                            </GridItem>

                                        </GridContainer>
                                        <br />
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={5}>
                                                <GridContainer>
                                                 <GridItem xs={12} sm={12} md={3}>
                                                        <Button color="info"  size={'lg'} onClick={() => this.handleSubmit()}>Save</Button>
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={3}>
                                                        <Button color="info" size={'lg'} onClick={this.handleCancelEventButton}>Cancel</Button>
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>

                                        </GridContainer>
                                    </form>
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
        productsReducer: state.productsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        productsAction: bindActionCreators({...productsAction}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditProductPage))
)