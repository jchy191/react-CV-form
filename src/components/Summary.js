import React from 'react';
import {Consumer} from './Context';

class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            summary:"",
            skills:""
        }
        
    }

    handleInput = (e, field) => {
        this.setState({[field]: e.target.value});
    }

    render(){

        
        return(
            <div className="summary cv-section">
                <h2>Summary</h2>
                <Consumer>
                    {({editMode}) => {
                        let element;
                        if (editMode) {
                            element = <SummaryForm summaryForm={this.state.summary} handleInput={this.handleInput}/>
                        } else {
                            element = <SummaryText summary={this.state.summary} skills={this.state.skills}/>
                        }
                        return (
                            <React.Fragment>
                                {element}
                            </React.Fragment>);
                    }}
                </Consumer>
            </div>
        )
    }

}

export default Summary

const SummaryText = (props) => {
    return (
        <div>
            <p><b>Summary: </b>{props.summary}</p>
            <p><b>Skills: </b>{props.skills}</p>
        </div>
    )
}

const SummaryForm = (props) => {
    return (
        <form>
            <label><b>Summary: </b>
                <textarea 
                    placeholder='Write a summary of yourself here'
                    id='summary'
                    value={props.summary}
                    onChange={(e) => props.handleInput(e, "summary")}
                />
            </label>
            <label><b>Skills: </b>
                <textarea 
                    placeholder='Write a summary of your skills and experiences here'
                    id='skills'
                    value={props.skills}
                    onChange={(e) => props.handleInput(e, "skills")}
                />
            </label>
        </form>
    )
}