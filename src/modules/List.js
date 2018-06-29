import  React, { Component }  from 'react'
import UserAction from '../modules/Apis'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../assests/css/style.css'


class List extends Component{
    constructor(props){
        super(props);
        this.state ={
            Data:[],
            loading: false
        }

        this.getallUserResponse = this.getallUserResponse.bind(this);

    };

    componentWillMount(){
        this.setState({ loading: true })
        this.props.UserAction.getList(this.getallUserResponse);

    }

    getallUserResponse(value) {
        this.setState({ loading: false })
        this.setState({ Data: value.data })
    }



    render(){
        return(
          <div className = "main">
              <div className=""><table className="table generaltable" id="users">
                  <thead>
                  <tr>
                      <th className="" scope="col"><a href="user.php?sort=firstname&amp;dir=ASC">First name</a> / <a href="user.php?sort=lastname&amp;dir=ASC">Surname</a></th>
                      <th className="" scope="col"><a href="user.php?sort=email&amp;dir=ASC">Last Name</a></th>
                      <th className="" scope="col"><a href="user.php?sort=city&amp;dir=ASC">Email</a></th>
                      <th className="" scope="col"><a href="user.php?sort=country&amp;dir=ASC">Phone</a></th>
                      <th className="" scope="col">Edit</th>
                      <th className="" scope="col"></th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.Data.map(function (obj, index) {
                      return (<tr key={index} className="lastrow">
                          <td className="centeralign cell c0"><a>{obj.firstName}</a></td>
                          <td className="centeralign cell c1">{obj.lastName}</td>
                          <td className="cell c2">{obj.contactEmail}</td>
                          <td className="cell c3">{obj.contactPhone}</td>
                          <td className="cell c5"><a onClick={() => this.userEdit(obj)}><i className="icon fa fa-cog fa-fw " aria-hidden="true" title="Edit" aria-label="Edit"></i></a></td>
                          <td className="cell c6 lastcol"></td>
                      </tr>)
                  }.bind(this))}
                  </tbody>
              </table>


              </div>

          </div>
        );
    }
}

function mapStateToProps(state, props) {
    //console.log("response data----->",state.login)
    return {
        getUserSuccess: state.login.userSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserAction: bindActionCreators(UserAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (List);