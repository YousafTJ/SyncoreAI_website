// src/pages/Product.tsx
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
    return (
        <>
            <Helmet>
                <title>Produkter – SyncoreAI</title>
                <meta
                    name="description"
                    content="Se vores AI-produkter og pakkeløsninger hos SyncoreAI. Effektive løsninger inden for chatbot, mail agent og hjemmesider."
                />

                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&display=swap"
                    rel="stylesheet"
                />

                <style>
                    {`
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 20px 40px rgba(168, 85, 247, .35),
                          0 0 0 1px rgba(0,0,0,.08) inset,
                          0 0 40px rgba(168, 85, 247, .35);
            }
            50% {
              box-shadow: 0 26px 56px rgba(168, 85, 247, .55),
                          0 0 0 1px rgba(0,0,0,.10) inset,
                          0 0 64px rgba(168, 85, 247, .55);
            }
          }
          .btn3d {
            --color1: #a855f7;
            --color2: #7c3aed;
            --glow: 168, 85, 247;
            perspective: 1000px;
            padding: 1.25rem 2.6rem;
            background: linear-gradient(180deg, var(--color1), var(--color2));
            border: none;
            outline: none;
            font-family: 'Sora', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
            font-weight: 800;
            font-size: 22px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: #fff;
            text-shadow: 0 6px 12px #000;
            cursor: pointer;
            transform-style: preserve-3d;
            transition: transform .35s ease, filter .2s ease, box-shadow .35s ease, background .35s ease;
            border-radius: 18px;
            position: relative;
            box-shadow: 0 20px 40px rgba(var(--glow), .35),
                        0 0 0 1px rgba(0,0,0,.08) inset,
                        0 0 40px rgba(var(--glow), .35);
            animation: pulse-glow 3.2s ease-in-out infinite;
          }
          .btn3d::before {
            content: "";
            width: 100%;
            height: 16px;
            background-color: var(--color2);
            position: absolute;
            bottom: 0;
            right: 0;
            transform: rotateX(90deg);
            transform-origin: bottom;
            border-bottom-left-radius: 18px;
            border-bottom-right-radius: 18px;
          }
          .btn3d::after {
            content: "";
            width: 16px;
            height: 100%;
            background-color: var(--color1);
            position: absolute;
            top: 0;
            right: 0;
            transform: rotateY(-90deg);
            transform-origin: right;
            border-top-right-radius: 18px;
            border-bottom-right-radius: 18px;
          }
          .btn3d:hover {
            transform: translateY(-6px) scale(1.05);
            filter: brightness(1.1);
          }
          .btn3d:active {
            transform: translateY(-1px) scale(0.99);
            filter: brightness(0.98);
          }
          .btn3d:focus-visible {
            outline: none;
            box-shadow: 0 0 0 4px rgba(0,0,0,.18),
                        0 0 0 8px rgba(var(--glow), .55);
          }
          .btn3d .shine {
            position: absolute;
            inset: 0;
            border-radius: 18px;
            overflow: hidden;
            pointer-events: none;
          }
          .btn3d .shine::before {
            content: "";
            position: absolute;
            top: -120%;
            left: -30%;
            width: 40%;
            height: 240%;
            transform: rotate(25deg);
            background: linear-gradient(
              90deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,.35) 50%,
              rgba(255,255,255,0) 100%
            );
            animation: shine-move 2.6s ease-in-out infinite;
          }
          @keyframes shine-move {
            0% { left:-30%; }
            50% { left:80%; }
            100% { left:-30%; }
          }
          `}
                </style>
            </Helmet>

            <div className="min-h-screen bg-white text-gray-900">
                <Navigation />

                <main className="pt-24 pb-24 text-center">
                    <section className="max-w-7xl mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-violet-700 mb-5">
                            Produkter
                        </h1>
                        <p className="text-gray-700 mb-14 max-w-2xl mx-auto">
                            Vælg den løsning der passer din virksomhed. Alle pakker kan tilpasses.
                        </p>

                        {/* Produkt billede */}
                        <div className="mb-16">
                            <img
                                src="/primary-products.png"
                                alt="SyncoreAI produkter"
                                className="mx-auto w-full max-w-5xl rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Kontakt os knap */}
                        <div className="mt-2 mb-20">
                            <Link
                                to={{ pathname: "/", hash: "#kontakt" }}
                                aria-label="Gå til kontaktformular"
                            >
                                <button className="btn3d">
                                    <span className="relative z-10">Kontakt os</span>
                                    <span className="shine" aria-hidden />
                                </button>
                            </Link>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
