import React from 'react'
import { Col } from 'reactstrap'

const BusinessCard = ({ data }) => {
  return (
    <Col md="4" className="my-2">
      <div className=" shadow-md p-3 rounded-lg flex flex-col space-y-2">
        <p className="font-light text-xs italic">{data.title}</p>
        <div className="flex space-x-2">
          {data.icon ? (
            <img src={data.icon} className="w-5" alt="imag" />
          ) : null}
          <span className="font-bold text-lg">{data.value}</span>
        </div>
      </div>
    </Col>
  )
}

export default BusinessCard
