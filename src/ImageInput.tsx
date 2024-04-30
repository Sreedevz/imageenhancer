import React, { useState } from 'react';
import axios from 'axios'; // You may need to install axios for handling HTTP requests

function ImageInput() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    
    // Generate a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Replace 'uploadUrl' with the URL provided by your backend developer
      const response = await axios.post('uploadUrl', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded successfully:', response.data);
      
      // Handle response from backend denoising process
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageInput;

