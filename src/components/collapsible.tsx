import React, { useState } from 'react';
import Collapsible from 'react-collapsible';

// Wrapper for collapsible to make easier when mapping from content

interface ColProps {
    trigger: string,
    content: string,
}

const Col = (props: ColProps) => {
    const trigger = useState(props.trigger)[0];
    const content = useState(props.content)[0];
    return (
        <Collapsible trigger={trigger}>
            {content}
        </Collapsible>
    );
}

export default Col;