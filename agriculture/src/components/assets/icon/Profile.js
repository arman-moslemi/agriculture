import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={16}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 .25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM4.75 5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM5 11.25a4.75 4.75 0 1 0 0 9.5h6a4.75 4.75 0 1 0 0-9.5H5ZM1.75 16A3.25 3.25 0 0 1 5 12.75h6a3.25 3.25 0 0 1 0 6.5H5A3.25 3.25 0 0 1 1.75 16Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
