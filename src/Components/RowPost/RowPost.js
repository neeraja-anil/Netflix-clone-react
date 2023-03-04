import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../Axios'
import { imgUrl, API_KEY } from '../../Constants/Constants'
import Youtube from 'react-youtube'
import { Originals } from '../../Urls'


function RowPost(props) {

  const [movieRow, setmovieRow] = useState([])
  const [YoutubeId, setYoutubeId] = useState('')

  useEffect(() => {

    return () => {
      axios.get(props.url).then((Response) => {
        console.log(Response.data)
        setmovieRow(Response.data.results)
      }).catch(err => {
        // alert('Network Error')
      })
    }
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0
    }
  }

  const handleYoutube = (id) => {
    
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response) => {
      if (Response.data.results.length !== 0) {
        setYoutubeId(Response.data.results[0])
      } else {
        console.log('Empty array')
      }
    })
  }

  return (

    <div className='row'>
      <h1>{props.title}</h1>
      <div className="posters">
        {movieRow.map((movies) =>
          <img onClick={() => { handleYoutube(movies.id) }} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl+movies.backdrop_path}`} alt='' />
        )}

      </div>
      {YoutubeId && <Youtube videoId={YoutubeId.key} opts={opts} />}
    </div>
  )
}

export default RowPost