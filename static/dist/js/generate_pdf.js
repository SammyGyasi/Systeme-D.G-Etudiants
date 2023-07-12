import html2pdf from 'html2pdf.js';

document.getElementById('generate-pdf-button').addEventListener('click', function() {
  const element = document.getElementById('pdf-content');
  html2pdf().from(element).save('output.pdf');
});
