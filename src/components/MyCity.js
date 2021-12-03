import React from 'react';
import Temp from './Temp';
export default class MyCity extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            degrees : null,
            celsius : true,
        }
    }
    componentDidMount(){

        fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=262c51aef0bbb38ed1d831d719867277')
        .then((res) => res.json())
        .then(temp => this.setState({degrees: temp["main"]["temp"]}))
    }
    changetoOther(item)
    {
        this.setState({
            celsius : item,
        })
    }
    render(){
        return(
        <div>
            <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Marine_Lines_Mumbai_2021.jpg/800px-Marine_Lines_Mumbai_2021.jpg" width="600" height="300"/>
            <h1>I hail from Mumbai, India. The best city in India.</h1>
            <p>Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. All Mumbaikars say that there is no place like Mumbai and there are many reasons that make them fall for their city over and over again.</p>
            {this.state.degrees > 20 ? <img src = "https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/sunny.png" /> : this.state.degrees < 10 ? <img src = "https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/cold.png" /> : <img src = "https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/mild.png" />}
            <Temp data = {{celsius : this.state.celsius, changetoOther:this.changetoOther.bind(this)}} degrees = {this.state.degrees}/>
        </div>
        )
    }
}