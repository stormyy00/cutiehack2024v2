import { useState } from "react";
import {
  Upload as LucideUpload,
  FileText,
  Image as LucideImage,
  X,
  Eye,
} from "lucide-react";
import toaster from "@/utils/toaster";
import { BYTES } from "@/data/bytes";
import { readFileAsBase64, compress } from "@/utils/convert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const getSize = (maxSize) => BYTES[maxSize[1]] * maxSize[0];
const getType = (types) => "." + types.join(",.");

const Upload = ({ field, user, setUser, text, maxSize, types, required }) => {
  const [file, setFile] = useState(
    user[field] && user[field].startsWith("data:image")
      ? { src: user[field], type: "image", title: `${user.name}.png` }
      : null,
  );
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInput = async (e) => {
    setUploading(true);
    const blob = await compress(e.target.files[0]);
    if (blob.size > getSize(maxSize)) {
      toaster(`File too big, exceeds ${maxSize[0]} ${maxSize[1]}!`, "error");
      return;
    }
    const base64 = await readFileAsBase64(blob);
    setUser({ ...user, [field]: base64 });
    setFile({
      src: base64,
      type: blob.type,
      title: blob.name,
    });
    setUploading(false);
  };

  return (
    <div className="flex flex-col">
      <p className="mb-1 font-semibold">
        {text}
        {required && <span className="text-red-500">*</span>}
      </p>
      <div className="flex w-full flex-col items-center" data-cy="upload">
        {!file && (
          <label
            htmlFor="dropzone-file"
            className="flex h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center py-4">
              <LucideUpload className="mb-2 text-3xl text-cutie-purple-200" />
              <p className="text-sm font-semibold text-gray-500">
                Upload from my computer
              </p>
            </div>
            <div className="w-full" data-cy="upload-input">
              <input
                id="dropzone-file"
                onChange={handleInput}
                type="file"
                className="hidden"
                accept={getType(types)}
              />
            </div>
          </label>
        )}
        {file && (
          <div
            className="my-2 flex w-full items-center justify-between border-b-2 border-white bg-[#5661C6] px-2 py-2"
            data-cy="upload-success"
          >
            <div className="flex items-center">
              {file.type.split("/")[0] === "image" ? (
                <LucideImage className="mr-2 text-xl" />
              ) : (
                <FileText className="mr-2 text-xl" />
              )}
              {file.title}
            </div>
            <div className="flex flex-row">
              {file.type.split("/")[0] === "image" && (
                <Eye
                  onClick={() => setShowModal(true)}
                  className="text-whte mr-2 hover:cursor-pointer hover:text-cutie-violet"
                />
              )}

              <X
                className="text-white hover:cursor-pointer hover:text-cutie-violet"
                onClick={() => setFile(null)}
                data-cy="upload-cancel"
              />
            </div>
          </div>
        )}

        {showModal && (
          <Dialog
            open={showModal}
            onOpenChange={(value) => setShowModal(value)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{user.name}&apos;s Picture</DialogTitle>
              </DialogHeader>
              <embed
                fill={true}
                className="h-full w-full object-cover"
                src={file.src}
                alt="Photo of the Judge"
                data-cy="modal-image"
              />
            </DialogContent>
          </Dialog>
        )}
      </div>
      {toaster.type === "error"
        ? uploading && "UPLOADING ..."
        : uploading && "UPLOAD FAILED"}
    </div>
  );
};

export default Upload;
