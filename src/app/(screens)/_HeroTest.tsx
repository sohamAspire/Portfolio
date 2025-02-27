// "use client";

// import React from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import Image from "next/image";
// import Img1 from "../../../public/mountain_layer_1.png"
// import Img2 from "../../../public/mountain_layer_2.png"
// import Img3 from "../../../public/mountain_layer_3.png"


// export default function MountainParallax() {
//   return (
//     <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
//       <Parallax pages={3}>
//         {/* Background Layer */}
//         <ParallaxLayer
//           offset={0}
//           speed={0.2}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Image
//             src={Img1}
//             alt="Background Mountains"
//             width={100}
//             height={100}
//             quality={100}
//             style={{ width: "100%", objectFit: "cover" }}
//           />
//         </ParallaxLayer>

//         {/* Middle Layer */}
//         <ParallaxLayer
//           offset={0.2}
//           speed={0.4}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Image
//             src={Img2}            
//             alt="Middle Mountains"
//             width={100}
//             height={100}
//             quality={100}
//             style={{ width: "80%", objectFit: "cover" }}
//           />
//         </ParallaxLayer>

//         {/* Foreground Layer */}
//         <ParallaxLayer
//           offset={0.4}
//           speed={0.6}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Image
//             src={Img3}
//             alt="Foreground Mountains"
//             width={100}
//             height={100}
//             quality={100}
//             style={{ width: "60%", objectFit: "cover" }}
//           />
//         </ParallaxLayer>
//       </Parallax>
//     </div>
//   );
// }
