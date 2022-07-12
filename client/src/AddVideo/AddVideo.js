import React, {useState} from 'react'
import "./AddVideo.css"


import Swal from 'sweetalert2'
import axios from 'axios';

function AddVideo() {

   const [title,setTitle] = useState("")
   const [description,setDescription] = useState("")
   const [channel,setchannel] = useState("")
   const [videoID,setvideoID] = useState("")
   const [logoID,setlogoID] = useState("")

   function addVideo(){
       const response =  axios.post("/videos/add",{
           title: title,
           description: description,
           channel: channel,
           videoID: videoID,
           logoID : logoID
       })

       if(response)
       {
           Swal.fire({
               title: 'Success',
               text:  'Video Added',
               icon:  'success',
              })
              window.location="/Dashboard"
       }
       
   }
  return (
    <div className='container'>
        
              <div className='m-5'>
                  <h2 className="text-center welcome-message">Welcome <b>{localStorage.getItem('email')}</b></h2>
              </div>

              <div className='form-add-video'>
                  <h3 className="text-center">Add Video</h3>
                  <form>
                      <div className='mb-4'>
                     <label htmlFor="title">Title</label>
                     <input type="text" className="form-control"  id="title" placeholder="Enter Title"
                     onChange={(e) => setTitle(e.target.value)}
                     />
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="Description">Description</label>
                     <textarea className="form-control" id="description" row="4" placeholder="Enter Description" 
                     onChange={(e) => setDescription(e.target.value)}
                     ></textarea>
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="channel">Channel</label>
                     <input type="text" className="form-control" id="channel" placeholder="Enter channel"
                     onChange={(e) => setchannel(e.target.value)}
                     />
                      </div>

                      
                      <div className='mb-4'>
                     <label htmlFor="videoID">VideoID</label>
                     <input type="text" className="form-control" id="videoID" placeholder="Enter videoID" 
                     onChange={(e) => setvideoID(e.target.value)}
                     />
                      </div>

                      <div className='mb-4'>
                     <label htmlFor="logoID">LogoID</label>
                     <input type="text" className="form-control" id="logoID" placeholder="Enter logoID" 
                     onChange={(e) => setlogoID(e.target.value)}
                     />
                      </div>

                      <button type="button" className="custom-btn  btn-lg btn-add-video " 
                      onClick={addVideo}
                      >
                      Add Video
                      </button>
                  </form>
              </div>

             
     </div>
     
    )
}
export default AddVideo