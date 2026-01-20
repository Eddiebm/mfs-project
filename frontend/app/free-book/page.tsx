"use client";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";

const pages = [
  "How Things Get Noticed\nA very small book",
  "This book is about one thing.\nNot letting your work disappear.",
  "This is not a marketing book.\nIt is a reality book.",
  "If your product is not seen,\nit does not exist.",
  "Good work can still vanish.\nQuietly.",
  "Silence erases.\nIt does not wait.",
  "Marketing is not persuasion.\nIt is not tricking people.",
  "Marketing is letting people know\nsomething exists.",
  "Seeing something once\ndoes not make it real.",
  "Repetition is how memory works.",
  "People are not ignoring you.\nThey are busy.",
  "Most people notice later.\nQuietly.",
  "Every product that survives\nhas three things.\n\nPeople can encounter it.\nThey encounter it again.\nThey slowly understand what it is.",
  "You do not need to be clever.\nYou need to remain.",
  "Calm feels trustworthy.\nDesperation does not.",
  "Marketing is maintenance.\nLike brushing your teeth.",
  "If this feels hard,\nit is broken.",
  "Most people stop\nright before it starts working.",
  "You do not need everyone.\nYou need a chance.",
  "Your job is not to convince.\nYour job is to remain visible.",
  "That is it.\nNothing more.",
  "This idea is what MFS Autopilot is built to handle."
];

export default function FreeBook() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff" }}>
      <Navigation dark />

      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 80px)",
          padding: "40px",
          cursor: "pointer"
        }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          if (clickX < rect.width / 2) {
            prevPage();
          } else {
            nextPage();
          }
        }}
      >
        <div style={{
          maxWidth: "600px",
          textAlign: "center",
          fontSize: currentPage === 0 ? "32px" : "24px",
          lineHeight: "1.6",
          whiteSpace: "pre-line",
          fontWeight: currentPage === 0 ? 600 : 400
        }}>
          {pages[currentPage]}
        </div>

        <div style={{
          position: "fixed",
          bottom: "40px",
          color: "#666",
          fontSize: "14px"
        }}>
          {currentPage + 1} / {pages.length}
        </div>

        <div style={{
          position: "fixed",
          bottom: "16px",
          color: "#444",
          fontSize: "12px"
        }}>
          Click left/right or use arrow keys to turn pages
        </div>
      </div>
    </div>
  );
}
