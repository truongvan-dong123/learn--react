import React from 'react'
import Album from '../Album'
import './style.scss'

const AlbumList = ({ albumList }) => {
    return (
        <ul className="album-list">
            {albumList.map(lbum =>
                <li key={lbum.id}>
                    <Album album={lbum} />
                </li>
            )
            }
        </ul>
    )
}

export default AlbumList