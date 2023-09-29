import React from 'react'
import backToUpBtn from '../../assets/images/double-arrow.svg'
import { useGlobalContext } from '../Context/Context'
import '../../App.css'

const BackToUpBtn = () => {

    const { isVisible } = useGlobalContext()

    const scrollUp = () => {
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
    }

    return (

        <button className={`back-to-up-btn  ${isVisible ? 'visible':''}`} onClick={scrollUp}>
            <img src={backToUpBtn} className='back-to-up-btn-img' alt="back-to-up-btn-img" style={{fill:"white"}}/>
        </button>

    )
}

export default BackToUpBtn