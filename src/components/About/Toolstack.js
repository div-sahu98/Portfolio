import React from "react";

import image1 from "../../Assets/clients/img1.png";
import image2 from "../../Assets/clients/img2.png";
import image3 from "../../Assets/clients/img3.png";
import image4 from "../../Assets/clients/img4.png";

function Toolstack() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image1,
    image2,
    image3,
    image4,
    image1,
    image2,
    image3,
    image4,
    image1,
    image2,
    image3,
    image4,
  ];
  return (
    <div className="main">
      <div className="fader"></div>
      <div className="marquee">
        <div className="marqueeContent">
          {new Array(5).fill("").map(() => {
            return images.map((i) => (
              <div className="marqueeItem">
                <img
                  src={i}
                  alt="client image"
                  style={{ height: 80, width: "auto", marginLeft: 40 }}
                />
              </div>
            ));
          })}
        </div>
      </div>
      {/* <Image src={clientImage} alt="client image" /> */}
    </div>
  );
}

export default Toolstack;
