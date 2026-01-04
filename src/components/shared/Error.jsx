import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return ( 
         <p className='errorMsg'>{mensaje}</p>
     );
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
};
 
export default Error;