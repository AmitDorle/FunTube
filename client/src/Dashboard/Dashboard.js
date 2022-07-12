import React, { useEffect,useState} from "react";
import axios from "axios";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import VideoCard from './../VideoCard/VideoCard';

function Dashboard() {


  const [videoData, setVideoData] =useState([]);
  const [searchTerm, setSearchTerm] =useState('');

  useEffect(() => {

    axios.get('/videos/all').then(res => {
      setVideoData(res.data);
   })
    
  }, [])
 
  useEffect(() =>{

    axios.post('/videos/search',{
      searchTerm: searchTerm
    }).then(res =>{
      setVideoData(res.data);
    })

  }, [searchTerm])

  function logout() {
    localStorage.clear();
    window.location = "/Login";
  }
  useEffect(() => {
    let mail = localStorage.getItem("email");
    let pass = localStorage.getItem("password");
    if (!mail || !pass) {
      window.location = "/Login";
    }
  }, []);


  return (
    <div className="container">
      <div className="dashboard-nav">
        <div>
          <h3 className="head-start">Hello, {localStorage.getItem("email")}</h3>
        </div>
  
        <div>
          <button onClick={logout} className="logout-button">
            LogOut
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/AddVideo">
            <abbr title="AddVideo">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3159/3159331.png"
                className="add-video-logo"
                alt="logo"
              />
            </abbr>
          </Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Chat">
            <abbr title="Chat">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2598/2598855.png"
                className="add-video-logo"
                alt="logo"
              />
            </abbr>
          </Link>
        </div>
      </div>

      <hr />
      <hr />
      
        <div className="search-bar">
          <div>
            <input
              className="input-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success search-btn" type="button">
              Search
            </button>
            </div>
        </div>
        

        <div className="row">
           {
             videoData.map(video => {
               return (
                 <div className="col-md-4">
                     <Link to={`/VideoPlayer/${video.videoID}`} className="text-decoration-none">
                 <VideoCard
                        title={video.title}
                        description={video.description}
                        channel={video.channel}
                        videoID={video.videoID}
                        logoID={video.logoID}
                        />
                        </Link>
                       
                        </div>
               )
             })
            }
         </div>
         </div>
       );
        }    
export default Dashboard;
