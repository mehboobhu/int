# Crystalo Interior Design - Netlify CMS Enabled

This project is a fully responsive HTML5 template for an interior design company that has been enhanced with Netlify CMS for dynamic content management.

## Features

- Fully responsive design
- Modern and clean interface
- Multiple page layouts
- Integrated Netlify CMS for content management
- Easy to customize and deploy

## Getting Started

### Prerequisites

- A GitHub account
- A Netlify account

### Installation

1. Fork this repository to your GitHub account
2. Log in to your Netlify account
3. Create a new site from Git and select your forked repository
4. Configure the build settings:
   - Build command: Leave empty (static site)
   - Publish directory: Leave empty (root directory)
5. Enable Identity and Git Gateway in Netlify:
   - Go to your site settings in Netlify
   - Navigate to Identity and click "Enable Identity"
   - Go to Settings and usage, then click "Enable Git Gateway"

### Accessing the CMS

1. Visit `your-site-url/admin` to access the Netlify CMS
2. Register or log in with your email
3. Start editing content!

## Project Structure

```
├── admin/
│   ├── config.yml          # Netlify CMS configuration
│   ├── index.html          # CMS admin interface
│   └── data/               # CMS content data
│       ├── settings.json   # Site settings
│       ├── team/           # Team member profiles
│       ├── projects/       # Project showcases
│       ├── services/       # Service descriptions
│       ├── testimonials/   # Client testimonials
│       └── blog/           # Blog posts
├── css/                    # Stylesheets
├── js/                     # JavaScript files
├── images/                 # Image assets
└── *.html                  # HTML pages
```

## Customization

### Site Settings

Edit `admin/data/settings.json` to update:
- Site title
- Tagline
- Description
- Logo
- Footer text

### Team Members

Add new team members by creating JSON files in `admin/data/team/` with the following structure:

```json
{
  "name": "John Doe",
  "position": "Senior Designer",
  "bio": "John has over 10 years of experience...",
  "photo": "images/team/member.jpg",
  "social": [
    {
      "platform": "facebook",
      "url": "https://facebook.com/johndoe"
    }
  ]
}
```

### Content Management

Through the Netlify CMS admin panel, you can manage:
- General site settings
- Team member profiles
- Project showcases
- Services offered
- Client testimonials
- Blog posts

## Deployment

After making changes through the CMS or by editing files directly:
1. Commit and push changes to your GitHub repository
2. Netlify will automatically build and deploy your site

## Support

For issues and feature requests, please create an issue on this repository.

## License

This project is licensed under the MIT License.