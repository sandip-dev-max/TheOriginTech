import React from "react";
import "./DigitalMarketingServiceListDetail.css";
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

const DigitalMarketingServiceListDetail = () => {
  return (
    <div>
      <Navbar />
      <div class="digitalHero">
        <div class="digitalContainer">
          <h1 class="digitalHero-title">Digital Marketing</h1>
          <p class="digitalHero-description">
            We help your brand grow online through SEO, social media, paid
            advertising, and content marketing. Our strategies are data-driven
            and designed to maximize visibility, engagement, and conversions.
          </p>
          <div class="digitalHero-image">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="bgGradient"
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
                  id="marketingGradient"
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
                    style={{ stopColor: "#ec4899", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#8b5cf6", stopOpacity: 1 }}
                  />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width="600" height="300" fill="url(#bgGradient)" />

              <circle cx="100" cy="80" r="4" fill="#ec4899" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.8;0.3;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="500" cy="220" r="3" fill="#06b6d4" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.6;0.2;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="350" cy="60" r="2" fill="#8b5cf6" opacity="0.7">
                <animate
                  attributeName="opacity"
                  values="0.7;0.3;0.7"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>

              <g transform="translate(50, 120)">
                <rect
                  width="140"
                  height="100"
                  rx="15"
                  fill="rgba(31, 41, 55, 0.8)"
                  stroke="url(#marketingGradient)"
                  stroke-width="2"
                />
                <circle cx="30" cy="30" r="12" fill="#ec4899" />
                <text
                  x="30"
                  y="37"
                  fill="white"
                  fontFamily="Arial"
                  fontSize="10"
                  textAnchor="middle"
                >
                  SEO
                </text>
                <rect
                  x="50"
                  y="20"
                  width="80"
                  height="8"
                  rx="4"
                  fill="#374151"
                />
                <rect
                  x="50"
                  y="35"
                  width="60"
                  height="6"
                  rx="3"
                  fill="#4b5563"
                />
                <rect
                  x="50"
                  y="50"
                  width="70"
                  height="6"
                  rx="3"
                  fill="#4b5563"
                />
                <rect
                  x="20"
                  y="70"
                  width="100"
                  height="20"
                  rx="10"
                  fill="url(#marketingGradient)"
                  opacity="0.8"
                />
                <text
                  x="70"
                  y="83"
                  fill="white"
                  fontFamily="Arial"
                  fontSize="8"
                  textAnchor="middle"
                >
                  Rank Higher
                </text>
              </g>

              <g transform="translate(220, 120)">
                <rect
                  width="140"
                  height="100"
                  rx="15"
                  fill="rgba(31, 41, 55, 0.8)"
                  stroke="url(#marketingGradient)"
                  stroke-width="2"
                />
                <circle cx="30" cy="25" r="8" fill="#06b6d4" />
                <circle cx="55" cy="25" r="8" fill="#ec4899" />
                <circle cx="80" cy="25" r="8" fill="#8b5cf6" />
                <circle cx="105" cy="25" r="8" fill="#10b981" />
                <text
                  x="70"
                  y="50"
                  fill="white"
                  fontFamily="Arial"
                  fontSize="9"
                  textAnchor="middle"
                >
                  Social Media
                </text>
                <rect
                  x="20"
                  y="65"
                  width="25"
                  height="4"
                  rx="2"
                  fill="#06b6d4"
                />
                <rect
                  x="50"
                  y="65"
                  width="35"
                  height="4"
                  rx="2"
                  fill="#ec4899"
                />
                <rect
                  x="90"
                  y="65"
                  width="30"
                  height="4"
                  rx="2"
                  fill="#8b5cf6"
                />
                <text
                  x="70"
                  y="85"
                  fill="#9ca3af"
                  fontFamily="Arial"
                  fontSize="7"
                  textAnchor="middle"
                >
                  Engagement Growth
                </text>
              </g>

              <g transform="translate(390, 120)">
                <rect
                  width="140"
                  height="100"
                  rx="15"
                  fill="rgba(31, 41, 55, 0.8)"
                  stroke="url(#marketingGradient)"
                  stroke-width="2"
                />
                <rect
                  x="20"
                  y="20"
                  width="100"
                  height="50"
                  rx="8"
                  fill="rgba(6, 182, 212, 0.2)"
                />
                <path
                  d="M30 45 L50 35 L70 50 L90 30 L110 40"
                  stroke="#06b6d4"
                  stroke-width="3"
                  fill="none"
                />
                <circle cx="30" cy="45" r="2" fill="#06b6d4" />
                <circle cx="50" cy="35" r="2" fill="#ec4899" />
                <circle cx="70" cy="50" r="2" fill="#8b5cf6" />
                <circle cx="90" cy="30" r="2" fill="#10b981" />
                <circle cx="110" cy="40" r="2" fill="#f59e0b" />
                <text
                  x="70"
                  y="85"
                  fill="white"
                  fontFamily="Arial"
                  fontSize="9"
                  textAnchor="middle"
                >
                  Analytics
                </text>
              </g>

              <g transform="translate(250, 40)">
                <circle
                  cx="50"
                  cy="30"
                  r="25"
                  fill="rgba(236, 72, 153, 0.2)"
                  stroke="#ec4899"
                  stroke-width="2"
                >
                  <animate
                    attributeName="r"
                    values="25;30;25"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path d="M35 25 L50 15 L65 25 L50 35 Z" fill="#ec4899" />
                <text
                  x="50"
                  y="70"
                  fill="#ec4899"
                  fontFamily="Arial"
                  fontSize="8"
                  textAnchor="middle"
                >
                  Digital Growth
                </text>
              </g>

              <path
                d="M150 150 Q200 100 250 150"
                stroke="url(#marketingGradient)"
                stroke-width="2"
                fill="none"
                opacity="0.6"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,100;50,50;100,0;0,100"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M350 150 Q400 100 450 150"
                stroke="url(#marketingGradient)"
                stroke-width="2"
                fill="none"
                opacity="0.6"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,100;50,50;100,0;0,100"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>
      </div>
      <div class="digitalContainer">
        <div class="digitalgrid digitalgrid-3">
          <div class="digitalcard">
            <div class="digitalcard-icon icon-blue">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M14.828 14.828a4 4 0 0 1-5.656 0" />
                <path d="M9 9a3 3 0 1 1 6 0l0 6a3 3 0 1 1-6 0v-6z" />
                <circle cx="12" cy="9" r="1" />
              </svg>
            </div>
            <h3 class="digitalcard-title">Search Engine Optimization</h3>
            <p class="digitalcard-description">
              Improve your website's visibility in search results with our
              comprehensive SEO strategies and technical optimization.
            </p>
            <ul class="features">
              <li>Keyword Research</li>
              <li>On-Page Optimization</li>
              <li>Technical SEO</li>
              <li>Link Building</li>
            </ul>
          </div>

          <div class="digitalcard">
            <div class="digitalcard-icon icon-pink">
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
            <h3 class="digitalcard-title">Social Media Marketing</h3>
            <p class="digitalcard-description">
              Build a strong social presence and engage with your audience
              across all major social media platforms.
            </p>
            <ul class="features">
              <li>Content Creation</li>
              <li>Community Management</li>
              <li>Social Advertising</li>
              <li>Influencer Outreach</li>
            </ul>
          </div>

          <div class="digitalcard">
            <div class="digitalcard-icon icon-purple">
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
            <h3 class="digitalcard-title">Paid Advertising</h3>
            <p class="digitalcard-description">
              Maximize ROI with targeted ad campaigns across Google Ads,
              Facebook, and other advertising platforms.
            </p>
            <ul class="features">
              <li>Google Ads</li>
              <li>Facebook Ads</li>
              <li>Display Advertising</li>
              <li>Remarketing</li>
            </ul>
          </div>
        </div>

        <h2 class="digitalsection-title">Our Marketing Process</h2>
        <div class="digitalgrid digitalgrid-4">
          <div class="digitalprocess-card">
            <div class="digitalprocess-step">01</div>
            <h4 class="digital process-title">Research & Analysis</h4>
            <p class="digitalprocess-description">
              Deep dive into your market, competitors, and target audience to
              develop data-driven strategies.
            </p>
          </div>
          <div class="digitalprocess-card">
            <div class="digitalprocess-step">02</div>
            <h4 class="digital process-title">Strategy Development</h4>
            <p class="digitalprocess-description">
              Create comprehensive marketing plans tailored to your business
              goals and target audience.
            </p>
          </div>
          <div class="digitalprocess-card">
            <div class="digitalprocess-step">03</div>
            <h4 class="digital process-title">Campaign Execution</h4>
            <p class="digitalprocess-description">
              Launch multi-channel campaigns with consistent messaging and
              optimized targeting.
            </p>
          </div>
          <div class="digitalprocess-card">
            <div class="digitalprocess-step">04</div>
            <h4 class="digital process-title">Monitor & Optimize</h4>
            <p class="digitalprocess-description">
              Continuous monitoring and optimization to improve performance and
              maximize ROI.
            </p>
          </div>
        </div>

        <div class="digitalservices-section">
          <h2 class="digitalsection-title">Our Digital Marketing Services</h2>
          <div class="digitalservices-digitalgrid digitalservices-grid">
            <div class="digitalservice-item">
              <svg
                class="digitalservice-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                <polyline points="7.5 19.79 7.5 14.6 3 12" />
                <polyline points="21 12 16.5 14.6 16.5 19.79" />
              </svg>
              <h4 class="digitalservice-title">Content Marketing</h4>
              <p class="digitalservice-desc">
                Strategic content creation that engages and converts
              </p>
            </div>
            <div class="digitalservice-item">
              <svg
                class="digitalservice-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <h4 class="digitalservice-title">Email Marketing</h4>
              <p class="digitalservice-desc">
                Personalized email campaigns that drive results
              </p>
            </div>
            <div class="digitalservice-item">
              <svg
                class="digitalservice-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              <h4 class="digitalservice-title">Analytics & Reporting</h4>
              <p class="digitalservice-desc">
                Comprehensive tracking and performance insights
              </p>
            </div>
            <div class="digitalservice-item">
              <svg
                class="digitalservice-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
              <h4 class="service-title">Conversion Optimization</h4>
              <p class="service-desc">
                Maximize conversions with data-driven testing
              </p>
            </div>
          </div>
        </div>

        <h2 class="digitalsection-title">Proven Results</h2>
        <div class="digitalstats-grid">
          <div class="digitalstats-card">
            <div class="digitalstats-number">300%</div>
            <div class="digitalstats-label">Average Traffic Increase</div>
          </div>
          <div class="digitalstats-card">
            <div class="digitalstats-number">150%</div>
            <div class="digitalstats-label">ROI Improvement</div>
          </div>
          <div class="digitalstats-card">
            <div class="digitalstats-number">85%</div>
            <div class="digitalstats-label">Client Retention Rate</div>
          </div>
          <div class="digitalstats-card">
            <div class="digitalstats-number">50+</div>
            <div class="digitalstats-label">Successful Campaigns</div>
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

        <div class="digitalbenefits-digitalgrid">
          <div>
            <h3
              class="digitalsection-title"
              style={{ textAlign: "left", marginBottom: 24 }}
            >
              Why Choose Our Marketing Services?
            </h3>
            <div class="digitalbenefit-item">
              <svg
                class="digitalbenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <h5 class="digitalbenefit-title">Data-Driven Strategies</h5>
                <p class="digitalbenefit-desc">
                  Every decision backed by comprehensive analytics and market
                  research
                </p>
              </div>
            </div>
            <div class="digitalbenefit-item">
              <svg
                class="digitalbenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <h5 class="digitalbenefit-title">Multi-Channel Approach</h5>
                <p class="digitalbenefit-desc">
                  Integrated campaigns across all digital marketing channels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Form />
      <Footer />
      <Background />
      <WhatsappAndGoToTop />
    </div>
  );
};

export default DigitalMarketingServiceListDetail;
