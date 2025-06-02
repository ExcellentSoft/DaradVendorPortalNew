import React from 'react';

const ApiIntegrationDashboard: React.FC = () => {
  return (
    <div
      className="bg-white rounded-[12px]"
      style={{ width: '677px', height: '1650px' }}
    >
      {/* Top Banner */}
      <div
        className="bg-[#2E0234] text-white pt-[24px] pr-[57px] pb-[16px] rounded-t-[12px] mb-6 flex items-center gap-[20px] border-b border-white mx-auto"
        style={{ width: '677px', height: '103px' }}
      >
       


        <div className="flex flex-col items-center flex-1 justify-center w-full h-full">
         
          <div className="flex items-center gap-x-[4px]">
           
            <h2
              className="text-lg font-semibold text-white capitalize"
              style={{
                fontFamily: 'Urbanist',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0.02em', 
                textAlign: 'center',
              }}
            >
              API Integration - Connect & Automate
            </h2>
          </div>


          {/* Div for Subtitle text */}
          <div className="flex flex-col items-center justify-center mt-4">
            <p
              className="text-sm text-white whitespace-nowrap"
              style={{
                fontFamily: 'Inter',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '160%',
                letterSpacing: '0%', 
                textAlign: 'center',
              }}
            >
              Easily link My Darads with your existing business tools using secure API connections.
            </p>
          </div>
        </div>
      </div>


  
      <div className="mb-8 p-8 flex flex-col gap-2 ">
        <div
          className="flex flex-col justify-center items-start gap-[12px]"
          style={{ width: '500px', height: '76px' }}
        >
          <div className="flex items-center">

            <h3
              className="capitalize"
              style={{
                fontFamily: 'Urbanist',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '160%',
                letterSpacing: '0%',
                color: '#000000',
              }}
            >
              API Keys Management
            </h3>
          </div>
          <p
            className="text-base text-gray-600"
            style={{
              fontFamily: 'Inter',
              fontWeight: '400',
              lineHeight: '160%',
              letterSpacing: '0%',
              color: 'rgba(18, 18, 18, 0.8)',
            }}
          >
            Manage your API keys for secure integration
          </p>
        </div>
       
        <div className="flex flex-col gap-4 mt-2 p-6">
          <div className="overflow-x-auto rounded-[16px] ">
            <table className=" bg-white shadow">
              <thead
                className="pt-4 pr-7 pb-4  bg-[#C2C3C5]/50"
                style={{
                  width: '621px',
                  height: '49px',
                }}
              >
                <tr>
                  <th
                    className="px-4 py-3 text-left text-sm font-medium text-gray-800"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#121212',
                    }}
                  >
                    API Key
                  </th>
                  <th
                    className="px-4 py-3 text-left text-sm font-medium text-gray-800"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#121212',
                    }}
                  >
                    Permissions
                  </th>
                  <th
                    className="px-4 py-3 text-left text-sm font-medium text-gray-800"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#121212',
                    }}
                  >
                    Last Used
                  </th>
                  <th
                    className="px-4 py-3 text-right text-sm font-medium text-gray-800"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#121212',
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody
                className="bg-white divide-y divide-gray-200 border-r border-b border-l border-solid border-[#D2D1D6]"
                style={{
                  width: '620px',
                  height: '171.5px',
                  borderBottomRightRadius: '16px',
                  borderBottomLeftRadius: '16px',
                }}
              >
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex justify-center items-center rounded-[6px] border border-solid border-[#D2D1D6] bg-white"
                        style={{
                          width: '24px',
                          height: '24px',
                          fontFamily: 'Inter',
                          fontWeight: '400',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          color: '#000000',
                        }}
                      >
                        1
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          color: '#121212',
                        }}
                      >
                        Sk_live_6jQ4JmT9uPQX
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-gray-500">Read & Write</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className="text-sm text-gray-500"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#2E0234',
                        }}
                      >
                        2 Hours Ago
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path d="M2 10a2 2 0 100-4 2 2 0 000 4z" />
                          <path d="M18 10a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div
                          className="flex justify-center items-center rounded-[6px] border border-solid border-[#D2D1D6] bg-white"
                          style={{
                            width: '24px',
                            height: '24px',
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textTransform: 'capitalize',
                            color: '#000000',
                          }}
                        >
                          2
                        </div>
                        <div
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textTransform: 'capitalize',
                            color: '#121212',
                          }}
                        >
                          Sk_live_9yU32GhL4mMn
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-sm text-gray-500">Read Only</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className="text-sm text-gray-500"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#2E0234',
                        }}
                      >
                        Last Used: 5 Days Ago
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path d="M2 10a2 2 0 100-4 2 2 0 000 4z" />
                          <path d="M18 10a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              className="text-white font-bold rounded block mx-auto flex items-center justify-center mt-4"
              style={{
                width: '335px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: '#5F04F6',
                paddingTop: '14px',
                paddingBottom: '14px',
                paddingLeft: 'auto',
                paddingRight: 'auto',
                fontFamily: 'Urbanist',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '0px',
                textTransform: 'capitalize',
                whiteSpace: 'nowrap',
              }}
            >
              Generate New API Key
            </button>
          </div>
        </div>


     


        
        <div
          className="mb-8 px-6"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // This will center all direct children horizontally
          }}
        >
          {/* Webhook Management Heading and Subtitle */}
          <div
            className="flex flex-col justify-center items-start gap-[12px]"
            style={{ width: '355px', height: '76px', textAlign: 'left' }} // Kept text-align left within this block for the actual text
          >
            <div className="flex items-center">

              <h3
                className="capitalize"
                style={{
                  fontFamily: 'Urbanist',
                  fontWeight: '600',
                  fontSize: '24px',
                  lineHeight: '160%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}
              >
                Webhook Management
              </h3>
            </div>
            <p
              className="text-base text-gray-600"
              style={{
                fontFamily: 'Inter',
                fontWeight: '400',
                lineHeight: '160%',
                letterSpacing: '0%',
                color: 'rgba(18, 18, 18, 0.8)',
                whiteSpace: 'nowrap',
              }}
            >
              Receive real-time updates on important events.
            </p>
          </div>


          {/* Webhook URL Input Field Section */}
          <div className="mt-6"> {/* This div has a top margin of 16px */}
            <div className="flex items-center mb-2" style={{ width: '564px', justifyContent: 'flex-start' }}> {/* Ensure label is left-aligned */}
              <div className="mr-2">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.99a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <label
                htmlFor="webhookUrl"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  textTransform: 'capitalize',
                  color: '#101928',
                }}
              >
                Webhook URL
              </label>
            </div>
            <div
              className="relative flex items-center bg-white"
              style={{
                width: '564px',
                height: '52px',
                borderRadius: '6px',
                gap: '12px',
                border: '1px solid #1E015680',
                padding: '0 16px',
              }}
            >
              <input
                type="text"
                name="webhookUrl"
                id="webhookUrl"
                className="block w-full sm:text-sm bg-transparent border-none focus:ring-0 focus:outline-none"
                placeholder="https://vendorbusiness.com/webhook-listener"
                readOnly
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '145%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  textDecoration: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationThickness: '0%',
                  textDecorationSkipInk: 'auto',
                  color: 'rgba(18, 18, 18, 0.8)',
                  flexGrow: 1,
                }}
              />
              {/* Pen icon */}
              <svg
                className="h-5 w-5 cursor-pointer flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                style={{ color: 'rgba(18, 18, 18, 0.4)' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536-2.036 2.036m-2.201-2.201L15.5 13.5m-1.758-1.758a2 2 0 00-2.828-2.828L7 10.5M5 18h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
            </div>
          </div>


          {/* Targeted div for Subscribed Events layout and typography */}
          <div
            className="mt-8" // Changed from mt-6 to mt-8 (24px to 32px)
            style={{
              width: '555px',
              height: '139px',
              gap: '16px', // This is for vertical gap between title and grid, and between grid rows
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start' // Align items to start within this flex container
            }}
          >
            <h4
              className="text-md font-semibold mb-2"
              style={{
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                textTransform: 'capitalize',
                color: '#000000',
              }}
            >
              Subscribed Events
            </h4>
            <div className="grid grid-cols-2 gap-8" style={{ width: '100%', border: '0.5px solid rgba(18, 18, 18, 0.1)', padding: '16px', borderRadius: '8px' }}> {/* Updated padding and added border-radius */}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  // Remove form-checkbox to prevent conflicts with custom styling
                  // className="form-checkbox h-5 w-5" // Removed this class
                  checked
                  readOnly
                  style={{
                    appearance: 'none', // Hide default browser checkbox
                    WebkitAppearance: 'none', // For Safari
                    MozAppearance: 'none', // For Firefox
                    width: '20px', // h-5 equivalent
                    height: '20px', // w-5 equivalent
                    borderRadius: '4px', // Slightly rounded corners
                    border: '1px solid transparent', // Default border, will change on unselected
                    backgroundColor: '#1D9E34', // Selected background
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    flexShrink: 0,
                    // Add a custom checkmark using background-image for the selected state
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                />
                <span
                  className="ml-2"
                  style={{
                    fontFamily: 'Urbanist',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0.02em',
                    textAlign: 'center',
                    color: 'rgba(18, 18, 18, 0.9)',
                  }}
                >
                  New Order Placed
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  // className="form-checkbox h-5 w-5" // Removed this class
                  readOnly
                  style={{
                    appearance: 'none', // Hide default browser checkbox
                    WebkitAppearance: 'none', // For Safari
                    MozAppearance: 'none', // For Firefox
                    width: '20px', // h-5 equivalent
                    height: '20px', // w-5 equivalent
                    borderRadius: '4px', // Slightly rounded corners
                    backgroundColor: '#ffffff', // Unselected background
                    border: '1px solid rgba(18, 18, 18, 0.4)', // Unselected border
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    flexShrink: 0,
                    // No background-image for unselected state
                  }}
                />
                <span
                  className="ml-2"
                  style={{
                    fontFamily: 'Urbanist',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0.02em',
                    textAlign: 'center',
                    color: 'rgba(18, 18, 18, 0.9)',
                  }}
                >
                  Refund Processed
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  // className="form-checkbox h-5 w-5" // Removed this class
                  checked
                  readOnly
                  style={{
                    appearance: 'none', // Hide default browser checkbox
                    WebkitAppearance: 'none', // For Safari
                    MozAppearance: 'none', // For Firefox
                    width: '20px', // h-5 equivalent
                    height: '20px', // w-5 equivalent
                    borderRadius: '4px', // Slightly rounded corners
                    border: '1px solid transparent', // Default border, will change on unselected
                    backgroundColor: '#1D9E34', // Selected background
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    flexShrink: 0,
                    // Add a custom checkmark using background-image for the selected state
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                />
                <span
                  className="ml-2"
                  style={{
                    fontFamily: 'Urbanist',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0.02em',
                    textAlign: 'center',
                    color: 'rgba(18, 18, 18, 0.9)',
                  }}
                >
                  Payment Completed
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  // className="form-checkbox h-5 w-5" // Removed this class
                  readOnly
                  style={{
                    appearance: 'none', // Hide default browser checkbox
                    WebkitAppearance: 'none', // For Safari
                    MozAppearance: 'none', // For Firefox
                    width: '20px', // h-5 equivalent
                    height: '20px', // w-5 equivalent
                    borderRadius: '4px', // Slightly rounded corners
                    backgroundColor: '#ffffff', // Unselected background
                    border: '1px solid rgba(18, 18, 18, 0.4)', // Unselected border
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    flexShrink: 0,
                    // No background-image for unselected state
                  }}
                />
                <span
                  className="ml-2"
                  style={{
                    fontFamily: 'Urbanist',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0.02em',
                    textAlign: 'center',
                    color: 'rgba(18, 18, 18, 0.9)',
                  }}
                >
                  Stock Update
                </span>
              </label>
            </div>
          </div>
        </div>


        {/* --- */}


        {/* API Logs & Monitoring */}
        <div className="px-6">
          <div
            className="flex flex-col justify-center items-start gap-[12px]"
            style={{ width: '355px', height: '76px' }}
          >
            <h3
              className="capitalize"
              style={{
                fontFamily: 'Urbanist',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '160%',
                letterSpacing: '0%',
                color: '#000000',
              }}
            >
              API Logs & Monitoring
            </h3>
            <p
              className="text-base text-gray-600"
              style={{
                fontFamily: 'Inter',
                fontWeight: '400',
                lineHeight: '160%',
                letterSpacing: '0%',
                color: 'rgba(18, 18, 18, 0.8)',
                whiteSpace: 'nowrap',
              }}
            >
              View all recent API requests for security & debugging
            </p>
          </div>
          <div>
            <table className="min-w-full bg-white rounded-md shadow">
              <thead
                className="pt-4 pr-7 pb-4 pl-7 bg-[#C2C3C5]/50"
                style={{
                  width: '621px',
                  height: '49px',
                }}
              >
                <tr>
                  <th
                    className="px-4 py-3 text-left text-sm font-medium text-gray-800"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#121212',
                    }}
                  >
                    API Key
                  </th>
                  <th
                    className="px-4 py-3 text-left text-sm font-medium text-gray-800"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#121212',
                    }}
                  >
                    Date & Time
                  </th>
                  <th
                    className="px-4 py-3 text-left text-sm font-medium text-gray-800"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#121212',
                    }}
                  >
                    Request Type
                  </th>
                  <th
                    className="px-4 py-3 text-left text-sm font-medium text-gray-800"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#121212',
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex justify-center items-center rounded-[6px] border border-solid border-[#D2D1D6] bg-white"
                        style={{
                          width: '24px',
                          height: '24px',
                          fontFamily: 'Inter',
                          fontWeight: '400',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          color: '#000000',
                        }}
                      >
                        1
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          color: '#121212',
                        }}
                      >
                        Sk_live_6jQ4JmT9uPQX
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-gray-500">2025-03-30 12:05 PM</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-gray-500">GET /orders</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <svg className="-ml-1 mr-1 h-4 w-4 fill-current text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      200 OK
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex justify-center items-center rounded-[6px] border border-solid border-[#D2D1D6] bg-white"
                        style={{
                          width: '24px',
                          height: '24px',
                          fontFamily: 'Inter',
                          fontWeight: '400',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          color: '#000000',
                        }}
                      >
                        2
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          color: '#121212',
                        }}
                      >
                        Sk_live_9yU32GhL4mMn
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-gray-500">2025-03-30 11:45 AM</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-gray-500">POST / Payouts</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <svg className="-ml-1 mr-1 h-4 w-4 fill-current text-yellow-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.529 0-2.492-1.646-1.742-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zM10 7a1 1 0 011-1h-2a1 1 0 011 1z" clipRule="evenodd" />
                      </svg>
                      403 Forbidden
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex justify-center items-center rounded-[6px] border border-solid border-[#D2D1D6] bg-white"
                        style={{
                          width: '24px',
                          height: '24px',
                          fontFamily: 'Inter',
                          fontWeight: '400',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          color: '#000000',
                        }}
                      >
                        3
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          textTransform: 'capitalize',
                          color: '#121212',
                        }}
                      >
                        Sk_live_9yU32GhL4mMn
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-gray-500">2025-03-30 11:30 AM</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-gray-500">GET /products</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <svg className="-ml-1 mr-1 h-4 w-4 fill-current text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      200 OK
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};


export default ApiIntegrationDashboard;

