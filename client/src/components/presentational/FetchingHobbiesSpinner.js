import React, { Component } from 'react';
import './FetchingHobbiesSpinner.css'

/*
FIDGET SPINNER LOADER PRO
by free potato tree
https://codepen.io/arxyz/pen/NMYEyX?page=4
*/

class FetchingHobbiesSpinner extends Component {
  render() {
    return (
      <div>
        <svg viewBox="0 0 60 55" width="200" height="100" className = 'nig'>
          <defs>
            <filter id="poo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="4" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -8" result="goo" />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
          <mask id="mask">
            <g id = "g" className="balls" style={{"WebkitFilter": "url('#poo')", "filter": "url('#poo')", "fill":"white"}}>
              <circle cx="35" cy="68" r="10" id = 'b1'></circle>
              <circle cx="60" cy="25" r="2" id = 'b2'></circle>
            </g>
          </mask>
          <rect x="0" y="0"  mask="url(#mask)" fill='#FDC63F' width="50" height="50"></rect>
          <animateTransform xlinkHref="#g" attributeName="transform" attributeType="XML" type="rotate"
            from="0 25 25"
            to = "360 25 25"
          dur=".5s" repeatCount="indefinite" />
          <animate id = 'an1' xlinkHref="#b1" attributeName="cx" calcMode="spline" keyTimes="0; 0.5; 1"
            values="25; 18; 25"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          dur=".5s" repeatCount="indefinite" />
          <animate id = 'an2' xlinkHref="#b2" attributeName="cx"
            values="25; 32; 25"
            calcMode="spline"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          keyTimes="0; 0.5; 1" to="60" dur=".5s" repeatCount="indefinite" />
          <animate xlinkHref="#b1" attributeName="r"
            values="6.4; 5; 6.4"
            calcMode="spline"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          keyTimes="0; 0.5; 1" to="60" dur=".5s" repeatCount="indefinite" />
          <animate xlinkHref="#b2" attributeName="r"
            values="6.4; 5; 6.4"
            calcMode="spline"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          keyTimes="0; 0.5; 1" to="60" dur=".5s" repeatCount="indefinite" />
        </svg>

        <svg viewBox="0 0 60 55" width="200" height="100" className = 'nig'>
          <defs>
            <filter id="poo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="4" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -8" result="goo" />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
          <mask id="mask">
            <g id = "g" className="balls" style={{"WebkitFilter": "url('#poo')", "filter": "url('#poo')", "fill":"white"}}>
              <circle cx="35" cy="68" r="10" id = 'b1'></circle>
              <circle cx="60" cy="25" r="2" id = 'b2'></circle>
            </g>
          </mask>
          <rect x="0" y="0"  mask="url(#mask)" fill='#090B4D' width="50" height="50"></rect>
          <animateTransform xlinkHref="#g" attributeName="transform" attributeType="XML" type="rotate"
            from="0 25 25"
            to = "360 25 25"
          dur=".5s" repeatCount="indefinite" />
          <animate id = 'an1' xlinkHref="#b1" attributeName="cx" calcMode="spline" keyTimes="0; 0.5; 1"
            values="25; 18; 25"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          dur=".5s" repeatCount="indefinite" />
          <animate id = 'an2' xlinkHref="#b2" attributeName="cx"
            values="25; 32; 25"
            calcMode="spline"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          keyTimes="0; 0.5; 1" to="60" dur=".5s" repeatCount="indefinite" />
          <animate xlinkHref="#b1" attributeName="r"
            values="6.4; 5; 6.4"
            calcMode="spline"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          keyTimes="0; 0.5; 1" to="60" dur=".5s" repeatCount="indefinite" />
          <animate xlinkHref="#b2" attributeName="r"
            values="6.4; 5; 6.4"
            calcMode="spline"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          keyTimes="0; 0.5; 1" to="60" dur=".5s" repeatCount="indefinite" />
        </svg>
        <svg viewBox="0 0 60 55" width="200" height="100" className = 'nig'>
          <defs>
            <filter id="poo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="4" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -8" result="goo" />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
          <mask id="mask">
            <g id = "g" className="balls" style={{"WebkitFilter": "url('#poo')", "filter": "url('#poo')", "fill":"white"}}>
              <circle cx="35" cy="68" r="10" id = 'b1'></circle>
              <circle cx="60" cy="25" r="2" id = 'b2'></circle>
            </g>
          </mask>
          <rect x="0" y="0"  mask="url(#mask)" fill='#F90005' width="50" height="50"></rect>
          <animateTransform xlinkHref="#g" attributeName="transform" attributeType="XML" type="rotate"
            from="0 25 25"
            to = "360 25 25"
          dur=".5s" repeatCount="indefinite" />
          <animate id = 'an1' xlinkHref="#b1" attributeName="cx" calcMode="spline" keyTimes="0; 0.5; 1"
            values="25; 18; 25"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          dur=".5s" repeatCount="indefinite" />
          <animate id = 'an2' xlinkHref="#b2" attributeName="cx"
            values="25; 32; 25"
            calcMode="spline"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          keyTimes="0; 0.5; 1" to="60" dur=".5s" repeatCount="indefinite" />
          <animate xlinkHref="#b1" attributeName="r"
            values="6.4; 5; 6.4"
            calcMode="spline"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          keyTimes="0; 0.5; 1" to="60" dur=".5s" repeatCount="indefinite" />
          <animate xlinkHref="#b2" attributeName="r"
            values="6.4; 5; 6.4"
            calcMode="spline"
            keySplines=".6 .01 .36 .99; .6 .01 .36 .99;"
          keyTimes="0; 0.5; 1" to="60" dur=".5s" repeatCount="indefinite" />
        </svg>
      </div>
        );
        }
}

export default FetchingHobbiesSpinner;
