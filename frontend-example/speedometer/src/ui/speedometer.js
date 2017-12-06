import React, { Component } from 'react';
import './speedometer.css'

export default ({name, speed, active, delay}) => {

    return (
        <div className="speedometer">
            <h1>{name}</h1>
            <h2 style={{color: active ? 'green' : "red"}}>{speed}</h2>
            <h3>{delay}</h3>
        </div>
    )
}