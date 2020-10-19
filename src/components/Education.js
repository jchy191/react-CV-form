import React from 'react';
import {Consumer} from './Context';

const schoolList = [
    {
        name: "Balestier Hill Primary School",
        startDate: "2007-01-01",
        endDate: "2009-12-31",
        qualification: "NIL",
        key: 0
    },
    {
        name: "Nanyang Primary School",
        startDate: "2010-01-01",
        endDate: "2012-12-31",
        qualification: "PSLE",
        key: 1
    },
    {
        name: "Raffles Institution",
        startDate: "2013-01-01",
        endDate: "2018-12-31",
        qualification: "A-Levels",
        key: 2
    }
]

class Education extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            schools: schoolList,
            lastKey: 2
        };
        this.handleDeleteSchool = this.handleDeleteSchool.bind(this);
        this.handleAddSchool = this.handleAddSchool.bind(this);
    }

    handleAddSchool(e) {
        this.setState((prevState) => {
            const key = prevState.lastKey + 1;
            const schools = [...prevState.schools];
            schools.push({
                name: "",
                startDate:"",
                endDate:"",
                qualification:"",
                key: key
            })
            return {
                schools: schools,
                lastKey: key
            }
        })
    }

    handleDeleteSchool(e) {
        let id = e.target.id;
        this.setState((prevState) => {
            const schools = [...prevState.schools];
            const newSchools = schools.filter(school => school.key != id);
            
            return {
                schools: newSchools
            }
        })
    }

    handleInput(e){
        let id = e.target.id;
        this.setState({
            
        })
    }

    render(){
        return(
            <Consumer>
            {({editMode}) => {
                let addButton;
                if (editMode) {
                    addButton = <button className="school-add-button" onClick={this.handleAddSchool}>Add School?</button>
                }
                return(
                <div className="education cv-section">
                    <h2>Education</h2>
                    {addButton}
                    {this.state.schools.map(school => 
                    <School
                        key={school.key}
                        id={school.key}
                        name={school.name}
                        startDate={school.startDate}
                        endDate={school.endDate}
                        qualification={school.qualification}
                        editMode={editMode}
                        deleteSchool={this.handleDeleteSchool}
                    />)}
                </div>
                )
            }}
        </Consumer>
        )
    }
}

export default Education

class School extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const {name, startDate, endDate, qualification} = this.props;
        let deleteButton;
        if (this.props.editMode) {
            deleteButton = <button 
                                id={this.props.id} 
                                className="school-delete-button"
                                onClick={this.props.deleteSchool}>
                                Delete School?
                            </button>            
            return (
                <React.Fragment>
                    {deleteButton}
                    <SchoolForm 
                    name={this.props.name}
                    startDate={this.props.startDate}
                    endDate={this.props.endDate}
                    qualification={this.props.qualification}
                />
                </React.Fragment>
                
            )
        }
        return (
            <div>
                <h3><b>Name: </b>{name} {deleteButton}</h3>
                <p><b>Start Date: </b>{startDate}</p>
                <p><b>End Date: </b>{endDate}</p>
                <p><b>Qualification: </b>{qualification}</p>
            </div>
        )
    }
}

const SchoolForm = (props) => {

    return (
        <form>
            <label><b>Name: </b>
                <input 
                    type='text'
                    placeholder="Enter school's name"
                    id='name'
                    value={props.name}
                    onChange={props.handleInput}
                />
            </label>
            <br></br>
            <label><b>Start Date: </b>
                <input 
                    type='date'
                    id='startDate'
                    value={props.startDate}
                    onChange={props.handleInput}
                />
            </label>
            <br></br>
            <label><b>Date of Birth: </b>
                <input 
                    type='date'
                    id='endDate'
                    value={props.endDate}
                    onChange={props.handleInput}
                />
            </label>
            <br></br>
            <label><b>Qualification: </b>
                <input 
                    type='text'
                    placeholder='Enter the qualification attained'
                    id='qualification'
                    value={props.qualification}
                    onChange={props.handleInput}
                />
            </label>
        </form>
    )
    
}