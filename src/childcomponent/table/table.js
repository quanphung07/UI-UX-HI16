
import './table.scss';

function Table(props){

    return(
        <div className='table'>
            <div className='table-first'>{props.first}</div>
            <div className='table-second'>{props.second}</div>
            <div className='table-three'>{props.three}</div>
        </div>
    );
}
export default Table;