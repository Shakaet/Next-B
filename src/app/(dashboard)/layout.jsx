import React from 'react'

const layout = ({children}) => {
  return (
    <div>



       <div className='grid grid-cols-2'>
       <div className='w-4/12'>
       <h2>Hello Dashboard</h2>
       </div>


            <div className='w-8/12'>
            {children}
            </div>
       </div>
    </div>
  )
}

export default layout