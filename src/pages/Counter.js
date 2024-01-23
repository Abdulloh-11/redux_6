import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, increment, increment1, search, openModal } from '../features/counterSlice'
import ModalApp from '../Components/ModalApp'
export default function Counter() {
  const count = useSelector((state) => state.counter.count)
  const count1 = useSelector((state) => state.counter.count1)


  const search_arr = useSelector((state) => state.counter.search_arr)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())
  }, [])


  return (
    <div className='container'>
      <div>
        <h2>{count} Metr</h2>
        <button onClick={() => dispatch(increment(count1))} className='btn btn-info'>yurish</button>

        <h2>Qadam kattaligi: {count1} metr</h2>
        <button onClick={() => dispatch(increment1())} className='btn btn-primary'>qadamni keygaytirish</button>
      </div>

      <ModalApp />
      <div className="row ">
        <div className=" d-flex align-items-center gap-5">
          <div className="col-2 offset-2  my-2">
            <input type="text" placeholder='Seach' onChange={(e) => dispatch(search(e.target.value))} className='form-control' />
          </div>
          <div className="col-2 ">
            <button onClick={() => dispatch(openModal())} className='btn btn-primary '>Add user</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-8 offset-2">
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>№</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Mail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                search_arr.map((item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>
                      <button onClick={() => dispatch(deleteUser(index))} className='btn btn-danger mx-2'>delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
