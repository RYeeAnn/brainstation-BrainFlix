import './Upload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'

function Upload () {
    return (
        <section className="upload">
            <div className="upload__title">
                Upload Video
            </div>
            <div className="upload__thumbnailTitle">
                VIDEO THUMBNAIL
            </div>
            <div className="upload__thumbnail">
                <video className="upload__video--poster" src='' poster={thumbnail}></video>
            </div>
            <div className="upload__inputTitle">
                TITLE YOUR VIDEO
            </div>
            <input type="text" placeholder='Add a title to your video' className="upload__input" />
            <div className="upload__textareaTitle">
                ADD A VIDEO DESCRIPTION
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Add a description to your video' className="upload__textarea"></textarea>
            <button className="search__button--upload upload__button--publish">
                PUBLISH
            </button>
            <button className="upload__button--cancel">
                CANCEL
            </button>
        </section>
    )
}

export default Upload