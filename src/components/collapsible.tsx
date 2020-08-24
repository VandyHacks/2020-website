import React, { useState } from 'react';
import Collapsible from 'react-collapsible';

// Wrapper for collapsible to make easier when mapping from content
interface ColProps {
    trigger: string,
    content: string[],
}

const Col: ((props?: any) => JSX.Element) = (props: ColProps) => {
    return (
        <Collapsible trigger={props.trigger}>
            {props.content[0]}
            {Object.values(props.content.slice(1)).map((data, index) => (
                <li key={`content_item_${index}`}>{data}</li>
            ))}
        </Collapsible>
    );
}
export default Col;