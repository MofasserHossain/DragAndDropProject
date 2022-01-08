import React from 'react'
import authorImage from '../../assets/images/Rectangle 699.png'
import Button from '../common/Button'
const AuthorProfile = () => {
  return (
    <div className="shadow-sm py-6 px-7 text-center rounded-md mt-3">
      <h3 className="text-lg italic font-light border-b border-gray ">
        THE AUTHORS
      </h3>
      <img src={authorImage} className="mx-auto" alt="author" />
      <h2 className="text-lg font-bold mb-2">
        DANIEL PAREDERO
        <br />
        DEL BOSQUE
      </h2>
      <span className="text-xs font-light italic">ACADEMIC AREA:</span>
      <br />
      <strong>Finance</strong>
      <Button className={'btnOutline font-bold border-2 w-full mt-4'}>
        <span className="">Read More</span>{' '}
      </Button>
    </div>
  )
}

export default AuthorProfile
