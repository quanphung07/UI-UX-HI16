
import './table.scss';

function TableA(props){

    return(
        <div className='table-a'>
            <div className='table-first'>{props.first}</div>
            <div className='table-second'>{props.second}</div>
            <div className='table-three'>{props.three}</div>
        </div>
    );
}
export default TableA;