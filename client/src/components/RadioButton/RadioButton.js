import React from 'react';
import './Styles.css';
import { withStyles } from '@material-ui/styles';
import Radio from '@mui/material/Radio';

export default function RadioButton({ selectedValue, handleChange }) {
    const CustomRadio = withStyles({
        root: {
            color: 'rgb(65, 87, 95)', '&.Mui-checked': { color: 'rgb(14, 30, 37)' },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);

    return (
        <div className="radio-options">
            <div>
                <CustomRadio {...CustomRadio}
                    sx={{
                        color: 'rgb(65, 87, 95)',
                        '&.Mui-checked': {
                            color: 'rgb(14, 30, 37)',
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
                        color: 'rgb(65, 87, 95)',
                        '&.Mui-checked': {
                            color: 'rgb(14, 30, 37)',
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
                        color: 'rgb(65, 87, 95)',
                        '&.Mui-checked': {
                            color: 'rgb(14, 30, 37)',
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
