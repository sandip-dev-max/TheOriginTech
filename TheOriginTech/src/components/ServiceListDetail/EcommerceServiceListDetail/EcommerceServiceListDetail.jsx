import React from "react";
import "./EcommerceServiceListDetail.css";
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
} from "react-icons/fa";

import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiDjango,
  SiExpress,
  SiGooglecloud,
  SiRedis,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";
import { AiOutlineKubernetes } from "react-icons/ai";

const EcommerceServiceListDetail = () => {
  return (
    <>
      <Navbar />
      <div className="ecommerceServiceListDetailContainer">
        <div className="ecommerceHeadContainer">
          <h1 className="ecommerceHero-title">Ecommerce Solutions</h1>
          <p className="ecommerceHero-description">
            Build, launch, and scale your online store with our comprehensive
            ecommerce platform. From secure payment gateways to advanced
            analytics, we provide everything you need to create successful
            online shopping experiences that drive conversions and maximize
            revenue.
          </p>
          <div className="ecommerceHero-image">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="ecommerceBgGradient"
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
                  id="ecommerceGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#00d4ff", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#0099cc", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#667eea", stopOpacity: 1 }}
                  />
                </linearGradient>
                <filter id="ecommerceGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width="600" height="300" fill="url(#ecommerceBgGradient)" />

              <circle cx="120" cy="70" r="3" fill="#00d4ff" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.8;0.3;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="460" cy="230" r="2" fill="#667eea" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.6;0.2;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="320" cy="50" r="4" fill="#0099cc" opacity="0.7">
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
                rx="15"
                fill="rgba(31, 41, 55, 0.9)"
                stroke="url(#ecommerceGradient)"
                strokeWidth="2"
              />

              <rect
                x="90"
                y="135"
                width="180"
                height="8"
                rx="4"
                fill="#00d4ff"
              />
              <rect
                x="90"
                y="150"
                width="180"
                height="80"
                rx="8"
                fill="#1f2937"
              />

              <rect
                x="100"
                y="160"
                width="50"
                height="30"
                rx="4"
                fill="#374151"
              />
              <rect
                x="160"
                y="160"
                width="50"
                height="30"
                rx="4"
                fill="#374151"
              />
              <rect
                x="220"
                y="160"
                width="50"
                height="30"
                rx="4"
                fill="#374151"
              />

              <rect
                x="100"
                y="200"
                width="170"
                height="20"
                rx="10"
                fill="url(#ecommerceGradient)"
              />
              <text
                x="185"
                y="212"
                fill="white"
                fontFamily="Arial"
                fontSize="10"
                textAnchor="middle"
              >
                BUY NOW
              </text>

              <g transform="translate(350, 140)">
                <rect
                  width="180"
                  height="120"
                  rx="15"
                  fill="rgba(31, 41, 55, 0.9)"
                  stroke="url(#ecommerceGradient)"
                  strokeWidth="2"
                />

                <path
                  d="M40 40h100l-10 60H50z"
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="3"
                />
                <circle cx="60" cy="110" r="5" fill="#00d4ff" />
                <circle cx="120" cy="110" r="5" fill="#00d4ff" />

                <rect
                  x="50"
                  y="50"
                  width="80"
                  height="8"
                  rx="4"
                  fill="#667eea"
                />
                <rect
                  x="50"
                  y="65"
                  width="60"
                  height="8"
                  rx="4"
                  fill="#0099cc"
                />
                <rect
                  x="50"
                  y="80"
                  width="70"
                  height="8"
                  rx="4"
                  fill="#00d4ff"
                />

                <text
                  x="90"
                  y="35"
                  fill="#00d4ff"
                  fontFamily="Arial"
                  fontSize="12"
                  textAnchor="middle"
                >
                  Shopping Cart
                </text>
              </g>

              <g transform="translate(50, 270)">
                <rect
                  width="40"
                  height="25"
                  rx="4"
                  fill="#00d4ff"
                  opacity="0.8"
                />
                <text
                  x="20"
                  y="17"
                  fill="white"
                  fontSize="8"
                  textAnchor="middle"
                >
                  VISA
                </text>
              </g>
              <g transform="translate(100, 270)">
                <rect
                  width="40"
                  height="25"
                  rx="4"
                  fill="#667eea"
                  opacity="0.8"
                />
                <text
                  x="20"
                  y="17"
                  fill="white"
                  fontSize="8"
                  textAnchor="middle"
                >
                  MC
                </text>
              </g>
              <g transform="translate(150, 270)">
                <rect
                  width="40"
                  height="25"
                  rx="4"
                  fill="#0099cc"
                  opacity="0.8"
                />
                <text
                  x="20"
                  y="17"
                  fill="white"
                  fontSize="6"
                  textAnchor="middle"
                >
                  PayPal
                </text>
              </g>

              <g transform="translate(480, 270)">
                <circle cx="15" cy="12" r="12" fill="rgba(0, 212, 255, 0.2)" />
                <path
                  d="M8 12l3 3 6-6"
                  stroke="#00d4ff"
                  strokeWidth="2"
                  fill="none"
                />
                <text x="35" y="16" fill="#00d4ff" fontSize="8">
                  Secure
                </text>
              </g>

              <g transform="translate(280, 50)">
                <rect
                  width="60"
                  height="40"
                  rx="8"
                  fill="rgba(0, 212, 255, 0.1)"
                />
                <path
                  d="M10 30 Q20 20 30 25 Q40 15 50 20"
                  stroke="#00d4ff"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="10" cy="30" r="2" fill="#00d4ff" />
                <circle cx="30" cy="25" r="2" fill="#667eea" />
                <circle cx="50" cy="20" r="2" fill="#0099cc" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="ecommerceContainer">
        <div className="ecommerceGrid ecommerceGrid-3">
          <div className="ecommerceCard">
            <div className="ecommerceCard-icon ecommerceIcon-blue">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m7 11 2-2-2-2" />
                <path d="m13 17 2-2-2-2" />
                <path d="M22 3 2 21" />
              </svg>
            </div>
            <h3 className="ecommerceCard-title">Custom Store Development</h3>
            <p className="ecommerceCard-description">
              Build fully customized online stores tailored to your brand with
              modern design, responsive layouts, and optimized user experiences
              that convert visitors into customers.
            </p>
            <ul className="ecommerceFeatures">
              <li>Responsive Web Design</li>
              <li>Mobile Optimization</li>
              <li>SEO-Ready Structure</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          <div className="ecommerceCard">
            <div className="ecommerceCard-icon ecommerceIcon-purple">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            </div>
            <h3 className="ecommerceCard-title">Payment Gateway Integration</h3>
            <p className="ecommerceCard-description">
              Secure payment processing with multiple payment options including
              credit cards, digital wallets, and bank transfers with PCI
              compliance and fraud protection.
            </p>
            <ul className="ecommerceFeatures">
              <li>Multiple Payment Methods</li>
              <li>SSL Security & Encryption</li>
              <li>PCI DSS Compliance</li>
              <li>Fraud Detection</li>
            </ul>
          </div>

          <div className="ecommerceCard">
            <div className="ecommerceCard-icon ecommerceIcon-green">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 3v5h5" />
                <path d="m3 8 4-4 4 4h7a4 4 0 0 1 0 8h-7" />
                <path d="m21 16-4 4-4-4" />
                <path d="M21 21v-5h-5" />
              </svg>
            </div>
            <h3 className="ecommerceCard-title">Inventory Management</h3>
            <p className="ecommerceCard-description">
              Advanced inventory tracking and management system with real-time
              stock updates, automated reorder points, and comprehensive product
              catalog management.
            </p>
            <ul className="ecommerceFeatures">
              <li>Real-time Stock Tracking</li>
              <li>Automated Reorder Alerts</li>
              <li>Product Catalog Management</li>
              <li>Multi-location Support</li>
            </ul>
          </div>
        </div>

        <h2 className="ecommerceSection-title">Our Development Process</h2>
        <div className="ecommerceGrid ecommerceGrid-4">
          <div className="ecommerceProcess-card">
            <div className="ecommerceProcess-step">01</div>
            <h4 className="ecommerceProcess-title">Discovery & Planning</h4>
            <p className="ecommerceProcess-description">
              We analyze your business requirements, target audience, and
              competition to create a comprehensive strategy for your ecommerce
              platform.
            </p>
          </div>
          <div className="ecommerceProcess-card">
            <div className="ecommerceProcess-step">02</div>
            <h4 className="ecommerceProcess-title">Design & Prototyping</h4>
            <p className="ecommerceProcess-description">
              Creating user-centered designs with wireframes, mockups, and
              interactive prototypes that focus on conversion optimization.
            </p>
          </div>
          <div className="ecommerceProcess-card">
            <div className="ecommerceProcess-step">03</div>
            <h4 className="ecommerceProcess-title">
              Development & Integration
            </h4>
            <p className="ecommerceProcess-description">
              Building your store with cutting-edge technologies, integrating
              payment gateways, and implementing all required functionalities.
            </p>
          </div>
          <div className="ecommerceProcess-card">
            <div className="ecommerceProcess-step">04</div>
            <h4 className="ecommerceProcess-title">Testing & Launch</h4>
            <p className="ecommerceProcess-description">
              Comprehensive testing for functionality, security, and performance
              followed by deployment and ongoing support for your success.
            </p>
          </div>
        </div>

        <div className="ecommerceTech-section">
          <h2 className="ecommerceSection-title">Platforms & Technologies</h2>
          <div className="ecommerceTech-grid">
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

        <div className="ecommerceBenefits-grid">
          <div>
            <h3 className="ecommerceSection-title">
              Why Choose Our Ecommerce Solutions?
            </h3>
            <div className="ecommerceBenefit-item">
              <svg
                className="ecommerceBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2 2 7l10 5 10-5-10-5z" />
                <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
              </svg>
              <div>
                <h5 className="ecommerceBenefit-title">
                  Scalable Architecture
                </h5>
                <p className="ecommerceBenefit-desc">
                  Built to grow with your business, handling increased traffic
                  and transactions seamlessly.
                </p>
              </div>
            </div>
            <div className="ecommerceBenefit-item">
              <svg
                className="ecommerceBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="m7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <div>
                <h5 className="ecommerceBenefit-title">Enterprise Security</h5>
                <p className="ecommerceBenefit-desc">
                  Bank-level security with SSL encryption, PCI compliance, and
                  advanced fraud protection.
                </p>
              </div>
            </div>
            <div className="ecommerceBenefit-item">
              <svg
                className="ecommerceBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18l-2 13H5L3 6Z" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
              <div>
                <h5 className="ecommerceBenefit-title">
                  Conversion Optimization
                </h5>
                <p className="ecommerceBenefit-desc">
                  Optimized checkout processes and user experience designed to
                  maximize sales conversion rates.
                </p>
              </div>
            </div>
            <div className="ecommerceBenefit-item">
              <svg
                className="ecommerceBenefit-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <div>
                <h5 className="ecommerceBenefit-title">24/7 Support</h5>
                <p className="ecommerceBenefit-desc">
                  Round-the-clock technical support and maintenance to ensure
                  your store runs smoothly.
                </p>
              </div>
            </div>
          </div>
          <div className="ecommerceCta-card">
            <svg
              className="ecommerceCta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m8 3 4 8 5-5v11H3V7l5 5" />
            </svg>
            <h4 className="ecommerceCta-title">Ready to Launch Your Store?</h4>
            <p className="ecommerceCta-description">
              Let's build a powerful ecommerce platform that drives sales and
              grows your business. From concept to launch, we're with you every
              step.
            </p>
            <div className="ecommerceBtn-group">
              <a href="#" className="ecommerceBtn ecommerceBtn-primary">
                Start Your Project
              </a>
              <a href="#" className="ecommerceBtn ecommerceBtn-secondary">
                View Our Work
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

export default EcommerceServiceListDetail;
