import { useState, useEffect } from "react";
import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.jpg";
import img5 from "./assets/birds1.jpg";
import img6 from "./assets/birds2.jpg";
import img7 from "./assets/birds3.jpg";
import img8 from "./assets/nature.jpeg";

function App() {
  const [image, setImage] = useState(img1); // Default background image

  useEffect(() => {
    document.body.style.background = `url(${image}) center/cover no-repeat fixed`;
  }, [image]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-2xl">
          
          {/* Thumbnail Buttons (Padding Removed) */}
          <button onClick={() => setImage(img1)} className="w-20 h-20 border-2 border-gray-500 p-0 rounded-lg hover:scale-110 transition">
            <img src={img1} alt="Image 1" className="w-full h-full object-cover rounded-none" />
          </button>

          <button onClick={() => setImage(img2)} className="w-20 h-20 border-2 border-gray-500 p-0 rounded-lg hover:scale-110 transition">
            <img src={img2} alt="Image 2" className="w-full h-full object-cover rounded-none" />
          </button>

          <button onClick={() => setImage(img3)} className="w-20 h-20 border-2 border-gray-500 p-0 rounded-lg hover:scale-110 transition">
            <img src={img3} alt="Image 3" className="w-full h-full object-cover rounded-none" />
          </button>
          
          <button onClick={() => setImage(img4)} className="w-20 h-20 border-2 border-gray-500 p-0 rounded-lg hover:scale-110 transition">
            <img src={img4} alt="Image 3" className="w-full h-full object-cover rounded-none" />
          </button>

          <button onClick={() => setImage(img5)} className="w-20 h-20 border-2 border-gray-500 p-0 rounded-lg hover:scale-110 transition">
            <img src={img5} alt="Image 3" className="w-full h-full object-cover rounded-none" />
          </button>

          <button onClick={() => setImage(img6)} className="w-20 h-20 border-2 border-gray-500 p-0 rounded-lg hover:scale-110 transition">
            <img src={img6} alt="Image 3" className="w-full h-full object-cover rounded-none" />
          </button>

          <button onClick={() => setImage(img7)} className="w-20 h-20 border-2 border-gray-500 p-0 rounded-lg hover:scale-110 transition">
            <img src={img7} alt="Image 3" className="w-full h-full object-cover rounded-none" />
          </button>

          <button onClick={() => setImage(img8)} className="w-20 h-20 border-2 border-gray-500 p-0 rounded-lg hover:scale-110 transition">
            <img src={img8} alt="Image 3" className="w-full h-full object-cover rounded-none" />
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
