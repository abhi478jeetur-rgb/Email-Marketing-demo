import Step from './components/Step';
import Divider from './components/Divider';
import PrimaryButton from './components/PrimaryButton';
import SolidButton from './components/SolidButton';
import LazyVideo from './components/LazyVideo';
import { ArrowRight, Facebook, Twitter, Instagram, Youtube, Linkedin, Music2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 font-sans">
      <div className="max-w-[640px] mx-auto shadow-2xl overflow-hidden ring-1 ring-white/5">
        <div className="bg-[#111111] text-[#F2F2F2]">
          {/* Demo Banner */}
          <div className="bg-black text-white text-center py-3 px-4 text-sm font-medium border-b border-white/10">
            This is a demo website. If you want a premium landing page like this, visit our agency at{' '}
            <a
              href="https://www.newaihubber.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#DCFF00] transition-colors"
            >
              HubberWeb
            </a>
            .
          </div>
          {/* Section 1: Hero */}
          <section className="relative w-full overflow-hidden" style={{ aspectRatio: '640 / 820' }}>
            <LazyVideo
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_064822_f120e48a-d545-45dd-a02d-facb07829888.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
            <div className="relative z-10 h-full flex flex-col items-center text-center px-6 pt-12 pb-10">
              <div className="text-white">
                <img src="/logo.png" alt="HubberWeb Logo" className="w-16 h-16 md:w-20 md:h-20 mb-4 object-contain mx-auto" />
                <h1 className="text-xl md:text-3xl leading-[0.95] tracking-tight font-medium" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  HubberWeb
                </h1>
                <p className="text-xs md:text-sm tracking-[0.22em] font-medium mt-1">
                  CERTIFICATES
                </p>
              </div>
              <div className="mt-20 md:mt-40 text-white text-xs md:text-sm tracking-[0.28em] font-semibold">
                AI LEADERSHIP CERTIFICATES NOW OPEN FOR ENROLLMENT
              </div>
              <div className="flex-1 flex items-center">
                <h1 className="text-white text-3xl md:text-6xl leading-[1.02] tracking-tight max-w-[560px]" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Learn to lead AI
                  and unlock new value
                </h1>
              </div>
              <div className="mt-10">
                <button className="inline-flex items-center gap-3 bg-[#D8F90A] text-[#1E1E1E] font-semibold rounded-full px-6 md:px-8 py-3 md:py-4 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200">
                  Enroll Today & Start Your AI Journey
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </section>

          {/* Section 2: Intro copy + CTA */}
          <section className="px-4 md:px-20 pb-8 pt-4">
            <p className="text-center text-base md:text-lg leading-[1.55]">
              Developed in collaboration with Microsoft experts, this AI leadership training certificate equips managers, executives, and entrepreneurs with the toolkit to lead AI transformation across organizations. Over 500 leaders have transformed their organizations with this program, with 90% reporting measurable productivity gains within 3 months. Whether you're new to AI or an experienced leader, learn to spot opportunities, launch pilots, and scale adoption responsibly.
            </p>
            <div className="flex justify-center pb-14">
              <PrimaryButton label="Get Started with AI Leadership Training" />
            </div>
            <Divider />
          </section>

          {/* Section 3: Transform how you lead with AI */}
          <section>
            <div className="px-4 md:px-9 pb-8">
              <h2 className="text-center text-3xl md:text-5xl leading-[1.05] tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Master AI Leadership & Transformation
              </h2>
            </div>
            <div className="px-4 md:px-10 pb-10">
              <div className="block overflow-hidden rounded-[14px] group">
                <LazyVideo
                  className="w-full h-64 md:h-96 object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
                />
              </div>
            </div>
            <div className="px-4 md:px-20 pb-10">
              <div className="max-w-[489px] mx-auto">
                <Step number={1}>
                  Identify AI opportunities that boost productivity instantly.
                </Step>
                <Step number={2}>
                  Build structures that support your team so AI efficiencies multiply across the organization.
                </Step>
                <Step number={3}>
                  Develop leadership skills to drive AI culture change.
                </Step>
                <Step number={4}>
                  Get frameworks to deliver AI pilots that prove impact fast and build credibility with measurable results.
                </Step>
              </div>
            </div>
            <div className="flex justify-center pb-14">
              <SolidButton label="Enroll Today & Start Your AI Journey – Limited Seats" />
            </div>
            <Divider />
          </section>

          {/* Section 4: Build your AI transformation roadmap */}
          <section>
            <div className="pb-7 px-4 md:px-9">
              <h2 className="text-center text-3xl md:text-5xl leading-[1.05] tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Build your AI
                transformation roadmap
              </h2>
            </div>
            <div className="px-4 md:px-10 pb-10">
              <div className="block overflow-hidden rounded-[14px] group">
                <LazyVideo
                  className="w-full h-64 md:h-96 object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4"
                />
              </div>
            </div>
            <div className="px-4 md:px-20 pb-8">
              <p className="text-center text-base md:text-lg leading-[1.55]">
                Complete this enterprise AI adoption course with a personal AI Transformation Roadmap: your strategic playbook for pilot proposals, data governance, and scalable implementation. Equip yourself to secure executive buy-in, guide enterprise-wide rollout, and lead responsible AI transformation.
              </p>
            </div>
            <div className="flex justify-center pb-14">
              <SolidButton label="Learn More About AI Transformation Roadmap" />
            </div>
          </section>

          {/* Section 5: Lime CTA card */}
          <section className="px-4 md:px-14 pb-12">
            <div className="bg-[#D8F90A] rounded-[10px] px-4 md:px-8 py-12 text-center">
              <h2 className="text-[#1E1E1E] text-3xl md:text-5xl leading-[1.02] tracking-tight mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Ready to lead AI
                at work?
              </h2>
              <p className="text-[#1E1E1E] text-base md:text-lg leading-[1.5] mb-8 px-4">
                Enroll today and become the AI leader your organization needs – limited seats available.
              </p>
              <div className="flex justify-center">
                <PrimaryButton label="Enroll Today & Start Your AI Journey" />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="px-4 md:px-20 py-16 bg-[#0A0A0A] border-t border-white/5">
            <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-8 text-center" style={{ fontFamily: "'Instrument Serif', serif" }}>
              About This Demo
            </h2>
            <div className="max-w-[500px] mx-auto space-y-6 text-center">
              <p className="text-base md:text-lg leading-[1.6] text-[#A1A1AA]">
                This is a <span className="text-white font-semibold">premium demo website</span> created by <span className="text-[#D8F90A]">HubberWeb</span>. It showcases our expertise in building high-converting landing pages for coaches, consultants, and course creators.
              </p>
              <p className="text-base md:text-lg leading-[1.6] text-[#A1A1AA]">
                Our goal is to demonstrate how a well-designed, AI-enhanced presence can transform your business. This page is purely for demonstration and is intended to drive traffic to our main agency.
              </p>
              <div className="pt-4">
                <a
                  href="https://www.newaihubber.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D8F90A] hover:underline font-medium text-lg"
                >
                  Get a similar demo for your brand <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Privacy Section */}
          <section id="privacy" className="px-4 md:px-20 py-16 bg-[#111111] border-t border-white/5">
            <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-8 text-center" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Privacy & Trust
            </h2>
            <div className="max-w-[500px] mx-auto text-center">
              <p className="text-base md:text-lg leading-[1.6] text-[#A1A1AA] mb-6">
                Your trust is our priority. As this is a demonstration site, <span className="text-white">we do not collect, store, or sell any personal data</span> from your interactions here. 
              </p>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 inline-block text-left">
                <h3 className="text-[#D8F90A] font-semibold mb-2">No-Data-Selling Policy</h3>
                <p className="text-sm text-[#A1A1AA]">
                  We believe in transparency. Any information provided in this demo is used only to illustrate the user experience and is never persisted or shared.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#080808] text-white pt-12 px-4 md:px-10 text-center border-t border-white/5">
            <div className="pb-8 flex flex-col items-center justify-center gap-4">
              <img src="/logo.png" alt="HubberWeb Logo" className="w-12 h-12" />
              <a href="https://www.newaihubber.com/" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-[#DCFF00] transition-colors">
                HubberWeb
              </a>
            </div>
            <p className="text-xs md:text-sm text-[#83837D] leading-[1.5] pb-8">
              Microsoft is a collaborator on this specific course. Microsoft does not endorse
              HubberWeb generally or other HubberWeb products.
            </p>
            <Divider />
            <div className="flex justify-center gap-5 pb-5">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors">
                <Facebook className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors">
                <Twitter className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors">
                <Youtube className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors">
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors">
                <Music2 className="w-[18px] h-[18px]" />
              </a>
            </div>
            <p className="text-[10px] text-[#83837D] pb-4 leading-[1.6]">
              If you no longer want to receive updates on Design Rocket Certificates,
              you can unsubscribe at any time by clicking "unsubscribe" below.
            </p>
            <div className="text-xs md:text-sm pb-3 space-x-2">
              <a href="#about" className="text-[#8F8E88] hover:underline">About Demo</a>
              <span className="text-[#8F8E88]">|</span>
              <a href="#privacy" className="text-[#8F8E88] hover:underline">Privacy</a>
              <span className="text-[#8F8E88]">|</span>
              <a href="https://www.newaihubber.com/" target="_blank" rel="noopener noreferrer" className="text-[#8F8E88] hover:underline">Main Site</a>
              <span className="text-[#8F8E88]">|</span>
              <a href="#" className="text-[#8F8E88] hover:underline">Unsubscribe</a>
            </div>
            <div className="pb-10">
              <a href="#" className="text-xs md:text-sm text-white/80 hover:text-white inline-block">
                ©2026 HubberWeb, 660 4th Street #443, San Francisco, CA 94107 USA
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
