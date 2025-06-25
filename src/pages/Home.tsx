import React from 'react';
import CountUp from 'react-countup';
import Header from '../components/Header';

const stats = [
  { count: 50, label: "Overworked Nurses", link: "https://example.com/article1" },
  { count: 120, label: "Hospitals Contacted", link: "https://example.com/article2" },
  { count: 15, label: "Ongoing Trials", link: "https://example.com/article3" },
  { count: 98, label: "Positive Feedback %", link: "https://example.com/article4" },
];
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060220] text-[#f5f4f5] font-sans">
      {/* Navbar */}
      <Header />

      {/* Logo/Animation + Slider */}
      <main className="flex flex-col items-center py-12 px-4">
        <div className=" ">
          <video
                src="src\assets\output1.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-[900px] h-auto mx-auto"
             />
        </div>

        {/* Statistic Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-9 mt-12 max-w-[1200px] w-full mx-auto px-4">
          {stats.map((stat, i) => (
            <a
              key={i}
              href={stat.link}
              target="_blank"    // opens in a new tab
              rel="noopener noreferrer" // security best practice
              className="text-center px-6 py-8 border-2 border-[#f5f4f5] rounded-xl hover:scale-105 transition block"
            >
              <p className="text-4xl font-bold text-[#f5f4f5]">
                <CountUp end={stat.count} duration={3} />
              </p>
              <p className="text-sm mt-2 text-[#f5f4f5]">{stat.label}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
