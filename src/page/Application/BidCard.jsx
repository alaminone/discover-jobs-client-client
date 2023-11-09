


import PropTypes from 'prop-types'

const BidCard = ({job ,handlebidConfirm}) => {
    const {userEmail,phoneNumber,address,bidDate,_id} = job
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
            <td>  {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handlebidConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}</td>
            <th>
                
                        <button className="btn bg-red-500 text-white btn-outline  btn-xs">Pending Application</button>
            </th>
        </tr>
  )
}

BidCard.propTypes = {
    job:PropTypes.object,
    handlebidConfirm:PropTypes.func,
}

export default BidCard