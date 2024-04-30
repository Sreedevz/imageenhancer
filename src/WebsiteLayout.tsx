import React from 'react';
import './index.css'; // Import CSS file for styling
import ImageInput from './ImageInput';
 

class WebsiteLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          {/* Content for the sidebar */}
          <h2>Image Denoizer</h2>
          <p>Enhancing Visual Clarity through Advanced Noise Reduction Techniques</p>
          <br></br>
          <h3 class="w-full">Brightness</h3>
          <input className="w-full" defaultValue="0" id="brightness" max="100" min="-100" type="range" />
          <h3 class="w-full">Contrast</h3>
          <input className="w-full" defaultValue="0" id="contrast" max="100" min="-100" type="range" />
          <h3 class="w-full">Saturation</h3>
          <input className="w-full" defaultValue="0" id="saturation" max="100" min="-100" type="range" />
        <div>
            <br></br>
            <h3>
            <input className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>   Greyscale
            </h3>
            <h3>
            <input className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500" type="checkbox" />  Sepia
            </h3>
            <h3>
            <input className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500" type="checkbox" />  Invert
            </h3>
        </div>
        <div className="Button">
            <br></br>
            <button onclick="">Download</button>
        </div>
        </div>
        <div className="main-content">
          {/* Main content of the website */}
          <h1>Upload your image here </h1>
          <ImageInput />
        </div>
      </div>
    );
  }
}


export default WebsiteLayout;
