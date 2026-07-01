import React from 'react';
import { useState } from 'react';
import ProjectComplete from './components/ProjectComplete';
import ProfileCard from './components/ProfileCard';
import Headline from './components/Headline';
import Testimonial from './components/Testimonial';
import ExperienceCard from './components/ExperienceCard';
import SkillsCard from './components/SkillsCard';
import TotalFollowers from './components/TotalFollowers';
import ContactInfo from './components/ContactInfo';
import ImageCard from './components/ImageCard';
import SkillsModel from './components/SkillsModel';



export default function Portfolio() {
  const [isSkillsModelOpen, setIsSkillsModelOpen] = useState(false);

  const openSkillsModel = () => setIsSkillsModelOpen(true);
  const closeSkillsModel = () => setIsSkillsModelOpen(false);
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 auto-rows-max">
            {/* Left Column - Project Complete & Followers */}
            <div className="md:col-span-1 space-y-3">
              <ProjectComplete />
              <TotalFollowers />
            </div>

            {/* Center Column - Profile & Experience */}
            <div className="md:col-span-2 space-y-3">
              <div className="grid grid-cols-3 sm:grid-cols-2 gap-4">
                <ProfileCard />
                <Headline />

              </div>
              <div className='md:col-span-2 space-y-3  '>

                <ImageCard />

              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ExperienceCard />
                <SkillsCard onCardClick={openSkillsModel} />

              </div>
            </div>

            {/* Right Column - Testimonial & Contact */}
            <div className="md:col-span-1 space-y-3">
              <Testimonial />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <SkillsModel isOpen={isSkillsModelOpen} onClose={closeSkillsModel} />
    </>
  );
}
