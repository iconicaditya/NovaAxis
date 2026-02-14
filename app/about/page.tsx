'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  Shield,
  Lightbulb,
  Users,
  HeadphonesIcon,
  CheckCircle2,
  Award,
  Target,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#EDF3F4] via-white to-[#EDF3F4]">
        {/* About NovaAxis Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1B4376] to-[#2090C3] bg-clip-text text-transparent">
                  About NovaAxis
                </h2>
                <p className="text-lg text-[#4B6E8D] mb-6 leading-relaxed">
                  NovaAxis is a cutting-edge IT company specializing in delivering premium digital solutions that empower businesses to thrive in the modern digital landscape. We combine innovative technology with creative design to build exceptional web experiences.
                </p>
                <p className="text-lg text-[#4B6E8D] mb-6 leading-relaxed">
                  Our team of passionate experts brings together years of experience in web development, design, marketing, and SEO to deliver comprehensive solutions that drive measurable results.
                </p>
                <p className="text-lg text-[#4B6E8D] mb-6 leading-relaxed">
                  Since our inception, we've helped over 250 clients worldwide transform their digital presence, delivering 500+ successful projects across various industries. Our commitment to excellence and innovation has made us a trusted partner for businesses looking to grow in the digital age.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm border border-[#2090C3]/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                    <Award className="w-8 h-8 text-[#1B70A3] mb-2" />
                    <h3 className="font-bold text-[#1B4376]">Award Winning</h3>
                    <p className="text-sm text-[#4B6E8D]">Recognized excellence</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm border border-[#2090C3]/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                    <Target className="w-8 h-8 text-[#1B70A3] mb-2" />
                    <h3 className="font-bold text-[#1B4376]">Client Focused</h3>
                    <p className="text-sm text-[#4B6E8D]">Your success first</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4376]/20 to-[#2090C3]/20 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/office.jpg"
                    alt="NovaAxis Office"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose NovaAxis Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1B4376] to-[#2090C3] bg-clip-text text-transparent">
                Why Choose NovaAxis
              </h2>
              <p className="text-xl text-[#4B6E8D] max-w-2xl mx-auto">
                We deliver excellence through innovation, expertise, and dedication
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1B4376] to-[#1B70A3] rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B4376] mb-2">Lightning Fast Delivery</h3>
                  <p className="text-[#4B6E8D]">Agile workflows ensure your projects are delivered on time, every time.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1B70A3] to-[#2090C3] rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B4376] mb-2">Enterprise Security</h3>
                  <p className="text-[#4B6E8D]">Bank-level security measures protect your data and your customers.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1B4376] to-[#1B70A3] rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B4376] mb-2">Innovative Solutions</h3>
                  <p className="text-[#4B6E8D]">Cutting-edge technology and creative thinking drive our approach.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1B70A3] to-[#2090C3] rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B4376] mb-2">Expert Team</h3>
                  <p className="text-[#4B6E8D]">Seasoned professionals with deep industry knowledge and expertise.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1B4376] to-[#1B70A3] rounded-lg flex items-center justify-center">
                  <HeadphonesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B4376] mb-2">24/7 Support</h3>
                  <p className="text-[#4B6E8D]">Round-the-clock assistance ensures you're never left without help.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1B70A3] to-[#2090C3] rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B4376] mb-2">Quality Guaranteed</h3>
                  <p className="text-[#4B6E8D]">Rigorous testing and quality assurance on every project we deliver.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1B4376] via-[#1B70A3] to-[#2090C3] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-[#EDF3F4] mb-10">
              Let's collaborate to create something extraordinary. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="group px-8 py-4 bg-white text-[#1B4376] font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1B4376] transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
