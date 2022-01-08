import React from 'react'

const CostCard = ({ text, children, amount }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white mb-3">
      <div className="bg-blueColor text-white text-center py-3">
        <h3 className="text-xl font-bold">{text}</h3>
      </div>
      <div className="h-60 overflow-y-scroll">{children}</div>
      <div className="flex justify-between items-center py-3 px-3 border-t">
        <span className=" font-semibold">Total Net {text}</span>{' '}
        <span className="font-semibold"> BTD {amount}</span>
      </div>
    </div>
  )
}

export default CostCard
