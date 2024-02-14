// import { openUploadWidget } from "../../utils/CloudinaryService";
import { openUploadWidget } from "../utils/CloudinaryServices";
import { cloudinary_upload_preset } from "../config";
import { Icon } from "@iconify-icon/react";

const UploadVideo = ({setUrl}) => {

  const uploadImageWidget = () => {
    // console.log(props);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dcjuzfafi",
        uploadPreset: cloudinary_upload_preset,
        // tags: ["myname"],
        // maxImageWidth: 600,
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
            console.log(result)
        //   setName(result.info.original_filename)
        setUrl(result.info.secure_url)
        }else{
          if(error){
            console.log(error)
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    // <button className="bg-white text-black rounded-full p-4 font-semibold" onClick={uploadImageWidget}>
    //   Select Video
    // </button>
    <div className='px-12 py-1 font-semibold rounded-full w-max bg-white text-black cursor-pointer flex items-center justify-center' onClick={uploadImageWidget}>
        <div>
            Upload Video
        </div>
        <div>
            <Icon icon="material-symbols:upload" width="1.8rem" height="1.8rem" />
        </div>
    </div>
  );
};

export default UploadVideo;
