'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-12">
      {/* Modern Dot-Field Background */}
      <div className="absolute inset-0 bg-[#1f262b]"></div>
      <div className="hero-dotfield hero-dotfield--full" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/30 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading with Staggered Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 sm:mb-6 drop-shadow-2xl">
            <span
              className={`inline-block transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Transforming
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-1000 bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent drop-shadow-2xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Ideas Into Reality
            </span>
          </h1>

          {/* Subtitle with Fade Animation */}
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-5 sm:mb-6 transition-all duration-1000 drop-shadow-xl ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Pioneering next-generation technology solutions that empower
            businesses to thrive in the digital era
          </p>

          {/* Animated Features */}
          <div
            className={`flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-10 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="flex items-center space-x-2 text-white drop-shadow-lg">
              <div className="w-2 h-2 bg-[#00b4d8] rounded-full animate-pulse"></div>
              <span className="text-sm sm:text-base font-medium">AI-Powered Solutions</span>
            </div>
            <div className="flex items-center space-x-2 text-white drop-shadow-lg">
              <div className="w-2 h-2 bg-[#0077b6] rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
              <span className="text-sm sm:text-base font-medium">Cloud Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2 text-white drop-shadow-lg">
              <div className="w-2 h-2 bg-[#00b4d8] rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
              <span className="text-sm sm:text-base font-medium">Cybersecurity Excellence</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 w-full ${
              isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <button className="group relative w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white font-semibold rounded-none overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00b4d8]/50">
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white font-semibold rounded-none transition-all duration-300 hover:bg-white hover:text-[#0077b6] hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Floating Stats */}
          <div
            className={`mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-xl">
                <span className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent">
                  500+
                </span>
              </div>
              <p className="text-white text-sm sm:text-base drop-shadow-lg">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-xl">
                <span className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent">
                  98%
                </span>
              </div>
              <p className="text-white text-sm sm:text-base drop-shadow-lg">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-xl">
                <span className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent">
                  24/7
                </span>
              </div>
              <p className="text-white text-sm sm:text-base drop-shadow-lg">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
