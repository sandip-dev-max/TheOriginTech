import React from "react";
import "./SEOServiceListDetail.css";
import Navbar from "../../Navbar/Navbar";
import Form from "../../Form/Form";
import Background from "../../Background/Background";
import WhatsappAndGoToTop from "../../WhatsappAndGoToTop/WhatsappAndGoToTop";
import Footer from "../../Footer/Footer";

import {
  SiGoogleanalytics,
  SiSemrush,
  SiUber,
  SiHotjar,
  SiYoast,
  SiPagespeedinsights,
  SiXml,
} from "react-icons/si";
import { TbMilitaryRank } from "react-icons/tb";
import { SiBuzzfeed } from "react-icons/si";
import { GiOrganigram } from "react-icons/gi";
import { GiFloatingTentacles } from "react-icons/gi";
import { FaRankingStar } from "react-icons/fa6";
import { MdAnalytics, MdSettings } from "react-icons/md";
import { MdQueryStats } from "react-icons/md";

const SEOServiceListDetail = () => {
  return (
    <>
      <Navbar />
      <div className="seoServiceListDetailContainer">
        <div className="seoHeadContainer">
          <h1 className="seoHero-title">SEO - Search Engine Optimization</h1>
          <p className="seoHero-description">
            We specialize in Search Engine Optimization (SEO) to help your brand
            increase its online visibility and organic traffic. Our strategies
            focus on data-driven techniques to improve your search engine
            rankings and drive conversions that deliver measurable business
            results.
          </p>
          <div className="seoHero-image">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="seoBgGradient"
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
                  id="seoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#10b981", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#059669", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#047857", stopOpacity: 1 }}
                  />
                </linearGradient>
                <filter id="seoGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width="600" height="300" fill="url(#seoBgGradient)" />

              {/* Search particles */}
              <circle cx="120" cy="70" r="3" fill="#10b981" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.8;0.3;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="450" cy="240" r="2" fill="#f59e0b" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.6;0.2;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="350" cy="80" r="4" fill="#3b82f6" opacity="0.7">
                <animate
                  attributeName="opacity"
                  values="0.7;0.3;0.7"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Search Browser Mockup */}
              <rect
                x="100"
                y="100"
                width="200"
                height="140"
                rx="12"
                fill="rgba(31, 41, 55, 0.9)"
                stroke="url(#seoGradient)"
                stroke-width="2"
              />

              {/* Browser Header */}
              <rect
                x="100"
                y="100"
                width="200"
                height="30"
                rx="12"
                fill="#374151"
              />
              <circle cx="120" cy="115" r="4" fill="#ef4444" />
              <circle cx="135" cy="115" r="4" fill="#f59e0b" />
              <circle cx="150" cy="115" r="4" fill="#10b981" />

              {/* Address Bar */}
              <rect
                x="110"
                y="140"
                width="180"
                height="20"
                rx="10"
                fill="#1f2937"
              />
              <text
                x="120"
                y="152"
                fill="#10b981"
                font-family="monospace"
                font-size="8"
              >
                https://yoursite.com
              </text>

              {/* Search Results */}
              <g transform="translate(110, 170)">
                <rect width="15" height="8" rx="2" fill="#10b981" />
                <text
                  x="20"
                  y="6"
                  fill="#10b981"
                  font-size="6"
                  font-weight="bold"
                >
                  #1
                </text>
                <rect
                  x="0"
                  y="12"
                  width="160"
                  height="3"
                  rx="1"
                  fill="#e5e7eb"
                />
                <rect
                  x="0"
                  y="18"
                  width="120"
                  height="3"
                  rx="1"
                  fill="#d1d5db"
                />

                <rect y="28" width="15" height="8" rx="2" fill="#3b82f6" />
                <text
                  x="20"
                  y="34"
                  fill="#3b82f6"
                  font-size="6"
                  font-weight="bold"
                >
                  #2
                </text>
                <rect
                  x="0"
                  y="40"
                  width="150"
                  height="3"
                  rx="1"
                  fill="#e5e7eb"
                />
                <rect
                  x="0"
                  y="46"
                  width="130"
                  height="3"
                  rx="1"
                  fill="#d1d5db"
                />

                <rect y="56" width="15" height="8" rx="2" fill="#f59e0b" />
                <text
                  x="20"
                  y="62"
                  fill="#f59e0b"
                  font-size="6"
                  font-weight="bold"
                >
                  #3
                </text>
                <rect
                  x="0"
                  y="68"
                  width="140"
                  height="3"
                  rx="1"
                  fill="#e5e7eb"
                />
              </g>

              {/* SEO Analytics Chart */}
              <rect
                x="350"
                y="120"
                width="200"
                height="140"
                rx="12"
                fill="rgba(31, 41, 55, 0.9)"
                stroke="url(#seoGradient)"
                stroke-width="2"
              />
              <text
                x="450"
                y="145"
                fill="#10b981"
                font-family="Arial"
                font-size="14"
                text-anchor="middle"
              >
                SEO Analytics
              </text>

              {/* Trending Up Chart */}
              <polyline
                points="370,220 390,200 410,190 430,175 450,160 470,150 490,140 510,135"
                fill="none"
                stroke="url(#seoGradient)"
                stroke-width="3"
                opacity="0.8"
              />
              <circle cx="370" cy="220" r="3" fill="#10b981" />
              <circle cx="430" cy="175" r="3" fill="#10b981" />
              <circle cx="490" cy="140" r="3" fill="#10b981" />
              <circle cx="510" cy="135" r="3" fill="#10b981" />

              {/* Chart Grid Lines */}
              <line
                x1="360"
                y1="160"
                x2="540"
                y2="160"
                stroke="#374151"
                stroke-width="1"
                opacity="0.3"
              />
              <line
                x1="360"
                y1="190"
                x2="540"
                y2="190"
                stroke="#374151"
                stroke-width="1"
                opacity="0.3"
              />
              <line
                x1="360"
                y1="220"
                x2="540"
                y2="220"
                stroke="#374151"
                stroke-width="1"
                opacity="0.3"
              />

              {/* Keywords floating */}
              <g transform="translate(380, 180)">
                <rect
                  width="40"
                  height="12"
                  rx="6"
                  fill="rgba(16, 185, 129, 0.2)"
                />
                <text
                  x="20"
                  y="8"
                  fill="#10b981"
                  font-size="6"
                  text-anchor="middle"
                >
                  keyword
                </text>
              </g>
              <g transform="translate(440, 195)">
                <rect
                  width="35"
                  height="12"
                  rx="6"
                  fill="rgba(59, 130, 246, 0.2)"
                />
                <text
                  x="17.5"
                  y="8"
                  fill="#3b82f6"
                  font-size="6"
                  text-anchor="middle"
                >
                  traffic
                </text>
              </g>

              {/* Connection line */}
              <path
                d="M300 180 Q325 140 350 180"
                stroke="url(#seoGradient)"
                stroke-width="3"
                fill="none"
                opacity="0.6"
                filter="url(#seoGlow)"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,100;50,50;100,0;0,100"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Google Logo mockup */}
              <g transform="translate(50, 50)">
                <rect
                  width="80"
                  height="50"
                  rx="8"
                  fill="rgba(255, 255, 255, 0.9)"
                  stroke="#e5e7eb"
                  stroke-width="2"
                />
                <text
                  x="40"
                  y="30"
                  fill="#4285f4"
                  font-family="Arial"
                  font-size="12"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  Google
                </text>
                <text
                  x="40"
                  y="42"
                  fill="#9aa0a6"
                  font-family="Arial"
                  font-size="6"
                  text-anchor="middle"
                >
                  Search Results
                </text>
              </g>

              {/* Magnifying Glass */}
              <g transform="translate(480, 50)">
                <circle
                  cx="25"
                  cy="25"
                  r="18"
                  fill="none"
                  stroke="#10b981"
                  stroke-width="3"
                />
                <line
                  x1="38"
                  y1="38"
                  x2="48"
                  y2="48"
                  stroke="#10b981"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <text
                  x="25"
                  y="30"
                  fill="#10b981"
                  font-family="Arial"
                  font-size="10"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  SEO
                </text>
              </g>

              {/* Ranking badges */}
              <g transform="translate(150, 50)">
                <circle cx="20" cy="20" r="15" fill="#10b981" />
                <text
                  x="20"
                  y="25"
                  fill="white"
                  font-size="10"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  #1
                </text>
              </g>
              <g transform="translate(200, 55)">
                <circle cx="15" cy="15" r="12" fill="#3b82f6" />
                <text
                  x="15"
                  y="19"
                  fill="white"
                  font-size="8"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  #2
                </text>
              </g>
              <g transform="translate(240, 60)">
                <circle cx="12" cy="12" r="10" fill="#f59e0b" />
                <text
                  x="12"
                  y="16"
                  fill="white"
                  font-size="7"
                  text-anchor="middle"
                  font-weight="bold"
                >
                  #3
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="seoContainer">
        <div className="seoGrid seoGrid-3">
          <div className="seoCard">
            <div className="seoCard-icon seoIcon-green">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <h3 className="seoCard-title">Keyword Research</h3>
            <p className="seoCard-description">
              In-depth keyword analysis to identify high-value search terms that
              your target audience uses, ensuring maximum visibility and traffic
              potential.
            </p>
            <ul className="seoFeatures">
              <li>Competitor Analysis</li>
              <li>Search Volume Research</li>
              <li>Long-tail Keywords</li>
              <li>Intent Optimization</li>
            </ul>
          </div>

          <div className="seoCard">
            <div className="seoCard-icon seoIcon-blue">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </div>
            <h3 className="seoCard-title">On-Page Optimization</h3>
            <p className="seoCard-description">
              Complete optimization of your website's content, meta tags,
              headers, and technical elements to improve search engine
              visibility and user experience.
            </p>
            <ul className="seoFeatures">
              <li>Meta Tag Optimization</li>
              <li>Content Structure</li>
              <li>Internal Linking</li>
              <li>Schema Markup</li>
            </ul>
          </div>

          <div className="seoCard">
            <div className="seoCard-icon seoIcon-orange">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="seoCard-title">Performance Analytics</h3>
            <p className="seoCard-description">
              Comprehensive tracking and reporting of your SEO performance with
              actionable insights to continuously improve your search rankings
              and ROI.
            </p>
            <ul className="seoFeatures">
              <li>Ranking Monitoring</li>
              <li>Traffic Analysis</li>
              <li>Conversion Tracking</li>
              <li>ROI Reporting</li>
            </ul>
          </div>
        </div>

        <h2 className="seoSection-title">Our SEO Process</h2>
        <div className="seoGrid seoGrid-4">
          <div className="seoProcess-card">
            <div className="seoProcess-step">01</div>
            <h4 className="seoProcess-title">SEO Audit & Analysis</h4>
            <p className="seoProcess-description">
              Comprehensive analysis of your current website performance,
              technical issues, content gaps, and competitive landscape to
              create a strategic foundation.
            </p>
          </div>
          <div className="seoProcess-card">
            <div className="seoProcess-step">02</div>
            <h4 className="seoProcess-title">Strategy & Planning</h4>
            <p className="seoProcess-description">
              Developing a customized SEO roadmap with keyword targeting,
              content strategy, technical optimizations, and link building plans
              tailored to your goals.
            </p>
          </div>
          <div className="seoProcess-card">
            <div className="seoProcess-step">03</div>
            <h4 className="seoProcess-title">Implementation & Optimization</h4>
            <p className="seoProcess-description">
              Executing on-page optimizations, technical improvements, content
              creation, and link building campaigns with continuous monitoring
              and adjustments.
            </p>
          </div>
          <div className="seoProcess-card">
            <div className="seoProcess-step">04</div>
            <h4 className="seoProcess-title">Monitoring & Reporting</h4>
            <p className="seoProcess-description">
              Regular performance tracking, detailed reporting, and strategic
              refinements to ensure sustained growth and maximum return on
              investment.
            </p>
          </div>
        </div>

        <div className="seoTech-section">
          <h2 className="seoSection-title">SEO Tools & Technologies</h2>
          <div className="seoTech-grid">
            <div className="seoTech-category">
              <h4 className="seoTech-category-title">Research Tools</h4>
              <div className="seoTech-item">
                <SiGoogleanalytics className="seoTech-item-icon" /> Google
                Keyword Planner
              </div>
              <div className="seoTech-item">
                <SiSemrush className="seoTech-item-icon" /> SEMrush
              </div>
              <div className="seoTech-item">
                <SiUber className="seoTech-item-icon" /> Ubersuggest
              </div>
              <div className="seoTech-item">
                <MdQueryStats className="seoTech-item-icon" /> Serpstat
              </div>
            </div>

            <div className="seoTech-category">
              <h4 className="seoTech-category-title">Analytics</h4>
              <div className="seoTech-item">
                <SiGoogleanalytics className="seoTech-item-icon" /> Google
                Analytics
              </div>
              <div className="seoTech-item">
                <MdAnalytics className="seoTech-item-icon" /> Search Console
              </div>
              <div className="seoTech-item">
                <MdSettings className="seoTech-item-icon" /> Google Tag Manager
              </div>
              <div className="seoTech-item">
                <SiHotjar className="seoTech-item-icon" /> Hotjar
              </div>
            </div>

            <div className="seoTech-category">
              <h4 className="seoTech-category-title">Technical SEO</h4>
              <div className="seoTech-item">
                <SiPagespeedinsights className="seoTech-item-icon" /> PageSpeed
                Insights
              </div>
              <div className="seoTech-item">
                <GiFloatingTentacles className="seoTech-item-icon" /> GTmetrix
              </div>
              <div className="seoTech-item">
                <GiOrganigram className="seoTech-item-icon" /> Schema.org
              </div>
              <div className="seoTech-item">
                <SiXml className="seoTech-item-icon" /> XML Sitemaps
              </div>
            </div>

            <div className="seoTech-category">
              <h4 className="seoTech-category-title">Monitoring</h4>
              <div className="seoTech-item">
                <TbMilitaryRank className="seoTech-item-icon" /> Rank Tracker
              </div>
              <div className="seoTech-item">
                <FaRankingStar className="seoTech-item-icon" /> AccuRanker
              </div>
              <div className="seoTech-item">
                <MdAnalytics className="seoTech-item-icon" /> SERPWatcher
              </div>
              <div className="seoTech-item">
                <MdSettings className="seoTech-item-icon" /> Wincher
              </div>
            </div>
          </div>
        </div>

        <div className="seoBenefits-grid">
          <div>
            <h3 className="seoSection-title">Why Choose Our SEO Services?</h3>
            <div className="seoBenefit-item">
              <svg
                className="seoBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <div>
                <h5 className="seoBenefit-title">Increased Organic Traffic</h5>
                <p className="seoBenefit-desc">
                  Drive more qualified visitors to your website through improved
                  search rankings
                </p>
              </div>
            </div>
            <div className="seoBenefit-item">
              <svg
                className="seoBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M3 3v18h18" />
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
              </svg>
              <div>
                <h5 className="seoBenefit-title">Higher Search Rankings</h5>
                <p className="seoBenefit-desc">
                  Achieve top positions in search results for your target
                  keywords
                </p>
              </div>
            </div>
            <div className="seoBenefit-item">
              <svg
                className="seoBenefit-icon"
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
                <h5 className="seoBenefit-title">Better User Experience</h5>
                <p className="seoBenefit-desc">
                  Optimize your website for both search engines and user
                  satisfaction
                </p>
              </div>
            </div>
            <div className="seoBenefit-item">
              <svg
                className="seoBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <div>
                <h5 className="seoBenefit-title">Long-term Results</h5>
                <p className="seoBenefit-desc">
                  Build sustainable organic growth that continues to deliver
                  value over time
                </p>
              </div>
            </div>
          </div>
          <div className="seoCta-card">
            <svg
              className="seoCta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            <h4 className="seoCta-title">Ready to Dominate Search Results?</h4>
            <p className="seoCta-description">
              Let's boost your online visibility and drive more organic traffic
              to your website with our proven SEO strategies and techniques.
            </p>
            <div className="seoBtn-group">
              <a href="#" className="seoBtn seoBtn-primary">
                Start SEO Campaign
              </a>
              <a href="#" className="seoBtn seoBtn-secondary">
                Free SEO Audit
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

export default SEOServiceListDetail;
