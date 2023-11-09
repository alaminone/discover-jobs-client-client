/* eslint-disable react/prop-types */


const BidrequestCard = ({ bid, handleAccept, handleReject }) => {
    const { userEmail, phoneNumber, bidDate, _id, status } = bid;
  
  
    return (
      <tr>
        <td>{userEmail}</td>
        <td>{phoneNumber}</td>
        <td>{bidDate}</td>
        <td>
          <>
            {status === 'Pending' ? (
              <button
                className="btn btn-sm btn-outline"
                onClick={() => handleAccept(_id, userEmail)}
              >
                Accept
              </button>
            ) : null}
            {status === 'Pending' ? (
              <button
                className="btn btn-sm btn-outline btn-error"
                onClick={() => handleReject(_id, userEmail)}
              >
                Reject
              </button>
            ) : null}
          </>
        </td>
      </tr>
    );
  };
export default BidrequestCard;