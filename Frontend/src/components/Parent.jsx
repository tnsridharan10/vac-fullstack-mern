import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Sridharan" age={18} marks={[90,91,92,93,94]} person={{name:"sri",dept:["ai&ds"]}}/>
    </div>
  )
}

export default Parent