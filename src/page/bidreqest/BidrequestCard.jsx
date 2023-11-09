/* eslint-disable react/prop-types */


const BidrequestCard = ({ bid, handleAccept, handleReject }) => {
    const { userEmail, phoneNumber, bidDate, _id } = bid;
  
  
    return (
      <tr>
        <td>{userEmail}</td>
        <td>{phoneNumber}</td>
        <td>{bidDate}</td>
        <td>
       
          <div>
            <button className="btn btn-sm btn-outline" onClick={() => handleAccept(_id, userEmail)}>
              Accept
            </button>
            <button className="btn btn-sm btn-outline btn-error" onClick={() => handleReject(_id, userEmail)}>
              Reject
            </button>
          </div>
      
      </td>
      </tr>
    );
  };
export default BidrequestCard;