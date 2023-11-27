import React from "react"
import { UserRoundCogIcon, Heart, KeyRound, LogOut, AlertTriangle } from 'lucide-react';

import './style.css'

export default function MyAccount() {
    return (
        <div className="my-account-page bg-[#faf2ec]">
            <div className="wrapper container">
                <div className="heading text-center">
                    <h1>My Account</h1>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="profile">
                        <div className="title">
                            <div>
                                <UserRoundCogIcon className="" />
                                <h4>Edit Profile</h4>
                            </div>
                        </div>
                        <div className="description">
                            <p>Here you can change the information given to us when you first became a member. You can update your name, address, etc.</p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="title">
                            <div>
                                {/* <Heart /> */}
                                <h4>Edit Profile</h4>
                            </div>
                        </div>
                        <div className="description">
                            <p>Here you can change the information given to us when you first became a member. You can update your name, address, etc.</p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="title">
                            <div>
                                {/* <KeyRound /> */}
                                <h4>Edit Profile</h4>
                            </div>
                        </div>
                        <div className="description">
                            <p>Here you can change the information given to us when you first became a member. You can update your name, address, etc.</p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="title">
                            <div>
                                {/* <LogOut /> */}
                                <h4>Edit Profile</h4>
                            </div>
                        </div>
                        <div className="description">
                            <p>Here you can change the information given to us when you first became a member. You can update your name, address, etc.</p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="title">
                            <div>
                                {/* <AlertTriangle /> */}
                                <h4>Edit Profile</h4>
                            </div>
                        </div>
                        <div className="description">
                            <p>Here you can change the information given to us when you first became a member. You can update your name, address, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}