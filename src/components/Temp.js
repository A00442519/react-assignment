import React from 'react';
import '../App.css';

export default class Temp extends React.Component{
    render(props){
        return(
            this.props.data.celsius === true ?
        <div> 
            <p> Temperature: {this.props.degrees} Celsius</p>
            <button className="button-class button3" onClick={() => this.props.data.changetoOther(false)}>
                Convert to Fahrenheit</button></div> :
                <div>    <p> Temperature: {(32 + (this.props.degrees * 1.8)).toFixed(2)} Fahrenheit</p>
                <button className="button-class button3" onClick={() => this.props.data.changetoOther(true)}>Convert to Celsius</button></div>

            )
    }
}

