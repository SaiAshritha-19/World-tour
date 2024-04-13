import React from "react";
import './gallery.css';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Kerala',
            desc: 'Wayanad',
            image: 'https://th.bing.com/th/id/OIP.Enr9WA96KD2XJnbK3XDZQAHaFR?rs=1&pid=ImgDetMain',
        },
    },
    {
        player: {
            title: "United States of America",
            desc: "Chicago",
            image: 'https://th.bing.com/th/id/OIP._REotpIlrTHu-Bh1KHGStQHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        },
    },
    {
        player: {
            title: 'France',
            desc: 'Paris',
            image: 'https://th.bing.com/th/id/OIP.Kl06raJ402kDPOsyNuq8vgHaE7?rs=1&pid=ImgDetMain',
        },
    },
    {
        player: {
            title: 'Germany',
            desc: 'Berlin-Brandenburg Gate',
            image: 'https://p4.wallpaperbetter.com/wallpaper/838/368/991/monuments-brandenburg-gate-berlin-germany-wallpaper-preview.jpg',
        },
    },
    {
        player: {
            title: 'Canada',
            desc: 'Niagara Water Falls',
            image: 'https://www.niagarafallstourism.com/site/assets/files/80150/hornblower_niagara_cruises_voyage_to_the_falls-5.jpg',
        },
    },
  
    
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = { ...item.styles, filter: 'grayscale(1)' };
            break;
        case length:
            break;
        default:
            item.styles = { ...item.styles, opacity: 0 };
            break;
    }

    return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} />
            </div>

        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">

            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <AiOutlineLeft size={90} />

                    {/* <i className="carousel__btn-arrow carousel__btn-arrow--left" /> */}
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    {/* <i className="carousel__btn-arrow carousel__btn-arrow--right" /> */}
                    <AiOutlineRight size={90} />
                </button>
                {/* <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Carousel;