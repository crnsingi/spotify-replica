import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import { albumsData } from '../assets/assets';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumsData = albumsData[id];

  return (
    <>
    <Navbar/>
    </>
  )
}

export default DisplayAlbum
