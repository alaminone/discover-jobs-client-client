


import PropTypes from 'prop-types'

const ApplicationCard = ({job}) => {
    const {userEmail,phoneNumber,address,bidDate} = job
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
            <td>bidDate</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
        </tr>
  )
}

ApplicationCard.propTypes = {
    job:PropTypes.object,
}

export default ApplicationCard