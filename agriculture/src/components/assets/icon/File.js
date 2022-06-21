import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#111"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.138 21.468H2.83a2.33 2.33 0 0 1-2.33-2.33V2.83A2.33 2.33 0 0 1 2.83.5h12.813l5.824 5.824v12.814a2.33 2.33 0 0 1-2.329 2.33v0Z" />
      <path d="M16.81 21.468v-9.319H5.16v9.319M5.16.5v5.824h9.32" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h21.968v21.968H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent