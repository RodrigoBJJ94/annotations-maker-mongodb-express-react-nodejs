import React from 'react';
import { withStyles } from '@material-ui/styles';
import Radio from '@mui/material/Radio';

export default function RadioButton({ selectedValue, handleChange }) {
    const CustomRadio = withStyles({
        root: {
            color: '#ffd3ca', '&.Mui-checked': { color: '#eb8f7a' },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);

    return (
        <div className="radio-options">
            <div>
                <CustomRadio {...CustomRadio}
                    sx={{
                        color: '#ffd3ca',
                        '&.Mui-checked': {
                            color: '#eb8f7a',
                        },
                    }}
                    checked={selectedValue === 'all'}
                    onChange={e => handleChange(e.target)}
                    value="all"
                />
                <span>All</span>
            </div>
            <div>
                <CustomRadio {...CustomRadio}
                    sx={{
                        color: '#ffd3ca',
                        '&.Mui-checked': {
                            color: '#eb8f7a',
                        },
                    }}
                    checked={selectedValue === 'true'}
                    onChange={e => handleChange(e.target)}
                    value="true"
                />
                <span>Priority</span>
            </div>
            <div>
                <CustomRadio {...CustomRadio}
                    sx={{
                        color: '#ffd3ca',
                        '&.Mui-checked': {
                            color: '#eb8f7a',
                        },
                    }}
                    checked={selectedValue === 'false'}
                    onChange={e => handleChange(e.target)}
                    value="false"
                />
                <span>Normal</span>
            </div>
        </div>
    );
};

