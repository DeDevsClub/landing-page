import React from 'react';
import { motion } from 'framer-motion';

const RoadmapPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0b0014] to-[#1a0b2e] text-white">
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Project Roadmap</h1>
                <div className="timeline">
                    {/* Timeline items will go here */}
                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="timeline-content bg-[#0b0014]/90 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-2">Milestone Title</h2>
                            <p className="text-sm text-[#e0e0ff]/80">Description of the milestone goes here. It should provide a brief overview of what was achieved or planned.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapPage;
