import React, { useState } from "react";
import "../homepage/homepage.css";
import cakeImage from '../assets/svg/cake.svg';
import toggleImage from '../assets/svg/toggle.svg';
import Image from 'react-bootstrap/Image';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [period, setPeriod] = useState("1Day");
  const [periods, setPeriods] = useState("1day");

  function handlePeriodChange(event) {
    console.log(event.target.value);
    setPeriod(event.target.value);
  }
  function handlePeriodsChange(event) {
    console.log(event.target.value);
    setPeriods(event.target.value);
  }
  return (
    <section className='roi-calc'>
      <div className='container-fluid p-0'>
        <div
          className='modal modal-sheet position-static d-block py-5'
          tabIndex='-1'
          role='dialog'
          id='modalSheet'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content rounded-6 shadow'>
              <div className='modal-header border-bottom-0 flex-column'>
                <div className='d-flex flex-row justify-content-between w-100'>
                  <h5 className='modal-title'>ROI Calculation</h5>

                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='d-flex ml-auto w-100 justify-content-end'>
                  <ul className='d-flex flex-row align-content-center justify-content-center list-unstyled p-0 m-0'>
                    <li className='pl-3 d-flex flex-row'>
                      <Image
                src={cakeImage}
                className="mr-3"
                alt="Total Device Image"
              />

                      <p className='pl-2 m-0'>Cake</p>
                    </li>
                    <li className='pl-3'>

                    <div className='custom-control size-switch'>
                      <label class='switch'>
                      
                        <input type='checkbox' />
                        <span class='slider round'>
                        
                        </span>
                       <span>{" "}
                          USD{" "}</span>
                      </label>
                    </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='modal-body pt-0 '>
                <div className='d-flex flex-column'>
                  <div className='input-group mb-2'>
                    <input
                      type='text'
                      className='form-control border-right-0 bg-light-gray'
                      placeholder=' '
                      aria-label=' '
                      aria-describedby='basic-addon2'
                    />
                    <div className='input-group-append bg-white'>
                      <span
                        className='input-group-text bg-light-gray border-left-0 font-weight-bold text-black'
                        id='basic-addon2'
                      >
                        0.000 USD
                      </span>
                    </div>
                  </div>

                  <div className='d-flex flex-row justify-content-between'>
                    <div className='d-flex flex-row'>
                      <a
                        href='#'
                        className='badge custom-anchor badge-pill px-3 py-1 text-xs badge-light mr-2 bg-light-gray border-light-gray'
                      >
                        $100
                      </a>
                      <a
                        href='#'
                        className='badge custom-anchor badge-pill px-3 py-1 text-xs badge-light mr-2 bg-light-gray border-light-gray'
                      >
                        $1000
                      </a>
                    </div>
                    <p className='pl-2 m-0 text-sm font-weight-bold text-muted'>
                      - CAKE 0.000
                    </p>
                  </div>

                  <p className='font-weight-bold mt-3 mb-2'>Timeframe</p>

                  <div className='timeframe-box'>
                    <div
                      className='btn-group btn-group-toggle w-100'
                      data-toggle='buttons'
                    >
                      <fieldset
                        className='btn-group btn-group-toggle w-100'
                        data-toggle='buttons'
                        value={periods}
                        onChange={(event) => handlePeriodsChange(event)}
                      >
                        <label
                          className={`btn btn-secondary flex-1 text-sm rounded-pill bg-light-gray border-light-gray text-muted mx-1 ${
                            periods === "1day" && "active"
                          }`}
                        >
                          <input
                            type='radio'
                            name='option'
                            id='1day'
                            value='1day'
                          />{" "}
                          1 Day
                        </label>
                        <label
                          className={`btn btn-secondary flex-1 text-sm rounded-pill bg-light-gray border-light-gray text-muted mx-1 ${
                            periods === "7day" && "active"
                          }`}
                        >
                          <input
                            type='radio'
                            name='option'
                            id='7day'
                            value='7day'
                          />{" "}
                          7 Day
                        </label>
                        <label
                          className={`btn btn-secondary flex-1 text-sm rounded-pill bg-light-gray border-light-gray text-muted mx-1 ${
                            periods === "30day" && "active"
                          }`}
                        >
                          <input
                            type='radio'
                            name='option'
                            id='30day'
                            value='30day'
                          />{" "}
                          30 Days
                        </label>
                        <label
                          className={`btn btn-secondary flex-1 text-sm rounded-pill bg-light-gray border-light-gray text-muted mx-1 ${
                            periods === "1year" && "active"
                          }`}
                        >
                          <input
                            type='radio'
                            name='option'
                            id='1year'
                            value='1year'
                          />{" "}
                          1 Year
                        </label>
                        <label
                          className={`btn btn-secondary flex-1 text-sm rounded-pill bg-light-gray border-light-gray text-muted mx-1 ${
                            periods === "5year" && "active"
                          }`}
                        >
                          <input
                            type='radio'
                            name='option'
                            id='5year'
                            value='5year'
                          />{" "}
                          5 Year
                        </label>
                      </fieldset>
                    </div>
                  </div>

                  <div className='d-flex flex-row justify-content-between mt-4'>
                    <p className='font-weight-bold mb-2'>
                      Enable Accelerated APY
                    </p>

                    <div className='custom-control size-switch'>
                      <label class='switch'>
                        <input type='checkbox' />
                        <span class='slider round'></span>
                      </label>
                    </div>
                  </div>

                  <div className='timeframe-box'>
                    <p className='font-weight-bold mb-2 mt-0 text-sm text-muted'>
                      Select Tier
                    </p>
                    <div
                      className='btn-group btn-group-toggle w-100'
                      data-toggle='buttons'
                    >
                      <fieldset
                        className='btn-group btn-group-toggle w-100'
                        data-toggle='buttons'
                        value={period}
                        onChange={(event) => handlePeriodChange(event)}
                      >
                        <label
                          className={`btn btn-secondary flex-1 text-sm rounded-pill bg-light-gray border-light-gray text-muted mx-1 ${
                            period === "1Day" && "active"
                          }`}
                        >
                          <input
                            type='radio'
                            name='option'
                            id='1Day'
                            value='1Day'
                          />{" "}
                          1 Day
                        </label>
                        <label
                          className={`btn btn-secondary flex-1 text-sm rounded-pill bg-light-gray border-light-gray text-muted mx-1 ${
                            period === "7Day" && "active"
                          }`}
                        >
                          <input
                            type='radio'
                            name='option'
                            id='7Day'
                            value='7Day'
                          />{" "}
                          7 Day
                        </label>
                        <label
                          className={`btn btn-secondary flex-1 text-sm rounded-pill bg-light-gray border-light-gray text-muted mx-1 ${
                            period === "30Day" && "active"
                          }`}
                        >
                          <input
                            type='radio'
                            name='option'
                            id='30Day'
                            value='30Day'
                          />{" "}
                          30 Days
                        </label>
                        <label
                          className={`btn btn-secondary flex-1 text-sm rounded-pill bg-light-gray border-light-gray text-muted mx-1 ${
                            period === "1Year" && "active"
                          }`}
                        >
                          <input
                            type='radio'
                            name='option'
                            id='1Year'
                            value='1Year'
                          />{" "}
                          1 Year
                        </label>
                        <label
                          className={`btn btn-secondary flex-1 text-sm rounded-pill bg-light-gray border-light-gray text-muted mx-1 ${
                            period === "5Year" && "active"
                          }`}
                        >
                          <input
                            type='radio'
                            name='option'
                            id='5Year'
                            value='5Year'
                          />{" "}
                          5 Year
                        </label>
                      </fieldset>
                    </div>
                  </div>

                  <p className='pl-2 mb-1 mt-4 m-0 ml-auto text-md font-weight-bold text-muted'>
                    ROI at Current Rates
                  </p>
                  <div className='input-group w-100 mb-1'>
                    <input
                      type='text'
                      className='form-control border-right-0 bg-light-gray'
                      placeholder=' '
                      aria-label=' '
                      aria-describedby='basic-addon2'
                    />
                    <div className='input-group-append bg-white'>
                      <span
                        className='input-group-text bg-light-gray border-left-0 font-weight-bold text-black'
                        id='basic-addon2'
                      >
                        <h5 className='mb-0'>0.000 USD</h5>
                      </span>
                    </div>
                  </div>
                  <p className='pl-2 m-0 ml-auto text-sm font-weight-bold text-muted'>
                    - 0.000 CAKE + 0.00000 DON
                  </p>
                </div>

                <div
                  className='hidden-details text-center mt-3'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <a
                    className={` text-center text-dark text-md text-decoration-none mb-2 font-weight-bold ${
                      !isOpen && "collapsed"
                    }`}
                    data-toggle='collapse'
                    href='#collapseExample'
                    role='button'
                    aria-expanded='true'
                    aria-controls='collapseExample'
                  >
                    <span className='mr-1'>Hide Details</span>
                
            
                <Image
                src={toggleImage}
                className="mr-3"
                alt="Total Device Image"
              />
                  </a>
                  <div
                    className={`mt-2 ${isOpen && "collapse"}`}
                    id='collapseExample'
                  >
                    <div className='d-flex flex-column flex-nowrap'>
                      <div className='d-flex flex-row align-items-center justify-content-between w-100'>
                        <p className='m-0 text-md font-weight-bold text-dark'>
                          API
                        </p>
                        <p className='m-0 text-md font-weight-bold text-warning'>
                          9.0 %
                        </p>
                      </div>
                      <ul className='d-flex flex-column flex-nowrap m-0 text-left pl-2 ml-1 mt-2'>
                        <li className='text-muted text-xs font-weight-bold mb-1'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li className='text-muted text-xs font-weight-bold mb-1'>
                          Lorem Ipsum is simply dummy text.
                        </li>
                        <li className='text-muted text-xs font-weight-bold mb-1'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
