import React, { Component } from 'react';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import '../assests/css/custom.css';
import '../assests/css/custom.min.css';

var userType, userId;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: '',
      allNotifications: [],
      nCount: 0
    }
    this.handleClick = this.handleClick.bind(this);
      }

  handleClick(value) {
    this.props.handleNavBar(value);
  }


  profilePage = () => {
    browserHistory.push('/Profile');
  }




  render() {
    console.log('bef render - -> ', this.state.userDetails);
    return (

      <div>
        <div className="top_nav">
          <div className="nav_menu background-style">
            <nav>
              <div className="nav toggle">
                {this.props.navBarValue === "nav-sm" ? <a id="menu_toggle" onClick={(e) => this.handleClick("nav-md")}><i className="fa fa-bars"></i></a>
                  : <a id="menu_toggle" onClick={(e) => this.handleClick("nav-sm")}><i className="fa fa-bars"></i></a>}
              </div>


              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

                    <span className=" fa fa-angle-down"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-usermenu pull-right">
                    <li><a onClick={this.profilePage}> Profile</a></li>

                    <li><a href="javascript:;">Help</a></li>
                    <li><a href="javascript:;" onClick={this.logout}><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                  </ul>
                </li>
                <li role="presentation" className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-envelope-o"></i>
                    <span className="badge bg-green">{this.state.nCount}</span>
                  </a>
                  <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                    {this.state.allNotifications.map((notification, index) => {
                      var diffTime = new Date(notification.createdTime) - new Date();
                      var read = notification.read;
                      return (

                          <a style={{fontWeight: read ? 'nn' : 'bolder'}}>
                           <span>
                              <span>{notification.fromUser}</span>
                              <span className="time">{Math.round(((diffTime % 86400000) % 3600000) / 60000)} mins ago</span>
                            </span>
                            <span className="message">
                              {notification.description}
                            </span>
                          </a>

                      )
                    })}
                    <li>
                      <div className="text-center">
                        <a>
                          <strong>View more</strong>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>


              </ul>

            </nav>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    getUserSuccess: state.login.getUserSuccess
  };
}


export default connect(mapStateToProps)(Header);

