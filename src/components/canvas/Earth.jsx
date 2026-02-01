import React from "react";

const EarthCSS = () => {
  return (
    <>
      <style>{`
        .center-wrapper {
          width: 100%;
         height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .earth-container {
          width: 350px;
          height: 350px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .earth {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          position: relative;
          background: 
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(0,0,0,0.3) 0%, transparent 50%),
            url('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
          background-size: cover;
          box-shadow: 
            inset -40px -40px 80px rgba(0,0,0,0.8),
            inset 20px 20px 40px rgba(255,255,255,0.1),
            0 0 60px rgba(100, 150, 255, 0.3),
            0 0 120px rgba(100, 150, 255, 0.1);
          animation: earthRotate 20s linear infinite;
        }

        .earth::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            transparent,
            rgba(100,180,255,0.4),
            transparent
          );
          animation: ringsRotate 8s linear infinite;
          filter: blur(2px);
        }

        .earth::after {
          content: '';
          position: absolute;
          top: -35px;
          left: -35px;
          right: -35px;
          bottom: -35px;
          border-radius: 50%;
          background: conic-gradient(
            from 180deg,
            transparent,
            rgba(200,100,255,0.3),
            transparent
          );
          animation: ringsRotateReverse 12s linear infinite;
          filter: blur(3px);
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid transparent;
          animation: pulse 3s ease-in-out infinite;
        }

        .ring-1 {
          width: 320px;
          height: 320px;
          border-top-color: rgba(100,180,255,0.5);
        }

        .ring-2 {
          width: 360px;
          height: 360px;
          border-bottom-color: rgba(255,100,200,0.4);
        }

        .ring-3 {
          width: 400px;
          height: 400px;
          border-top-color: rgba(150,100,255,0.3);
        }

        .stars {
          position: absolute;
          inset: 0;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 2s infinite;
        }

        .star:nth-child(1){top:10%;left:20%}
        .star:nth-child(2){top:20%;left:80%}
        .star:nth-child(3){top:30%;left:10%}
        .star:nth-child(4){top:40%;left:90%}
        .star:nth-child(5){top:60%;left:15%}
        .star:nth-child(6){top:70%;left:85%}
        .star:nth-child(7){top:80%;left:30%}
        .star:nth-child(8){top:15%;left:50%}
        .star:nth-child(9){top:50%;left:5%}
        .star:nth-child(10){top:85%;left:70%}

        @keyframes earthRotate {
          from { background-position: 0% center; }
          to { background-position: 200% center; }
        }

        @keyframes ringsRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ringsRotateReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: .5 }
          50% { transform: scale(1.05); opacity: 1 }
        }

        @keyframes twinkle {
          0%,100% { opacity: .3 }
          50% { opacity: 1 }
        }
      `}</style>

      <div className="center-wrapper">
        <div className="earth-container">
          <div className="stars">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="star" />
            ))}
          </div>
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
          <div className="earth" />
        </div>
      </div>
    </>
  );
};

const EarthCanvas = () => {
  return <EarthCSS />;
};

export default EarthCanvas;
