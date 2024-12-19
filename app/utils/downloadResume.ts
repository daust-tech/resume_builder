import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadResume = async (resumeRef: HTMLDivElement | null) => {
  if (!resumeRef) return;

  try {
    const canvas = await html2canvas(resumeRef, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("resume.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};