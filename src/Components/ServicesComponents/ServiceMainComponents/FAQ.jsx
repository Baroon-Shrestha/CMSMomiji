import React, { useState } from "react";
import Accordion from "../../HelperComponents/Accordion";
import { Award, BookOpen, Globe } from "lucide-react";

export default function FAQ() {
  const [accordion, setAccordion] = useState([
    {
      id: 1,
      title: "What programs do you offer for studying in Japan?",
      description:
        "We provide a complete roadmap for students planning to study in Japan. This includes Japanese language training (N5 to N1), preparation for the Specified Skilled Worker (SSW) program, as well as assistance with undergraduate, graduate, and vocational school admissions. Whether you're aiming for academic study or professional training, our consultancy helps you identify the right path, institution, and course based on your goals. We also guide you through every step—application, documentation, visa processing, and post-arrival support.",
      isOpen: false,
    },

    {
      id: 2,
      title: "Do I need to know Japanese before applying?",
      description:
        "Yes, basic proficiency in Japanese is highly recommended. Most Japanese institutions require at least an N5 or N4 level in the Japanese Language Proficiency Test (JLPT). If you're applying for SSW or vocational schools, passing language and skills tests is mandatory. Don’t worry—we provide certified language classes that help you build fluency, cultural understanding, and communication skills. Our language training also includes mock interviews and exam preparation tailored for Japanese institutions and job roles.",
      isOpen: false,
    },
    {
      id: 3,
      title: "What are the costs involved in studying in Japan?",
      description:
        "Studying in Japan involves multiple expenses including tuition fees, application charges, visa processing, flight tickets, insurance, and daily living costs. Tuition may range from ¥500,000 to ¥1,000,000 per year depending on the program and institution. Additionally, living expenses (rent, food, transport) can average ¥80,000–¥150,000 per month. We offer transparent, itemized cost breakdowns and help you budget effectively. Some costs are one-time (like documentation), while others are ongoing. We’ll help you plan accordingly.",
      isOpen: false,
    },
    {
      id: 4,
      title: "Can you help with student visa processing?",
      description:
        "Absolutely! Visa processing is one of our core services. We ensure your application meets the exact requirements set by the Japanese immigration authority. This includes preparing your academic transcripts, financial documents, admission letters, and health records. We also guide you through the Certificate of Eligibility (CoE) process and coordinate with Japanese schools for timely approvals. From filling forms to tracking progress, our team takes care of all the steps to minimize rejection risks.",
      isOpen: false,
    },
    {
      id: 5,
      title: "Are scholarships available?",
      description:
        "Yes, many Japanese institutions and government bodies offer scholarships for international students. These may cover full or partial tuition, living expenses, or travel costs. Popular scholarships include MEXT, JASSO, and private university-specific grants. Eligibility depends on academic performance, attendance, and sometimes a separate scholarship entrance test. Our team helps you identify suitable scholarships, prepare the required documents, and apply ahead of deadlines. We also offer tips for writing impactful scholarship essays and personal statements.",
      isOpen: false,
    },
    {
      id: 6,
      title: "How long does the entire application process take?",
      description:
        "The full journey—from initial counseling to landing in Japan—typically takes 4 to 6 months. This includes time for language learning, document gathering, institution application, and visa approval. For SSW candidates, skill tests and interviews may also extend the timeline slightly. We encourage students to begin their planning at least 6–8 months in advance to avoid last-minute hassles. Our team provides a personalized timeline so you stay on track with every milestone.",
      isOpen: false,
    },
    {
      id: 7,
      title: "Do you assist with accommodation in Japan?",
      description:
        "Yes, we help you secure safe and affordable housing even before you arrive in Japan. Depending on your institution and budget, we arrange dormitories, shared apartments, or homestays with Japanese families. We partner with local real estate agencies and school housing offices to ensure availability and transparency. Our counselors also help you understand rental agreements, utilities, and cultural norms of living in Japan, so you feel confident and prepared from day one.",
      isOpen: false,
    },
    {
      id: 8,
      title: "Can I work while studying in Japan?",
      description:
        "Yes, international students are allowed to work up to 28 hours per week during academic sessions and up to 40 hours during long vacations. However, you must first obtain a work permit, which we help you apply for. Common part-time jobs include restaurants, convenience stores, language tutoring, and hotel services. Working not only helps manage expenses but also builds communication skills and workplace confidence. We’ll guide you on where to find jobs and how to maintain visa compliance.",
      isOpen: false,
    },
    {
      id: 9,
      title: "What is SSW and how does it help me?",
      description:
        "SSW (Specified Skilled Worker) is a visa category that allows foreigners to work in sectors facing labor shortages in Japan, such as nursing care, agriculture, construction, and food service. To qualify, you need to pass Japanese language and industry-specific skill exams. Our consultancy prepares you for both through language classes, skill assessments, and mock interviews. Once selected, you can work in Japan for up to 5 years with a stable income and career growth opportunities.",
      isOpen: false,
    },
    {
      id: 10,
      title: "Why choose Momiji consultancy over others?",
      description:
        "We’re not just a consultancy—we’re your career partner. We focus exclusively on Japan and have long-standing ties with schools, training centers, and employers across the country. Our approach is student-centered, meaning we guide you from your first counseling session to the moment you land in Japan—and beyond. With a high visa success rate, certified trainers, and transparent processing, we’ve helped hundreds of students start new lives in Japan with clarity and confidence.",
      isOpen: false,
    },
  ]);
  const toggleAccordion = (accordionId) => {
    const updatedAccordions = accordion.map((accord) =>
      accord.id === accordionId
        ? { ...accord, isOpen: !accord.isOpen }
        : { ...accord, isOpen: false }
    );
    setAccordion(updatedAccordions);
  };

  return (
    <>
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Frequently Asked Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
              (FAQ's)
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-extralight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            quae pariatur sequi esse qui nostrum quia, deleniti sint vel
            aspernatur.
          </p>
        </div>
        <div className="space-y-2">
          {accordion.map((accor) => (
            <Accordion
              key={accor.id}
              id={accor.id}
              title={accor.title}
              description={accor.description}
              isOpen={accor.isOpen}
              toggleAccordion={() => toggleAccordion(accor.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
