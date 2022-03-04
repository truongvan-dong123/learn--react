import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className="album">
            <p className='album__name'>{album.name}</p>
            <img src={album.img} alt="img" />
        </div>
    )
}

export default Album;