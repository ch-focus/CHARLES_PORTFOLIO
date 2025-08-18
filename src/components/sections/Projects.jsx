export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 t0-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                        <h3 className="text-xl font-bold mb-2"> Color Picker </h3>
                        <p className="text-gray-400 mb-3">
                            A color picker project allows users to select colors, often for
                            use in design or other applications. It typically provides a
                            visual interface to navigate through colors, with options to specify
                            them using RGB, HSV, or hexadecimal codes.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "Javascript", "HTML"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all 
                            "
                                >
                                    {tech}

                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a
                                href="https://github.com/ch-focus/color-picker.git"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                {" "}
                                View Project  {" "}
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                        <h3 className="text-xl font-bold mb-2"> AI VERIFY </h3>
                        <p className="text-gray-400 mb-3">
                            AI verification tool designed to detect and verify the authenticity, bias,
                            and accuracy of AI-generated content. Using a combination of machine learning
                            models, natural language processing, and computer vision, the system analyzes text,
                            images, and videos to flag potential misinformation, deepfakes, or biased outputs.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "Javascript", "Tailwind"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all 
                            "
                                >
                                    {tech}

                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a
                                href="https://github.com/ch-focus/AI-VERIFY.git"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                {" "}
                                View Project  {" "}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
