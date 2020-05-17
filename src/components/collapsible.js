import React from 'react';
import Collapsible from 'react-collapsible';

// Wrapper for collapsible to make easier when mapping from content
// TODO: Do this with hooks? Idk haven't made it that far with React tutorial yet
class Col extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: this.props.trigger,
            content: this.props.trigger,
        }
    }
    
    render() {
        return <Collapsible trigger={this.state.trigger}>
            {this.state.content}
        </Collapsible>
    }
}

export default Col;