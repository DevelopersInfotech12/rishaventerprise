"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const HomeSectionType = () => {
    const [expandedSegment, setExpandedSegment] = useState(null);

    const segments = [
        {
            id: 1,
            title: "BLASTING",
            color: "bg-gradient-to-br from-blue-600 to-blue-800",
            accentColor: "text-lime-400",
            buttonColor: "bg-lime-400 hover:bg-lime-500",
            image: "/images/blast3.jpg",
            shortDesc: "High-precision blasting that removes rust, scale, and contaminants with complete surface uniformity. Creates the ideal profile for paint or coating adhesion, ensuring long-term durability. Suitable for industrial plants, machinery, tanks, pipelines, and heavy structures.",
            longContent: `Our blasting services utilize state-of-the-art equipment and techniques to prepare surfaces for coating applications. We provide precise abrasive blasting to remove rust, scale, paint, and surface contamination from industrial equipment, structural steel, pipelines, tanks, and metal surfaces.

Our team employs various blasting methods including sandblasting, shot blasting, and vapor blasting to achieve the perfect surface profile for optimal coating adhesion. We follow international standards and safety protocols to ensure the highest quality results while maintaining environmental compliance.

Whether you need surface preparation for new construction, maintenance projects, or restoration work, our experienced technicians deliver consistent, high-quality blasting services that meet your exact specifications and timeline requirements.

We ensure each surface is treated with precision to achieve the ideal profile for long-lasting coating performance. Our blasting process enhances durability, prevents corrosion, and prepares your assets for the next stage of protection.`
        },
        {
            id: 2,
            title: "PAINTING",
            color: "bg-gradient-to-br from-gray-700 to-gray-900",
            accentColor: "text-lime-400",
            buttonColor: "bg-lime-400 hover:bg-lime-500",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
            shortDesc: "Industrial-grade coating solutions that protect assets from corrosion, weathering, and chemical exposure. Provides a smooth, consistent finish with strict quality and safety standards. Ideal for factories, equipment, storage tanks, and steel structures",
            longContent: `Our painting division specializes in applying industrial-grade coatings that offer long-term corrosion and surface protection. We use advanced spray equipment and application techniques to ensure uniform coverage and optimal performance of protective coatings.

We work with a wide range of coating systems including epoxies, polyurethanes, zinc-rich primers, and specialized marine coatings. Our certified applicators are trained in proper surface preparation, mixing ratios, application parameters, and quality control procedures to deliver coatings that meet or exceed manufacturer specifications.

From infrastructure projects to manufacturing facilities, our painting services provide durable, attractive finishes that protect your assets and extend their operational life. We handle projects of all sizes with the same attention to detail and commitment to excellence.

Our coatings are engineered to withstand extreme environments, ensuring maximum structural protection. Every project undergoes strict quality checks to deliver a smooth, uniform, and long-lasting finish.`
        },
        {
            id: 3,
            title: "METALIZING",
            color: "bg-gradient-to-br from-gray-700 to-gray-900",
            accentColor: "text-lime-400",
            buttonColor: "bg-lime-400 hover:bg-lime-500",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
            shortDesc: "A highly durable anti-corrosion coating system using zinc or aluminum spray metal. Extends asset life in marine, coastal, and industrial environments. Perfect for bridges, pylons, towers, and steel structures requiring long-term protection.",
            longContent: `Metalizing, also known as thermal spray coating, is our specialized service that applies molten metal coatings to provide exceptional corrosion and wear resistance. We utilize arc spray and flame spray technologies to deposit aluminum, zinc, and other metal alloys onto prepared surfaces.

This process creates a metallurgically bonded protective layer that is particularly effective for structures exposed to harsh environments, such as bridges, marine installations, chemical processing equipment, and offshore platforms. The metallic coating acts as a sacrificial anode, protecting the base metal from corrosion.

Our metalizing services are performed by certified technicians who understand the critical parameters of metal spray application, including surface preparation requirements, spray distance, particle velocity, and coating thickness. We ensure every project meets industry standards for long-lasting, reliable protection.

This advanced process delivers unmatched resistance against corrosion in highly demanding conditions. Our metalizing solutions significantly extend the lifespan of critical structures and industrial components.`
        },
        {
            id: 4,
            title: "MEASURING",
            color: "bg-gradient-to-br from-gray-700 to-gray-900",
            accentColor: "text-lime-400",
            buttonColor: "bg-lime-400 hover:bg-lime-500",
            image: "/images/coat1.jpg",
            shortDesc: "Precision measurement of coating thickness, surface profile, and application quality. Ensures compliance with industry standards and prevents coating failures. Provides detailed reporting for client assurance and project transparency.",
            longContent: `Our measuring and inspection services ensure that all coating applications meet specified standards and performance requirements. We employ calibrated instruments and proven testing methodologies to verify coating thickness, adhesion, surface profile, and other critical parameters.

Using advanced equipment including digital coating thickness gauges, surface profile comparators, holiday detectors, and adhesion testers, we provide comprehensive quality assurance throughout the coating process. Our inspection reports document compliance with project specifications and industry standards such as SSPC, NACE, and ISO requirements.

Regular monitoring and documentation of coating application parameters help prevent costly failures and ensure the longevity of protective coating systems. Our certified coating inspectors work closely with project teams to maintain quality standards and resolve any issues promptly, ensuring successful project completion.

Our detailed inspection process ensures every coating layer performs as expected in real-world conditions. We maintain strict reporting standards for complete transparency and reliability.`
        }
    ];


    return (
        <div className="min-h-screen bg-gray-50 justify-center mx-auto ">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-6 pt-16">

                <div className="w-full flex flex-col justify-center items-center text-center">

                    <div>
                        <p className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-3">
                            WHAT WE OFFER
                        </p>
                    </div>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            Our Core <span className="text-blue-600">Service Segments</span>
                        </h1>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-gray-600 text-lg">
                            We specialize in delivering end-to-end services including Blasting, Painting,
                            Metalizing, and Coating Measurement. 
                        </p>
                    </div>

                </div>

            </div>

            {/* Segments Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {segments.map((segment) => (
                        <div
                            key={segment.id}
                            className="bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                            {/* Image Section */}
                            <div className={`relative h-64 ${segment.color} overflow-hidden group`}>
                                <img
                                    src={segment.image}
                                    alt={segment.title}
                                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h2 className="text-lime-300 font-bold mb-2 text-3xl">{segment.title}</h2>

                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <p className="text-gray-500 text-base font-semibold leading-relaxed mb-4">
                                    {segment.shortDesc}
                                </p>

                                {expandedSegment === segment.id && (
                                    <div className="border-t border-gray-200 pt-4 mt-4 space-y-4 animate-fadeIn">
                                        {segment.longContent.split('\n\n').map((paragraph, idx) => (
                                            <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
};

export default HomeSectionType;