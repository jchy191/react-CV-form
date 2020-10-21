import React from 'react';

class Education extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            schools: schoolList,
            lastKey: 2
        };
        this.handleDeleteSchool = this.handleDeleteSchool.bind(this);
        this.handleAddSchool = this.handleAddSchool.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleAddSchool(e) {
        this.setState((prevState) => {
            const schoolID = prevState.lastKey + 1;
            const schools = [...prevState.schools];
            schools.push({
                name: "",
                startDate:"",
                endDate:"",
                qualification:"",
                schoolID: schoolID
            })
            return {
                schools: schools,
                lastKey: schoolID
            }
        })
    }

    handleDeleteSchool(e) {
        let id = e.target.id;
        this.setState((prevState) => {
            const schools = [...prevState.schools];
            const newSchools = schools.filter(school => school.schoolID != id);
            
            return {
                schools: newSchools
            }
        })
    }

    handleInput(e, schoolID){
        let value = e.target.value;
        let keyy = e.target.id;
        this.setState(prevState => {
            const schools = [...prevState.schools];
            const newSchool = schools.filter(school => school.schoolID == schoolID);
            newSchool[0][keyy] = value;
            return {
                schools: schools
            }
        })
    }

    render(){
        const {editMode} = this.props.context;
        let addButton;
        if (editMode)
            addButton = <button className="school-add-button" onClick={this.handleAddSchool}>Add School?</button>


        return(

            <div className="education cv-section">
                <h2>Education</h2>
                {addButton}
                
                {this.state.schools.map(school => 
                <School
                    key={school.schoolID}
                    school={{...school}}
                    context={this.props.context}
                    deleteSchool={this.handleDeleteSchool}
                    handleInput={this.handleInput}
                />)}
            </div>                  
              
        )
    }
}

export default Education

const School = (props) => {

    const {name, startDate, endDate, qualification} = props.school;
    const {editMode} = props.context;

    return(    
        (editMode) ?                        
            <SchoolForm 
                school={{...props.school}}
                handleInput={props.handleInput}
                deleteSchool={props.deleteSchool}
            />
        :     
            <div>
                <h3><b>Name: </b>{name}</h3>
                <p><b>Start Date: </b>{startDate}</p>
                <p><b>End Date: </b>{endDate}</p>
                <p><b>Qualification: </b>{qualification}</p>
            </div>
    )                      
    
}

const SchoolForm = (props) => {
    const {name, startDate, endDate, qualification, schoolID} = props.school;

    let deleteButton = <button 
                            id={schoolID} 
                            className="school-delete-button"
                            onClick={props.deleteSchool}>
                            Delete School?
                        </button>;
                            
    return (
        <form>
            <label><b>Name: </b> 
                <input 
                    type='text'
                    placeholder="Enter school's name"
                    id='name'
                    value={name}
                    onChange={(e) => props.handleInput(e, schoolID)}
                />
            </label>
            {deleteButton}
            <br></br>
            <label><b>Start Date: </b>
                <input 
                    type='date'
                    id='startDate'
                    value={startDate}
                    onChange={(e) => props.handleInput(e, schoolID)}
                />
            </label>
            <br></br>
            <label><b>Date of Birth: </b>
                <input 
                    type='date'
                    id='endDate'
                    value={endDate}
                    onChange={(e) => props.handleInput(e, schoolID)}
                />
            </label>
            <br></br>
            <label><b>Qualification: </b>
                <input 
                    type='text'
                    placeholder='Enter the qualification attained'
                    id='qualification'
                    value={qualification}
                    onChange={(e) => props.handleInput(e, schoolID)}
                />
            </label>
        </form>
    )
}


const schoolList = [
    {
        name: "Balestier Hill Primary School",
        startDate: "2007-01-01",
        endDate: "2009-12-31",
        qualification: "NIL",
        schoolID: 0
    },
    {
        name: "Nanyang Primary School",
        startDate: "2010-01-01",
        endDate: "2012-12-31",
        qualification: "PSLE",
        schoolID: 1
    },
    {
        name: "Raffles Institution",
        startDate: "2013-01-01",
        endDate: "2018-12-31",
        qualification: "A-Levels",
        schoolID: 2
    }
]