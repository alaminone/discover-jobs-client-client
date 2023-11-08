import axios from 'axios';
import { useState, useContext } from 'react';
import { toast } from 'react-hot-toast';
import img from '../../assets/logo/logo3.png';
import { AuthContext } from '../../provider/Authprovider';
 

const AddJobs = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: '',
    deadline: '',
    description: '',
    category: 'Web Development',
    minPrice: '',
    maxPrice: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const loadingToast = toast.loading('Adding job listing...');
  
    try {
      const email = user ? user.email : 'Guest'; 
      const dataWithUserEmail = { ...formData, email };
      const response = await axios.post('http://localhost:5001/api/jobs', dataWithUserEmail);
  
      if (response.data.success) {
        
        
        setFormData({
          title: '',
          deadline: '',
          description: '',
          category: 'Web Development',
          minPrice: '',
          maxPrice: '',
        });
      } else {
        toast.success('Job added successfully!', { id: loadingToast });
      }
    } catch (error) {
      toast.error('An error occurred while adding the job listing', { id: loadingToast });
      console.error(error);
    }
  };
  
  

  return (
    <div className='flex flex-col-2 gap-4 max-w-6xl mx-auto'>
      <div className='flex bg-gradient-to-l flex-1 justify-center items-center'>
        <img src={img} alt="" />
      </div>
      <div className='py-5 flex-1'>
        <div className="bg-gray-100 p-6 my-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Job Listing</h2>
         
          <form onSubmit={handleFormSubmit}>
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
                Job Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter job title"
                value={formData.title}
               
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter job description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.category}
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter minimum price"
                value={formData.minPrice}
                onChange={(e) => setFormData({ ...formData, minPrice: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxPrice">
                Maximum Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter maximum price"
                value={formData.maxPrice}
                onChange={(e) => setFormData({ ...formData, maxPrice: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
                Deadline
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-red-400 hover:bg-green-200 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
