import React from 'react';

const ChosenCategory = ({category}) => {
    
    switch (category) {
        case 'pizza' :
            return <i className="fas fa-pizza-slice"></i>
        case 'meat' :
            return <i className="fas fa-drumstick-bite"></i>
        case 'salads' :
            return <i className="fas fa-carrot"></i>
        default:
            return 'x'
    }
}

export default ChosenCategory
