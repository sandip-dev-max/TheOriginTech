import React, { useState } from "react";
import "./Categories.css";

// Import all your images
import design1 from "../../assets/ourdesigns/design1.jpg";
import design2 from "../../assets/ourdesigns/design2.jpg";
import design3 from "../../assets/ourdesigns/design3.jpg";
import design4 from "../../assets/ourdesigns/design4.jpg";
import design5 from "../../assets/ourdesigns/design5.jpg";
import design6 from "../../assets/ourdesigns/design6.jpg";
import design7 from "../../assets/ourdesigns/design7.jpg";
import design8 from "../../assets/ourdesigns/design8.jpg";
import design9 from "../../assets/ourdesigns/design9.jpg";
import design10 from "../../assets/ourdesigns/design10.jpg";
import design11 from "../../assets/ourdesigns/design11.jpg";
import design12 from "../../assets/ourdesigns/design12.jpg";
import design13 from "../../assets/ourdesigns/design13.jpg";
import design14 from "../../assets/ourdesigns/design14.jpg";
import design15 from "../../assets/ourdesigns/design15.jpg";
import design16 from "../../assets/ourdesigns/design16.jpg";
import design17 from "../../assets/ourdesigns/design17.jpg";
import design18 from "../../assets/ourdesigns/design18.jpeg";
import design19 from "../../assets/ourdesigns/design19.jpg";
import design20 from "../../assets/ourdesigns/design20.jpeg";
import design21 from "../../assets/ourdesigns/design21.jpeg";
import design22 from "../../assets/ourdesigns/design22.jpeg";
import design23 from "../../assets/ourdesigns/design23.jpeg"
import design24 from "../../assets/ourdesigns/design24.jpeg"
import design25 from "../../assets/ourdesigns/design25.jpeg"

const Categories = () => {
  const categories = {
    "Graphic Design": [
      design1, design2, design3, design4, design5, design6, design7, design8,
      design9, design10, design11, design12, design13, design14, design15,
      design16, design17, design18, design19, design20, design21, design22,
      design23, design24, design25
    ],
    "Web & App Development": [design1, design2, design3, design4], // placeholder
    "Digital Marketing": [design5, design6, design7, design8], // placeholder
  };

  const [activeCategory, setActiveCategory] = useState("Graphic Design");

  return (
    <section className="categories-section">
      <h2 className="categories-title">Our Designs</h2>

      {/* Category Buttons */}
      <div className="category-buttons">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            className={`category-btn ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="designs-grid">
        {categories[activeCategory].map((design, index) => (
          <div className="design-card" key={index}>
            <img src={design} alt={`Design ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
