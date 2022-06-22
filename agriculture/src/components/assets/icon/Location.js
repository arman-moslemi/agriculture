import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={19}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.412 24.496C1.317 14.21 0 13.155 0 9.375a9.375 9.375 0 1 1 18.75 0c0 3.78-1.317 4.835-8.412 15.12a1.172 1.172 0 0 1-1.926 0Zm.963-11.215a3.906 3.906 0 1 0 0-7.812 3.906 3.906 0 0 0 0 7.812Z"
      fill="#FF6900"
    />
  </svg>
)

export default SvgComponent
