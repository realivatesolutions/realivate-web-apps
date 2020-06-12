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
import {actions as departmentsAction} from '../../action/departmentsAction'
import MatTextField from '@material-ui/core/TextField';

class EditDepartmentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            department: undefined,
            id: props.location && props.location.state && props.location.state.id || undefined
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancelEventButton = this.handleCancelEventButton.bind(this)
    }

    componentDidMount() {
        if(this.state && this.state.id){
            this.props.actions.getDepartment(this.state.id);
        }else{
            this.props.history.push('/departments')
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { departmentsReducer } = nextProps
        if(!this.state.department && departmentsReducer.selectedDepartment){
            this.setState({
                ...this.state,
                department: departmentsReducer.selectedDepartment
            })
        }
    }

    handleChange(e) {
        this.setState({
            department: {
                ...this.state.department,
                [e.target.id]: e.target.value
            }
        })
    };

    handleSubmit() {
        this.props.actions.updateDepartment(this.state.department)
        this.props.history.push('/departments')
    }

    handleCancelEventButton(){
        this.props.history.push('/departments')
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
                                    Edit Department Details
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <Paper className={classes.contentRoot} elevation={1}>
                                    <form className={classes.container}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="name"
                                                    value={this.state.department && this.state.department.name}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="description"
                                                    value={this.state.department && this.state.department.description}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                               <MatTextField
                                                    id="startDate"
                                                    label="Effective Start Date"
                                                    type="date"
                                                    value={this.state.department && this.state.department.startDate}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                               <MatTextField
                                                    id="endDate"
                                                    label="Effective End Date"
                                                    type="date"
                                                    value={this.state.department && this.state.department.endDate}
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
        departmentsReducer: state.departmentsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
         actions: bindActionCreators({...departmentsAction}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditDepartmentPage))
)