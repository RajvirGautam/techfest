import React from 'react';
import { sponsors } from '../data';

export default function SponsorsMarquee() {
  const allSponsors = [...sponsors, ...sponsors]; 

  return (
    <div className="py-12 bg-light-bg dark:bg-dark-bg">
       <h2 className="text-3xl font-bold text-center mb-10">Our Sponsors</h2>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee">
          {allSponsors.map((sponsor, index) => (
            <li key={index}>
              <img src={sponsor.logo} alt={sponsor.name} className="h-12 filter grayscale hover:grayscale-0 transition-all duration-300" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}