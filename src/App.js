import React from 'react';
import './App.css';

export default class App extends React.Component {
 
  constructor(props){
    super(props)
    this.state={ }
  }
  //Any instruction in this method is executed when the component is created.
    componentDidMount(){
    setTimeout(() => {
      alert("hello Rahma")
    }, 2000)  
  }
    componentWillMount() {
    window.removeEventListener('onbeforeunload',alert("GOODBYE"));
}
  render(){
  return (
      <div className="App">
         <h1>WELCOME</h1>

      </div>
    )
}
}

//export default App;
