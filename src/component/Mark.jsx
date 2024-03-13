import PropTypes from 'prop-types'

const Mark = ({mark}) => {
   
    const {title} = mark
    return (
        <div className='bg-white p-4 rounded-xl my-4 mx-16 '>
            <h1 className=' font-bold'>{title}</h1>
        </div>
    );
};

Mark.propTypes ={
    mark:PropTypes.object

}
export default Mark;