import React, { useState } from 'react';
import Col from './collapsible'

// // TODO: Do this with hooks? Idk haven't made it that far with React tutorial yet
// class Bio extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             headshot: this.props.headshot,
//             name: this.props.name,
//             title: this.props.title,
//             desc: this.props.desc,
//         }
//     }
    
//     render() {
//         return (
//             <>
//             <img src={this.props.headshot} alt='Headshot'></img>
//             <div>{this.state.name}</div>
//             <div>{this.state.title}</div>
//             <div>{this.state.desc}</div>
//             </>
//         );
//     }
// }

interface BioProps {
    headshot: string,
    name: string,
    title: string,
    desc: string,
}

const Bio = (props: BioProps) => {
    
    return (
        <>
        <img src={props.headshot} alt='Headshot'></img>
        <div>{props.name}</div>
        <div>{props.title}</div>
        <div>{props.desc}</div>
        </>
    );
}

export default Bio;