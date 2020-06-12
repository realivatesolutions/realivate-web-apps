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
import MatTextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from "../../components/CustomButtons";
import {actions as departmentsAction} from '../../action/departmentsAction'


class CreateDepartmentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            department:{
                categoryType: 'DEPARTMENTS'
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancelEventButton = this.handleCancelEventButton.bind(this)
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
        this.props.actions.createDepartment(this.state.department)
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
                                    Create Department
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <Paper className={classes.contentRoot} elevation={1}>
                                    <form
                                        ref="form"
                                        className={classes.container}
                                        onSubmit={this.handleSubmit}
                                        onError={errors => console.log(errors)}
                                    >
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    required
                                                    labelText="Name"
                                                    id="name"
                                                    value={this.state.department.name}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    required
                                                    labelText="Description"
                                                    id="description"
                                                    value={this.state.department.description}
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
                                                    value={this.state.department.startDate}
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
                                                    value={this.state.department.endDate}
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
                                                        <Button type={'submit'} color="info"  size={'lg'}>Save</Button>
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
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateDepartmentPage))
)