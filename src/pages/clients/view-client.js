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
import {clientsAction as clientsAction} from '../../action/clientsAction'
import MatTextField from '@material-ui/core/TextField';

class ViewClientPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: undefined,
            id: props.location && props.location.state && props.location.state.id || undefined
        }

        this.handleCancelEventButton = this.handleCancelEventButton.bind(this)
    }

    handleCancelEventButton(){
        this.props.history.push('/clients')
    }

    componentDidMount() {
        if(this.state && this.state.id){
            this.props.clientsAction.getClient(this.state.id);
        }else{
            this.props.history.push('/clients')
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
       const { clientsReducer } = nextProps
        if(!this.state.client && clientsReducer.selectedClient){
            this.setState({
                ...this.state,
                client: clientsReducer.selectedClient
            })
        }
    }

    render() {
        const {classes} = this.props
        console.log(this.state.client)
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card plain>
                            <CardHeader plain color="info">
                                <h4 className={classes.cardTitleWhite}>
                                    View Client Details
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <Paper className={classes.contentRoot} elevation={1}>
                                    <form className={classes.container}>
                                        <GridContainer>
                                        <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="status"
                                                    value={this.state.client && this.state.client.status}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="name"
                                                    value={this.state.client && this.state.client.name}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="businessName"
                                                    value={this.state.client && this.state.client.data.client.businessName}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="contactPerson"
                                                    value={this.state.client && this.state.client.data.client.contactPerson}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true
                                                    }}
                                                />
                                            </GridItem>
                                             <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="address"
                                                    value={this.state.client && this.state.client.data.client.address}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true
                                                    }}
                                                />
                                            </GridItem>
                                             <GridItem xs={12} sm={12} md={7}>
                                               <MatTextField
                                                    id="startDate"
                                                    type="date"
                                                    value={this.state.client && this.state.client.startDate}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                               <MatTextField
                                                    id="endDate"
                                                    type="date"
                                                    value={this.state.client && this.state.client.endDate}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true
                                                    }}
                                                />
                                            </GridItem>

                                        </GridContainer>
                                        <br />
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={5}>
                                                <GridContainer>
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
       clientsReducer: state.clientsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clientsAction: bindActionCreators({...clientsAction}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ViewClientPage))
)