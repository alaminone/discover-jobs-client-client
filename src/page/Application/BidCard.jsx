import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const BidCard = ({ job }) => {
  const { userEmail, phoneNumber, address, bidDate, _id, additionalInfo, jobRelatedInfo, status } = job;

  const [applicationStatus, setApplicationStatus] = useState('Pending Application');

  const handlebidConfirm = () => {
    axios
      .post('https://discover-jobs-9w9at6n98-alamins-projects-be4aa773.vercel.app/api/bidRequests', {
        jobId: _id,
        bidDate: bidDate,
        userEmail: userEmail,
        additionalInfo: additionalInfo,
        phoneNumber: phoneNumber,
        address: address,
        jobRelatedInfo: jobRelatedInfo,
      })
      .then((response) => {
        if (response.status === 200) {
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger',
            },
            buttonsStyling: false,
          });
          swalWithBootstrapButtons
            .fire({
              title: 'Are you sure?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Apply',
              cancelButtonText: 'Cancel!',
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                  title: 'Thank you',
                  icon: 'success',
                });
                setApplicationStatus("You're Hired"); // Update the button text
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                  title: 'Cancelled',
                  text: 'Your Application is canceled!',
                  icon: 'error',
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
  };

  return (
    <tr>
      <td>{userEmail}</td>
      <td>{phoneNumber}</td>
      <td>{address}</td>
      <td>{bidDate}</td>
      <td>
        {status === 'confirm' ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button onClick={() => handlebidConfirm(_id)} className="btn btn-ghost btn-xs">
            Please Confirm
          </button>
        )}
      </td>
      <th>
        <button className="btn bg-red-500 text-white btn-outline btn-xs">{applicationStatus}</button>
      </th>
    </tr>
  );
};

BidCard.propTypes = {
  job: PropTypes.object,
};

export default BidCard;
