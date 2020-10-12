import React from 'react';
import './App.css';
import General from './components/General';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
    }
  }

  handleEditClick = () => {
    this.setState({
      editMode: true
    });
  }
  handleSubmitClick = () => {
    this.setState({
      editMode: false
    });
  }

  render(){
    return (
      <div className="App">
        <h1>CV</h1>
        {(this.state.editMode) ? 
          <button className='submit-button' onClick={() => this.handleSubmitClick()}>Submit form?</button> :
          <button className='edit-button' onClick={() => this.handleEditClick()}>Edit form?</button>
        }
        <General editMode={this.state.editMode}/>
      </div>
    );
  }
  
}

export default App;
