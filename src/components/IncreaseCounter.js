import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {increaseCounter} from '../redux/actions/counterAction'
import { connect } from 'react-redux';

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increaseCounter())
                }}>1 arttır</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(IncreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter);