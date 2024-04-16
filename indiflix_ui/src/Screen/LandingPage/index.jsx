import React from "react";
import Layout from "../../Layout/Layout";
import heroImage from "../../assets/hero-image.png";
import { MdOutlineHighQuality } from "react-icons/md";
import "./index.scss";

const featuresData = [
    {
        title: "Vast Library",
        description: "Explore our extensive library of movies and series, spanning multiple genres, ensuring there's always something for everyone to enjoy. With new titles added regularly, you'll never run out of entertainment options.",
    },
    {
        title: "Personalized Recommendations",
        description: "Receive personalized recommendations based on your viewing history and preferences. Our algorithm curates content tailored to your tastes, ensuring you discover new favorites with every click."
    },
    {
        title: "Offline Viewing",
        description: "Download your favorite movies and shows to watch offline. Whether you're traveling or simply away from a stable internet connection, enjoy uninterrupted entertainment anytime, anywhere, even without Wi-Fi."
    },
    {
        title: "Multiple Devices",
        description: "Stream seamlessly across multiple devices, from your smartphone to your smart TV. Our platform is optimized for various screen sizes, ensuring a consistent viewing experience on all your favorite devices."
    },
    {
        title: "Customizable Viewing Profiles",
        description: "Create personalized viewing profiles for each user within your account. Tailor content recommendations and viewing history for individual preferences, ensuring a unique and customized entertainment experience for every member of your household."
    },
    {
        title: "Ad-Free Experience",
        description: "Immerse yourself in an ad-free viewing experience. Say goodbye to interruptions and distractions as you enjoy your favorite movies and shows without any commercial breaks, allowing for uninterrupted entertainment."
    }
];

const contentCreatorBenefits = [
    {
        title: "Monetization Opportunities",
        description: "Earn revenue through ad placements, sponsorships, and subscriptions.",
        icon: MdOutlineHighQuality
    },
    {
        title: "Wide Reach",
        description: "Reach a global audience and build a loyal following for your content.",
        icon: MdOutlineHighQuality
    },
    {
        title: "Analytics and Insights",
        description: "Gain valuable insights into audience engagement and preferences to optimize content strategy.",
        icon: MdOutlineHighQuality
    },
    {
        title: "Creative Control",
        description: "Maintain full creative control over your content and branding.",
        icon: MdOutlineHighQuality
    },
    {
        title: "Collaboration Opportunities",
        description: "Collaborate with other creators and brands to expand your reach and create innovative content.",
        icon: MdOutlineHighQuality
    }
];

const contentWatchersBenefits = [
    {
        title: "High-Quality Video",
        description: "Experience stunning video quality with options for HD, Full HD, and even 4K resolution.",
        icon: MdOutlineHighQuality
    },
    {
        title: "Affordable Pricing",
        description: "Enjoy access to premium content at competitive prices, ensuring entertainment is accessible to all.",
        icon: MdOutlineHighQuality
    },
    {
        title: "Lightning-Fast Streaming",
        description: "Experience minimal buffering and fast content loading times for a seamless viewing experience.",
        icon: MdOutlineHighQuality
    },
    {
        title: "Intuitive Interface",
        description: "Navigate through the platform effortlessly with a user-friendly interface designed for maximum convenience.",
        icon: MdOutlineHighQuality
    },
    {
        title: "Unlimited Access",
        description: "Enjoy unlimited streaming of your favorite movies and shows without any restrictions or limitations.",
        icon: MdOutlineHighQuality
    },
]

function LandingPage() {
    return (
        <>
            <Layout>
                <div id="landing-page">
                    <section className="hero-section">
                        <div className="hero-left-section">
                            <h1 className="hero-heading">
                                Your Gateway to<br />Infinite Entertainment
                            </h1>
                            <p className="text-gray-300">
                                Discover a world of limitless entertainment with Indiflix, where every click opens the door to a diverse collection of movies, series, and originals. Immerse yourself in captivating stories, explore new genres, and embark on endless adventures, all from the comfort of your screen. Join us today and start your journey into the boundless realm of Indiflix.
                            </p>
                            <div>
                                <button className="get-started-btn">Get Started</button>
                            </div>
                        </div>
                        <div className="hero-right-section">
                            <img src={heroImage} />
                        </div>
                    </section>
                    <section className="features-section">
                        <div class="container">
                            <p class="container-title">Here are the features we’re proud of</p>

                            <div class="gradient-cards">
                                {featuresData.map(detail => {
                                    return (
                                        <div class="card">
                                            <div class="container-card">
                                                <p class="card-title">{detail.title}</p>
                                                <p class="card-description">{detail.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                    <section className="benefits-section">
                        <div class="container">
                            <p class="container-title">Benefits</p>
                            <div class="benefits-container">
                                <div>
                                    <p className="container-sub-title">Content Creator</p>
                                    <div className="benefit-card-list">
                                        {contentCreatorBenefits.map(detail => {
                                            return (
                                                <div className="benefit-card">
                                                    <div>
                                                        <detail.icon size={32} />
                                                    </div>
                                                    <div>
                                                        <p className="title">{detail.title}</p>
                                                        <p className="description">{detail.description}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <p className="container-sub-title">Content Watcher</p>
                                    <div className="benefit-card-list">
                                        {contentWatchersBenefits.map(detail => {
                                            return (
                                                <div className="benefit-card">
                                                    <div>
                                                        <detail.icon size={32} />
                                                    </div>
                                                    <div>
                                                        <p className="title">{detail.title}</p>
                                                        <p className="description">{detail.description}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}

export default LandingPage;
