import './App.css';
import React from 'react';
import {Form, FormControl,Button} from 'react-bootstrap';
import Ageteller from './Ageteller';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newDate:'',
      birthday:'',
      showStats:false
    }
  }
   changeBirthday=(e)=>{
     e.preventDefault();
        this.setState({
    birthday:this.state.newDate,
    showStats:true
   });
  }

  render(){
    return(
    <div className="App">
     <Form inline>
       <h2>Enter your Birthday!!</h2>
        <FormControl 
          type="date"
          onChange={event=>this.setState({newDate:event.target.value})}
          >
        </FormControl>
        {' '}
        <Button onClick={this.changeBirthday}>Submit</Button>
        {
          this.state.showStats? <Ageteller birthday={this.state.newDate}/>: null
        }
        
     </Form>
    </div>
    )
  }
}
export default App;
