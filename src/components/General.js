import React from 'react';

class General extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            information: {
                name: 'Joshua Chin',
                gender:'Male',
                dateOfBirth: '19/01/2000',
                email:'joshuachin191@gmail.com',
                profession: 'Student'
            }
        }
    }

    handleInput = (e) => {
        const inputField = e.target.id
        const value = e.target.value
        this.setState(prevState => {
            const updatedState = {...prevState};
            updatedState.information[inputField] = value;
            return updatedState;
        })
    }


    render() {
        return(
            <div className="general cv-section">
                <h2>General Information</h2>
                {(this.props.context.editMode)?
                    <GeneralForm information={this.state.information} handleInput={this.handleInput}/>
                :
                    <GeneralText information={this.state.information} />
                }        
            </div>
        )
    }

}

export default General


const GeneralText = (props) => {
    const {name, gender, dateOfBirth, email, profession} = props.information;
    return (
        <div>
            <p><b>Name: </b>{name}</p>
            <p><b>Gender: </b>{gender}</p>
            <p><b>Date of Birth: </b>{dateOfBirth}</p>
            <p><b>Email: </b>{email}</p>
            <p><b>Profession: </b>{profession}</p>
        </div>
    )
}

const GeneralForm = (props) => {

    return (
        <form>
            <label><b>Name: </b>
                <input 
                    type='text'
                    placeholder='Enter your name'
                    id='name'
                    value={props.information.name}
                    onChange={props.handleInput}
                />
            </label>
            <br></br>
            <label><b>Gender: </b>
                <input 
                    type='text'
                    placeholder='Enter your gender'
                    id='gender'
                    value={props.information.gender}
                    onChange={props.handleInput}
                />
            </label>
            <br></br>
            <label><b>Date of Birth: </b>
                <input 
                    type='text'
                    placeholder='Enter your date of birth'
                    id='dateOfBirth'
                    value={props.information.dateOfBirth}
                    onChange={props.handleInput}
                />
            </label>
            <br></br>
            <label><b>Email: </b>
                <input 
                    type='text'
                    placeholder='Enter your email'
                    id='email'
                    value={props.information.email}
                    onChange={props.handleInput}
                />
            </label>
            <br></br>
            <label><b>Profession: </b>
                <input 
                    type='text'
                    placeholder='Enter your profession'
                    id='profession'
                    value={props.information.profession}
                    onChange={props.handleInput}
                />
            </label>
        </form>
    )
    
}