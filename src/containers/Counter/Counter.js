import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/action';
class Counter extends Component {
   
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}/>
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.res ?
                        this.props.res.map(res=>{
                         return <li 
                         key={res.id} 
                         onClick={()=>this.props.onDeleteResult(res.id)}>{res.value}</li>
                        }) :null
                    }
                </ul>
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return {
        ctr:state.ctrReducer.counter,
        res:state.resReducer.results
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        onIncrementCounter:()=>dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter:()=>dispatch({type:actionTypes.DECREMENT}),
        onAddCounter:()=>dispatch({type:actionTypes.ADD,value:5}),
        onSubtractCounter:()=>dispatch({type:actionTypes.SUBTRACT,value:5}),
        onStoreResult:(ctr)=>dispatch({type:actionTypes.STORE_RESULT,counter:ctr}),
        onDeleteResult:(id)=>dispatch({type:actionTypes.DELETE_RESULT,resId:id})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);