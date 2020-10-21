import React from 'react';
import {Consumer as EducationConsumer} from './Context/Education';



class Education extends React.Component {

    render(){
        return(
            <EducationConsumer>
                {({schools, actions}) => {
                    let addButton;
                    if (this.props.context.editMode) {
                        addButton = <button className="school-add-button" onClick={actions.addSchool}>Add School?</button>
                    }
                    return(
                    <div className="education cv-section">
                        <h2>Education</h2>
                        {addButton}
                        {schools.map(school => 
                        <School
                            key={school.schoolID}
                            school={{...school}}
                            context={this.props.context}
                            deleteSchool={actions.deleteSchool}
                            handleInput={actions.handleInput}
                        />)}
                    </div>
                    )
                }}
            </EducationConsumer>
        )
    }
}

export default Education

class School extends React.Component {

    render() {
        const {name, startDate, endDate, qualification, schoolID} = this.props.school;
        const {editMode, actions} = this.props.context;

        let deleteButton = <button 
                                id={schoolID} 
                                className="school-delete-button"
                                onClick={actions.deleteSchool}>
                                Delete School?
                            </button>;


        return(    
            (editMode) ?                        
                <React.Fragment>
                    {deleteButton}
                    <SchoolForm 
                    school={{...this.props.school}}
                    handleInput={actions.handleInput}
                    />
                </React.Fragment>
            :     
                <div>
                    <h3><b>Name: </b>{name} {deleteButton}</h3>
                    <p><b>Start Date: </b>{startDate}</p>
                    <p><b>End Date: </b>{endDate}</p>
                    <p><b>Qualification: </b>{qualification}</p>
                </div>
        )                      
    }
}

class SchoolForm extends React.Component{

    render(){
        const {name, startDate, endDate, qualification, schoolID} = this.props.school;

        return (
        <form>
            <label><b>Name: </b>
                <input 
                    type='text'
                    placeholder="Enter school's name"
                    id='name'
                    value={name}
                    onChange={(e) => this.props.handleInput(e, schoolID)}
                />
            </label>
            <br></br>
            <label><b>Start Date: </b>
                <input 
                    type='date'
                    id='startDate'
                    value={startDate}
                    onChange={(e) => this.props.handleInput(e, schoolID)}
                />
            </label>
            <br></br>
            <label><b>Date of Birth: </b>
                <input 
                    type='date'
                    id='endDate'
                    value={endDate}
                    onChange={(e) => this.props.handleInput(e, schoolID)}
                />
            </label>
            <br></br>
            <label><b>Qualification: </b>
                <input 
                    type='text'
                    placeholder='Enter the qualification attained'
                    id='qualification'
                    value={qualification}
                    onChange={(e) => this.props.handleInput(e, schoolID)}
                />
            </label>
        </form>
    )
    }
    
}