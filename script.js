document.addEventListener("DOMContentLoaded", () => {
  // スクロールでフェードイン
  const fadeElems = document.querySelectorAll(".scroll-fade-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeElems.forEach(el => observer.observe(el));

  // Diaryページ用
  const buttonContainer = document.getElementById("month-buttons");
  if (buttonContainer) {
    const months = ["2025-09", "2025-08"]; // ここに増やしていく

    months.forEach(monthKey => {
      const button = document.createElement("button");
      const label = monthKey.replace("-", "年") + "月";
      button.textContent = label;
      button.className = "month-button scroll-fade-up";
      observer.observe(button);

      button.addEventListener("click", () => {
        window.location.href = `diary-${monthKey}.html`;
      });

      buttonContainer.appendChild(button);
    });
  }
});
