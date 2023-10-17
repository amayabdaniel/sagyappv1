

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}


const Pregunta3 = () => {

  return (
    <div>

      <div className="pregunta-uno">
        <p>En cuál rango de temperatura operaría su instrumento?</p>
      </div>
      <Box sx={{ width: 350 }}>
        <Slider
          aria-label="Always visible"
          defaultValue={80}
          getAriaValueText={valuetext}
          step={10}
          marks={marks}
          valueLabelDisplay="on"
          sx={{
            '.MuiSlider-markLabel': {
              color: 'white',
            },
            '.MuiSlider-valueLabel': {
              color: 'white',
            },
          }}
        />
      </Box>
    </div>

  )
}

export default Pregunta3