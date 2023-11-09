


import PropTypes from 'prop-types'

const BidCard = ({job ,}) => {
    const {userEmail,phoneNumber,address,bidDate, } = job
  return (
    <tr>
            
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

BidCard.propTypes = {
    job:PropTypes.object,
    handleDelete:PropTypes.func,
}

export default BidCard