import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./home.css";
import { Link } from "react-router-dom";

function home() {
    return (
        <div className="Home">
            <div className="education-outside"></div>
            <Carousel className="main-slide" showThumbs={false}
            autoPlay
            infiniteLoop
            interval={4000}
            showStatus={false}>
                <div>
                    <img src="https://img.freepik.com/free-photo/dump-rubbish_140289-64.jpg?w=2000"  width="671px" height="352px" />
                    <Link to="/edukasi">
                    <p className="caption">Pengertian dan Perbedaan Sampah Organik dan Anorganik</p>
                    </Link>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width="671px" height="352px" />
                    <Link to="/edukasi">
                    <p className="caption">Jenis-Jenis Sampah Organik dan Anorganik</p>
                    </Link>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/organic-waste-recycling-process-compost_100147-81.jpg" width="671px" height="352px"/>
                    <Link to="/edukasi">
                    <p className="caption">Cara Mengolah Sampah Organik Bekas menjadi Pupuk</p>
                    </Link>
                </div>
            </Carousel>
            <div className="aboutUs">
                <h1> Tentang Kami </h1>
                <p> Kami memberikan wadah bagi masyarakat untuk dapat ikut serta mengatasi permasalahan tentang sampah, yaitu melalui edukasi cara mengolah sampah  dan memisahkan sampah berdasarkan jenisnya serta memberikan pengalaman yang menyenangkan tentang mengolah sampah dan benefit yang akan didapatkan. </p>
            </div>
        </div>
        );
    }

export default home;