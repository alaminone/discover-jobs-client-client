


import axios from 'axios';
import PropTypes from 'prop-types'
import Swal from 'sweetalert2';

const BidCard = ({job}) => {
    const {userEmail,phoneNumber,address,bidDate,_id,additionalInfo,jobRelatedInfo} = job;


    const handlebidConfirm = (job) => {
      axios
        .post('http://localhost:5001/api/bidRequests', {
  
         jobId:_id, 
        userEmail:userEmail,
        additionalInfo: additionalInfo, 
        phoneNumber:phoneNumber,
        address: address,
        jobRelatedInfo:jobRelatedInfo,
         
        })
       
        .then((response) => {
          
          if (response.status === 200) {
          
            const swalWithBootstrapButtons = Swal.mixin({
              customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
              },
              buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
              title: "Are you sure?",
            
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Apply",
              cancelButtonText: "cancel!",
              reverseButtons: true
            }).then((result) => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                  title: "Thank you",
                  
                  icon: "success"
                });
              } else if (

                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire({
                  title: "Cancelled",
                  text: "Your Applycation cancel!!!",
                  icon: "error"
                });
              }
            });
          } else {
          
            console.error('Bid request was not submitted successfully');
          }
        })
        .catch((error) => {
          console.error('Axios error:', error);
        });
        console.log(job)
    };

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
    
}

export default BidCard