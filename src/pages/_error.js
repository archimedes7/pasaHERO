// pages/_error.js
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Error = ({ statusCode }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#f5f5f5",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="/500-error.png"
          alt="500 Error Illustration"
          style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}
        />
        <h1 style={{ fontSize: "24px", margin: "20px 0" }}>
          500 Internal Server Error
        </h1>
        <p style={{ fontSize: "16px", color: "#666" }}>
          We encountered an unexpected error. Our team is already on it to fix
          the issue. Please try again later or go back to the homepage.
        </p>
        <Link href="/">
          <a
            style={{
              display: "inline-block",
              marginTop: "20px",
              fontSize: "16px",
              color: "#0070f3",
            }}
          >
            Go to Homepage
          </a>
        </Link>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default Error;
