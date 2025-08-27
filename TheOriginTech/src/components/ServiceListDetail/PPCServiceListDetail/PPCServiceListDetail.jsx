import React from "react";
import "./PPCServiceListDetail.css";
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

import { SiSemrush, SiUber, SiHotjar } from "react-icons/si";
import { MdAnalytics, MdSettings } from "react-icons/md";
import { MdQueryStats } from "react-icons/md";

const PPCServiceListDetail = () => {
  return (
    <>
      <Navbar />
      <div className="ppcServiceListDetailContainer">
        <div className="ppcHeadContainer">
          <h1 className="ppcHero-title">PPC Advertising</h1>
          <p className="ppcHero-description">
            Targeted pay-per-click campaigns on Google, Facebook, and other
            platforms to generate qualified leads and maximize ROI. We create
            data-driven advertising strategies that deliver immediate results
            and sustainable growth for your business.
          </p>
          <div className="ppcHero-image">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="ppcBgGradient"
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
                  id="ppcGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#f59e0b", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#d97706", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#b45309", stopOpacity: 1 }}
                  />
                </linearGradient>
                <filter id="ppcGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect width="600" height="300" fill="url(#ppcBgGradient)" />
              <circle cx="100" cy="60" r="3" fill="#f59e0b" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.8;0.3;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="500" cy="240" r="2" fill="#06b6d4" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.6;0.2;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="320" cy="80" r="4" fill="#ec4899" opacity="0.7">
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
                width="200"
                height="140"
                rx="12"
                fill="rgba(31, 41, 55, 0.9)"
                stroke="url(#ppcGradient)"
                stroke-width="2"
              />
              <rect
                x="80"
                y="120"
                width="200"
                height="30"
                rx="12"
                fill="#374151"
              />
              <text
                x="180"
                y="138"
                fill="#f59e0b"
                font-family="Arial"
                font-size="12"
                text-anchor="middle"
                font-weight="bold"
              >
                Google Ads
              </text>
              <g transform="translate(90, 160)">
                <rect width="8" height="8" rx="2" fill="#f59e0b" />
                <text
                  x="15"
                  y="7"
                  fill="#f59e0b"
                  font-size="6"
                  font-weight="bold"
                >
                  Ad
                </text>
                <rect
                  x="0"
                  y="12"
                  width="160"
                  height="4"
                  rx="2"
                  fill="#06b6d4"
                />
                <rect
                  x="0"
                  y="20"
                  width="140"
                  height="3"
                  rx="1"
                  fill="#e5e7eb"
                />
                <rect
                  x="0"
                  y="26"
                  width="120"
                  height="3"
                  rx="1"
                  fill="#e5e7eb"
                />

                <text x="0" y="38" fill="#10b981" font-size="6">
                  Your Business
                </text>
                <text x="0" y="46" fill="#9ca3af" font-size="5">
                  www.yourbusiness.com
                </text>

                <rect
                  x="130"
                  y="50"
                  width="50"
                  height="15"
                  rx="8"
                  fill="url(#ppcGradient)"
                />
                <text
                  x="155"
                  y="59"
                  fill="white"
                  font-size="6"
                  text-anchor="middle"
                >
                  Click
                </text>
              </g>
              <g transform="translate(90, 220)">
                <text
                  x="0"
                  y="8"
                  fill="#f59e0b"
                  font-size="6"
                  font-weight="bold"
                >
                  CTR: 3.2%
                </text>
                <text
                  x="60"
                  y="8"
                  fill="#10b981"
                  font-size="6"
                  font-weight="bold"
                >
                  CPC: $1.50
                </text>
                <text
                  x="120"
                  y="8"
                  fill="#06b6d4"
                  font-size="6"
                  font-weight="bold"
                >
                  ROI: 400%
                </text>
              </g>
              <rect
                x="350"
                y="120"
                width="200"
                height="140"
                rx="12"
                fill="rgba(31, 41, 55, 0.9)"
                stroke="url(#ppcGradient)"
                stroke-width="2"
              />
              <text
                x="450"
                y="145"
                fill="#f59e0b"
                font-family="Arial"
                font-size="14"
                text-anchor="middle"
                font-weight="bold"
              >
                Campaign Analytics
              </text>
              <g transform="translate(370, 160)">
                <rect
                  x="0"
                  y="40"
                  width="15"
                  height="35"
                  rx="2"
                  fill="#f59e0b"
                />
                <rect
                  x="20"
                  y="25"
                  width="15"
                  height="50"
                  rx="2"
                  fill="#d97706"
                />
                <rect
                  x="40"
                  y="15"
                  width="15"
                  height="60"
                  rx="2"
                  fill="#b45309"
                />
                <rect
                  x="60"
                  y="10"
                  width="15"
                  height="65"
                  rx="2"
                  fill="#92400e"
                />
                <rect
                  x="80"
                  y="5"
                  width="15"
                  height="70"
                  rx="2"
                  fill="#78350f"
                />
                <rect
                  x="100"
                  y="20"
                  width="15"
                  height="55"
                  rx="2"
                  fill="#f59e0b"
                />
                <rect
                  x="120"
                  y="30"
                  width="15"
                  height="45"
                  rx="2"
                  fill="#d97706"
                />
                <rect
                  x="140"
                  y="12"
                  width="15"
                  height="63"
                  rx="2"
                  fill="#b45309"
                />

                <polyline
                  points="7,55 27,40 47,30 67,25 87,20 107,35 127,45 147,28"
                  fill="none"
                  stroke="#f59e0b"
                  stroke-width="2"
                  opacity="0.8"
                />
              </g>
              <path
                d="M280 190 Q315 150 350 190"
                stroke="url(#ppcGradient)"
                stroke-width="3"
                fill="none"
                opacity="0.6"
                filter="url(#ppcGlow)"
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
                  width="70"
                  height="50"
                  rx="8"
                  fill="rgba(245, 158, 11, 0.2)"
                  stroke="#f59e0b"
                  stroke-width="2"
                />
                <text
                  x="35"
                  y="30"
                  fill="#f59e0b"
                  font-family="Arial"
                  font-size="10"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  Google
                </text>
                <text
                  x="35"
                  y="42"
                  fill="#f59e0b"
                  font-family="Arial"
                  font-size="6"
                  text-anchor="middle"
                >
                  Ads
                </text>
              </g>
              <g transform="translate(480, 50)">
                <rect
                  width="70"
                  height="50"
                  rx="8"
                  fill="rgba(59, 130, 246, 0.2)"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <text
                  x="35"
                  y="30"
                  fill="#3b82f6"
                  font-family="Arial"
                  font-size="10"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  Facebook
                </text>
                <text
                  x="35"
                  y="42"
                  fill="#3b82f6"
                  font-family="Arial"
                  font-size="6"
                  text-anchor="middle"
                >
                  Ads
                </text>
              </g>
              Click Visual
              <g transform="translate(270, 40)">
                <rect
                  width="60"
                  height="50"
                  rx="8"
                  fill="rgba(236, 72, 153, 0.2)"
                  stroke="#ec4899"
                  stroke-width="2"
                />
                <text
                  x="30"
                  y="25"
                  fill="#ec4899"
                  font-family="Arial"
                  font-size="8"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  PAY PER
                </text>
                <text
                  x="30"
                  y="38"
                  fill="#ec4899"
                  font-family="Arial"
                  font-size="8"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  CLICK
                </text>
              </g>
              <g transform="translate(150, 50)">
                <circle cx="20" cy="20" r="15" fill="rgba(16, 185, 129, 0.3)" />
                <text
                  x="20"
                  y="25"
                  fill="#10b981"
                  font-size="12"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  $
                </text>
              </g>
              <g transform="translate(350, 50)">
                <circle cx="15" cy="15" r="12" fill="rgba(245, 158, 11, 0.3)" />
                <text
                  x="15"
                  y="19"
                  fill="#f59e0b"
                  font-size="10"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  %
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="ppcContainer">
        <div className="ppcGrid ppcGrid-3">
          <div className="ppcCard">
            <div className="ppcCard-icon ppcIcon-orange">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
              </svg>
            </div>
            <h3 className="ppcCard-title">Google Ads Management</h3>
            <p className="ppcCard-description">
              Strategic Google Ads campaigns targeting high-intent keywords to
              drive qualified traffic and conversions with optimized bidding
              strategies.
            </p>
            <ul className="ppcFeatures">
              <li>Keyword Research & Bidding</li>
              <li>Ad Copy Optimization</li>
              <li>Landing Page Alignment</li>
              <li>Quality Score Improvement</li>
            </ul>
          </div>

          <div className="ppcCard">
            <div className="ppcCard-icon ppcIcon-blue">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="ppcCard-title">Social Media Advertising</h3>
            <p className="ppcCard-description">
              Targeted social media campaigns on Facebook, Instagram, LinkedIn,
              and Twitter to reach your ideal audience with compelling visual
              and video content.
            </p>
            <ul className="ppcFeatures">
              <li>Audience Targeting</li>
              <li>Creative Development</li>
              <li>A/B Testing</li>
              <li>Social Proof Integration</li>
            </ul>
          </div>

          <div className="ppcCard">
            <div className="ppcCard-icon ppcIcon-green">
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
            <h3 className="ppcCard-title">Campaign Optimization</h3>
            <p className="ppcCard-description">
              Continuous monitoring and optimization of ad performance with
              data-driven insights to maximize ROI and reduce cost per
              acquisition across all platforms.
            </p>
            <ul className="ppcFeatures">
              <li>Performance Monitoring</li>
              <li>Bid Management</li>
              <li>Conversion Tracking</li>
              <li>ROI Optimization</li>
            </ul>
          </div>
        </div>

        <h2 className="ppcSection-title">Our PPC Process</h2>
        <div className="ppcGrid ppcGrid-4">
          <div className="ppcProcess-card">
            <div className="ppcProcess-step">01</div>
            <h4 className="ppcProcess-title">Market Research & Strategy</h4>
            <p className="ppcProcess-description">
              In-depth analysis of your market, competitors, and target audience
              to develop a comprehensive PPC strategy aligned with your business
              goals.
            </p>
          </div>
          <div className="ppcProcess-card">
            <div className="ppcProcess-step">02</div>
            <h4 className="ppcProcess-title">Campaign Setup & Launch</h4>
            <p className="ppcProcess-description">
              Creating optimized campaigns with targeted keywords, compelling ad
              copy, and strategic bidding to maximize visibility and performance
              from day one.
            </p>
          </div>
          <div className="ppcProcess-card">
            <div className="ppcProcess-step">03</div>
            <h4 className="ppcProcess-title">Monitor & Optimize</h4>
            <p className="ppcProcess-description">
              Continuous monitoring of campaign performance with regular
              optimizations to improve click-through rates, quality scores, and
              conversion rates.
            </p>
          </div>
          <div className="ppcProcess-card">
            <div className="ppcProcess-step">04</div>
            <h4 className="ppcProcess-title">Reporting & Scaling</h4>
            <p className="ppcProcess-description">
              Detailed performance reporting with actionable insights and
              strategic scaling of successful campaigns to maximize your
              advertising investment.
            </p>
          </div>
        </div>

        <div className="ppcTech-section">
          <h2 className="ppcSection-title">PPC Platforms & Tools</h2>
          <div className="ppcTech-grid">
            <div className="ppcTech-category">
              <h4 className="ppcTech-category-title">Search Platforms</h4>
              <div className="ppcTech-item">Google Ads</div>
              <div className="ppcTech-item">Microsoft Ads</div>
              <div className="ppcTech-item">Amazon Advertising</div>
              <div className="ppcTech-item">Apple Search Ads</div>
              <div className="ppcTech-item">Yahoo Ads</div>
            </div>
            <div className="ppcTech-category">
              <h4 className="ppcTech-category-title">Social Platforms</h4>
              <div className="ppcTech-item">
                <FaFacebook className="ppcTech-item-icon" /> Facebook
              </div>
              <div className="ppcTech-item">
                <FaInstagram className="ppcTech-item-icon" /> Instagram
              </div>
              <div className="ppcTech-item">
                <FaTwitter className="ppcTech-item-icon" /> Twitter
              </div>
              <div className="ppcTech-item">
                <FaLinkedin className="ppcTech-item-icon" /> LinkedIn
              </div>
              <div className="ppcTech-item">
                <FaTiktok className="ppcTech-item-icon" /> TikTok
              </div>
            </div>
            <div className="ppcTech-category">
              <h4 className="ppcTech-category-title">Analytics Tools</h4>
              <div className="ppcTech-item">
                <SiGoogleanalytics className="ppcTech-item-icon" /> Google
                Analytics
              </div>
              <div className="ppcTech-item">
                <FaFacebook className="ppcTech-item-icon" /> Facebook Insights
              </div>
              <div className="ppcTech-item">
                <SiHootsuite className="ppcTech-item-icon" /> Hootsuite
              </div>
              <div className="ppcTech-item">
                <LuSprout className="ppcTech-item-icon" /> Sprout Social
              </div>
              <div className="ppcTech-item">
                <SiBuffer className="ppcTech-item-icon" /> Buffer
              </div>
            </div>
            <div className="ppcTech-category">
              <h4 className="ppcTech-category-title">Research Tools</h4>
              <div className="ppcTech-item">
                <SiGoogleanalytics className="ppcTech-item-icon" /> Google
                Keyword Planner
              </div>
              <div className="ppcTech-item">
                <SiSemrush className="ppcTech-item-icon" /> SEMrush
              </div>
              <div className="ppcTech-item">
                <SiUber className="ppcTech-item-icon" /> Ubersuggest
              </div>
              <div className="ppcTech-item">
                <MdQueryStats className="ppcTech-item-icon" /> Serpstat
              </div>
            </div>
            <div className="ppcTech-category">
              <h4 className="ppcTech-category-title">Analytics</h4>
              <div className="ppcTech-item">
                <SiGoogleanalytics className="ppcTech-item-icon" /> Google
                Analytics
              </div>
              <div className="ppcTech-item">
                <MdAnalytics className="ppcTech-item-icon" /> Search Console
              </div>
              <div className="ppcTech-item">
                <MdSettings className="ppcTech-item-icon" /> Google Tag Manager
              </div>
              <div className="ppcTech-item">
                <SiHotjar className="ppcTech-item-icon" /> Hotjar
              </div>
            </div>
          </div>
        </div>

        <div className="ppcBenefits-grid">
          <div>
            <h3 className="ppcSection-title">Why Choose Our PPC Services?</h3>
            <div className="ppcBenefit-item">
              <svg
                className="ppcBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
              </svg>
              <div>
                <h5 className="ppcBenefit-title">Immediate Results</h5>
                <p className="ppcBenefit-desc">
                  Start driving qualified traffic and leads to your website
                  within hours of campaign launch
                </p>
              </div>
            </div>
            <div className="ppcBenefit-item">
              <svg
                className="ppcBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="6" x2="12" y2="12" />
                <line x1="16.24" y1="16.24" x2="12" y2="12" />
              </svg>
              <div>
                <h5 className="ppcBenefit-title">Precise Targeting</h5>
                <p className="ppcBenefit-desc">
                  Reach your ideal customers with laser-focused targeting based
                  on demographics and behavior
                </p>
              </div>
            </div>
            <div className="ppcBenefit-item">
              <svg
                className="ppcBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <div>
                <h5 className="ppcBenefit-title">Measurable ROI</h5>
                <p className="ppcBenefit-desc">
                  Track every dollar spent with detailed analytics and
                  transparent ROI reporting
                </p>
              </div>
            </div>
            <div className="ppcBenefit-item">
              <svg
                className="ppcBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M3 3v18h18" />
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
              </svg>
              <div>
                <h5 className="ppcBenefit-title">Scalable Growth</h5>
                <p className="ppcBenefit-desc">
                  Increase your advertising budget as campaigns prove successful
                  for exponential growth
                </p>
              </div>
            </div>
          </div>
          <div className="ppcCta-card">
            <svg
              className="ppcCta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
            </svg>
            <h4 className="ppcCta-title">Ready to Accelerate Your Growth?</h4>
            <p className="ppcCta-description">
              Launch high-performing PPC campaigns that drive immediate results
              and deliver maximum return on your advertising investment.
            </p>
            <div className="ppcBtn-group">
              <a href="#" className="ppcBtn ppcBtn-primary">
                Start Campaign
              </a>
              <a href="#" className="ppcBtn ppcBtn-secondary">
                Free Audit
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

export default PPCServiceListDetail;
