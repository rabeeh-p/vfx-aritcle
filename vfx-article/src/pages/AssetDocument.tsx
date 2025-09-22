import React from "react";
import { motion } from "framer-motion";
import { FileText, Upload, FolderOpen, Trash2 } from "lucide-react";

// Define the document type
interface DocumentType {
  id: number;
  name: string;
  size: string;
  uploadedBy: string;
  notes: string[];
}

// Example asset documents
const documents: DocumentType[] = [
  {
    id: 1,
    name: "Storyboard.pdf",
    size: "2.3 MB",
    uploadedBy: "John Doe",
    notes: [
      "Defines scene flow and camera angles",
      "Used by animation & layout team",
      "Finalized after director approval",
    ],
  },
  {
    id: 2,
    name: "Concept_Art.png",
    size: "4.1 MB",
    uploadedBy: "Alice",
    notes: [
      "Provides visual style reference",
      "Important for lighting & shading",
      "Shared with environment artists",
    ],
  },
  {
    id: 3,
    name: "VFX_Notes.docx",
    size: "1.2 MB",
    uploadedBy: "David",
    notes: [
      "Lists particle effects requirements",
      "Outlines render passes",
      "Helps compositing team plan shots",
    ],
  },
];

const AssetDocument: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🔹 Space Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0" />

      {/* 🔹 Star Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 30px, white, transparent), radial-gradient(1px 1px at 400px 150px, white, transparent), radial-gradient(2px 2px at 250px 300px, white, transparent), radial-gradient(1px 1px at 600px 400px, white, transparent), radial-gradient(2px 2px at 800px 100px, white, transparent)",
          backgroundRepeat: "repeat",
          backgroundSize: "800px 800px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "800px 800px", "0px 0px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* 🔹 Content */}
      <div className="relative z-10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Asset{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Documentation
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Upload, manage, and review essential production documents for your
              VFX pipeline.
            </p>
          </motion.div>

          {/* 🔹 What is Asset Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/80 border border-gray-700 rounded-2xl shadow-xl p-6 mb-10"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
              📌 What is an Asset?
            </h3>
            <p className="text-gray-300 mb-4">
              In a production pipeline, an <span className="text-cyan-400">asset</span> is any resource 
              such as storyboards, concept art, models, textures, or notes that are used to create 
              the final output. Assets are the building blocks of a project and ensure smooth 
              collaboration between different teams.
            </p>
            <h4 className="text-xl font-semibold text-purple-400 mb-2">
              🛠 How to Create an Asset:
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Prepare your file (Storyboard, Concept Art, VFX Notes, etc.).</li>
              <li>Click on <span className="text-cyan-400">Upload Document</span> above.</li>
              <li>Fill in the details (name, category, and notes).</li>
              <li>Submit it to make it accessible for the entire team.</li>
            </ul>
          </motion.div>

          {/* Upload Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-10"
          >
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
              <Upload className="w-5 h-5" />
              Upload Document
            </button>
          </motion.div>

          {/* Document Cards */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {documents.map((doc) => (
              <motion.div
                key={doc.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800/90 border border-gray-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                {/* Title Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {doc.name}
                    </h3>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Meta Info */}
                <div className="text-sm text-gray-400 space-y-1 mb-4">
                  <p>Size: {doc.size}</p>
                  <p>Uploaded by: {doc.uploadedBy}</p>
                </div>

                {/* Documentation Points */}
                {/* <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside mb-6">
                  {doc.notes.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul> */}

                {/* Actions */}
                <div className="flex justify-start">
                  <button className="px-4 py-2 bg-gray-700 text-gray-300 hover:bg-gray-600 rounded-lg flex items-center gap-2 transition">
                    <FolderOpen className="w-4 h-4" /> Open
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};





export default AssetDocument;
