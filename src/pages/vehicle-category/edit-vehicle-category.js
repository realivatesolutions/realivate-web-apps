import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from "redux";
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
import {actions as vehicleCategoryActions} from '../../action/vehicleCategoryAction'

class EditVehicleCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: undefined,
            id: props.location && props.location.state && props.location.state.id || undefined
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancelEventButton = this.handleCancelEventButton.bind(this)
    }

    componentDidMount() {
        if(this.state && this.state.id){
            this.props.actions.getVehicle(this.state.id);
        }else{
            this.props.history.push('/vehicle')
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { vehicleCategoryReducer } = nextProps
        if(!this.state.category && vehicleCategoryReducer.selectedCategory){
            this.setState({
                ...this.state,
                category: vehicleCategoryReducer.selectedCategory
            })
        }
    }

    handleChange(e) {
        this.setState({
            category: {
                ...this.state.category,
                [e.target.id]: e.target.value
            }
        })
    };

    handleSubmit() {
        this.props.actions.updateVehicle(this.state.category)
        this.props.history.push('/vehicle')
    }

    handleCancelEventButton(){
        this.props.history.push('/vehicle')
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card plain>
                            <CardHeader plain color="info">
                                <h4 className={classes.cardTitleWhite}>
                                    Create Vehicle Category
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <Paper className={classes.contentRoot} elevation={1}>
                                    <form className={classes.container}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="categoryType"
                                                    value={this.state.category && this.state.category.categoryType}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="name"
                                                    value={this.state.category && this.state.category.name}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="description"
                                                    value={this.state.category && this.state.category.description}
                                                    formControlProps={{
                                                        fullWidth: true
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
        vehicleCategoryReducer: state.vehicleCategoryReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...vehicleCategoryActions}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditVehicleCategoryPage))
)