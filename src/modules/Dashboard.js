import  React, { Component }  from 'react'
import { connect } from 'react-redux';

import '../assests/css/custom.min.css';
import '../assests/css/custom.css';


class Dashboard extends Component{
    render(){
        return(
            <div className="right_col">
                <div className="right_col" role="main">


                    <div className="row circle-above-cls">
                        <div className="col-md-6">
                            <div className="label-text-cls"> <h2 align="center">Tools</h2></div>
                            <div className='circlesel'>
                                <div className='selector open'>
                                    <ul>
                                        <li style={{transform: 'rotate(0deg)'}}>
                                            <input id='c1' type='checkbox'/>
                                                <label htmlFor='c1' style={{transform: 'rotate(0deg)'}}><i className="fa fa-plus"></i> </label>
                                        </li>
                                        <li style={{transform: 'rotate(45deg)'}}>
                                            <input id='c2' type='checkbox'/>
                                                <label htmlFor='c2' style={{transform: 'rotate(315deg)'}}><i className="fa fa-plus"></i> </label>
                                        </li>
                                        <li style={{transform: 'rotate(90deg)'}}>
                                            <input id='c3' type='checkbox'/>
                                                <label htmlFor='c3' style={{transform: 'rotate(270deg)'}}><i className="fa fa-plus"></i>  </label>
                                        </li>
                                        <li style={{transform: 'rotate(135deg)'}}>
                                            <input id='c4' type='checkbox'/>
                                                <label htmlFor='c4' style={{transform: 'rotate(135deg)'}}> <i className="fa fa-plus"></i> </label>
                                        </li>
                                        <li style={{transform: 'rotate(180deg)'}}>
                                            <input id='c5' type='checkbox'/>
                                                <label htmlFor='c5' style={{transform: 'rotate(180deg)'}}> <i className="fa fa-plus"></i></label>
                                        </li>
                                        <li style={{transform: 'rotate(225deg)'}}>
                                            <input id='c6' type='checkbox'/>
                                                <label htmlFor='c6' style={{transform: 'rotate(225deg)'}}><i className="fa fa-plus"></i> </label>
                                        </li>
                                        <li style={{transform: 'rotate(270deg)'}}>
                                            <input id='c7' type='checkbox'/>
                                                <label htmlFor='c7' style={{transform: 'rotate(270deg)'}}><i className="fa fa-plus"></i> </label>
                                        </li>
                                        <li style={{transform: 'rotate(315deg)'}}>
                                            <input id='c8' type='checkbox'/>
                                                <label htmlFor='c8' style={{transform: 'rotate(315deg)'}}><i className="fa fa-plus"></i> </label>
                                        </li>
                                    </ul>
                                    <button> </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="label-text-cls"> <h2 align="center">Productivity Tools</h2></div>
                            <div className='circlesel1'>
                                <div className='selector1 open'>
                                    <ul>
                                        <li style={{transform: 'rotate(0deg)'}}>
                                            <input id='c1' type='checkbox'/>
                                                <label htmlFor='c1' style={{transform: 'rotate(0deg)'}}><a href="social-media.html"></a></label>
                                        </li>
                                        <li style={{transform: 'rotate(45deg)'}}>
                                            <input id='c2' type='checkbox'/>
                                                <label htmlFor='c2' style={{transform: 'rotate(45deg)'}}>  <a href="marketplace.html"><i className="fa fa-plus"></i></a></label>
                                        </li>
                                        <li style={{transform: 'rotate(90deg)'}}>
                                            <input id='c3' type='checkbox'/>
                                                <label htmlFor='c3' style={{transform: 'rotate(90deg)'}}> <a href="marketplace.html"><i className="fa fa-plus"></i></a></label>
                                        </li>
                                        <li style={{transform: 'rotate(135deg)'}}>
                                            <input id='c4' type='checkbox'/>
                                                <label htmlFor='c4' style={{transform: 'rotate(135deg)'}}><a href="marketplace.html"><i className="fa fa-plus"></i></a></label>
                                        </li>
                                        <li style={{transform: 'rotate(180deg)'}}>
                                            <input id='c5' type='checkbox'/>
                                                <label htmlFor='c5' style={{transform: 'rotate(180deg)'}}> <a href="marketplace.html"><i className="fa fa-plus"></i></a></label>
                                        </li>
                                        <li style={{transform: 'rotate(225deg)'}}>
                                            <input id='c6' type='checkbox'/>
                                                <label htmlFor='c6' style={{transform: 'rotate(225deg)'}}> <a href="marketplace.html"><i className="fa fa-plus"></i></a></label>
                                        </li>
                                        <li style={{transform: 'rotate(270deg)'}}>
                                            <input id='c7' type='checkbox'/>
                                                <label htmlFor='c7' style={{transform: 'rotate(270deg)'}}><a href="marketplace.html"><i className="fa fa-plus"></i></a></label>
                                        </li>
                                        <li style={{transform: 'rotate(315deg)'}}>
                                            <input id='c8' type='checkbox'/>
                                                <label htmlFor='c8' style={{transform: 'rotate(315deg)'}}><a href="marketplace.html"><i className="fa fa-plus"></i></a> </label>
                                        </li>
                                    </ul>
                                    <button> </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />

                </div>


            </div>
        );
    }
}
export default Dashboard;