import "./Upload.scss";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify'; // Notification from upload page for catching successful or error in posting
import 'react-toastify/dist/ReactToastify.css';






function Upload() {

  const API_URL = process.env.REACT_APP_API_SERVER;
  // console.log("Upload API_URL", API_URL);

  
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const titleHandle = ((event) => {
    setTitle(event.target.value)
  });

  const descriptionHandle = ((event) => {
    setDescription(event.target.value)
  });

  const handleUpload = async () => {

    // This essentially replaces "required" and gives an error notif when the title and description are not filled
    if(!title || !description) {
      toast.error('Please provide both title and description');
      return;

    }
    axios
      .post(`${API_URL}/videos`, {
        title:title,
        description:description
      })
      .then(() => {
        toast.success('Video Uploaded Successfully', {
          position: toast.POSITION.TOP_RIGHT, /* Notification will appear top right of page */
        });
        console.log('Posted Successfully!')
      })
      .catch((err) => {
        console.error('Error posting video', err)
      });

  };




  

  return (
    <>
    <form action="submit">
    <div className="upload__twoContainers">
      <section className="upload">
        <div className="upload__container">
          <div className="upload__title">Upload Video</div>
          <div className="upload__thumbnailTitle">VIDEO THUMBNAIL</div>
          <div className="upload__thumbnail">
            <video
              className="upload__video--poster"
              src=""
              poster={thumbnail}
            ></video>
          </div>
        </div>
      </section>

      <section className="uploadText">
        <div className="uploadText__container">
          <div className="uploadText__title uploadText__title1">
            TITLE YOUR VIDEO
          </div>
          <input
            type="text"
            placeholder="Add a title to your video"
            className="uploadText__input"
            required
            onChange={titleHandle}
          />
          <div className="uploadText__title">ADD A VIDEO DESCRIPTION</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Add a description to your video"
            className="uploadText__textarea"
            required
            onChange={descriptionHandle}
          ></textarea>
        </div>
      </section>
    </div>

      <section className="uploadButton">
        <div className="uploadButton__publish">
          <Link to="/">
          <button className="uploadButton__publishBtn" onClick={handleUpload}>
            PUBLISH
            </button>
            </Link>
        </div>
        <div className="uploadButton__cancel">
          <Link to="/">
            <button className="uploadButton__cancelBtn">CANCEL</button>
          </Link>
        </div>
      </section>
      </form>
    </>
  );
}

export default Upload;
