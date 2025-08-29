import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/Background/Background";
import WhatsappAndGoToTop from "../../components/WhatsappAndGoToTop/WhatsappAndGoToTop";
import "./Pricing.css";

const Pricing = () => {
  // ✅ Handle Select Plan → WhatsApp
  const handleSelectPlan = (planName, planPrice) => {
    const phoneNumber = "9779704525401"; // Your WhatsApp number (international format, no + or spaces)
    const message = `Hello, I am interested in the ${planName} plan (Rs ${planPrice}/month). Please provide me more details.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const pricingData = [
    {
      category: "Web & App Development",
      plans: [
        {
          name: "Basic",
          price: 14999,
          features: [
            "Static Website (5 pages)",
            "Responsive Design",
            "Contact Form",
            "Basic SEO Setup",
            "Domain Setup",
            "3 Months Support",
          ],
        },
        {
          name: "Standard",
          price: 24999,
          features: [
            "Dynamic Website (10 pages)",
            "CMS Integration",
            "Database Setup",
            "Payment Gateway",
            "Mobile App (Basic)",
            "6 Months Support",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 34999,
          features: [
            "Custom Web Application",
            "Advanced CMS",
            "API Development",
            "Cross-platform Mobile App",
            "Cloud Deployment",
            "12 Months Support",
          ],
        },
      ],
    },
    {
      category: "Social Media",
      plans: [
        {
          name: "Basic",
          price: 12999,
          features: [
            "2 Platforms Management",
            "15 Posts per Month",
            "Content Creation",
            "Basic Analytics",
            "Community Management",
          ],
        },
        {
          name: "Standard",
          price: 17999,
          features: [
            "4 Platforms Management",
            "30 Posts per Month",
            "Video Content",
            "Advanced Analytics",
            "Paid Ads Setup",
            "Monthly Reports",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 24999,
          features: [
            "6 Platforms Management",
            "60 Posts per Month",
            "Professional Video Content",
            "Influencer Outreach",
            "Advanced Campaign Management",
            "Weekly Reports",
          ],
        },
      ],
    },
    {
      category: "PPC Advertising",
      plans: [
        {
          name: "Basic",
          price: 11999,
          features: [
            "Google Ads Setup",
            "Keyword Research",
            "Ad Copy Creation",
            "Basic Optimization",
            "Monthly Report",
          ],
        },
        {
          name: "Standard",
          price: 17999,
          features: [
            "Multi-platform Ads",
            "Advanced Targeting",
            "A/B Testing",
            "Conversion Tracking",
            "Bi-weekly Optimization",
            "Detailed Analytics",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 27999,
          features: [
            "Enterprise Ad Management",
            "Dynamic Retargeting",
            "Advanced Analytics",
            "Custom Landing Pages",
            "Weekly Optimization",
            "Dedicated Account Manager",
          ],
        },
      ],
    },
    {
      category: "SEO - Search Engine Optimization",
      plans: [
        {
          name: "Basic",
          price: 9999,
          features: [
            "Website Audit",
            "Keyword Research",
            "On-page Optimization",
            "Meta Tags Setup",
            "Monthly Report",
          ],
        },
        {
          name: "Standard",
          price: 19999,
          features: [
            "Comprehensive SEO Audit",
            "Content Optimization",
            "Link Building",
            "Local SEO",
            "Technical SEO",
            "Bi-weekly Reports",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 29999,
          features: [
            "Enterprise SEO Strategy",
            "Advanced Link Building",
            "Content Marketing",
            "Competitor Analysis",
            "Schema Markup",
            "Weekly Performance Reports",
          ],
        },
      ],
    },
    {
      category: "Content Marketing",
      plans: [
        {
          name: "Basic",
          price: 7999,
          features: [
            "4 Blog Posts per Month",
            "Content Strategy",
            "Basic Graphics",
            "Social Media Integration",
            "SEO Optimization",
          ],
        },
        {
          name: "Standard",
          price: 12999,
          features: [
            "8 Blog Posts per Month",
            "Video Content",
            "Infographics",
            "Email Marketing",
            "Content Distribution",
            "Analytics Tracking",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 17999,
          features: [
            "15 Blog Posts per Month",
            "Professional Video Production",
            "Podcast Content",
            "Advanced Content Strategy",
            "Multi-channel Distribution",
            "Comprehensive Analytics",
          ],
        },
      ],
    },
    {
      category: "Ecommerce Solutions",
      plans: [
        {
          name: "Basic",
          price: 29999,
          features: [
            "Basic Online Store",
            "Product Catalog (50 items)",
            "Payment Gateway",
            "Inventory Management",
            "Mobile Responsive",
          ],
        },
        {
          name: "Standard",
          price: 39999,
          features: [
            "Advanced Online Store",
            "Unlimited Products",
            "Multi-payment Options",
            "Advanced Analytics",
            "Marketing Tools",
            "Customer Support System",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 49999,
          features: [
            "Enterprise Ecommerce Platform",
            "Multi-vendor Support",
            "Advanced Customization",
            "API Integrations",
            "Advanced Security",
            "Dedicated Support Team",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="pricing-container">
        {pricingData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="plans-grid">
              {category.plans.map((plan, planIndex) => (
                <div
                  key={planIndex}
                  className={`plan-card ${plan.popular ? "popular" : ""}`}
                >
                  {plan.popular && (
                    <div className="popular-badge">Best Value</div>
                  )}
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price">
                      <span className="currency">Rs</span>
                      <span className="amount">
                        {plan.price.toLocaleString()}
                      </span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="features-list">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <span className="checkmark">✓</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* ✅ Updated Button with WhatsApp */}
                  <button
                    className="select-btn"
                    onClick={() => handleSelectPlan(plan.name, plan.price)}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Background />
      <Form />
      <Footer />
      <WhatsappAndGoToTop />
    </>
  );
};

export default Pricing;
