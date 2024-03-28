import React from 'react'

const Arrow = () => {
    return (
        <div className="graph__wrapper">
            <svg width="250px" height="107px" viewBox="0 0 315 107" version="1.1" style={{ overflow: 'visible' }}>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" type="MSPage">
                    <path id="Path-1" className="path" fill="none" stroke="#378CE7" strokeWidth="5" strokeLinejoin="round" strokeMiterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81" />

                    <path className="dashed dark:stroke-secondary" fill="none" stroke="white" strokeWidth="8" strokeLinejoin="round" strokeMiterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81" />

                    <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#1D24CA">
                        <animateMotion rotate="auto" begin="1s" dur="1.6s" repeatCount="1" fill="freeze">
                            <mpath xlinkHref="#Path-1" />
                        </animateMotion>
                    </polyline>
                </g>
            </svg>
        </div>
    )
}

export default Arrow