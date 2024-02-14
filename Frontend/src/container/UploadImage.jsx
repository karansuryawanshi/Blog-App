import { openUploadWidget } from "../utils/CloudinaryServices";
import { cloudinary_upload_preset } from "../config";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";

const UploadImage = ({setUrl}) => {

  const uploadImageWidget = () => {
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
            console.log(result.info.secure_url)
        //   setName(result.info.original_filename)
        // setUrl(result.info.secure_url)
        setUrl(result.info.secure_url)

        }else{
          if(error){
            console.log(error)
          }
        }
      }
    );
    console.log(uploadImageWidget)
    myUploadWidget.open();
  };

  return (
<div className='px-12 py-1 font-semibold rounded-full w-max bg-white text-black cursor-pointer flex items-center justify-center' onClick={uploadImageWidget}>
    <div>
        Upload Image
    </div>
    <div>
        <Icon icon="material-symbols:upload" width="1.8rem" height="1.8rem" />
    </div>
</div>
  );
};

export default UploadImage;
