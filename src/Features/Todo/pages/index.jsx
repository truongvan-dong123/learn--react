import React from 'react';
import AlbumList from '../components/AlbumList';
import './style.scss'
AlbumFeatures.propTypes = {

};

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            name: "eat",
            img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/c/5/4/9c54cc5aefbfe5d4d7696f2f4f8f0c9d.jpg"
        },
        {
            id: 2,
            name: "eat2",
            img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/c/5/4/9c54cc5aefbfe5d4d7696f2f4f8f0c9d.jpg"

        },
        {
            id: 3,
            name: "eat3",
            img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/c/5/4/9c54cc5aefbfe5d4d7696f2f4f8f0c9d.jpg"

        }
    ]


    return (
        <div className="Page-home">
            <h3>Album List</h3>
            <AlbumList albumList={albumList} />
            {/* <Test /> */}
        </div>
    )
}

export default AlbumFeatures;