import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface agent {
    id: number;
    name: string;
    imageSrc: string;
    activated: boolean;
    ownedDuration: string;
    boughtAmount: string;
    floorAmount: string;
    floorChangePercentage: string;
    category: string;
}

interface AgentCarouselProps {
    agentData: agent[];
    categoriesDictionary: { [key: string]: { name: string; logo: string; description: string; } };
}

const AgentCarousel: FC<AgentCarouselProps> = ({ agentData, categoriesDictionary }) => {
    function getCategoryInfo(agent: any) {
        if (agent.category && categoriesDictionary[agent.category]) {
          return categoriesDictionary[agent.category];
        }
        return null; // or some default category information
      }
    return (
    <div 
    className="carousel-container">
        <Carousel
            centerMode
            centerSlidePercentage={50}
            interval={2500}
            showArrows={true}
            showThumbs={false}
            autoPlay
            infiniteLoop={true}
            showStatus={false}
            transitionTime={1000} // Adjust the transition time for smoothness
            showIndicators={false}
            swipeable={true}
            stopOnHover={false}
        >
            {agentData.map((agent) => {
                const categoryInfo = getCategoryInfo(agent);
                return (
                    <div className="profile-long-container mx-4" key={agent.id}>
                        <div className={`img-container ${!agent.activated ? "greyed-out" : ""}`}>
                            <img className="agent-image" src={agent.imageSrc} alt={`Otherdeed ${agent.id}`} />
                            <div className="category-logo-container">
                                {/* <img
                                    className="category-logo"
                                    src={categoryInfo ? categoryInfo.logo : 'default-logo.png'}
                                    alt={`${agent.category} Logo`}
                                /> */}
                            </div>
                            {!agent.activated && (
                                <div className="lock-overlay greyed-out">
                                </div>
                            )}
                            <div className="tag">
                                <div className="tag-text">{agent.ownedDuration}</div>
                            </div>
                        </div>
                        <div className="agent-description-container">
                            <div className="agent-name">{agent.name} #{agent.id}</div>
                            <div className="row-container">
                                <div className="bought-text">Bought</div>
                                <div className="second-details">
                                    <div className="amount-text">{agent.boughtAmount}</div>
                                    <img className="eth-image" src="/eth_icon.svg" alt="Ethereum" />
                                </div>
                            </div>
                            <div className="row-second-container">
                                <div className="bought-text">Floor</div>
                                <div className="second-details">
                                    <div className="amount-second-text">{agent.floorAmount}</div>
                                    <img className="eth-second-image" src="/eth_icon.svg" alt="Ethereum" />
                                    <div className="amount-green-text">{agent.floorChangePercentage}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Carousel>
    </div>
    );
};

export default AgentCarousel;
