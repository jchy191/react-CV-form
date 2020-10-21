import React from'react';
const EducationContext = React.createContext();

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

export class Provider extends React.Component {

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

    render() {
        return (
            <EducationContext.Provider value={{
                schools: this.state.schools,
                lastKey: this.state.lastKey,
                actions: {
                    addSchool: this.handleAddSchool,
                    deleteSchool: this.handleDeleteSchool,
                    handleInput: this.handleInput
                }
            }}>
            {this.props.children}
            </EducationContext.Provider>
        )
    }
} 
export const Consumer = EducationContext.Consumer;
export function withEducationContext(Component) {
    return function ContextComponent(props) {
        return(
            <EducationContext.Consumer>
                {context => <Component {...props} context={context}/>}
            </EducationContext.Consumer>
        )
    }
}