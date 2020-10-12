import React from 'react';

class General extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            information: {
                name: 'Joshua Chin',
                gender:'Male',
                dateOfBirth: '19/01/2000',
                email:'joshuachin191@gmail.com'
            },
            inputValue: {
                name: '',
                gender:'',
                dateOfBirth: '',
                email:''
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

    handleEditMode = () => {

    }

    render() {

        let element; 
        if (this.props.editMode) {
            element = <GeneralForm information={this.state.information} handleInput={this.handleInput}/>
        } else {
            element = <GeneralText information={this.state.information} />
        }

        return(
            <div className="general cv-section">
                <h2>General Information</h2>
                {element}
            </div>
            
        )
    }

}

export default General


const GeneralText = (props) => {
    const {name, gender, dateOfBirth, email} = props.information;
    return (
        <div>
            <p><b>Name: </b>{name}</p>
            <p><b>Gender: </b>{gender}</p>
            <p><b>Date of Birth :</b>{dateOfBirth}</p>
            <p><b>Email </b>{email}</p>
        </div>
    )
}

class GeneralForm extends React.Component {
 
    render(){
        return (
            <form>
                <label><b>Name: </b>
                    <input 
                        type='text'
                        placeholder='Enter your name'
                        id='name'
                        value={this.props.information.name}
                        onChange={this.props.handleInput}
                    />
                </label>
                <br></br>
                <label><b>Gender: </b>
                    <input 
                        type='text'
                        placeholder='Enter your gender'
                        id='gender'
                        value={this.props.information.gender}
                        onChange={this.props.handleInput}
                    />
                </label>
                <br></br>
                <label><b>Date of Birth: </b>
                    <input 
                        type='text'
                        placeholder='Enter your date of birth'
                        id='dateOfBirth'
                        value={this.props.information.dateOfBirth}
                        onChange={this.props.handleInput}
                    />
                </label>
                <br></br>
                <label><b>Email: </b>
                    <input 
                        type='text'
                        placeholder='Enter your email'
                        id='email'
                        value={this.props.information.email}
                        onChange={this.props.handleInput}
                    />
                </label>
            </form>
        )
    }
}