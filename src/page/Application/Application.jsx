import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/Authprovider";
import ApplicationCard from "./ApplicationCard";

const Application = () => {
  const { user } = useContext(AuthContext);
  const [confirmedJobs, setConfirmedJobs] = useState([]);

  useEffect(() => {
    if (user && user.email) {
      const url = `http://localhost:5001/api/getConfirmedJobs?email=${user.email}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setConfirmedJobs(data);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }, [user]);

  return (
    <div>
      <h2>Confirmed Jobs</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>phoneNumber</th>
              <th>address</th>
              <th>Price</th>
              <th>bidDate</th>
            </tr>
          </thead>
          <tbody>
            {confirmedJobs.map((job) => (
              <ApplicationCard key={job._id} job={job}></ApplicationCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Application;
{
  /* <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>) */
}

{
  /* {confirmedJobs.map((job) => (
            <Table.Row key={job._id}>
              <Table.Cell>{job.userEmail}</Table.Cell>
              <Table.Cell>{job.phoneNumber}</Table.Cell>
              <Table.Cell>{job.address}</Table.Cell>
              <Table.Cell>{job.bidDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body> */
}
