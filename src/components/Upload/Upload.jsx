import "./Upload.scss";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";

function Upload() {
  return (
    <>
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
          />
          <div className="uploadText__title">ADD A VIDEO DESCRIPTION</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Add a description to your video"
            className="uploadText__textarea"
          ></textarea>
        </div>
      </section>
    </div>

      <section className="uploadButton">
        <div className="uploadButton__publish">
          <button className="uploadButton__publishBtn">PUBLISH</button>
        </div>
        <div className="uploadButton__cancel">
          <Link to="/">
            <button className="uploadButton__cancelBtn">CANCEL</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Upload;
