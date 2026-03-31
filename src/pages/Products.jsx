import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const productData = [
  {
    title: "Silo Accessories",
    description:
      "We offer a complete range of accessories for silo systems, ensuring optimal performance and safety. Our products include level indicators, pressure relief valves, aeration pads, and other essential components.",
    folder: "Silo Accessories",
    variants: [
      {
        name: "AERATION PAD",
        image: "/products/SILO ACCESSORIES/AREATION PAD.png",
        info: "Ensures uniform air flow and smooth material discharge in silos.",
        features: "Durable, clog-resistant, easy to install."
      },
      {
        name: "BUTTER FLY VALVE FOR CEMENT",
        image:"/products/SILO ACCESSORIES/BUTTER FLY VALVE FOR CEMENT.png",
        info: "Controls cement flow in silo pipelines.",
        features: "Precision sealing, heavy-duty construction."
      },
      {
        name: "BUTTER FLY VALVE FOR WATER",
        image: "/products/SILO ACCESSORIES/BUTTER FLY VALVE FOR WATER.png",
        info: "Used to control water supply flow in pipelines.",
        features: "Corrosion resistant, long lifespan."
      },
      {
        name: "BUTTERFLY VALVE",
        image: "/products/SILO ACCESSORIES/BUTTERFLY VALVE.png",
        info: "General-purpose valve for silo discharge.",
        features: "Quick operation, compact design."
      },
      {
        name: "LEVEL INDICATOR",
        image: "/products/SILO ACCESSORIES/LEVEL INDICATOR.png",
        info: "Detects material level inside the silo.",
        features: "Accurate, weather-resistant, low maintenance."
      },
      {
        name: "MANUVUAL LEVER",
        image: "/products/SILO ACCESSORIES/MANUVAL LEVER.png",
        info: "Provides manual control of silo operations.",
        features: "Simple mechanism, heavy-duty metal body."
      },
      {
        name: "PENUMATIC ACTUATOR",
        image: "/products/SILO ACCESSORIES/PENUMATIC ACTUATOR.png",
        info: "Automates valve operation using compressed air.",
        features: "Energy efficient, fast response."
      },
      {
        name: "PRESSURE RELIEF VALVE",
        image: "/products/SILO ACCESSORIES/PRESSURE RELIEF VALVE.png",
        info: "Protects silos from overpressure conditions.",
        features: "Spring-loaded, reliable venting."
      }
    ]
  },
  {
    title: "Conveyor Spares",
    description:
      "Our conveyor spares include high-quality rollers, belts, and coupling elements. These are designed to reduce downtime and ensure efficient material handling in industrial environments.",
    folder: "Conveyor Spares",
    variants: [
      {
        name: "Chevron Belt",
        image: "/products/Conveyor Spares/CHEVRON BELT.png",
        info: "Used for inclined conveying of bulk materials.",
        features: "High grip, wear-resistant surface."
      },
      {
        name: "Drum",
        image: "/products/Conveyor Spares/DRUM.png",
        info: "Drives or redirects conveyor belts.",
        features: "Heavy-duty construction, anti-corrosive."
      },
      {
        name: "Gear Box For Conveyor",
        image: "/products/Conveyor Spares/GEAR BOX FOR CONVEYOR.png",
        info: "Transmits torque to conveyor drive systems.",
        features: "High efficiency, robust gear train."
      },
      {
        name: "Impact Roller",
        image: "/products/Conveyor Spares/IMPACT ROLLERS.png",
        info: "Placed at loading points to absorb shock.",
        features: "Rubber-coated, long-lasting."
      },
      {
        name: "Return Roller",
        image: "/products/Conveyor Spares/RETURN ROLLER.png",
        info: "Supports the belt return path.",
        features: "Smooth rotation, rustproof body."
      },
      {
        name: "Guide Roller",
        image: "/products/Conveyor Spares/GUIDE ROLLERS.png",
        info: "Keeps conveyor belt aligned during movement.",
        features: "Self-centering, low friction."
      },
      {
        name: "Plain Belt",
        image: "/products/Conveyor Spares/PLAIN BELT.png",
        info: "Standard flat belt for horizontal transport.",
        features: "Flexible, strong tensile fabric."
      },
      {
        name: "Tail Pulley",
        image: "/products/Conveyor Spares/TAIL PULLEY.png",
        info: "Mounted at tail end for belt movement.",
        features: "Balanced and precision engineered."
      }
    ]
  },
  {
    title: "RMC Spare Parts",
    description:
      "We supply all essential RMC (Ready Mix Concrete) plant spares, ensuring smooth operation of batching plants. Components include mixer arms, liners, and wear plates.",
    folder: "RMC Spare Parts",
    variants: [
      {
        name: "Central Mixing Arm",
        image: "/products/RMC Spare Parts/Central Mixing Arm.png",
        info: "Crucial for homogenous mixing in RMC systems.",
        features: "Wear resistant, accurate design."
      },
      {
        name: "Mixing Paddle",
        image: "/products/RMC Spare Parts/Mixing Paddle.png",
        info: "Mixes raw material in RMC drums.",
        features: "Tough and resistant to concrete abrasion."
      },
      {
        name: "Right Mixing Arm",
        image: "/products/RMC Spare Parts/Right Mixing Arm.png",
        info: "Right-hand mixing support in central mixer.",
        features: "Hardened edges, high accuracy."
      },
      {
        name: "Central Shovel",
        image: "/products/RMC Spare Parts/Central Shovel.png",
        info: "Feeds material centrally into the mixer.",
        features: "Heavy-duty construction, wide scoop."
      }
    ]
  },
  {
    title: "Screw Conveyor and Spares",
    description:
      "Our screw conveyors are ideal for powder and granular material movement. We also offer replacement spares like screw flights, hangers, and bearings.",
    folder: "Screw Conveyor and Spares",
    variants: [
      {
        name: "End Bearing",
        image: "/products/screwconveyor and spares/END BEARING.png",
        info: "Supports and stabilizes screw shaft ends.",
        features: "Greased, dust-sealed."
      },
      {
        name: "Gear Box",
        image: "/products/screwconveyor and spares/GEAR BOX.png",
        info: "Controls conveyor torque and speed.",
        features: "Compact, sealed design."
      },
      {
        name: "Hanger Bearing",
        image: "/products/screwconveyor and spares/HANGER BEARING.png",
        info: "Supports long screw shaft lengths.",
        features: "Self-aligning, easy to replace."
      },
      {
        name: "Internal Screw",
        image: "/products/screwconveyor and spares/INTERNAL SCREW.png",
        info: "Primary moving component of the conveyor.",
        features: "Continuous welded blades."
      },
      {
        name: "Motor",
        image: "/products/screwconveyor and spares/MOTOR.png",
        info: "Drives the screw conveyor system.",
        features: "Energy efficient, reliable startup."
      },
      {
        name: "Screw Conveyor",
        image: "/products/screwconveyor and spares/SCREW CONVEYOR.png",
        info: "Used for horizontal or inclined material flow.",
        features: "Dustproof and maintenance friendly."
      },
      {
        name: "Vertical Screw Conveyor",
        image: "/products/screwconveyor and spares/VERTICAL SCREW CONVEYOR.png",
        info: "Elevates powdery materials vertically.",
        features: "Compact layout, high throughput."
      }
    ]
  },
  {
    title: "Dust Collector",
    description:
      "We provide compact and efficient dust collectors for industrial ventilation systems. These help maintain air quality and regulatory compliance.",
    folder: "Dust Collector",
    variants: [
      {
        name: "Dust Collector AIRJET Type",
        image: "/products/DUST COLLECTORS/1234AIRJET.png",
        info: "Captures and filters airborne dust particles.",
        features: "Powerful suction, low noise."
      },
      {
        name: "Filter Element",
        image: "/products/DUST COLLECTORS/FILTER ELEMENTS.png",
        info: "Removes impurities from air flow.",
        features: "Fine mesh, replaceable cartridges."
      },
      {
        name: "Vibrating Dust Collector",
        image: "/products/DUST COLLECTORS/VIBRATING DUST COLLECTOR.png",
        info: "Shakes off dust to maintain efficiency.",
        features: "Automatic cleaning, robust casing."
      }
    ]
  },
  {
    title: "Bucket Elevator",
    description:
      "Our bucket elevators are designed to handle bulk materials efficiently, vertically transporting goods like cement, sand, and grains.",
    folder: "Bucket Elevator",
    variants: [
      {
        name: "Bucket Elevator",
        image: "/products/Bucket Elevator/BucketElevator.webp",
        info: "Lifts bulk material in vertical direction.",
        features: "Leak proof design, rugged frame."
      },
      {
        name: "Vertical Bucket Elevator",
        image: "/products/Bucket Elevator/Vertical Bucket Elevator.png",
        info: "Designed for vertical elevation of fine materials.",
        features: "Compact and efficient for tall lifts."
      }
    ]
  }
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    
    // Smooth scroll to the product section when opening
    if (index !== activeIndex) {
      setTimeout(() => {
        const productElement = document.getElementById(`product-${index}`);
        if (productElement) {
          productElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100); // Small delay to ensure the content is rendered
    }
  };

  return (
    <>
      <Navbar />
    
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4 font-sans">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-orange-600 mb-10 drop-shadow">
        🛠️ Our Product Range
      </h1>
      <div className="max-w-6xl mx-auto space-y-8">
        {productData.map((product, index) => (
          <div
            key={product.title}
            id={`product-${index}`}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 border-orange-300"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left p-6 bg-gradient-to-r from-orange-100 to-yellow-50 hover:from-orange-200 hover:to-yellow-100 transition-colors duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-orange-700">
                {product.title}
              </h2>
              <p className="text-gray-700 mt-2 text-base md:text-lg">
                {product.description}
              </p>
            </button>

            {activeIndex === index && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-orange-50">
                {product.variants.map((variant) => (
                  <div
                    key={variant.name}
                    className="bg-white rounded-xl p-4 shadow-lg border hover:shadow-xl transition duration-300"
                  >
                    <img
                      src={variant.image}
                      alt={variant.name}
                      className="w-full h-52 object-contain mb-4 rounded border"
                    />
                    <h3 className="text-xl font-bold text-orange-600">
                      {variant.name}
                    </h3>
                    <p className="text-gray-800 text-sm mt-1">{variant.info}</p>
                    <p className="text-gray-600 text-sm italic">
                      {variant.features}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Products;
