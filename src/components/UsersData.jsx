import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getPages, selectUser, setUsers} from "../redux/actions";
import Pagination from "./Pagination";
import FilterByName from "./FilterByName";
import FilterByState from "./FilterByState";
import loader from '../assets/img/loader.svg'

const UsersData = () => {

    const initialState = {
        id: false,
        fName: false,
        lName: false,
        email: false,
        phone: false,
        state: false
    }
    const [sort, setSort] = useState(initialState)
    const [filteredUsersByName, setFilteredUsersByName] = useState([])
    const [filteredUsersByState, setFilteredUsersByState] = useState([])

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.app.isLoading)
    const pages = useSelector(state => state.app.pages)
    const pageNum = useSelector(state => state.app.currentPage)
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        if (users.length) {
            if (filteredUsersByName.length) {
                return dispatch(getPages(fulfillPages(filteredUsersByName)))
            }
            if (filteredUsersByState.length) {
                return dispatch(getPages(fulfillPages(filteredUsersByState)))
            }
            return dispatch(getPages(fulfillPages(users)))
        }
    }, [dispatch, users, filteredUsersByName, filteredUsersByState])


    function fulfillPages(users) {
        const pages = []
        let page = []

        for (let i=0; i < users.length; i++) {
            if (page.length < 20) {
                page.push(users[i])
            }  else {
                pages.push(page)
                page = []
                page.push(users[i])
            }
            if (i === users.length - 1) {
                pages.push(page)
                break
            }
        }
        return pages
    }


    const sortHandler = columnName => {
        switch (columnName) {
            case 'id':
                setSort({...initialState, id: !sort.id})
                return sort.id
                    ? dispatch(setUsers(users.sort((a, b) => (a.id < b.id ? 1 : -1))))
                    : dispatch(setUsers(users.sort((a, b) => (a.id > b.id ? 1 : -1))));

            case 'fName':
                setSort({...initialState, fName: !sort.fName})
                return sort.fName
                    ? dispatch(setUsers(users.sort((a, b) => (a.firstName < b.firstName ? 1 : -1))))
                    : dispatch(setUsers(users.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))));

            case 'lName':
                setSort({...initialState, lName: !sort.lName})
                return sort.lName
                    ? dispatch(setUsers(users.sort((a, b) => (a.lastName < b.lastName ? 1 : -1))))
                    : dispatch(setUsers(users.sort((a, b) => (a.lastName > b.lastName ? 1 : -1))));

            case 'email':
                setSort({...initialState, email: !sort.email})
                return sort.email
                    ? dispatch(setUsers(users.sort((a, b) => (a.email < b.email ? 1 : -1))))
                    : dispatch(setUsers(users.sort((a, b) => (a.email > b.email ? 1 : -1))));

            case 'phone':
                setSort({...initialState, phone: !sort.phone})
                return sort.phone
                    ? dispatch(setUsers(users.sort((a, b) => (a.phone < b.phone ? 1 : -1))))
                    : dispatch(setUsers(users.sort((a, b) => (a.phone > b.phone ? 1 : -1))));

            case 'state':
                setSort({...initialState, state: !sort.state})
                return sort.state
                    ? dispatch(setUsers(users.sort((a, b) => (a.adress.state < b.adress.state ? 1 : -1))))
                    : dispatch(setUsers(users.sort((a, b) => (a.adress.state > b.adress.state ? 1 : -1))));

            default: return sort
        }
    }


    return (
        <div className='tableWrapper'>

            {isLoading
                ? <div className='loader'><img src={loader} alt="Loading data..."/></div>
                :<>
                    <div className="filters">
                        <FilterByName
                            setFilteredUsersByName={setFilteredUsersByName}
                        />
                        <FilterByState
                            setFelteredUsersByState={setFilteredUsersByState}
                        />
                    </div>

                    <table border='1'>
                        <tbody>
                        <tr>
                            <th onClick={() => sortHandler('id')}>
                                id {sort.id ? <>&#9650;</> : <>&#9660;</>}
                            </th>
                            <th onClick={() => sortHandler('fName')}>
                                First name {sort.fName ? <>&#9650;</> : <>&#9660;</>}
                            </th>
                            <th onClick={() => sortHandler('lName')}>
                                Last name {sort.lName ? <>&#9650;</> : <>&#9660;</>}
                            </th>
                            <th onClick={() => sortHandler('email')}>
                                Email {sort.email ? <>&#9650;</> : <>&#9660;</>}
                            </th>
                            <th onClick={() => sortHandler('phone')}>
                                Phone {sort.phone ? <>&#9650;</> : <>&#9660;</>}
                            </th>
                            <th onClick={() => sortHandler('state')}>
                                State {sort.state ? <>&#9650;</> : <>&#9660;</>}
                            </th>
                        </tr>

                        {pages.length && pages[pageNum].map((user, index) => (
                            <tr className='row' onClick={() => dispatch(selectUser(user))} key={index}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.adress.state}</td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                    <Pagination />
                </>
            }
        </div>
    )
}

export default UsersData
