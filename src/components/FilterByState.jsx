import React, {useRef} from "react";
import {useSelector} from "react-redux";

const FilterByState = ({filteredUsersByState, setFelteredUsersByState}) => {

    const selectRef = useRef()
    const users = useSelector(state => state.users.users)

    const states = []
    new Set(users.map(user => user.adress.state)).forEach(value => states.push(value))

    const inputHandler = () => {
        const filteredUsers = users.filter(user => user.adress.state === selectRef.current.value)
        setFelteredUsersByState([...filteredUsers])
    }

    return (
        <>
            <select
                onChange={inputHandler}
                ref={selectRef}
            >
                <option value="">Filter by state</option>
                {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                ))}
            </select>
        </>
    )
}

export default FilterByState
