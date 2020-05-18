import React, { useState } from 'react';
import Collapsible from 'react-collapsible';

// Wrapper for collapsible to make easier when mapping from content
interface ColProps {
    trigger: string,
    content: string,
}

const Col = (props: ColProps) => {
    return (
        <Collapsible trigger={props.trigger}>
            {props.content}
        </Collapsible>
    );
}

export default Col;