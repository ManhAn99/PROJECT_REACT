import React ,{useState,useEffect}from 'react'
import {projectStorage,projectFirestore, timestamp} from '../firebase/config'

const useStorage = (file) => {
  const [progress,setProgress] = useState(0)
  const [error,setError] = useState(null)
  const [url,setUrl] = useState(null)

  useEffect( () => {
      //reference
      const storageRef = projectStorage.ref(file.name);
      //create collection firebase
      const collectionRef = projectFirestore.collection('images')
      storageRef.put(file).on('state_changed',(snap) => {
            let percent = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percent)
        },(err) => {
            setError(err)
        },async() => {
          const url = await storageRef.getDownloadURL();
          //add in firbase
          const createdAt = timestamp()
          collectionRef.add({url,createdAt})
          setUrl(url)
        })
  }, [file])

  return {progress, url, error}
}

export default useStorage
