import axios from 'axios'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'



const Row = ({title, fetchURL,rowId}) => {
const [movies, setMovies] = useState([])
const [like, setLike] = useState(false)

useEffect(() =>{
    axios.get(fetchURL).then((response) =>{

        setMovies(response.data.results)
    })
},[fetchURL])


const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
};
const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
};

console.log(movies )

  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0 ' size={40}/>
            <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>

                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                           
                            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                            <p>
                                {like?<FaHeart className='absolute top-4 left-4 text gray-300'/> : <FaRegHeart  className='absolute top-4 left-4 text gray-300'/>}
                            </p>
                        </div>
                    </div>

                ))}

            </div>

            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' size={40}/>
        </div>
    </div>
  )
}

export default Row