import React from 'react';
import './Annotations.css';

export default function Annotations(props) {
    return (
        <div className="input-block">
            <label htmlFor="note">Annotations</label>
            <textarea
                required
                value={props.notes}
                onChange={event => props.setNotes(event.target.value)}
            ></textarea>
            <button id="button-submit" type="submit">Save</button>
        </div>
    );
};
