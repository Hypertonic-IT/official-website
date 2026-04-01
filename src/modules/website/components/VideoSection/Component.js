import React from 'react';
import './component.css';
import { motion } from 'framer-motion';

const VideoSection = () => {
    return (
        <div className="container-fluid video_section_top">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="video_wrapper"
                    >
                        <video
                            src="/img/hypertonicVideo.mp4"
                            className="full_width_video"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </motion.div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
};

export default VideoSection;
