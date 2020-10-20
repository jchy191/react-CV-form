import React from'react';
const CVContext = React.createContext();
export class Provider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editMode: false
          }
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }
    

    handleEditClick = () => {
        this.setState({
          editMode: true
        });
      }
    handleSubmitClick = () => {
    this.setState({
        editMode: false
    });
    }

    render() {
        return (
            <CVContext.Provider value={{
                editMode: this.state.editMode,
                actions: {
                    editClick: this.handleEditClick,
                    submitClick: this.handleSubmitClick
                }
            }}>
            {this.props.children}
            </CVContext.Provider>
        )
    }
} 
export const Consumer = CVContext.Consumer;

