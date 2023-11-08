import { useContext, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
import Swal from 'sweetalert2';

const UpdateJob = ({ onUpdate }) => {
  const { user } = useContext(AuthContext);
  const job = useLoaderData();

  const [formData, setFormData] = useState({
    title: job.title,
    deadline: job.deadline,
    description: job.description,
    category: job.category,
    minPrice: job.minPrice,
    maxPrice: job.maxPrice,
  });

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5001/api/jobs/${job._id}`, formData);
      console.log(response);
  
      if (response.data.success) {
        onUpdate(job._id, formData);
        if (response.data.modifiedCount) {
            await Swal.fire({  
                title: 'Error',
                text: 'Failed to update job',
                icon: 'error',
              });
        } 
      }
    } catch (error) {
        await Swal.fire({ 
            title: 'Success!',
            text: 'Job has been updated',
            icon: 'success',
          });
    }
  };

  return (
    <div className='flex flex-col-2 gap-4 max-w-6xl mx-auto'>
      <div className='flex bg-gradient-to-l flex-1 flex-row-reverse justify-center items-center'>
        <img src={'https://i.ibb.co/5xdQxPf/logo3.png'} alt="" />
      </div>
      <div className='py-5 flex-1'>
        <div className='bg-gray-100 p-6 my-8 rounded shadow-md'>
          <h2 className="text-2xl font-semibold mb-4">Update jobs</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Email of the employer"
                value={user ? user.email : 'Guest'}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
                Deadline
              </label>
              <input
                type="date"
                value={formData.deadline}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                value={formData.description}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                value={formData.category}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphics Design">Graphics Design</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minPrice">
                Minimum Price
              </label>
              <input
                type="text"
                value={formData.minPrice}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setFormData({ ...formData, minPrice: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxPrice">
                Maximum Price
              </label>
              <input
                type="text"
                value={formData.maxPrice}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setFormData({ ...formData, maxPrice: e.target.value })}
              />
            </div>
            <button
              className="bg-red-400 hover:bg-green-200 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              onClick={handleUpdate}
            >
              Update Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

UpdateJob.propTypes = {
  onUpdate: PropTypes.func,
};

export default UpdateJob;
