import React from 'react';
import {Consumer, withContext} from './components/Context';
import './App.css';
import General from './components/General';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';

const GeneralWithContext = withContext(General);
const SummaryWithContext = withContext(Summary);
const EducationWithContext = withContext(Education);
const ExperienceWithContext = withContext(Experience);


class App extends React.Component {


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
          <GeneralWithContext />
          <SummaryWithContext />
          <EducationWithContext />
          <ExperienceWithContext />
        </div>
      
    );
  }
  
}

export default App;
