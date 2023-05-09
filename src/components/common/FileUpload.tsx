import axios from 'axios';
import * as React from 'react';
import AvatarEditor from 'react-avatar-editor';

const FileUpload = () => {
  const [image, setImage] = React.useState('');
  const [editor, setEditor] = React.useState<any>(null);
  const [croppedImage, setCroppedImage] = React.useState('');
  const [error, setError] = React.useState('');
  const [fileName, setFileName] = React.useState('');
  const [showCropper, setShowCropper] = React.useState(false);

  const onFileChange = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      setShowCropper(true);
      const file = event.target.files[0];
      setFileName(file.name);
      const reader: any = new FileReader();
      reader.addEventListener('load', () => {
        setImage(reader.result);
      });
      reader.readAsDataURL(file);
    }
  };

  const onCrop = () => {
    if (!editor) {
      setError('Editor not initialized');
      return;
    }
    setShowCropper(false);
    const canvas = editor.getImageScaledToCanvas().toDataURL();

    setCroppedImage(canvas);
  };

  const base64StringToFile = (base64String: string, fileName: string) => {
    const arr: any = base64String.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  };

  const handleUpload = async () => {
    if (!croppedImage) {
      return;
    }

    const imageFile = base64StringToFile(croppedImage, fileName);
    console.log(imageFile);

    const formData = new FormData();
    formData.append('image', imageFile);

    const response: any = axios.post('http://localhost:8080/upload-image/', formData);

    console.log(response);
    // const url = await response.text();

    // console.log(url);
  };

  return (
    <>
      <div>
        <h1>Add Image</h1>
        <input type="file" onChange={onFileChange} />

        {image && showCropper && (
          <div className="image__container">
            <AvatarEditor
              ref={(ref) => setEditor(ref)}
              image={image}
              width={250}
              height={250}
              border={50}
              borderRadius={0}
              color={[0, 0, 0, 0.6]}
              scale={1}
              rotate={0}
              className="image__cropper"
            />
            <button onClick={onCrop} className="btn__primary image__cropBtn">
              Crop Image
            </button>
          </div>
        )}
        {croppedImage && (
          <>
            <img src={croppedImage} alt="Cropped" />
            <button onClick={handleUpload}>upload</button>
          </>
        )}
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default FileUpload;
