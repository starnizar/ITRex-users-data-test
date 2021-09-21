import React, {useRef} from "react";
import { useSelector} from "react-redux";

const FilterByName = ({setFilteredUsersByName}) => {

    const inputRef = useRef()
    const users = useSelector(state => state.users.users)

    const inputHandler = () => {
        if (inputRef.current.value.trim()) {
            const filteredUsers = users.filter(user => user.firstName.includes(inputRef.current.value))
            setFilteredUsersByName([...filteredUsers])
        } else {
            setFilteredUsersByName([])
        }
    }

    return (
        <input
            placeholder='Filter by first name'
            ref={inputRef}
            onChange={inputHandler}
        />
    )
}

export default FilterByName
