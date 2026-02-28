// Simple JavaScript to load CMS data and populate templates
document.addEventListener('DOMContentLoaded', function() {
  // Load settings
  fetch('/admin/data/settings.json')
    .then(response => response.json())
    .then(settings => {
      document.querySelector('title').textContent = settings.site_title;
      // Update other elements with settings data
      const logoElements = document.querySelectorAll('img[src="images/resources/logo.png"]');
      logoElements.forEach(el => {
        el.alt = settings.site_title;
      });
    })
    .catch(error => console.error('Error loading settings:', error));

  // Load team members
  fetch('/admin/data/team/')
    .then(response => response.json())
    .then(teamFiles => {
      // For simplicity, we're just demonstrating the concept
      // In a real implementation, you would process each team member file
      console.log('Team files:', teamFiles);
    })
    .catch(error => console.error('Error loading team data:', error));
});

// Template helper function
function renderTemplate(templateId, data) {
  const template = document.getElementById(templateId);
  if (!template) return '';
  
  let html = template.innerHTML;
  for (const key in data) {
    html = html.replace(new RegExp(`{{${key}}}`, 'g'), data[key]);
  }
  return html;
}