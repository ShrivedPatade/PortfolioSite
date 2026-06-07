// Helper function to create a URL-friendly ID from a title
const createId = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

export const projectsData = [
  {
    id: createId("Signature Verification System"),
    title: "Signature Verification System",
    shortDescription: "A robust system to detect forged signatures using machine learning.",
    detailedDescription: "Architected and evaluated multiple models, including CNNs, SVMs, and Random Forest, to identify the optimal solution for signature verification and matching. This system is designed to enhance security in attendance and authentication applications by detecting proxies and identifying forgeries.",
    techStack: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "CNN"],
    googleDriveLink: "your-google-drive-link-here",
    githubLink: "https://github.com/ShrivedPatade/Signature-Verification-System",
  },
  {
    id: createId("Malware Reverse Engineering with LLM Support"),
    title: "Malware Reverse Engineering with LLM Support",
    shortDescription: "An automated system to analyze malware executables using LLMs.",
    detailedDescription: "Engineered a system that performs reverse engineering on malware executables by translating machine code to 'C'. The system then analyzes the code to identify potential kill switches and generates a comprehensive summary report leveraging a Large Language Model (LLM).",
    techStack: ["Python", "Reverse Engineering", "LLM", "NLP"],
    googleDriveLink: "your-google-drive-link-here",
    githubLink: "https://github.com/Maaroof-Khan10/Ghidra-LLM-Assistant",
  },
  {
    id: createId("Sign Language Detector"),
    title: "Sign Language Detector",
    shortDescription: "A real-time sign language detection application using computer vision.",
    detailedDescription: "Developed a computer vision-based application to detect and interpret sign language in real-time. This project utilizes CNN models and the MediaPipe framework for hand tracking and gesture recognition, aiming to bridge communication gaps.",
    techStack: ["Python", "OpenCV", "MediaPipe", "CNN", "Random Forest"],
    googleDriveLink: "your-google-drive-link-here",
    githubLink: "https://github.com/ShrivedPatade/Sign-Language-Detection",
  },
  {
    id: createId("Stock Analysis ChatBot"),
    title: "Stock Analysis ChatBot",
    shortDescription: "An interactive chatbot for real-time stock analysis and insights.",
    detailedDescription: "Created a conversational AI chatbot that provides users with real-time stock analysis, news, and performance metrics. This project integrates financial data APIs with natural language processing to deliver actionable insights in an intuitive chat interface.",
    techStack: ["Python", "NLP", "Financial APIs", "React"],
    googleDriveLink: "your-google-drive-link-here",
    githubLink: "https://github.com/ShrivedPatade/Stock-Analysis-Chatbot",
  },
];