// フェードイン表示
document.addEventListener("DOMContentLoaded", () => {
    const fadeElems = document.querySelectorAll('.wrapper');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.2 });
  
    fadeElems.forEach(el => observer.observe(el));
  });
  
  // ナビゲーションのハイライト
  document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("header nav a");
  
    let currentId = "";
  
    sections.forEach(section => {
      const top = section.offsetTop - 200;
      if (window.scrollY >= top) {
        currentId = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentId) {
        link.classList.add("active");
      }
    });
  });
  
  // フォーム送信仮処理
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("お問い合わせありがとうございます。\n確認のうえご連絡いたします。");
      form.reset();
    });
  });
  