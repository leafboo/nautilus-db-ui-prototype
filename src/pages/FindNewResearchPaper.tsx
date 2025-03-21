import FindNewResearchPaperCSS from "./FindNewResearchPaper.module.css"
import ResearchPaperCard from "../components/ResearchPaperCard"

export default function FindNewResearchPaper() {
  return (
    <>
      <div className={FindNewResearchPaperCSS['find-new-research-paper-container']}>
        <div className={FindNewResearchPaperCSS['grid-container']}>


          <ResearchPaperCard title= "A Study on Artificial Intelligence"
                            abstract= "This research explores the impact of AI on modern society..."
                            authors = "John Doe, Jane Smith"
                            doi = "10.1234/ai.2025"
                            datePublished = "March 20, 2025"
                            keywords = "Artificial Intelligence, Machine Learning, Deep Learning"
                            linkToSource = "https://example.com/research-paper" />
          
          <ResearchPaperCard title="Exploring Quantum Computing Applications" 
                            abstract="This paper discusses the potential of quantum computing in various fields, including cryptography and optimization problems." 
                            authors="Alice Johnson, Bob Williams" 
                            doi="10.5678/qc.2025" 
                            datePublished="February 15, 2025" 
                            keywords="Quantum Computing, Cryptography, Optimization" 
                            linkToSource="https://example.com/quantum-computing" />
          
          <ResearchPaperCard title="Blockchain and Its Impact on Cybersecurity" 
                            abstract="An in-depth analysis of how blockchain technology enhances cybersecurity by providing decentralized and tamper-resistant solutions." 
                            authors="Michael Lee, Sarah Brown" 
                            doi="10.9101/bc.2025" 
                            datePublished="April 5, 2025" 
                            keywords="Blockchain, Cybersecurity, Decentralization" 
                            linkToSource="https://example.com/blockchain-security" />

          <ResearchPaperCard title="Quantum Computing: A New Era of Computation"
                            abstract="This paper delves into the advancements in quantum computing and its potential applications..."
                            authors="Alice Johnson, Bob Williams"
                            doi="10.5678/qc.2025"
                            datePublished="April 5, 2025"
                            keywords="Quantum Computing, Qubits, Superposition"
                            linkToSource="https://example.com/quantum-computing-paper" />

          <ResearchPaperCard title="Cybersecurity Threats in the Age of IoT"
                            abstract="An analysis of security vulnerabilities in IoT devices and potential mitigation strategies..."
                            authors="Emily Carter, David Brown"
                            doi="10.9876/iot-sec.2025"
                            datePublished="February 10, 2025"
                            keywords="Cybersecurity, IoT, Network Security"
                            linkToSource="https://example.com/cybersecurity-paper" />

          <ResearchPaperCard title="Renewable Energy Technologies and Their Future"
                            abstract="This study examines the effectiveness of various renewable energy sources and their global impact..."
                            authors="Michael Lee, Sophia White"
                            doi="10.5432/renew-energy.2025"
                            datePublished="May 15, 2025"
                            keywords="Renewable Energy, Solar Power, Wind Energy"
                            linkToSource="https://example.com/renewable-energy-paper" />

          <ResearchPaperCard title="The Role of Blockchain in Financial Security"
                            abstract="Exploring how blockchain technology enhances financial transactions and prevents fraud..."
                            authors="Daniel Green, Olivia Martinez"
                            doi="10.6789/blockchain-finance.2025"
                            datePublished="January 25, 2025"
                            keywords="Blockchain, Cryptocurrency, Financial Security"
                            linkToSource="https://example.com/blockchain-paper" />

        </div>
      </div>
    </>
  )
}