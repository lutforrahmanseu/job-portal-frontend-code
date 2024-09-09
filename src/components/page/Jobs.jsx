import React from 'react'
import Navbar from '../shared/Navbar'
import FilterCard from '../FilterCard'
import JobCard from '../JobCard'

export default function Jobs() {
  const jobs=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      <Navbar/>
      <div>
        {/* filter card */}
        <FilterCard/>
        {/* job card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobs.map((job)=>(
            
            <JobCard/>
          ))}
       </div>
      </div>
    </div>
  )
}
