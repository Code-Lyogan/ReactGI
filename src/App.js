import React from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: '',
        number: '',
        birthDate: '',
      },
      people: [
        {
          name: "Logan Trout",
          number: "704-632-5299",
          birthDate: "02/28/1997",
        },
        {
          name: "Grant Harrison",
          number: "777-454-8442",
          birthDate: "07/16/1999",
        },
        {
          name: "Austin Horner",
          number: "283-918-8227",
          birthDate: "06/21/1997",
        },
      ]
  }
}
  render() {
    return this.state.people.map(function (person, index) {
      return <BasicInfo key="{index}" person={person} />;
    })
  };
}
export default App;