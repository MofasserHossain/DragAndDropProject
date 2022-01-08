import React from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import file from '../../assets/images/svg/document-text.svg'
import record from '../../assets/images/svg/monitor-recorder.svg'
import code from '../../assets/images/svg/scan.svg'
import translate from '../../assets/images/svg/translate.svg'
import BreadCrumb from '../../components/common/BreadCrumb'
import Button from '../../components/common/Button'
import AuthorProfile from '../../components/Home/AuthorProfile'
import BusinessCard from '../../components/Home/BusinessCard'
import Description from '../../components/Home/Description'

const data = [
  { title: 'IE CODE:', value: 'DF2-264-I', icon: code },
  { title: 'LANGUAGE:', value: 'English', icon: translate },
  { title: 'FORMAT:', value: 'PDF', icon: file },
  { title: 'ACADEMIC AREA:', value: 'Finance' },
  { title: 'NR. OF PAGES:', value: '20', icon: code },
  { title: 'TYPE OF PUBLICATION:', value: 'Case Study', icon: code },
]

const Home = ({ history }) => {
  return (
    <div className="p-2">
      <div
        className="text-navItem font-semibold cursor-pointer"
        onClick={() => history.goBack()}
      >
        <i className="fa fa-arrow-left"></i> Back
      </div>
      <div>
        <BreadCrumb
          title={'Home'}
          text={'Introduction to Financial Restructuring'}
        />
      </div>
      <Row>
        <Col md="9">
          <h3 className="text-3xl mt-3 font-semibold">
            Business Decision Making
          </h3>
          <div className="flex justify-end space-x-2">
            <Button
              className={
                'flexCenter px-5 py-2 space-x-1 border-2 border-gray text-gray rounded-lg'
              }
            >
              <span>
                <i class="fas fa-bookmark"></i>
              </span>
              <span className="">Save</span>{' '}
            </Button>
            <Button
              className={
                'flexCenter px-5 py-2 space-x-1 border-2 border-gray text-gray rounded-lg'
              }
            >
              <span>
                <i class="fas fa-share"></i>
              </span>
              <span className="">Share</span>{' '}
            </Button>
          </div>
          {/*  */}
          <Row className="my-3">
            {data.map((data, idx) => (
              <BusinessCard data={data} key={idx} />
            ))}
          </Row>

          <Button className={'btnFil bg-yellow-400 px-4 font-bold'}>
            <span className="">Go to Course</span>
          </Button>

          {/* description */}
          <Description />

          <div className="w-64 space-x-2 flex p-3 shadow-sm rounded-lg">
            <div>
              <img src={record} alt="record" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Educator Copy</h1>
              <p className="text-sm">
                Access a full preview copy of the article.
              </p>
            </div>
          </div>
        </Col>
        <Col md="3">
          <Button
            className={
              'flexCenterBetween px-5 py-2 space-x-1 border border-gray-300 rounded-lg w-full'
            }
            onClick={() => {}}
          >
            <span className="italic">Price Per Unit:</span>{' '}
            <h3 className="text-xl text-yellow-500">
              <strong>$5.00</strong>
            </h3>
          </Button>

          <Button className={'btnOutline font-bold border-2 w-full mt-4'}>
            <span className="">Buy Now</span>{' '}
          </Button>

          {/* author */}
          <AuthorProfile />
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(Home)
