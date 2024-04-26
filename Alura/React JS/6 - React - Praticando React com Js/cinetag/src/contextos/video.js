import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const VideosContext = createContext();

export function VideosProvider({ children }) {
  const [videos, setVideos] = useState([]);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  )
}

export function useVideosContext() {
  const { videos, setVideos } = useContext(VideosContext);
  const [video, setVideo] = useState({});
  // const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/renanabasilva/cinetag-api/videos`)
      .then(resp => resp.json())
      .then(data => setVideos(data))
  }, [setVideos]);

  const getVideo = useCallback((id) => {
    fetch(`https://my-json-server.typicode.com/renanabasilva/cinetag-api/videos/${id}`)
      .then(resp => {
        if (resp.ok){
          return resp.json()  
        }
        throw new Error("Video não encontrado");
      })
      .then(data => setVideo({ ...data }))
      .catch(error => {
        console.error(error);
        // navigate('/404')
        setVideo('404')
      })
  }, []);

  return { videos, video, getVideo }
}
