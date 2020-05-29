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

class EditClientPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: undefined,
            id: props.location && props.location.state && props.location.state.id || undefined
        }
         this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancelEventButton = this.handleCancelEventButton.bind(this)
    }

     handleChange(e) {
        this.setState({
            client: {
                ...this.state.client,
                [e.target.id]: e.target.value
            }
        })
    };

    handleSubmit() {
        this.props.clientsAction.updateClient(this.state.client)
        this.props.history.push('/clients')
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
                                    Edit Client Details
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <Paper className={classes.contentRoot} elevation={1}>
                                    <form className={classes.container}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="clientName"
                                                    value={this.state.client && this.state.client.name}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="businessName"
                                                    value={this.state.client && this.state.client.data.client.businessName}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="contactPerson"
                                                    value={this.state.client && this.state.client.data.client.contactPerson}
                                                    onChange={this.handleChange}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                   
                                                />
                                            </GridItem>
                                             <GridItem xs={12} sm={12} md={7}>
                                                <TextField
                                                    id="address"
                                                    value={this.state.client && this.state.client.data.client.address}
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
       clientsReducer: state.clientsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clientsAction: bindActionCreators({...clientsAction}, dispatch)
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditClientPage))
)