import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import outputVideo2 from '../assets/monitor.webm';

const ecgDataSets = {
  arrhythmia: Array.from({ length: 100 }, (_, i) => ({ x: i, y: Math.sin(i / 5) + (Math.random() - 0.5) * 0.2 })),
  tachycardia: Array.from({ length: 100 }, (_, i) => ({ x: i, y: Math.sin(i / 2) + (Math.random() - 0.5) * 0.2 })),
  bradycardia: Array.from({ length: 100 }, (_, i) => ({ x: i, y: Math.sin(i / 10) + (Math.random() - 0.5) * 0.2 })),
};

type DiseaseType = keyof typeof ecgDataSets;

const Ai: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType>("arrhythmia");
  const [data, setData] = useState(ecgDataSets[selectedDisease]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const next = [...prev.slice(1), { x: prev[prev.length - 1].x + 1, y: ecgDataSets[selectedDisease][Math.floor(Math.random() * 100)].y }];
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [selectedDisease]);

  return (
    <div className="min-h-screen bg-[#060220] text-[#f5f4f5] font-sans">
      <Header />
      <main className="flex flex-col items-center py-12 px-4">
        <div>
          <h1 className="text-3xl tracking-wider mx-10 font-normal">
            NRSAA AI
          </h1>

          {/* Video-to-Image with Fade */}
          <div className="relative ml-auto mr-auto px-7 py-7">
            {/* Video */}
            <video
              src={outputVideo2}
              autoPlay
              muted
              playsInline
              className={`w-full max-w-[900px] ml-auto mr-auto px-4`}
            />

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

       {/* ECG Section */}
          <div className="flex flex-col items-center justify-center w-full mt-12">
            <div className="flex flex-wrap justify-center gap-4 my-5">
              {(Object.keys(ecgDataSets) as DiseaseType[]).map((disease) => (
                <button
                  key={disease}
                  onClick={() => {
                    setSelectedDisease(disease);
                    setData(ecgDataSets[disease]);
                  }}
                  className={`px-6 py-2 border-2 rounded-xl font-semibold transition hover:bg-[#060220] hover:text-[#0263a0] ${
                    selectedDisease === disease
                      ? "bg-[#060220] text-[#0263a0]"
                      : "border-[#f5f4f5] text-[#f5f4f5]"
                  }`}
                >
                  {disease.charAt(0).toUpperCase() + disease.slice(1)}
                </button>
              ))}
            </div>

            <div className="w-full max-w-4xl h-64 bg-[#060220] rounded-xl p-4 border-2 border-[#f5f4f5] ">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="x" hide />
                  <YAxis domain={[-2, 2]} hide />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="y"
                    stroke="#0263a0"
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Ai;
