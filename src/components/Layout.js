import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import Search from './search'

const searchIndices = [{ name: `Products`, title: `Products`}]

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />
            <Search indices={searchIndices} />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Maksym Lewiński, 2021</p>
            </footer>
        </div>
    )
}
