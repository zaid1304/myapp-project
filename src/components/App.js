import React, { Component } from 'react'

 class App extends Component {
   constructor(){
   super();
   console.log('constructor called');
   }
   state={
     Name:"hello zaid how r u",
     Salutation:"none"
   }
   componentDidMount() {
     console.log('componentdidMount called');
   }
   componentDidUpdate(prevprops,prevstate){
     console.log("componentdidUpdate called");
   }
   
  render() {
   if(this.state.Salutation!=="Hello")
      setTimeout(()=>{
        this.setState({
          Name:"praveen",
          Salutation:"yes"
        });
      },5000);
      console.log("render called");
      return (
      <div className="hellom">
        hii {this.state.Name} 
      </div>
      )
  }
}
export default App;