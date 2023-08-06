import React from "react";

class ProfileClass extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         count:0,
      }
      // console.log("child - constructor" + this.props.name);
   }

   componentDidMount(){
      // console.log("child - ComponentDidMount" + this.props.name);
   }
    render(){
       const {count} = this.state
      //  console.log("child - render" + this.props.name);
      return (
        <div>   
      <h1> ProfileClass Component</h1>
      {/* <h4>{this.props.name}</h4> */}
      <h4>{count}</h4>
      <button onClick={() => 
      //WE DO NOT MUTATATE STATE DIRECTLY
      //NEVER DO this.state = something
      {this.setState({
         count:1,
      })}
   }>setCount</button>
      </div> 
      )
   }
}

export default ProfileClass;