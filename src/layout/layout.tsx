import React from 'react'

const Layout: React.FC = ({ children }) => {
    return (
        <div className="App">
            <div className="container">
                <div className="title">
                    <h3>Question - Answer</h3>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Layout