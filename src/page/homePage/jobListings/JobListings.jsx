import { useState, useEffect } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import axios from 'axios';


import 'react-tabs/style/react-tabs.css'; 

import './JobListings.css';
import JobsCard from './jobscard/JobsCard';

const JobListings = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/jobs').then((response) => {
      setJobListings(response.data);
    });
  }, []);

  
  const webDevJobs = jobListings.filter((job) => job.category === 'Web Development');
  const digitalMarketingJobs = jobListings.filter((job) => job.category === 'Digital Marketing');
  const graphicsDesignJobs = jobListings.filter((job) => job.category === 'Graphics Design');

  return (
    <div>
      <h3 className='text-4xl font-bold text-center mt-9'>
      Explore Jobs
      </h3>
      <div className=' bg-gray-100 my-16'>
      
      <div className='max-w-6xl mx-auto py-12'>
      <Tabs>
        <TabList className="flex justify-center my-6 gap-2 mx-4 md:gap-5">
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {webDevJobs.map((job) => (
              <JobsCard key={job._id} job={job}></JobsCard>)
            )}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
          {digitalMarketingJobs.map((job) => (
            <JobsCard key={job._id} job={job} />)
          )}
          </div>
        </TabPanel>

        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
        {graphicsDesignJobs.map((job) => (
            <JobsCard key={job._id} job={job} />)
          )}
        </div>
        </TabPanel>
      </Tabs>
      </div>
    </div>
    </div>
  );
};

export default JobListings;
