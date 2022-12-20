import React from 'react';

class BasicInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='info'>
                <ul>
                    <li>{this.props.person.name}</li>
                    <li>{this.props.person.number}</li>
                    <li>{this.props.person.birthDate}</li>
                </ul>
            </div>
        );
    }
}
export default BasicInfo;