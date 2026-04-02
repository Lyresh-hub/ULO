import { useState } from "react";
import buildingImg from "./assets/images/building.png";
import circleImg from "./assets/images/circle1.png";
import circleImg2 from "./assets/images/circle2.png";
import circleImg3 from "./assets/images/circle3.png";
import logo from "./assets/images/logo.png";

export default function ULOStudentPortal() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page">

      {/* LEFT SIDE */}
      <div className="leftPanel">
        <h1 className="schoolName">
          Unibersidad ng Lungsod ng Olongapo
        </h1>

        <div className="imageWrapper">
          <img src={circleImg} className="circleImg" />
          <img src={circleImg2} className="circleImg2" />
          <img src={circleImg3} className="circleImg3" />

          {/* LOGO ON TOP */}
          <img src={logo} className="logoOverlay" />

          <img src={buildingImg} className="buildingImg" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="rightPanel">
        <div className="card">
          <h2 className="title">Student Portal</h2>

          {/* STUDENT ID */}
          <div className="inputGroup">
            <span className="inputIcon">👤</span>
            <input
              className="input"
              type="text"
              placeholder="Student ID"
            />
          </div>

          {/* PASSWORD */}
          <div className="inputGroup">
            <span className="inputIcon">🔒</span>
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="eyeIcon"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </span>
          </div>

          <button className="loginBtn">Log in</button>

          <p className="register">Not yet registered?</p>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { height: 100%; width: 100%; }

        .page {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 40px 80px;
        }

        /* LEFT */
        .leftPanel {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }

               .schoolName {
          position: absolute;
          top: 250px;
          left: 230px;
          font-size: 40px;
          font-weight: bold;
          color: #1e2d7d;
          

          /* vertical spacing */
          margin-top: 50px;   /* moves it down from top */
        }


        .imageWrapper {
          position: relative;
          max-width: 500px;
        }

        .circleImg {
          position: absolute;
          top: -390px;
          left: -80px;
          width: 390px;
          z-index: 0;
        }

        .circleImg2 {
          position: absolute;
          bottom: -390px;
          left: -80px;
          width: 550px;
          z-index: 0;
        }

        .circleImg3 {
          position: absolute;
          bottom: -390px;
          left: 220px;
          width: 550px;
          z-index: 0;
        }

       .buildingImg {
          width: 750px;
          position: absolute;
          bottom: -295px;
          right: -350px;
          z-index: 1;
        }

                .logoOverlay {
          position: absolute;
          bottom: 130px; /* adjust vertical */
          right: -120px;  /* adjust horizontal */
          width: 300px;  /* adjust size */
          z-index: 2;
        }


        /* RIGHT */
        .rightPanel {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          width: 100%;
          max-width: 360px;
          padding: 35px;
          border-radius: 12px;
          border: 2px solid #2d2a7f;
          background: #f5f5f5;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .title {
          text-align: center;
          font-weight: bold;
        }

        /* INPUT STYLE (MATCH IMAGE) */
        .inputGroup {
          position: relative;
          width: 100%;
        }

        .input {
          width: 100%;
          padding: 12px 40px;
          border-radius: 6px;
          border: 1px solid #bfbfbf;
          background: #eeeeee;
          font-size: 14px;
        }

        .inputIcon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.6;
        }

        .eyeIcon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          opacity: 0.6;
        }

        .input:focus {
          outline: none;
          border-color: #2d2a7f;
          background: #ffffff;
        }

        .loginBtn {
          padding: 12px;
          background: #2d2a7f;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
        }

        .register {
          text-align: center;
          font-size: 12px;
          color: #555;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .page {
            flex-direction: column;
            padding: 30px;
          }

          .leftPanel, .rightPanel {
            width: 100%;
            align-items: center;
          }

          .buildingImg {
            position: relative;
            width: 100%;
            right: 0;
            bottom: 0;
          }

          .logoOverlay {
            bottom: 20px;
            right: 50%;
            transform: translateX(50%);
          }
        }

        @media (max-width: 500px) {
          .card {
            padding: 20px;
          }

          .schoolName {
            font-size: 16px;
            text-align: center;
          }

          .logoOverlay {
            width: 80px;
          }
        }
      `}</style>
    </div>
  );
}