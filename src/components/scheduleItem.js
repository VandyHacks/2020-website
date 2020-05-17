import React from 'react';
import Col from './collapsible'

// TODO: Do this with hooks? Idk haven't made it that far with React tutorial yet
class ScheduleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            times: this.props.times,
            title: this.props.title,
            desc: this.props.desc,
        }
    }
    
    render() {
        return (
            <>
            <div style="width: 100%">
                <div>
                    {this.state.times}
                </div>
                <Col trigger={this.state.title} content={this.state.desc}/>
            </div>
            </>
        );
    }
}

export default ScheduleItem;