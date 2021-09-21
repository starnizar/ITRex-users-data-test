import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../redux/actions";

const Pagination = () => {

    const dispatch = useDispatch()
    const page = useSelector(state => state.app.currentPage)
    const pages = useSelector(state => state.app.pages)

    const pageButtonHandler = (number) => {
        if (number < 0) {
            return
        }
        if (number > pages.length - 1) {
            return
        }
        dispatch(setPage(number))
    }

    return (
        <div className='pagination'>
            {pages.length > 1 && <button onClick={() => pageButtonHandler(page - 1)}>Previous</button>}
            {pages.map((item, index) => (
                <button
                    style={(page===index) ? {color:'red', transform:'scale(1.5)'} : null}
                    onClick={() => pageButtonHandler(index)}
                    key={index}
                >
                    {index + 1}
                </button>
            ))}
            {pages.length > 1 && <button onClick={() => pageButtonHandler(page + 1)}>Next</button>}
        </div>
    )
}

export default Pagination
