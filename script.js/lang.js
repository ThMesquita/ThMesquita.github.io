const translations = {
  en: {
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    available:
      "I am available for new projects at the moment. Contact me to schedule a chat 😀",
    reserved: "Mesquita. Some rights reserved.",
    experienceText:
      "I develop complete projects, from <strong>UX</strong> and <strong>UI</strong> Design to practical implementation with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.",
    intensiveCourses: "Intensive Courses",
    coursesList: [
      "UX Design & UI Design <span>64h</span>",
      "HTML and CSS <span>72h</span>",
      "JavaScript Complete ES6 <span>74h</span>",
    ],
    languages: "Languages",
    languagesList: [
      "English <span>/ Fluent</span>",
      "Spanish <span>/ Intermediate</span>",
      "Japanese <span>/ Intermediate</span>",
    ],
    projects: "Projects",
  },
  pt: {
    experience: "Experiência",
    education: "Formação",
    contact: "Contato",
    available:
      "Estou disponível para novos projetos no momento. Entre em contato para agendarmos uma conversa 😀",
    reserved: "Mesquita. Alguns direitos reservados.",
    experienceText:
      "Desenvolvo projetos completos, começando pelo design de <strong>UX</strong> e <strong>UI</strong> até a implementação prática utilizando <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>.",
    intensiveCourses: "Cursos Intensivos",
    coursesList: [
      "UX Design & UI Design <span>64h</span>",
      "HTML e CSS <span>72h</span>",
      "JavaScript Completo ES6 <span>74h</span>",
    ],
    languages: "Idiomas",
    languagesList: [
      "Inglês <span>/ Fluente</span>",
      "Espanhol <span>/ Intermediário</span>",
      "Japonês <span>/ Intermediário</span>",
    ],
    projects: "Projetos",
  },
};

function updateLanguage(lang) {
  document.querySelector("nav ul li:nth-child(1) a").textContent =
    translations[lang].experience;
  document.querySelector("nav ul li:nth-child(2) a").textContent =
    translations[lang].education;
  document.querySelector("nav ul li:nth-child(3) a").textContent =
    translations[lang].contact;

  document.querySelector(".introducao h1").innerHTML =
    lang === "en"
      ? "I am Thiago Mesquita.<br>Full Stack<br>Developer &<br>UX/UI Designer."
      : "Eu sou Thiago Mesquita.<br>Desenvolvedor<br>Full Stack &<br>UX/UI Designer.";
  document.querySelector(".introducao-ponto p").textContent =
    lang === "en" ? "Located in Itu-SP" : "Localizado em Itu-SP";

  document.querySelector(".experiencia h2").textContent =
    translations[lang].experience;
  document.querySelector(".experiencia-texto").innerHTML =
    translations[lang].experienceText;

  const companies = document.querySelectorAll(".empresa");
  companies[0].querySelector(".empresa-titulo").textContent =
    lang === "en" ? "IFSP" : "IFSP";
  companies[0].querySelectorAll(".empresa-titulo")[1].textContent =
    lang === "en" ? "Scholarship Holder" : "Bolsista";
  companies[0].querySelector(".empresa-texto").textContent =
    lang === "en"
      ? "Interface development and assistance to teachers and students in using laser cutters and 3D printers."
      : "Desenvolvimento de interfaces e auxílio a professores e alunos no uso de cortadora a laser e impressoras 3D.";

  companies[1].querySelector(".empresa-titulo").textContent =
    lang === "en" ? "Freelance Web Developer" : "Desenvolvedor Web Freelancer";
  companies[1].querySelectorAll(".empresa-titulo")[1].textContent =
    lang === "en" ? "Freelancer" : "Autônomo";
  companies[1].querySelector(".empresa-texto").textContent =
    lang === "en"
      ? "Development of landing pages and custom web solutions for various clients."
      : "Desenvolvimento de landing pages e soluções web personalizadas para diversos clientes.";

  companies[2].querySelector(".empresa-titulo").textContent =
    lang === "en" ? "IT Support" : "Suporte de TI";
  companies[2].querySelectorAll(".empresa-titulo")[1].textContent =
    lang === "en" ? "Freelancer" : "Freelancer";
  companies[2].querySelector(".empresa-texto").textContent =
    lang === "en"
      ? "Formatting computers, assembling and replacing computer and notebook parts."
      : "Formatação de computadores, montagem e substituição de peças de computadores e notebooks.";

  document.querySelector(".formacao h2").textContent =
    translations[lang].education;
  document.querySelector(".formacao-texto").innerHTML = `
    ${
      lang === "en"
        ? "My most recent academic experience is the <strong>bachelor's degree</strong> in <strong>Computer Science</strong> that I am pursuing at the <strong>Federal Institute of São Paulo</strong>. In addition, I stay updated through online intensive courses."
        : "Minha experiência acadêmica mais recente é o <strong>bacharelado</strong> em <strong>Ciência da Computação</strong> que estou cursando no <strong>Instituto Federal de São Paulo</strong>. Além disso, mantenho-me atualizado por meio de cursos intensivos online."
    }
  `;

  const faculdadeLista = document.querySelectorAll(".faculdade");
  faculdadeLista[0].querySelector(".faculdade-tipo").textContent =
    lang === "en" ? "Bachelor's Degree" : "Bacharel";
  faculdadeLista[0].querySelector(".faculdade-curso").textContent =
    lang === "en" ? "Computer Science" : "Ciência da Computação";
  faculdadeLista[0].querySelector(".faculdade-instituicao").textContent =
    "IFSP";

  faculdadeLista[1].querySelector(".faculdade-tipo").textContent =
    lang === "en" ? "Technical Degree" : "Técnico";
  faculdadeLista[1].querySelector(".faculdade-curso").textContent =
    lang === "en" ? "Business Administration" : "Administração de Empresas";
  faculdadeLista[1].querySelector(".faculdade-instituicao").textContent =
    "IFSP";

  document.querySelector(".cursos h3").textContent =
    lang === "en" ? translations[lang].intensiveCourses : "Cursos Intensivos";
  const cursosLista = document.querySelectorAll(".cursos ul li");
  cursosLista[0].innerHTML = translations[lang].coursesList[0];
  cursosLista[1].innerHTML = translations[lang].coursesList[1];
  cursosLista[2].innerHTML = translations[lang].coursesList[2];

  document.querySelector(".idiomas h3").textContent =
    lang === "en" ? translations[lang].languages : "Idiomas";
  const idiomasLista = document.querySelectorAll(".idiomas ul li");
  idiomasLista[0].innerHTML = translations[lang].languagesList[0];
  idiomasLista[1].innerHTML = translations[lang].languagesList[1];
  idiomasLista[2].innerHTML = translations[lang].languagesList[2];

  document.querySelector(".footer-texto").textContent =
    translations[lang].available;
  document.querySelector(".footer-copy").textContent =
    translations[lang].reserved;
}

document
  .getElementById("language-selector")
  .addEventListener("change", (event) => {
    const lang = event.target.value;
    updateLanguage(lang);
  });

function updateFlag() {
  const selector = document.getElementById("language-selector");
  const selectedOption = selector.options[selector.selectedIndex];
  const flag = selectedOption.getAttribute("data-flag");
  document.getElementById("selected-flag").src = flag;
}
