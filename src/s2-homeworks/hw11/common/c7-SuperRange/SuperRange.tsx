import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 200,
                '& .MuiSlider-thumb': {
                    border: "1px solid #00CC22",
                    color: '#fff', // Customize thumb (picker) color
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B', // Customize rail color
                },
                '& .MuiSlider-track': {
                    color: '#00CC22', // Customize track color
                },
            }}
            {...props}
            // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
