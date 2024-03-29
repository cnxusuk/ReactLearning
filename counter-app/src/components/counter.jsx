import React, { Component } from 'react';

class Counter extends Component {
    // state={
    //     count:this.props.counter.value,
    //     //imageUrl:"https://picsum.photos/200"
    //     tags:[]
    // };

    styles={
        fontSize: 10,
        fontWeight: 'bold'
    };

    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
    }

    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

    //handleIncrement(){
    // handleIncrement=product=>{ //arrow function, do not need to bind to origin object, it's much more simple
    //     // console.log("Increment Clicked", this.state.count++);
    //     console.log(product);
    //     this.setState({count: this.state.count+1})
    // };

    // doHandleIncrement =()=>{
    //     this.handleIncrement({id:1});
    // };

    // handleDecrement=()=>{
    //     this.setState({count: this.state.count-1})
    // }
    componentDidUpdate(prevProps, prevState){
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if(prevProps.counter.value!==this.props.counter.value){
            //Ajax call and get new data from the server
        }
    }

    componentWillUnmount(){
        console.log("App - unmount");
    }

    render() {  
        return (
            <div>
                <h4>{this.props.counter.id}</h4>                
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>                
                <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-warning btn-sm m-2">Decrement</button>                
                <button 
                onClick={ ()=> this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero": value ;
    }
}
 
export default Counter;