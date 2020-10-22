import React from 'react';

class Experience extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            jobs: jobList,
            lastKey: 0
        };
        this.handleDeleteJob = this.handleDeleteJob.bind(this);
        this.handleAddJob = this.handleAddJob.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleAddJob(e) {
        this.setState((prevState) => {
            const jobID = prevState.lastKey + 1;
            const jobs = [...prevState.jobs];
            jobs.push({
                name: "",
                startDate:"",
                endDate:"",
                achievements:"",
                jobID: jobID
            })
            return {
                jobs: jobs,
                lastKey: jobID
            }
        })
    }

    handleDeleteJob(e) {
        e.preventDefault();
        let id = e.target.id;
        this.setState((prevState) => {
            const jobs = [...prevState.jobs];
            const newJobs = jobs.filter(job => job.jobID !== parseInt(id));
            
            return {
                jobs: newJobs
            }
        })
    }

    handleInput(e, jobID){
        e.preventDefault();
        let value = e.target.value;
        let key = e.target.id;
        this.setState(prevState => {
            const jobs = [...prevState.jobs];
            const newJobs = jobs.filter(job => job.jobID === parseInt(jobID));
            newJobs[0][key] = value;
            return {
                jobs: newJobs
            }
        })
    }

    render(){
        const {editMode} = this.props.context;
        let addButton;
        if (editMode)
            addButton = <button className="job-add-button" onClick={this.handleAddJob}>Add Job?</button>


        return(

            <div className="education cv-section">
                <h2>Experience</h2>
                {addButton}
                
                {this.state.jobs.map(job => 
                <Job
                    key={job.jobID}
                    job={{...job}}
                    context={this.props.context}
                    deleteJob={this.handleDeleteJob}
                    handleInput={this.handleInput}
                />)}
            </div>                  
              
        )
    }
}

export default Experience

const Job = (props) => {

    const {name, startDate, endDate, achievements} = props.job;
    const {editMode} = props.context;

    return(    
        (editMode) ?                        
            <JobForm 
                job={{...props.job}}
                handleInput={props.handleInput}
                deleteJob={props.deleteJob}
            />
        :     
            <div>
                <h3><b>Name: </b>{name}</h3>
                <p><b>Start Date: </b>{startDate}</p>
                <p><b>End Date: </b>{endDate}</p>
                <p><b>Responsibilities & Achievements: </b>{achievements}</p>
            </div>
    )                      
    
}

const JobForm = (props) => {
    const {name, startDate, endDate, achievements, jobID} = props.job;

    let deleteButton = <button 
                            id={jobID} 
                            className="job-delete-button"
                            onClick={props.deleteJob}>
                            Delete job?
                        </button>;
                            
    return (
        <form>
            <label><b>Name: </b> 
                <input 
                    type='text'
                    placeholder="Enter job's name"
                    id='name'
                    value={name}
                    onChange={(e) => props.handleInput(e, jobID)}
                />
            </label>
            {deleteButton}
            <br></br>
            <label><b>Start Date: </b>
                <input 
                    type='date'
                    id='startDate'
                    value={startDate}
                    onChange={(e) => props.handleInput(e, jobID)}
                />
            </label>
            <br></br>
            <label><b>Date of Birth: </b>
                <input 
                    type='date'
                    id='endDate'
                    value={endDate}
                    onChange={(e) => props.handleInput(e, jobID)}
                />
            </label>
            <br></br>
            <label><b>Responsibilities & Achievements: </b>
                <textarea 
                    placeholder='Enter the qualification attained'
                    id='achievements'
                    value={achievements}
                    onChange={(e) => props.handleInput(e, jobID)}
                />
            </label>
        </form>
    )
}

const jobList = [
    {
        name: "Balestier Hill Primary School",
        startDate: "2007-01-01",
        endDate: "2009-12-31",
        achievements: "NIL",
        jobID: 0
    },
    {
        name: "Nanyang Primary School",
        startDate: "2010-01-01",
        endDate: "2012-12-31",
        achievements: "PSLE",
        jobID: 1
    },
    {
        name: "Raffles Institution",
        startDate: "2013-01-01",
        endDate: "2018-12-31",
        achievements: "A-Levels",
        jobID: 2
    }
]
