import React from "react";
import LogoImg from '../../assets/logo.png'
import './Header.scss'

const CN = 'header'
export const Header = () => {
    return (
        <div className={CN}>
            <div className="container-sm d-flex justify-content-between align-items-center head">
                <div className="logo">
                    <img src={LogoImg} className='img-fluid' alt="logo"/>
                </div>
                <div className="d-flex flex-column align-items-center user-info">
                    <div className="rounded-circle user-img">
                        <img className='w-100' src="https://www.norbel.ru/local/templates/norbel_common/images/no_ava.png" alt=""/>
                    </div>
                    <div className="info">
                        <p className='mb-0'>Username</p>
                    </div>
                </div>
            </div>

        </div>
    )
}