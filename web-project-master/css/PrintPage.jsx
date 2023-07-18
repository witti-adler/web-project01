import React from "react";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    root: {
        '@media print': {
            "& .header, & .footer":
            {
                display: "table",
                tableLayout: "fixed",
                width: '100%',
            },

            "& .header": {
                position: 'fixed',
                top: 0,
            },

            "& .footer": {
                position: 'fixed',
                bottom: 0,
            },

            '& .body': {
                position: 'absolute',
                top: '20%',
                bottom: '20%',
                overflow: 'auto',
            }

        }
    }
})
export default useStyles
// @media print {

//     .header,
//     .footer {
//         display: table;
//         table - layout: fixed;
//         width: 100 %;
//     }

//     .header {
//         position: fixed;
//         top: 0;
//     }

//     .footer {
//         position: fixed;
//         bottom: 0;
//     }

//     .body {
//         position: absolute;
//         top: 20 %;
//         bottom: 20 %;
//         overflow: auto;
//     }

// }