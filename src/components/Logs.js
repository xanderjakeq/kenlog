import React from 'react'
import Entry from './Entry'

export default (props) => {
    return (
        <div className = 'entries'>
              {props.entries}
        </div>
    )
}