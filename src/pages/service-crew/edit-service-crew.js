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
import {actions as serviceCrewActions} from '../../action/serviceCrewAction'
import MatTextField from '@material-ui/core/TextField';

class EditServiceCrewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crew: undefined,
            id: props.location && props.location.state && props.location.state.id || undefined
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancelEventButton = this.handleCancelEventButton.bind(this)
    }

    componentDidMount() {
        if(this.state && this.state.id){
            this.props.actions.getServiceCrew(this.state.id);
        }else{
            this.props.history.push('/service-crew')
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { serviceCrewReducer } = nextProps
        if(!this.state.crew && serviceCrewReducer.selectedCategory){
            this.setState({
                ...this.state,
                crew: serviceCrewReducer.selectedCategory
            })
        }
    }

    handleChange(e) {
        this.setState({
            crew: {
                ...this.state.crew,
                data: {
                    ...this.state.crew.data,
                    [e.target.id]: e.target.value
                }
            }
        })
    };

    handleSubmit() {
        this.state.crew.name = this.state.crew.data.firstName +  ' ' +  this.state.crew.data.middleName +  ' ' + this.state.crew.data.lastName;
        this.state.crew.description = this.state.crew.name;
        this.props.actions.updateServiceCrew(this.state.crew)
        this.props.history.push('/service-crew')
    }

    handleCancelEventButton(){
        this.props.history.push('/service-crew')
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
                                    Edit Service Crew
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <Paper className={classes.contentRoot} elevation={1}>
                                    <form className={classes.container}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="firstName"
                                                    value={this.state.crew && this.state.crew.data && this.state.crew.data.firstName}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="middleName"
                                                    value={this.state.crew && this.state.crew.data && this.state.crew.data.middleName}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="lastName"
                                                    value={this.state.crew && this.state.crew.data && this.state.crew.data.lastName}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="email"
                                                    value={this.state.crew && this.state.crew.data && this.state.crew.data.email}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="gender"
                                                    value={this.state.crew && this.state.crew.data && this.state.crew.data.gender}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="contactNo"
                                                    value={this.state.crew && this.state.crew.data && this.state.crew.data.contactNo}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="address"
                                                    value={this.state.crew && this.state.crew.data && this.state.crew.data.address}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <MatTextField
                                                    id="dateOfBirth"
                                                    type="date"
                                                    value={this.state.crew && this.state.crew.data && this.state.crew.data.dateOfBirth}
                                                    onChange={this.handleChange}
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
        serviceCrewReducer: state.serviceCrewReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...serviceCrewActions}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditServiceCrewPage))
)