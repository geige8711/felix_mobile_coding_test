// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import './TargetPage.css'

const TargetPage = () => {
    const [goals, setGoals] = useState([])
    useEffect(() => {
        fetch(
            'https://unstats.un.org/SDGAPI/v1/sdg/Target/List?includechildren=false'
        )
            .then((response) => response.json())
            .then((data) => {
                setGoals(data.filter((item) => item.goal === '13'))
            })
    }, [])
    return (
        <div className="target-root">
            <div className="banner-container">
                <div className="banner-content">
                    <div className="goals">Goals</div>
                    <div className="goal-number">13</div>
                    <div className="banner-title">
                        Take urgent action to combat climate change and <br />{' '}
                        its impacts*
                    </div>
                    <div className="btn-container">
                        <button className="btn-action"> {'<- Prev'} </button>
                        <button className="btn-action"> {'Next ->'} </button>
                    </div>
                </div>
            </div>
            <div className="target-goals-container">
                <div className="target-goals-content">
                    {goals.map((item, index) => (
                        <div key={index} className="goal-title-req">
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TargetPage
