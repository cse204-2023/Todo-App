import './Sort.css';

function Sort(){
    const sortHandler = (event)=>{
        event.preventDefault();

    }

    return(
        <div className='sort'>
            <form>
                <button className='sortButton'> Sort Alphabetically </button>
            </form>
        </div>
    )
}

export default Sort;