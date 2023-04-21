import './Sort.css';

function Sort({onSort}){
    const sortHandler = (event) => {
        event.preventDefault();
        onSort();
      };

    return(
        <div className='sort'>
            <form>
                <button className='sortButton' onClick={sortHandler}> Sort Alphabetically </button>
            </form>
        </div>
    )
}

export default Sort;