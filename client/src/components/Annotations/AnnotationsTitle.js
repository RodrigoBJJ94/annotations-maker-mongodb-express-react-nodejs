import React from 'react';
import './Annotations.css';

export default function AnnotationsTitle(props) {
    return (
        <div className="input-block">
            <label htmlFor="title">Annotation Title</label>
            <input
                required
                maxLength="30"
                value={props.title}
                onChange={event => props.setTitle(event.target.value)}
            />
        </div>
    );
};
