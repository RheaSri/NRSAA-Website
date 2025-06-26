import React, { useState } from "react";
import Header from "../components/Header";
import outputVideo1 from '../assets/output1.webm';
import outputVideo2 from '../assets/platform.webm';
import device_photo from '../assets/platform.png';

const uses = [
  { label: "Vital Tracking", src: outputVideo1 },
  { label: "Wireless Transmission", src: outputVideo2 },
  { label: "Patient Mobility", src: outputVideo1 },
];

const Platform: React.FC = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="min-h-screen bg-[#060220] text-[#f5f4f5] font-sans">
      <Header />
      <main className="flex flex-col items-center py-12 px-4 pt-28">
        <div>
          <h1 className="text-4xl tracking-wider mx-10 font-normal sticky top-[60px] sm:top-[80px] bg-[#060220] z-40 text-center py-4">
            NRSAA PLATFORM
          </h1>

          {/* Video-to-Image with Fade */}
          <div className="relative ml-auto mr-auto px-7 py-7">
            {/* Video */}
            <video
              src={outputVideo2}
              autoPlay
              muted
              playsInline
              onEnded={() => setVideoEnded(true)}
              className={`w-full max-w-[1100px] ml-auto mr-auto px-4 transition-opacity duration-[800ms] ${
                videoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            />

            {/* Centered Image (appears after video ends) */}
            <img
              src={device_photo}
              alt="Device"
              className={`max-w-[300px] md:max-w-[650px] w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f5f4f5] transition-opacity duration-700 ${
                videoEnded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 mt-12 max-w-[1200px] w-full mx-auto px-4">
            {uses.map((use, i) => (
              <a key={i} className="text-center px-6 py-8">
                <p className="text-center font-normal mt-2 px-5 py-5 text-[#f5f4f5] text-2xl border-2 border-[#f5f4f5] rounded-xl">
                  {use.label}
                </p>
                <video
                  src={use.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[350px] h-[200px]"
                />
              </a>
            ))}
          </div>

          <p className="mx-10 px-11 text-center text-2xl py-8 bg-opacity-10 bg-[#0263a0] rounded-xl">
            The NRSAA Monitor is designed to non-invasively measure vital signs such as heart rate, oxygen saturation,
            and ECG data using a compact, wearable sensor module. This lightweight device is equipped with advanced biosensors
            and is capable of continuously capturing patient vitals with high accuracy. Once collected, the data is wirelessly
            transmitted in real-time to the central platform via Bluetooth or Wi-Fi, eliminating the need for cumbersome wired setups.
            Its small form factor allows patients to move freely, promoting mobility and helping prevent conditions like muscle atrophy,
            which often result from prolonged immobility in traditional monitoring environments. By ensuring constant monitoring without restricting movement,
            NRSAA bridges the gap between comfort and clinical precision in healthcare.
          </p>

        </div>
      </main>
    </div>
  );
};

export default Platform;
