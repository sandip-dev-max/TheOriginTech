import React from "react";
import "./ContentMarketingServiceListDetail.css";
import Navbar from "../../Navbar/Navbar";
import Form from "../../Form/Form";
import Background from "../../Background/Background";
import WhatsappAndGoToTop from "../../WhatsappAndGoToTop/WhatsappAndGoToTop";
import Footer from "../../Footer/Footer";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

import { SiGoogleanalytics, SiHootsuite, SiBuffer } from "react-icons/si";
import { LuSprout } from "react-icons/lu";

import {
  SiAdobe,
  SiCanva,
  SiFigma,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const ContentMarketingServiceListDetail = () => {
  return (
    <>
      <Navbar />
      <div className="socialMediaServiceListDetailContainer">
        <div className="socialMediaHeadContainer">
          <h1 className="socialMediaHero-title">Content Marketing</h1>
          <p className="socialMediaHero-description">
            Transform your brand's digital presence with our comprehensive
            content marketing services. We create data-driven strategies that
            build authentic connections, engage your audience, and drive
            measurable business results across all major platforms.
          </p>
          <div className="socialMediaHero-image">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="socialMediaBgGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#0f172a", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#1e293b", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#334155", stopOpacity: 1 }}
                  />
                </linearGradient>
                <linearGradient
                  id="socialMediaGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#06b6d4", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#8b5cf6", stopOpacity: 1 }}
                  />
                </linearGradient>
                <filter id="socialMediaGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect
                width="600"
                height="300"
                fill="url(#socialMediaBgGradient)"
              />

              <circle cx="100" cy="80" r="3" fill="#06b6d4" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.8;0.3;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="480" cy="220" r="2" fill="#ec4899" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.6;0.2;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="300" cy="60" r="4" fill="#10b981" opacity="0.7">
                <animate
                  attributeName="opacity"
                  values="0.7;0.3;0.7"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>

              <rect
                x="80"
                y="120"
                width="180"
                height="140"
                rx="15"
                fill="rgba(31, 41, 55, 0.9)"
                stroke="url(#socialMediaGradient)"
                stroke-width="2"
              />
              <circle cx="110" cy="145" r="15" fill="#06b6d4" />
              <rect
                x="135"
                y="140"
                width="80"
                height="8"
                rx="4"
                fill="#ffffff"
              />
              <rect
                x="135"
                y="155"
                width="60"
                height="6"
                rx="3"
                fill="#9ca3af"
              />
              <rect
                x="90"
                y="175"
                width="150"
                height="50"
                rx="8"
                fill="#1f2937"
              />
              <rect
                x="100"
                y="185"
                width="130"
                height="4"
                rx="2"
                fill="#6b7280"
              />
              <rect
                x="100"
                y="195"
                width="100"
                height="4"
                rx="2"
                fill="#6b7280"
              />
              <rect
                x="100"
                y="205"
                width="110"
                height="4"
                rx="2"
                fill="#6b7280"
              />

              <g transform="translate(90, 235)">
                <circle cx="15" cy="10" r="8" fill="rgba(239, 68, 68, 0.3)" />
                <text
                  x="15"
                  y="14"
                  fill="#ef4444"
                  font-size="10"
                  text-anchor="middle"
                >
                  ♥
                </text>
                <circle cx="45" cy="10" r="8" fill="rgba(34, 197, 94, 0.3)" />
                <text
                  x="45"
                  y="14"
                  fill="#22c55e"
                  font-size="8"
                  text-anchor="middle"
                >
                  ↗
                </text>
                <circle cx="75" cy="10" r="8" fill="rgba(59, 130, 246, 0.3)" />
                <text
                  x="75"
                  y="14"
                  fill="#3b82f6"
                  font-size="8"
                  text-anchor="middle"
                >
                  💬
                </text>
              </g>

              <rect
                x="350"
                y="120"
                width="180"
                height="140"
                rx="15"
                fill="rgba(31, 41, 55, 0.9)"
                stroke="url(#socialMediaGradient)"
                stroke-width="2"
              />
              <text
                x="440"
                y="145"
                fill="#06b6d4"
                font-family="Arial"
                font-size="14"
                text-anchor="middle"
              >
                Analytics
              </text>

              <rect
                x="370"
                y="200"
                width="15"
                height="40"
                rx="2"
                fill="#06b6d4"
              />
              <rect
                x="390"
                y="180"
                width="15"
                height="60"
                rx="2"
                fill="#3b82f6"
              />
              <rect
                x="410"
                y="170"
                width="15"
                height="70"
                rx="2"
                fill="#8b5cf6"
              />
              <rect
                x="430"
                y="160"
                width="15"
                height="80"
                rx="2"
                fill="#ec4899"
              />
              <rect
                x="450"
                y="185"
                width="15"
                height="55"
                rx="2"
                fill="#10b981"
              />
              <rect
                x="470"
                y="195"
                width="15"
                height="45"
                rx="2"
                fill="#f59e0b"
              />
              <rect
                x="490"
                y="175"
                width="15"
                height="65"
                rx="2"
                fill="#ef4444"
              />

              <path
                d="M260 190 Q300 140 350 190"
                stroke="url(#socialMediaGradient)"
                stroke-width="3"
                fill="none"
                opacity="0.6"
                filter="url(#socialMediaGlow)"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,100;50,50;100,0;0,100"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>

              <g transform="translate(50, 50)">
                <rect
                  width="60"
                  height="60"
                  rx="12"
                  fill="rgba(59, 130, 246, 0.2)"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <text
                  x="30"
                  y="38"
                  fill="#3b82f6"
                  font-family="Arial"
                  font-size="8"
                  text-anchor="middle"
                >
                  Facebook
                </text>
              </g>

              <g transform="translate(490, 50)">
                <rect
                  width="60"
                  height="60"
                  rx="12"
                  fill="rgba(236, 72, 153, 0.2)"
                  stroke="#ec4899"
                  stroke-width="2"
                />
                <text
                  x="30"
                  y="38"
                  fill="#ec4899"
                  font-family="Arial"
                  font-size="8"
                  text-anchor="middle"
                >
                  Instagram
                </text>
              </g>

              <g transform="translate(270, 40)">
                <rect
                  width="60"
                  height="60"
                  rx="12"
                  fill="rgba(6, 182, 212, 0.2)"
                  stroke="#06b6d4"
                  stroke-width="2"
                />
                <text
                  x="30"
                  y="38"
                  fill="#06b6d4"
                  font-family="Arial"
                  font-size="8"
                  text-anchor="middle"
                >
                  Twitter
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="socialMediaContainer">
        <div className="socialMediaGrid socialMediaGrid-3">
          <div className="socialMediaCard">
            <div className="socialMediaCard-icon socialMediaIcon-blue">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <h3 className="socialMediaCard-title">Social Media Strategy</h3>
            <p className="socialMediaCard-description">
              Comprehensive social media strategies tailored to your brand's
              unique voice, goals, and target audience across all major
              platforms.
            </p>
            <ul className="socialMediaFeatures">
              <li>Platform-Specific Strategies</li>
              <li>Content Calendar Planning</li>
              <li>Audience Analysis</li>
              <li>Brand Voice Development</li>
            </ul>
          </div>

          <div className="socialMediaCard">
            <div className="socialMediaCard-icon socialMediaIcon-purple">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="socialMediaCard-title">Content Creation</h3>
            <p className="socialMediaCard-description">
              Engaging visual and written content that captures attention, tells
              your story, and drives meaningful interactions with your audience.
            </p>
            <ul className="socialMediaFeatures">
              <li>Visual Content Design</li>
              <li>Video Production</li>
              <li>Copywriting</li>
              <li>Story Templates</li>
            </ul>
          </div>

          <div className="socialMediaCard">
            <div className="socialMediaCard-icon socialMediaIcon-green">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h3 className="socialMediaCard-title">Analytics & Insights</h3>
            <p className="socialMediaCard-description">
              Data-driven insights and comprehensive reporting to track
              performance, measure ROI, and optimize your social media presence.
            </p>
            <ul className="socialMediaFeatures">
              <li>Performance Tracking</li>
              <li>ROI Analysis</li>
              <li>Audience Insights</li>
              <li>Competitive Analysis</li>
            </ul>
          </div>
        </div>

        <h2 className="socialMediaSection-title">Our Marketing Process</h2>
        <div className="socialMediaGrid socialMediaGrid-4">
          <div className="socialMediaProcess-card">
            <div className="socialMediaProcess-step">01</div>
            <h4 className="socialMediaProcess-title">Research & Analysis</h4>
            <p className="socialMediaProcess-description">
              Deep dive into your brand, audience, competitors, and industry
              trends to build a solid foundation for your social media strategy.
            </p>
          </div>
          <div className="socialMediaProcess-card">
            <div className="socialMediaProcess-step">02</div>
            <h4 className="socialMediaProcess-title">Strategy Development</h4>
            <p className="socialMediaProcess-description">
              Creating a comprehensive roadmap with clear objectives, content
              themes, posting schedules, and platform-specific tactics.
            </p>
          </div>
          <div className="socialMediaProcess-card">
            <div className="socialMediaProcess-step">03</div>
            <h4 className="socialMediaProcess-title">
              Content Creation & Publishing
            </h4>
            <p className="socialMediaProcess-description">
              Producing high-quality content and managing your posting schedule
              across all platforms with consistent brand messaging.
            </p>
          </div>
          <div className="socialMediaProcess-card">
            <div className="socialMediaProcess-step">04</div>
            <h4 className="socialMediaProcess-title">Monitor & Optimize</h4>
            <p className="socialMediaProcess-description">
              Continuous monitoring of performance metrics, community
              management, and strategy optimization based on real-time data and
              insights.
            </p>
          </div>
        </div>

        <div className="socialMediaTech-section">
          <h2 className="socialMediaSection-title">Platforms & Tools</h2>
          <div className="socialMediaTech-grid">
            <div className="socialMediaTech-category">
              <h4 className="socialMediaTech-category-title">
                Social Platforms
              </h4>
              <div className="socialMediaTech-item">
                <FaFacebook className="socialMediaTech-item-icon" /> Facebook
              </div>
              <div className="socialMediaTech-item">
                <FaInstagram className="socialMediaTech-item-icon" /> Instagram
              </div>
              <div className="socialMediaTech-item">
                <FaTwitter className="socialMediaTech-item-icon" /> Twitter
              </div>
              <div className="socialMediaTech-item">
                <FaLinkedin className="socialMediaTech-item-icon" /> LinkedIn
              </div>
              <div className="socialMediaTech-item">
                <FaTiktok className="socialMediaTech-item-icon" /> TikTok
              </div>
            </div>

            <div className="socialMediaTech-category">
              <h4 className="socialMediaTech-category-title">
                Analytics Tools
              </h4>
              <div className="socialMediaTech-item">
                <SiGoogleanalytics className="socialMediaTech-item-icon" />{" "}
                Google Analytics
              </div>
              <div className="socialMediaTech-item">
                <FaFacebook className="socialMediaTech-item-icon" /> Facebook
                Insights
              </div>
              <div className="socialMediaTech-item">
                <SiHootsuite className="socialMediaTech-item-icon" /> Hootsuite
              </div>
              <div className="socialMediaTech-item">
                <LuSprout className="socialMediaTech-item-icon" /> Sprout Social
              </div>
              <div className="socialMediaTech-item">
                <SiBuffer className="socialMediaTech-item-icon" /> Buffer
              </div>
            </div>

            <div className="socialMediaTech-category">
              <h4 className="socialMediaTech-category-title">Design Tools</h4>
              <div className="socialMediaTech-item">
                <SiAdobe className="socialMediaTech-item-icon" /> Adobe Creative
                Suite
              </div>
              <div className="socialMediaTech-item">
                <SiCanva className="socialMediaTech-item-icon" /> Canva
              </div>
              <div className="socialMediaTech-item">
                <SiFigma className="socialMediaTech-item-icon" /> Figma
              </div>
              <div className="socialMediaTech-item">
                <SiAdobeaftereffects className="socialMediaTech-item-icon" />{" "}
                After Effects
              </div>
              <div className="socialMediaTech-item">
                <SiAdobepremierepro className="socialMediaTech-item-icon" />{" "}
                Premiere Pro
              </div>
            </div>

            <div className="socialMediaTech-category">
              <h4 className="socialMediaTech-category-title">Advertising</h4>
              <div className="socialMediaTech-item">
                <FaFacebookSquare className="socialMediaTech-item-icon" />{" "}
                Facebook Ads
              </div>
              <div className="socialMediaTech-item">
                <FaInstagramSquare className="socialMediaTech-item-icon" />{" "}
                Instagram Ads
              </div>
              <div className="socialMediaTech-item">
                <FaLinkedinIn className="socialMediaTech-item-icon" /> LinkedIn
                Ads
              </div>
              <div className="socialMediaTech-item">
                <FaTwitterSquare className="socialMediaTech-item-icon" />{" "}
                Twitter Ads
              </div>
              <div className="socialMediaTech-item">
                <SiTiktok className="socialMediaTech-item-icon" /> TikTok Ads
              </div>
            </div>
          </div>
        </div>

        <div className="socialMediaBenefits-grid">
          <div>
            <h3 className="socialMediaSection-title">
              Why Choose Our Social Media Services?
            </h3>
            <div className="socialMediaBenefit-item">
              <svg
                className="socialMediaBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="m22 21-3-3 3-3" />
              </svg>
              <div>
                <h5 className="socialMediaBenefit-title">
                  Increased Brand Awareness
                </h5>
                <p className="socialMediaBenefit-desc">
                  Expand your reach and build brand recognition across multiple
                  social platforms
                </p>
              </div>
            </div>
            <div className="socialMediaBenefit-item">
              <svg
                className="socialMediaBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <polyline points="16 11 18 13 22 9" />
              </svg>
              <div>
                <h5 className="socialMediaBenefit-title">
                  Enhanced Engagement
                </h5>
                <p className="socialMediaBenefit-desc">
                  Build meaningful connections with your audience through
                  authentic interactions
                </p>
              </div>
            </div>
            <div className="socialMediaBenefit-item">
              <svg
                className="socialMediaBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <div>
                <h5 className="socialMediaBenefit-title">Lead Generation</h5>
                <p className="socialMediaBenefit-desc">
                  Convert social media followers into qualified leads and
                  customers
                </p>
              </div>
            </div>
            <div className="socialMediaBenefit-item">
              <svg
                className="socialMediaBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              <div>
                <h5 className="socialMediaBenefit-title">
                  Data-Driven Results
                </h5>
                <p className="socialMediaBenefit-desc">
                  Track performance and optimize campaigns using comprehensive
                  analytics
                </p>
              </div>
            </div>
          </div>
          <div className="socialMediaCta-card">
            <svg
              className="socialMediaCta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <h4 className="socialMediaCta-title">
              Ready to Boost Your Social Presence?
            </h4>
            <p className="socialMediaCta-description">
              Let's create a powerful social media strategy that connects with
              your audience and drives real business results for your brand.
            </p>
            <div className="socialMediaBtn-group">
              <a href="#" className="socialMediaBtn socialMediaBtn-primary">
                Start Campaign
              </a>
              <a href="#" className="socialMediaBtn socialMediaBtn-secondary">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <Form />
      <Footer />
      <Background />
      <WhatsappAndGoToTop />
    </>
  );
};

export default ContentMarketingServiceListDetail;
