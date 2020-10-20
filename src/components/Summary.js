import React from 'react';
import {Consumer} from './Context';

class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            summary:""
        }
        
    }

    handleInput = (e) => {
        this.setState({summary: e.target.value});
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
                            element = <SummaryText summary={this.state.summary} />
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
        </div>
    )
}

const SummaryForm = (props) => {
    return (
        <form>
            <label><b>Summary: </b>
                <textarea 
                    placeholder='Write a summary of your skills and experiences here'
                    id='summary'
                    value={props.summary}
                    onChange={props.handleInput}
                />
            </label>
        </form>
    )
}