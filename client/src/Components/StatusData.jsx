import React from 'react'

export default function StatusData ({list,resourceName}) {
  return (
    <div> {list?.length <= 0 && (
            <div
              className={`  p-6 text-center text-18  
             `}
            >
              No {resourceName} Here
            </div>
          )}</div>
  )
}

