

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 100,
    label: 'COP',
  },
  {
    value: 200,
    label: 'COP',
  },
  {
    value: 300,
    label: 'COP',
  },
  {
    value: 300,
    label: 'COP',
  },
];

function valuetext(value) {
  return `${value}COP`;
}


const Pregunta3 = () => {

  return (
    <div>

      <div className="pregunta-uno">
        <p>Cuánto quiere que sea el precio del instrumento?</p>
      </div>
      <Box sx={{ width: 350 }}>
        <Slider
          aria-label="Always visible"
          defaultValue={80}
          getAriaValueText={valuetext}
          step={10}
          marks={marks}
          valueLabelDisplay="on"
        />
      </Box>
    </div>

  )
}

export default Pregunta3