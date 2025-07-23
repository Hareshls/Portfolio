import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ParticlesBackground from '@/components/ParticlesBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { setupScrollReveal } from '@/utils/scrollReveal';

const Index: React.FC = () => {
  const location = useLocation();

  // Handle scroll reveal animation setup
  useEffect(() => {
    document.title = "Haresh L S - UI/UX & Graphic Designer";

    const observer = setupScrollReveal();

    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Handle scroll to section if coming from another page
  useEffect(() => {
    const section = location.state?.scrollTo;
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <div id="Home"><HeroSection /></div>
      <div id="About"><AboutSection /></div>
      <div id="Skills"><SkillsSection /></div>
      <div id="Projects"><ProjectsSection /></div>
      <div id="Contact"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default Index;
