import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap's JS for carousel functionality
import { useSwipeable } from 'react-swipeable';
import './carousel.css';

const Carousel = () => {
    const handlers = useSwipeable({
        onSwipedLeft: () => document.querySelector('#carouselExampleIndicators').carousel('next'),
        onSwipedRight: () => document.querySelector('#carouselExampleIndicators').carousel('prev'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className="container">
            <h3 className="text-center text-uppercase">Top Visits in Alex</h3>
            <div className="row">
                <div className="col-12 mx-auto my-5" {...handlers}>
                    <div className="carousel-container">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i.pinimg.com/564x/bf/54/52/bf545237fa7e48164055f8f3e99e82e7.jpg" className="d-block w-100" alt="Bibliothica Alexandrina" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Bibliothica Alexandrina</h5>
                                        <p>A beacon of knowledge uniting past and future.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.pinimg.com/564x/d6/a8/25/d6a8256eec196123e900662ccc08d289.jpg" className="d-block w-100" alt="Qaitbay Citadel" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Qaitbay Citadel</h5>
                                        <p>A fortress of history guarding the shores of Alexandria.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://media.gettyimages.com/id/1644907177/photo/carved-tombs-of-the-kom-el-shoqafa-catacombs-of-alexandria-egypt.jpg?s=612x612&w=0&k=20&c=1DrnljLi0lbIdd_Im4ItuuXiGMKZ5k74hIfACTUvPnk=" className="d-block w-100" alt="Catacombs of Kom el Shoqafa" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Catacombs of Kom el Shoqafa</h5>
                                        <p>Where the whispers of the ancients echo through the shadows of time.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.pinimg.com/736x/b7/40/14/b74014b3c03d793f96d05825c8020b18.jpg" className="d-block w-100" alt="Montazah Palace" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
