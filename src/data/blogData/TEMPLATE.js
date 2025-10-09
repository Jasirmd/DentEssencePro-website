// TEMPLATE FILE - Copy this to create new topic blog files
// Example: Copy to orthodonticsBraces.js, teethCleaningScaling.js, etc.

// Import blog images if needed
// import blogImage from '../../assets/images/Blogs/blogX.jpg'

const fallback = 'https://images.unsplash.com/photo-1612531386531-29cf3a160680?q=80&w=1200&auto=format&fit=crop'

// Replace 'template' with your topic name (e.g., 'orthodontics', 'teethCleaning', etc.)
export const templateBlogs = [
  {
    slug: 'blog-url-slug',  // URL-friendly slug (e.g., 'types-of-braces')
    title: 'Blog Title Here',  // Main title
    category: 'Category Name',  // e.g., 'Orthodontics & Braces'
    categorySlug: 'category-slug',  // e.g., 'orthodontics-braces'
    cover: fallback,  // Use fallback or import specific image
    excerpt: 'Short description for the card (1-2 sentences)',
    content: `Main blog content goes here.

You can use multiple paragraphs.

FORMATTING TIPS:
- Use ||text|| for PURPLE HEADINGS (questions, important topics)
- Use //text// for MAIN SECTION HEADINGS (dark grey with purple left border)
- Lines starting with ✅ ❌ ⚠️ 💎 etc. become bullet points (no dash needed)
- Lines starting with - become regular bullet points
- Lines with ₹ symbol automatically create pricing tables

Example Purple Heading:
||What are the types of braces?||

Example Main Section Heading:
//Benefits of Treatment//

Example bullet points:
✅ Point with emoji
- Regular bullet point

Example pricing table:
Type of Braces Cost
Metal Braces ₹30,000
Ceramic Braces ₹50,000

Contact Information:
DentEssencePRO Dental Clinic, Tatanagar, Bangalore
☎️ 9742503814
www.drmakamgangaiah.com`
  },
  // Add more blog objects here...
]

/*
STEPS TO ADD A NEW TOPIC:

1. Copy this file and rename it (e.g., orthodonticsBraces.js)
2. Replace 'templateBlogs' with your topic name (e.g., 'orthodonticsBlogs')
3. Fill in your blog content following the structure above
4. Import images if needed
5. In src/data/blog.js:
   - Import your file: import { orthodonticsBlogs } from './blogData/orthodonticsBraces'
   - Add to the corresponding category: blogs: orthodonticsBlogs
*/
