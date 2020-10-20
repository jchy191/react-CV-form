import React from 'react';
import {Consumer} from './components/Context';
import {Provider as EducationProvider} from './components/Context/Education'
import './App.css';
import General from './components/General';
import Summary from './components/Summary';
import Education from './components/Education'

class App extends React.Component {

  constructor(props) {
    super(props)
  }



  render(){
    return (
        <div className="App">
          <h1>CV</h1>
          <Consumer>
            {({editMode, actions}) => {
              let button;
              if (editMode) {
                button = <button className='submit-button' onClick={() => actions.submitClick()}>Submit form?</button>
              } else {
                button = <button className='edit-button' onClick={() => actions.editClick()}>Edit form?</button>
              }
              return (
                <React.Fragment>
                 {button}  
                </React.Fragment>
              );
            }}
          </Consumer>
          <General />
          <Summary />
          <EducationProvider>
            <Education />
          </EducationProvider>
        </div>
      
    );
  }
  
}

export default App;
