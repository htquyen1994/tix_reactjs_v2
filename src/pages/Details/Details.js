import React from 'react'

export default function Details(props) {
    return (
        <div>
            {props.match.params.id}
        </div>
    )
}
