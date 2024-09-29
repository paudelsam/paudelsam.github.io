// JavaScript function to scroll to a specific section
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
