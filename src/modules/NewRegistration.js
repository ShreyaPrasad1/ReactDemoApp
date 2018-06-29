import  React, { Component }  from 'react'
import UserAction from '../modules/Apis'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'qs';

class NewRegistration extends Component{
    constructor(props) {
        super(props);
        this.state = {
            createdBy:"",
            modifiedBy:"",
            createdDateTime:"",
            modifiedDateTime:"",
            firstName : "",
            lastName :"",
            position:"",
            contactPhone:"",
            contactEmail:"",

            fileUpload:null

        }

        this.firstNameChange = this.firstNameChange.bind(this);
        this.onPositionChange = this.onPositionChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.onContactChange = this.onContactChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);

        this.fileUpload = this.fileUpload.bind(this);
        this.save= this.save.bind(this)

    }

    save = () => {

        var date = new Date(this.state.createdDateTime);
        var timestamp = date.getTime();
        console.log("time "+timestamp)

        var finalData={

                "createdBy":this.state.createdBy,
                "modifiedBy":this.state.modifiedBy,
                "createdDateTime":timestamp,
                "modifiedDateTime":this.state.modifiedDateTime,
                "firstName":this.state.firstName,
                "lastName":this.state.lastName,
                "contactPhone":this.state.contactPhone,
                "contactEmail":this.state.contactEmail,

        }
        this.props.UserAction.createNew(finalData, this.afterQuesAdded)
    }

    afterQuesAdded = (data) => {
        console.log("***************** ----> "+data)
    }

    firstNameChange= (e) =>  {
        this.setState({ firstName: e.target.value});
    }

    onPositionChange= (e) =>{
        this.setState({ position: e.target.value});
    }

    onTimeChange= (e) =>{
        this.setState({ createdDateTime: e.target.value});
    }


    onContactChange=(e) =>{
        this.setState({ contactPhone: e.target.value});
    }

    onEmailChange=(e) =>{
        this.setState({ contactEmail: e.target.value});
    }


    fileUpload = (e) => {
        let data = e.target.files
        if(e.target.files[0]!=null){
            this.props.UserAction.fileUpload(data[0], this.fallBackMethod)
        }
    }



    fallBackMethod(value){
        console.log("######   "+value)
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    validatePhone(phone) {
        var re = /^\d{10}$/;
        return re.test(phone);
    };

    render(){
        return(
            <div>
                <form action="#">

                    <h4>1. Reporting </h4>
                    <div className="row">

                        <div className="col-md-6">
                            <div className="form-group">
                                <label >NAME *</label>
                                <input type="text" className="form-control" value={this.state.firstName} onChange={this.firstNameChange} required/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>POSITION *</label>
                                <input type="name" className="form-control" value={this.state.position} onChange={this.onPositionChange} placeholder="" id="position" required/>
                            </div>
                        </div>
                        </div>


                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>DOB *</label>
                                <div className='input-group date' id='myDatepicker2'>
                                    <input type='text' className="form-control" value=''  name="dob"/>
                                    <span className="input-group-addon">
                               <span className="glyphicon glyphicon-calendar"></span>
                            </span>
                                </div>
                            </div>


                        </div>

                        <div className="col-md-6">

                            <div className="form-group">
                                <label>TIME *</label>
                                <input type="time" className="form-control" value={this.state.createdDateTime} onChange={this.onTimeChange} id="time" placeholder="" required/>
                            </div>
                        </div>
                        </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>CONTACT *</label>
                                <input type="name" className="form-control" placeholder="" value={this.state.contactPhone} onChange={this.onContactChange} id="contact-number" required/>
                            </div>


                        </div>

                        <div className="col-md-6">

                            <div className="form-group">
                                <label>EMAIL *</label>
                                <input type="tel" className="form-control" id="phone" value={this.state.contactEmail} onChange={this.onEmailChange} placeholder="" required/>
                            </div>
                        </div>
                         </div>

                    <br/>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>ATTACHMENTS:</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <input type="file" name="browse" onChange={this.fileUpload}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="btm-sar">
                                    <center> <button type="submit" className="btn btn-round btn-primary btn-lg">CLEAR </button>
                                        <button type="submit" className="btn btn-round btn-primary btn-lg" onClick={this.save}>CONFIRM </button>

                                    </center>
                                </div>
                            </div>
                        </div>

                </form>
            </div>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        // getSarSuccess: state.sar.sarSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserAction: bindActionCreators(UserAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRegistration);