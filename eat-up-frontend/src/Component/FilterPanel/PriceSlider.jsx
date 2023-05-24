import React, { useState } from 'react';

const PriceSlider = ({value,handleChangedPrice,special}) => {

    const handleChange = (value) => {
        handleChangedPrice(value);
        
    };
    
    return (
        <div className="px-1 flex gap-2">
            <div>
                <span>500</span>
            </div>
            <input
                type="range"
                min={500}
                max={5000}
                value={value}
                onChange={handleChange}
                className="w-full h-3 bg-gray-300 rounded-full outline-none appearance-none mt-2"
            />
            <div className="text-center ">
                <span>{special}</span>
            </div>
            {/* <div>
                <span>tk</span>
            </div> */}
        </div>
    );
};

export default PriceSlider;





// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Slider from '@material-ui/core/Slider';

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
//   thumb: {
//     color: '#000',
//   },
//   rail: {
//     color: `rgba(0, 0, 0, 0.26)`,
//   },
//   track: {
//     color: '#000',
//   },
// });

// const PriceSlider = () => {
//   const [value, setValue] = useState([100, 3000]);
//   console.log(value);
//   const classes = useStyles();

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className="px-8">
//       <div className={classes.root}>
//         <Slider
//           value={value}
//           onChange={handleChange}
//           valueLabelDisplay="on"
//           min={1000}
//           max={5000}
//           classes={{
//             thumb: classes.thumb,
//             rail: classes.rail,
//             track: classes.track,
//           }}
//         />
//       </div>
//     </div>
//   );
// };
// export default PriceSlider;