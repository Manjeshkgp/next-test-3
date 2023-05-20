import React from "react";

function Icon({scrollPosition,vh}:{scrollPosition:number,vh:number}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="transring"
      x="0"
      y="0"
      enableBackground="new 0 0 414 414"
      version="1.1"
      viewBox="0 0 414 414"
      style={{ backgroundColor: "transparent" }}
      xmlSpace="preserve"
      className="transition-all duration-300"
    >
      <path
        id="Transparent_Ring"
        fill="none"
        stroke="#FFF"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
        enableBackground="new"
        opacity="0.4"
      ></path>
      <path
        id="Opaque_Ring"
        fill="none"
        stroke="#FFF"
        strokeDasharray={`${(scrollPosition/vh)*135},1000`}
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
      ></path>
      <g id="Dots1" opacity={scrollPosition>=0?'1':'0.5'}>
        <path
          fill={scrollPosition>=0?"#0092FF":"#fff"}
          d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
        ></path>
      </g>
      <g id="Dots2" opacity={scrollPosition>=vh?'1':'0.5'}>
        <path
          fill={scrollPosition>=vh?"#0092FF":"#fff"}
          d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
        ></path>
      </g>
      <g id="Dots3" opacity={scrollPosition>=2*vh?'1':'0.5'}>
        <path
          fill={scrollPosition>=2*vh?"#0092FF":"#fff"}
          d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
        ></path>
      </g>
      <g id="Dots4" opacity={scrollPosition>=3*vh?'1':'0.5'}>
        <path
          fill={scrollPosition>=3*vh?"#0092FF":"#fff"}
          d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
        ></path>
      </g>
      <g id="Dots5" opacity={scrollPosition>=4*vh?'1':'0.5'}>
        <path
          fill={scrollPosition>=4*vh?"#0092FF":"#fff"}
          d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
        ></path>
      </g>
      <g id="Dots6" opacity={scrollPosition>=5*vh?'1':'0.5'}>
        <path
          fill={scrollPosition>=5*vh?"#0092FF":"#fff"}
          d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
        ></path>
      </g>
      <g id="Dots7" opacity={scrollPosition>=6*vh?'1':'0.5'}>
        <path
          fill={scrollPosition>=6*vh?"#0092FF":"#fff"}
          d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;