// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import { goals } from '../../mockData/goals'

const HomePage = () => {
    return (
        <div className="home-root">
            <div className="header-digital-container">
                <div className="header-digital-content">
                    <div className="header-digital-first">THE 17 GOALS</div>

                    <div className="header-digital-action">
                        <div className="digital-number">169</div>
                        <div className="digital-action">Targets</div>
                    </div>
                    <div className="header-digital-action">
                        <div className="digital-number">3082</div>
                        <div className="digital-action">Events</div>
                    </div>
                    <div className="header-digital-action">
                        <div className="digital-number">1303</div>
                        <div className="digital-action">Publications</div>
                    </div>
                    <div className="header-digital-action">
                        <div className="digital-number">5458</div>
                        <div className="digital-action">Actions</div>
                    </div>
                </div>
            </div>
            <div className="goals-container">
                {goals.map((item, index) => (
                    <Link key={index} to={item.linkTo}>
                        <div
                            className="goal"
                            style={{
                                backgroundImage: 'url(' + item.bgUrl + ')',
                            }}
                        >
                            <div
                                className="goal-hover"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <div className="goal-number">{index + 1}</div>
                                <div className="goal-title">
                                    Goal {index + 1}
                                </div>
                                <div className="goal-desc">{item.goalDesc}</div>
                                <div className="goal-digital-container">
                                    <div className="goal-digital-action">
                                        <div className="goal-digital-number">
                                            {item.targets}
                                        </div>
                                        <div className="goal-digital-action">
                                            Targets
                                        </div>
                                    </div>
                                    <div className="goal-digital-action">
                                        <div className="goal-digital-number">
                                            {item.events}
                                        </div>
                                        <div className="goal-digital-action">
                                            Events
                                        </div>
                                    </div>
                                    <div className="goal-digital-action">
                                        <div className="goal-digital-number">
                                            {item.publications}
                                        </div>
                                        <div className="goal-digital-action">
                                            Publications
                                        </div>
                                    </div>
                                    <div className="goal-digital-action">
                                        <div className="goal-digital-number">
                                            {item.actions}
                                        </div>
                                        <div className="goal-digital-action">
                                            Actions
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="more-info-btn">
                                        More Info
                                    </button>
                                </div>
                            </div>
                            <img
                                className="goal-image"
                                src={item.bottomImgUrl}
                                alt=""
                            />
                        </div>
                    </Link>
                ))}
                <Link to="/">
                    <div className="goal-last">
                        <img
                            src="https://sdgs.un.org/themes/custom/porto/assets/goals/global-goals.png"
                            className="goal-image-last"
                            alt="goal image"
                        ></img>
                        <div className="see-all">see all</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
