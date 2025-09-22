import React, { useState } from "react";
import ProductImage01 from "../src/assets/NikeAirMax.png";
import ProductImage02 from "../src/assets/NikeAirMax270React.png";
import ProductImage03 from "../src/assets/NikeAirMax270.png";
import ProductImage04 from "../src/assets/NikeAirMax-02.png";
import ProductImage05 from "../src/assets/NikeAirMax-03.png";
import ProductImage06 from "../src/assets/NikeAirMax-04.png";
import BannerImage from "../src/assets/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png";
import Icon from "../src/assets/Icon.png";
import FooterImage from "../src/assets/BOTTOM.png"

const products = [
  {
    id: 1,
    image: ProductImage01 ,
    name: "Nike Air Max 270 React",
    rating: 4,
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    hot: true,
  },
  {
    id: 2,
    image: ProductImage02,
    name: "Nike Air Max 270 React",
    rating: 4,
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    hot: true,
  },
  {
    id: 3,
    image: ProductImage03 ,
    name: "Nike Air Max 270 React",
    rating: 4,
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    hot: true,
  },
  {
    id: 4,
    image: ProductImage04 ,
    name: "Nike Air Max 270 React",
    rating: 3,
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    hot: true,
  },
  {
    id: 5,
    image: ProductImage05 ,
    name: "Nike Air Max 270 React",
    rating: 4,
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    hot: true,
  },
  {
    id: 6,
    image: ProductImage06 ,
    name: "Nike Air Max 270 React",
    rating: 4,
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    hot: true,
  },
];

// Star Component for rating
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        style={{
          color: i <= rating ? "#FFC107" : "#E0E0E0",
          fontSize: "14px",
          marginRight: 2,
        }}
      >
        &#9733;
      </span>
    );
  }
  return <div>{stars}</div>;
};

const leftSidebarStyle = {
  width: "260px",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  fontSize: "14px",
};

const linkColor = "#50a4ff";

const colorCircleStyle = (color) => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  backgroundColor: color,
  marginRight: 10,
  border: "1.5px solid #909090",
  cursor: "pointer",
});

const buttonMoreStyle = {
  width: "100%",
  marginTop: 20,
  height: 38,
  fontWeight: "600",
  fontSize: 14,
  backgroundColor: "#f9f9f9",
  color: "#1b1b1b",
  border: "1px solid #f8f8f8",
  cursor: "pointer",
};

const Header = () => (
  <header
    style={{
      padding: "12px 40px",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #eee",
      justifyContent: "space-between",
      backgroundColor: "#fff",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          backgroundColor: "#50a4ff",
          width: 32,
          height: 32,
          borderRadius: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
          overflow: "hidden",
        }}
      >
        <img src={Icon} alt="Icon" className="w-2 h-2" />
      </div>
      <strong>E-Comm</strong>
      <nav style={{ marginLeft: 407, fontWeight: 500, fontSize: 15, display: "flex", justifyContent: "center", gap: 16, flex: 1, }}>
        <a
          href="#home"
          style={{ marginRight: 16, color: "#50a4ff", textDecoration: "none" }}
        >
          HOME
        </a>
        <a href="#bag" style={{ marginRight: 16, color: "#000" }}>
          BAG
        </a>
        <a href="#sneakers" style={{ marginRight: 16, color: "#000" }}>
          SNEAKERS
        </a>
        <a href="#belt" style={{ marginRight: 16, color: "#000" }}>
          BELT
        </a>
        <a href="#contact" style={{ color: "#000" }}>
          CONTACT
        </a>
      </nav>
    </div>
    <div style={{ display: "flex", alignItems: "center", fontSize: 14 }}>
      <svg
        style={{ marginRight: 8 }}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        stroke="#999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-shopping-cart"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61H19a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      Items $0.00
    </div>
  </header>
);

const Sidebar = () => {
  const [price, setPrice] = useState(20);

  return (
    <aside style={leftSidebarStyle}>
      {/* Hot Deals */}
      <section>
        <h4 style={{ fontWeight: "700", marginBottom: 8 }}>Hot Deals</h4>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            Nike <span style={{ float: "right", color: "#999" }}>2</span>
          </li>
          <li style={{ marginBottom: 8 }}>
            <a href="#airmax" style={{ textDecoration: "none", color: linkColor }}>
              Airmax
            </a>{" "}
            <span style={{ float: "right", color: "#50a4ff" }}>48</span>
          </li>
          <li>
            Nike <span style={{ float: "right", color: "#999" }}>14</span>
          </li>
          <li>
            Adidas <span style={{ float: "right", color: "#999" }}>15</span>
          </li>
          <li>
            Vans <span style={{ float: "right", color: "#999" }}>23</span>
          </li>
          <li>
            All Stars <span style={{ float: "right", color: "#999" }}>1</span>
          </li>
          <li>
            Adidas <span style={{ float: "right", color: "#999" }}>95</span>
          </li>
        </ul>
      </section>

      {/* Prices */}
      <section style={{ marginTop: 32 }}>
        <h4 style={{ fontWeight: "700", marginBottom: 8 }}>PRICES</h4>
        <div style={{ display: "flex", alignItems: "center", fontSize: 14 }}>
          <span>Ranger:</span>
          <span style={{ marginLeft: "auto" }}>${(13.99).toFixed(2)} - ${(25.99).toFixed(2)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ width: "100%", marginTop: 8 }}
        />
      </section>

      {/* Color */}
      <section style={{ marginTop: 30 }}>
        <h4 style={{ fontWeight: "700", marginBottom: 8 }}>COLOR</h4>
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <span style={{ ...colorCircleStyle("#1B72FF") }}></span>
          <span style={{ ...colorCircleStyle("#FF0000") }}></span>
          <span style={{ ...colorCircleStyle("#0B0B0B") }}></span>
          <span style={{ ...colorCircleStyle("#FCFF00") }}></span>
          <span style={{ ...colorCircleStyle("#FF00C8") }}></span>
          <span style={{ ...colorCircleStyle("#EEE6ED") }}></span>
        </div>
      </section>

      {/* Brand */}
      <section style={{ marginTop: 32 }}>
        <h4 style={{ fontWeight: "700", marginBottom: 8 }}>BRAND</h4>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            Nike <span style={{ float: "right", color: "#999" }}>99</span>
          </li>
          <li>
            <a href="#nike" style={{ textDecoration: "none", color: linkColor }}>
              Nike
            </a>{" "}
            <span style={{ float: "right", color: "#50a4ff" }}>99</span>
          </li>
          <li>
            Adidas <span style={{ float: "right", color: "#999" }}>99</span>
          </li>
          <li>
            Siemens <span style={{ float: "right", color: "#999" }}>99</span>
          </li>
        </ul>
      </section>

      <button style={buttonMoreStyle}>MORE</button>
    </aside>
  );
};

const Banner = () => {
  const bannerStyle = {
    backgroundColor: "#50a4ff",
    marginBottom: 20,
    borderRadius: 8,
    padding: "30px 20px",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <section style={bannerStyle}>
      <div style={{ maxWidth: 450 }}>
        <h2 style={{ marginBottom: 6, fontWeight: "700", fontSize: 24 }}>
          Adidas Men Running
          <br />
          <span style={{ fontWeight: "700" }}>Sneakers</span>
        </h2>
        <p
          style={{
            fontSize: 11,
            fontWeight: "600",
            marginBottom: 12,
            opacity: 0.85,
          }}
        >
          Performance and design. Taken right to the edge
        </p>
        <a
          href="#shop"
          style={{
            fontSize: 10,
            textDecoration: "underline",
            fontWeight: "700",
            color: "rgba(255,255,255,0.85)",
            cursor: "pointer",
          }}
        >
          SHOP NOW
        </a>
      </div>
      <img
        src= {BannerImage}
        alt="Adidas Men's Running Sneakers"
        style={{ width: 220, borderRadius: 8, userSelect: "none" }}
      />
    </section>
  );
};

const ProductsGrid = () => {
  return (
    <div style={{ marginTop: 10 }}>
      {/* Controls bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: 16,
          fontSize: 13,
          alignItems: "center",
        }}
      >
        <div>13 Items</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          Sort By:&nbsp;
          <select style={{ marginRight: 20 }}>
            <option>Name</option>
            <option>Price</option>
            <option>Rating</option>
          </select>
          Show&nbsp;
          <select>
            <option>12</option>
            <option>24</option>
            <option>48</option>
          </select>
        </div>
        <div>
          <button
            style={{
              border: "none",
              backgroundColor: "#eee",
              padding: 8,
              borderRadius: 4,
              marginRight: 8,
              cursor: "pointer",
            }}
            title="Grid view"
          >
            &#x25A6;
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#fff",
              padding: 8,
              borderRadius: 4,
              cursor: "pointer",
            }}
            title="List view"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Products grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {products.map(
          ({
            id,
            image,
            name,
            rating,
            price,
            originalPrice,
            discount,
            hot,
          }) => (
            <div
              key={id}
              style={{
                borderRadius: 5,
                padding: 12,
                backgroundColor: "#f4f4f4",
                position: "relative",
                boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
                minHeight: 280,
              }}
            >
              {hot && (
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    backgroundColor: "#FF4C5B",
                    borderRadius: 2,
                    padding: "4px 8px",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                >
                  HOT
                </div>
              )}

              <img
                src={image}
                alt={name}
                style={{ width: "100%", maxHeight: 130, objectFit: "contain" }}
              />
              <h4
                style={{
                  marginTop: 8,
                  fontSize: 14,
                  fontWeight: "700",
                  color: "#003566",
                }}
              >
                {name}
              </h4>
              <StarRating rating={rating} />
              <div style={{ marginTop: 10 }}>
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    color: "#50a4ff",
                  }}
                >
                  ${price.toFixed(2)}
                </span>{" "}
                <span
                  style={{
                    fontSize: 12,
                    textDecoration: "line-through",
                    color: "#C7C7C7",
                    marginLeft: 5,
                  }}
                >
                  ${originalPrice.toFixed(2)}
                </span>{" "}
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: 12,
                    color: "#FF5D67",
                  }}
                >
                  {discount}% Off
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const Pagination = () => {
  const [active, setActive] = useState(3);
  const pages = [1, 2, 3, 4, 5];

  return (
    <div
      style={{
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        fontSize: 14,
      }}
    >
      {pages.map((page) => (
        <div
          key={page}
          onClick={() => setActive(page)}
          style={{
            backgroundColor: active === page ? "#50a4ff" : "#f9f9f9",
            color: active === page ? "#fff" : "#1b1b1b",
            borderRadius: 3,
            width: 28,
            height: 28,
            textAlign: "center",
            lineHeight: "28px",
            cursor: "pointer",
            fontWeight: active === page ? "700" : "400",
          }}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

const Footer = () => (
  <footer
    style={{
      marginTop: 40,
      backgroundColor: "#add8f7",
      padding: 40,
      fontSize: 12,
      color: "#003566",
      fontWeight: "500",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 32,
        marginBottom: 40,
      }}
    >
      {/* E-Comm */}
      <div style={{ maxWidth: 360 }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
          <div
            style={{
              backgroundColor: "#50a4ff",
              width: 32,
              height: 32,
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              overflow: "hidden",
            }}
          >
            <img src={Icon} alt="Icon" style={{ width: 14, height: 14 }} />
          </div>
          <strong>E-Comm</strong>
        </div>
        <p style={{ fontSize: 11, lineHeight: 1.5 }}>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever. Since the 1500s, when an unknown printer.
        </p>
      </div>

      {/* Follow Us */}
      <div style={{ maxWidth: 140 }}>
        <h5 style={{ fontWeight: "600", marginBottom: 8 }}>Follow Us</h5>
        <p style={{ fontSize: 11, lineHeight: 1.3 }}>
          Since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
        <div style={{ marginTop: 6, display: "flex", gap: 12 }}>
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            style={{ color: "#003566" }}
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="#003566"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            style={{ color: "#003566" }}
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="#003566"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Contact Us */}
      <div style={{ maxWidth: 160, fontSize: 11 }}>
        <h5 style={{ fontWeight: "600" }}>Contact Us</h5>
        <address style={{ lineHeight: 1.6, fontStyle: "normal" }}>
          E-Comm, 4578 Marmora Road,
          <br />
          Glasgow D04 89GR
        </address>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
        marginBottom: 40,
      }}
    >
      {["Information", "Service", "My Account", "Our Offers"].map((section, idx) => (
        <div key={idx} style={{ minWidth: 160 }}>
          <strong>{section}</strong>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              marginTop: 8,
              lineHeight: 1.6,
              fontSize: 11,
            }}
          >
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      ))}
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontWeight: "600",
          fontSize: 11,
          color: "#0a1638",
          margin: 0,
        }}
      >
        &copy; 2024 E-Comm. All rights reserved.
      </p>

      <img
        alt="footer-image"
        src={FooterImage}
        style={{ height: 22, objectFit: "contain" }}
      />
    </div>
  </footer>
);


export default function EcommApp() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Header />
      <main style={{ display: "flex", padding: 24, gap: 24 }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Banner />
          <ProductsGrid />
          <Pagination />
        </div>
      </main>
      <Footer />
    </div>
  );
}