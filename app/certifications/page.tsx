"use client";
import React from "react";
import Image from "next/image";
import "../header.css";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/contactSection/footer";

const certifications = [
  {
    issuer: "Google",
    title: "Google Certification",
    color: "#5a33f9",
    image: "", // User will provide
  },
  {
    issuer: "Oracle",
    title: "Oracle Cloud Certification",
    color: "#f68ed4",
    image: "", // User will provide
  },
  {
    issuer: "Great Learning",
    title: "Great Learning Certification",
    color: "#5a33f9",
    image: "", // User will provide
  },
  {
    issuer: "Forage",
    title: "Forage Virtual Experience",
    color: "#f68ed4",
    image: "", // User will provide
  },
  {
    issuer: "Git",
    title: "Git Certification",
    color: "#5a33f9",
    image: "", // User will provide
  },
  {
    issuer: "OPSWAT",
    title: "OPSWAT Certification",
    color: "#f68ed4",
    image: "", // User will provide
  },
  {
    issuer: "RapidMiner",
    title: "RapidMiner Certification",
    color: "#5a33f9",
    image: "", // User will provide
  },
];

export default function CertificationsPage() {
  return (
    <>
      <Cursor />
      <Header color="Light" />
      <HeaderNavigation />
      <main className="darkGradient relative flex min-h-screen w-full flex-col items-start px-paddingX py-paddingY text-[#def438]">
        <h1 className="mb-2 mt-[0.5em] text-[12.2vw] font-bold leading-[0.9] tracking-tight md:text-[clamp(16px,_6.3vw_+_8px,_120px)]">
          Certifi<span style={{ color: "#5a33f9" }}>cations</span>
          <span style={{ color: "#fcf2ff" }}>.</span>
        </h1>
        <p className="mb-8 max-w-[600px] text-[clamp(14px,_1vw_+_8px,_20px)] text-[#def438aa] md:mb-12">
          Professional certifications and courses completed from industry leaders.
        </p>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.03]"
              style={{
                background: `rgba(222,244,56,0.03)`,
                border: `1px solid ${cert.color}25`,
              }}
            >
              {/* Certificate Image area */}
              <div
                className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${cert.color}12 0%, ${cert.color}04 100%)`,
                }}
              >
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-4xl opacity-40">📜</span>
                    <span className="text-[11px] text-[#def43840]">Certificate image</span>
                  </div>
                )}

                {/* Issuer badge overlay */}
                <div
                  className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold backdrop-blur-md"
                  style={{
                    background: `${cert.color}cc`,
                    color: '#1c1c1c',
                  }}
                >
                  {cert.issuer}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-[clamp(13px,_0.8vw_+_5px,_16px)] font-bold text-[#def438]">
                  {cert.title}
                </h3>
                <p
                  className="mt-1 text-[clamp(11px,_0.6vw_+_4px,_13px)] font-medium"
                  style={{ color: cert.color }}
                >
                  Issued by {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Footer className="bottom-0 left-0 mt-12" />
      </main>
    </>
  );
}
