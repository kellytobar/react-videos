import React from 'react';
import Media from './media';
import './playlist.css';
//import Play from '../../icons/components/play'

function Playlist(props) {
  return (
    <div className="Playlist">
      {/* <Play size={50} color="red"/> */}
      {
        // props.data.categories[0].playlist.map((item) => {
          props.playlist.map((item) => {
          return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
          })
      }
    </div>
  )
}

export default Playlist;