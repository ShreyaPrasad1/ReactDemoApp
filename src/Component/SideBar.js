import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import '../assests/css/custom.css'
import '../assests/css/custom.min.css'
import '../assests/css/bootstrap/dist/css/bootstrap.min.css'
import '../assests/css/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assests/css/style.css'
import All from '../modules'
//import App from '../App'

class SideBar extends Component {
    constructor(props){
        super(props);
        this.state={
          display :"none",
          visible : true,
          display1 :"none",
          visible1 : true,
          display2:"none",
          visible2: true,
          flag:0
        }
        this.displayElements = this.displayElements.bind(this)
        this.redirectDashboard = this.redirectDashboard.bind(this)
        this.redirectList = this.redirectList.bind(this)
        this.redirectRegistration = this.redirectRegistration.bind(this)
        this.redirectEmailTemplate = this.redirectEmailTemplate.bind(this)
    }


    displayElements = (i) => {
        console.log(" you have clicked me "+i==1);
        this.setState({visible:!this.state.visible})
        if(this.state.visible && i == 1){
            this.setState({display: "block"})
        }else{
            this.setState({display: "none"})
        }

        if(this.state.visible1 && i == 2) {
            this.setState({display1: "block"})
        }else{
            this.setState({display1: "none"})
        }
        console.log("*******   "+this.state.display)

        if(this.state.visible2 && i == 3) {
            this.setState({display2: "block"})
        }else{
            this.setState({display2: "none"})
        }
    }

    redirectDashboard= () =>{
        browserHistory.push('/dashboard')
    }

    redirectList= () =>{
        console.log("********  i reach")
        browserHistory.push('/list')
    }

    redirectRegistration= () =>{
        console.log("********  i reach")
        browserHistory.push('/newRegistration')
    }

    redirectEmailTemplate = ()=>{
        browserHistory.push('/template/email')
    }



render(){

   return (
       <div className="nav-md">

       <div className="container body">
       <div className="main_container">
<div className="col-md-3 left_col">
  <div className="left_col scroll-view">


  <div className="profile clearfix">

    <div className="profile_info">
      <span>Welcome,</span>
      <h2>Admin</h2>
    </div>
  </div>

  <br />

  <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
    <div className="menu_section">
      <h3>SITE ADMINISTRATION</h3>
      <ul className="nav side-menu">
        <li className=""><a href="" onClick={this.redirectDashboard} ><i className="fa fa-home"></i>Dashboard</a></li>
        <li className="active"><a><i className="fa fa-puzzle-piece"></i> Modules <span className="fa fa-chevron-down"></span></a>
          <ul className="nav child_menu side-bar-display">
            <li className="active"><a> Subject Access Request <span className="fa fa-chevron-down"></span></a>
              <ul className="nav child_menu side-bar-display" >
                <li ><a>Dashboard</a></li>
              </ul></li>
            <li className=""><a> <span className="fa fa-chevron-down"></span></a>
              <ul className="nav child_menu" >
                <li><a>Dashboard</a></li>
                <li><a>Projects</a></li>
                <li><a>Add New Project</a></li>
                <li><a>Templates</a></li>
                <li><a>Assessment</a></li>
                <li><a>Add New Assessment</a></li>
                <li><a>Question Bank</a></li>
              </ul>
            </li>
            <li><a>Investigation<span className="fa fa-chevron-down"></span></a>
              <ul className="nav child_menu" style={{display:'block'}}>
                <li><a>Fraud<span className="fa fa-chevron-down"></span></a>
                  <ul className="nav child_menu" style={{display:'block'}}>
                    <li><a href="" onClick={this.redirectList}>Report a change</a></li>
                    <li><a href="" onClick={this.redirectRegistration}>Register</a></li>
                  </ul>
                </li>
                <li><a> Investigation<span className="fa fa-chevron-down"></span></a>
                  <ul className="nav child_menu">
                    <li><a href="#">Register</a></li>
                  </ul>
                </li>
                <li className=""><a>Templates<span className="fa fa-chevron-down"></span></a>

                </li>

              </ul>
            </li>

          </ul></li>
        <li className=""><a><i className="fa fa-user"></i> Users <span className="fa fa-chevron-up"></span></a>
          <ul className="nav child_menu" style={{display:'block'}}><li><a>Accounts</a></li>
            <li><a>Departments</a></li>
            <li><a>Permissions</a></li>
            <li><a>Company Info</a></li>
          </ul>
        </li>
        <li><a><i className="fa fa-server"></i> System Monitoring</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>
       </div>
       </div>
       </div>
);
}
}

function mapStateToProps(state, props) {
  return {
    logoutSuccess: state.login.logoutSuccess
  };
}

function mapDispatchToProps(dispatch) {
    return {
        All: bindActionCreators(All, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

