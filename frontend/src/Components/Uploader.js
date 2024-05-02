import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone"; //using the hook
import { FiUploadCloud } from "react-icons/fi";
import { toast } from "react-toastify";

function Uploader(props) {
  const { onUpload } = props;
  const [fileData, setFileData] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file) => {
      setFileData(file);
      onUpload(file);
    })
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
    onDrop,
    onDropRejected: () => toast.error("Not uploaded.\n please upload one valid file of max size 10MB"),
  });

  return (
    <div className="w-full text-center">
      <div
        {...getRootProps()}
        className="px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex-colo text-subMain text-3xl">
          <FiUploadCloud />
        </span>
        <p className="text-sm mt-2">Drag your image here</p>
        {fileData?.name ?
          <span className="text-[#00ff00]">{fileData.name}</span>
          : <em className="text-xs text-border">
            (only .jpg and .png files will be accepted)
          </em>}
      </div>
    </div>
  );
}
export default Uploader;