


import PropTypes from 'prop-types'

const ApplicationCard = ({job ,handleDelete}) => {
    const {userEmail,phoneNumber,address,bidDate, _id} = job
  return (
    <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
            {userEmail}
            </td>
            <td>
            {phoneNumber}
            </td>
            <td>{address}</td>
            <td>{bidDate}</td>
            <th>
                
                        <button className="btn bg-red-500 text-white btn-outline  btn-xs">Pending Application</button>
            </th>
        </tr>
  )
}

ApplicationCard.propTypes = {
    job:PropTypes.object,
    handleDelete:PropTypes.func,
}

export default ApplicationCard