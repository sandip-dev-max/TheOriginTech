import React from "react";
import "./WebAppServiceListDetail.css";
import Navbar from "../../Navbar/Navbar";
import Form from "../../Form/Form";
import Background from "../../Background/Background";
import WhatsappAndGoToTop from "../../WhatsappAndGoToTop/WhatsappAndGoToTop";
import Footer from "../../Footer/Footer";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNode,
  FaPython,
  FaPhp,
  FaDocker,
  FaAws,
  FaSwift,
} from "react-icons/fa";

import { FaFlutter } from "react-icons/fa6";

import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiDjango,
  SiExpress,
  SiGooglecloud,
  SiRedis,
  SiMysql,
  SiMongodb,
  SiKotlin,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandXamarin } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";
import { AiOutlineKubernetes } from "react-icons/ai";

const WebAppServiceListDetail = () => {
  return (
    <>
      <Navbar />
      <div className="WebAppServiceListDetailcontainer">
        <div className="headContainer">
          <h1 className="WebAppHero-title">Web & App Development</h1>
          <p className="WebAppHero-description">
            Transform your ideas into powerful digital solutions with our
            comprehensive web and mobile app development services. We combine
            cutting-edge technology with innovative design to create
            applications that drive results.
          </p>
          <div className="WebApphero-image">
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
                  id="codeGradient"
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
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width="600" height="300" fill="url(#bgGradient)" />

              <circle cx="80" cy="60" r="3" fill="#06b6d4" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.8;0.3;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="520" cy="240" r="2" fill="#ec4899" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.6;0.2;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="320" cy="80" r="4" fill="#10b981" opacity="0.7">
                <animate
                  attributeName="opacity"
                  values="0.7;0.3;0.7"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>

              <rect
                x="50"
                y="120"
                width="200"
                height="120"
                rx="10"
                fill="rgba(31, 41, 55, 0.8)"
                stroke="url(#codeGradient)"
                stroke-width="2"
              />
              <text
                x="60"
                y="145"
                fill="#06b6d4"
                font-family="monospace"
                font-size="12"
              >
                &lt;html&gt;
              </text>
              <text
                x="70"
                y="165"
                fill="#ffffff"
                font-family="monospace"
                font-size="10"
              >
                &lt;head&gt;
              </text>
              <text
                x="80"
                y="185"
                fill="#10b981"
                font-family="monospace"
                font-size="10"
              >
                &lt;title&gt;App&lt;/title&gt;
              </text>
              <text
                x="70"
                y="205"
                fill="#ffffff"
                font-family="monospace"
                font-size="10"
              >
                &lt;/head&gt;
              </text>
              <text
                x="70"
                y="225"
                fill="#ec4899"
                font-family="monospace"
                font-size="10"
              >
                &lt;body&gt;
              </text>

              <rect
                x="350"
                y="120"
                width="200"
                height="120"
                rx="10"
                fill="rgba(31, 41, 55, 0.8)"
                stroke="url(#codeGradient)"
                stroke-width="2"
              />
              <circle cx="370" cy="140" r="8" fill="#06b6d4" />
              <rect
                x="385"
                y="135"
                width="80"
                height="10"
                rx="5"
                fill="#374151"
              />
              <rect
                x="385"
                y="155"
                width="120"
                height="6"
                rx="3"
                fill="#4b5563"
              />
              <rect
                x="385"
                y="170"
                width="100"
                height="6"
                rx="3"
                fill="#4b5563"
              />
              <rect
                x="370"
                y="190"
                width="40"
                height="25"
                rx="8"
                fill="url(#codeGradient)"
              />
              <text
                x="390"
                y="207"
                fill="white"
                font-family="Arial"
                font-size="8"
                text-anchor="middle"
              >
                App
              </text>

              <path
                d="M250 180 Q300 120 350 180"
                stroke="url(#codeGradient)"
                stroke-width="3"
                fill="none"
                opacity="0.6"
                filter="url(#glow)"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,100;50,50;100,0;0,100"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>

              <g transform="translate(480, 40)">
                <rect
                  width="80"
                  height="50"
                  rx="25"
                  fill="rgba(6, 182, 212, 0.2)"
                  stroke="#06b6d4"
                  stroke-width="2"
                />
                <circle cx="20" cy="25" r="3" fill="#06b6d4" />
                <circle cx="40" cy="25" r="3" fill="#06b6d4" />
                <circle cx="60" cy="25" r="3" fill="#06b6d4" />
                <text
                  x="40"
                  y="35"
                  fill="#06b6d4"
                  font-family="Arial"
                  font-size="6"
                  text-anchor="middle"
                >
                  Mobile
                </text>
              </g>

              <g transform="translate(40, 40)">
                <rect
                  width="80"
                  height="50"
                  rx="8"
                  fill="rgba(139, 92, 246, 0.2)"
                  stroke="#8b5cf6"
                  stroke-width="2"
                />
                <rect
                  x="10"
                  y="10"
                  width="60"
                  height="4"
                  rx="2"
                  fill="#8b5cf6"
                />
                <rect
                  x="10"
                  y="20"
                  width="40"
                  height="4"
                  rx="2"
                  fill="#6b7280"
                />
                <rect
                  x="10"
                  y="30"
                  width="50"
                  height="4"
                  rx="2"
                  fill="#6b7280"
                />
                <text
                  x="40"
                  y="45"
                  fill="#8b5cf6"
                  font-family="Arial"
                  font-size="6"
                  text-anchor="middle"
                >
                  Web
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="webAppgrid = webApptech-grid webAppgrid grid webApptech-grid-3">
          <div className="webAppcard">
            <div className="webAppcard-icon webAppicon-blue">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="m8 12 4-8 4 8-4 8-4-8z" />
              </svg>
            </div>
            <h3 className="webAppcard-title">Web Development</h3>
            <p className="webAppcard-description">
              Creating powerful, responsive websites that deliver exceptional
              user experiences across all devices and browsers.
            </p>
            <ul className="webAppfeatures">
              <li>Responsive Design</li>
              <li>SEO Optimized</li>
              <li>Fast Loading</li>
              <li>Cross-Browser Compatible</li>
            </ul>
          </div>

          <div className="webAppcard">
            <div className="webAppcard-icon webAppicon-purple">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <h3 className="webAppcard-title">Mobile App Development</h3>
            <p className="webAppcard-description">
              Building native and cross-platform mobile applications that engage
              users and drive business growth.
            </p>
            <ul className="webAppfeatures">
              <li>iOS & Android</li>
              <li>Cross-Platform</li>
              <li>Push Notifications</li>
              <li>Offline Functionality</li>
            </ul>
          </div>

          <div className="webAppcard">
            <div className="webAppcard-icon webAppicon-green">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="webAppcard-title">Full-Stack Solutions</h3>
            <p className="webAppcard-description">
              Complete end-to-end development covering both frontend user
              interfaces and robust backend systems.
            </p>
            <ul className="webAppfeatures">
              <li>Frontend & Backend</li>
              <li>API Development</li>
              <li>Database Design</li>
              <li>Cloud Integration</li>
            </ul>
          </div>
        </div>

        <h2 className="webAppsection-title">Our Development Process</h2>
        <div className="webAppgrid = webApptech-grid webAppgrid grid webApptech-grid-4">
          <div className="webAppprocess-card">
            <div className="webAppprocess-step">01</div>
            <h4 className="webAppprocess-title">Discovery & Planning</h4>
            <p className="webAppprocess-description">
              Understanding your requirements, target audience, and business
              goals to create a comprehensive development strategy.
            </p>
          </div>
          <div className="webAppprocess-card">
            <div className="webAppprocess-step">02</div>
            <h4 className="webAppprocess-title">Design & Prototyping</h4>
            <p className="webAppprocess-description">
              Creating wireframes, mockups, and interactive prototypes to
              visualize the final product before development.
            </p>
          </div>
          <div className="webAppprocess-card">
            <div className="webAppprocess-step">03</div>
            <h4 className="webAppprocess-title">Development & Testing</h4>
            <p className="webAppprocess-description">
              Building your application using modern technologies with
              continuous testing to ensure quality and performance.
            </p>
          </div>
          <div className="webAppprocess-card">
            <div className="webAppprocess-step">04</div>
            <h4 className="webAppprocess-title">Deployment & Support</h4>
            <p className="webAppprocess-description">
              Launching your application and providing ongoing maintenance,
              updates, and technical support.
            </p>
          </div>
        </div>

        <div className="webApptech-section">
          <h2 className="section-title">Technology Stack</h2>
          <div className="webApptech-webAppgrid webApptech webApptech-grid">
            <div className="webApptech-category">
              <h4 className="webApptech-category-title">Frontend</h4>
              <div className="webApptech-item">
                <FaReact className="webApptech-item-icon" />
                React
              </div>
              <div className="webApptech-item">
                <FaVuejs className="webApptech-item-icon" />
                Vue.js
              </div>
              <div className="webApptech-item">
                <FaAngular className="webApptech-item-icon" />
                Angular
              </div>
              <div className="webApptech-item">
                <RiNextjsFill className="webApptech-item-icon" />
                Next.js
              </div>
              <div className="webApptech-item">
                <SiTypescript className="webApptech-item-icon" />
                TypeScript
              </div>
            </div>
            <div className="webApptech-category">
              <h4 className="webApptech-category-title">Backend</h4>
              <div className="webApptech-item">
                <FaNode className="webApptech-item-icon" />
                Node.js
              </div>
              <div className="webApptech-item">
                <FaPython className="webApptech-item-icon" />
                Python
              </div>
              <div className="webApptech-item">
                <FaPhp className="webApptech-item-icon" />
                PHP
              </div>
              <div className="webApptech-item">
                <SiExpress className="webApptech-item-icon" />
                Express.js
              </div>
              <div className="webApptech-item">
                <SiDjango className="webApptech-item-icon" />
                Django
              </div>
            </div>
            <div className="webApptech-category">
              <h4 className="webApptech-category-title">Mobile</h4>
              <div className="webApptech-item">
                <TbBrandReactNative className="webApptech-item-icon" />
                React Native
              </div>
              <div className="webApptech-item">
                <FaFlutter className="webApptech-item-icon" />
                Flutter
              </div>
              <div className="webApptech-item">
                <FaSwift className="webApptech-item-icon" />
                Swift
              </div>
              <div className="webApptech-item">
                <SiKotlin className="webApptech-item-icon" />
                Kotlin
              </div>
              <div className="webApptech-item">
                <TbBrandXamarin className="webApptech-item-icon" />
                Xamarin
              </div>
            </div>
            <div className="webApptech-category">
              <h4 className="webApptech-category-title">Database</h4>
              <div className="webApptech-item">
                <SiMongodb className="webApptech-item-icon" />
                MongoDB
              </div>
              <div className="webApptech-item">
                <BiLogoPostgresql className="webApptech-item-icon" />
                PostgreSQL
              </div>
              <div className="webApptech-item">
                <SiMysql className="webApptech-item-icon" />
                MySQL
              </div>
              <div className="webApptech-item">
                <IoLogoFirebase className="webApptech-item-icon" />
                Firebase
              </div>
              <div className="webApptech-item">
                <SiRedis className="webApptech-item-icon" />
                Redis
              </div>
            </div>
            <div className="webApptech-category">
              <h4 className="webApptech-category-title">Cloud</h4>
              <div className="webApptech-item">
                <FaAws className="webApptech-item-icon" />
                AWS
              </div>
              <div className="webApptech-item">
                <SiGooglecloud className="webApptech-item-icon" />
                Google Cloud
              </div>
              <div className="webApptech-item">
                <VscAzure className="webApptech-item-icon" />
                Azure
              </div>
              <div className="webApptech-item">
                <FaDocker className="webApptech-item-icon" />
                Docker
              </div>
              <div className="webApptech-item">
                <AiOutlineKubernetes className="webApptech-item-icon" />
                Kubernetes
              </div>
            </div>
          </div>
        </div>

        <div className="webAppbenefits-webAppgrid webAppbenefits webApptech-grid">
          <div>
            <h3 className="section-title">
              Why Choose Our Development Services?
            </h3>
            <div className="webAppbenefit-item">
              <svg
                className="webAppbenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <div>
                <h5 className="webAppbenefit-title">
                  Lightning Fast Performance
                </h5>
                <p className="webAppbenefit-desc">
                  Optimized code and architecture for maximum speed and
                  efficiency
                </p>
              </div>
            </div>
            <div className="webAppbenefit-item">
              <svg
                className="webAppbenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <circle cx="12" cy="16" r="1" />
                <path d="m7 11 0-4a5 5 0 0 1 10 0v4" />
              </svg>
              <div>
                <h5 className="webAppbenefit-title">Security First Approach</h5>
                <p className="webAppbenefit-desc">
                  Built-in security measures to protect your data and users
                </p>
              </div>
            </div>
            <div className="webAppbenefit-item">
              <svg
                className="webAppbenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <div>
                <h5 className="webAppbenefit-title">Scalable Architecture</h5>
                <p className="webAppbenefit-desc">
                  Future-proof solutions that grow with your business needs
                </p>
              </div>
            </div>
            <div className="webAppbenefit-item">
              <svg
                className="webAppbenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              <div>
                <h5 className="webAppbenefit-title">Rapid Development</h5>
                <p className="webAppbenefit-desc">
                  Agile methodology for faster time-to-market delivery
                </p>
              </div>
            </div>
          </div>
          <div className="webAppcta-card">
            <svg
              className="webAppcta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
              <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
            </svg>
            <h4 className="webAppcta-title">
              Ready to Build Something Amazing?
            </h4>
            <p className="webAppcta-description">
              Let's discuss your project and create a digital solution that
              exceeds your expewebAppctations.
            </p>
            <div className="webAppbtn-group">
              <a href="#" className="webAppbtn webAppbtn-primary">
                Start Project
              </a>
              <a href="#" className="webAppbtn webAppbtn-secondary">
                Learn More
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

export default WebAppServiceListDetail;
