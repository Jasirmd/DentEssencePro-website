<!-- e41f30d2-ca3d-4e1a-a477-e742ab983a58 7583ad3a-da4b-4d14-ac8d-32bbb7e5b13b -->
# Blog Category-First Layout

## Overview

Redesign the blog page to show organized categories with preview posts (3 per category) and "View All" buttons, making it easy for patients to discover content by topic without pagination clutter.

## Design Approach

**Main Blog Page (`/blog`):**

```
┌─ Root Canal Treatment (5 articles) ────────────┐
│ [Blog 1]  [Blog 2]  [Blog 3]   [View All →]   │
└────────────────────────────────────────────────┘

┌─ Orthodontics (7 articles) ────────────────────┐
│ [Blog 1]  [Blog 2]  [Blog 3]   [View All →]   │
└────────────────────────────────────────────────┘

┌─ General Dentistry (4 articles) ───────────────┐
│ [Blog 1]  [Blog 2]  [Blog 3]   [View All →]   │
└────────────────────────────────────────────────┘
```

**Category Page (`/blog/category/root-canal`):**

- Shows ALL posts for that category in grid
- Breadcrumb navigation
- No pagination needed (most categories have < 10 posts)

## Implementation Steps

### 1. Add Categories to Blog Data

**File: `src/data/blog.js`**

Add `category` and `date` fields to each blog post:

```javascript
{
  slug: 'blog1',
  title: 'Root Canal Treatment Cost in Bangalore',
  category: 'Root Canal Treatment',
  date: '2024-01-15',
  cover: blog1,
  excerpt: '...',
  content: '...'
}
```

Export categories array at the end:

```javascript
export const categories = [
  { 
    name: 'Root Canal Treatment', 
    slug: 'root-canal',
    description: 'Complete guide to root canal procedures and costs'
  },
  { 
    name: 'Orthodontics', 
    slug: 'orthodontics',
    description: 'Braces, aligners, and orthodontic care'
  },
  { 
    name: 'General Dentistry', 
    slug: 'general-dentistry',
    description: 'Cleaning, fillings, and routine dental care'
  },
  { 
    name: 'Oral Surgery', 
    slug: 'oral-surgery',
    description: 'Wisdom teeth and surgical procedures'
  },
  { 
    name: 'Periodontics', 
    slug: 'periodontics',
    description: 'Gum disease treatment and prevention'
  },
  { 
    name: 'Dental Care Tips', 
    slug: 'dental-care',
    description: 'Post-procedure care and maintenance tips'
  }
]
```

### 2. Create CategorySection Component

**New file: `src/components/CategorySection.jsx`**

Shows one category with 3 preview posts:

- Category heading with article count
- 3 most recent blog cards in horizontal layout
- "View All" button linking to category page
- Responsive: 3 cards on desktop, 2 on tablet, horizontal scroll on mobile

Props: `{ category, posts, maxPosts = 3 }`

### 3. Redesign Main Blog Page

**File: `src/pages/Blog.jsx`**

Complete overhaul:

- Remove current grid of all posts
- Group posts by category
- Render `CategorySection` for each category that has posts
- Add optional search bar at top (searches all posts, shows results separately)
- Clean spacing between category sections
- Only show categories that have at least 1 post

Logic:

```javascript
const postsByCategory = categories.map(cat => ({
  ...cat,
  posts: posts.filter(p => p.category === cat.name)
                   .sort((a,b) => new Date(b.date) - new Date(a.date))
                   .slice(0, 3)
})).filter(cat => cat.posts.length > 0)
```

### 4. Create Category Page

**New file: `src/pages/BlogCategory.jsx`**

Dedicated page for each category:

- Route: `/blog/category/:categorySlug`
- Breadcrumb: Home > Blog > [Category Name]
- Display category name and description
- Show ALL posts in that category (grid layout)
- Sort by date (newest first)
- "Back to Blog" button
```javascript
const { categorySlug } = useParams()
const category = categories.find(c => c.slug === categorySlug)
const categoryPosts = posts.filter(p => p.category === category.name)
```


### 5. Update App Router

**File: `src/App.jsx`**

Add new route for category pages:

```javascript
import BlogCategory from './pages/BlogCategory'

<Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
```

### 6. Enhance BlogCard Component

**File: `src/components/BlogCard.jsx`**

Add improvements:

- Lazy loading: `<img loading="lazy" ... />`
- Display category badge (small, subtle)
- Show date if available
- Ensure works well in both grid and horizontal layouts

### 7. Update BlogPost Page

**File: `src/pages/BlogPost.jsx`**

Add metadata and navigation:

- Breadcrumb: Blog > [Category] > [Post Title]
- Display category and date at top
- "Related Posts" section (3 posts from same category)
- Back button to category page (not just main blog)

### 8. Add Styles

**File: `src/styles/global.css`**

New styles needed:

- Category section container and heading
- Horizontal blog card layout
- "View All" button (arrow, hover effects)
- Category badges (color-coded per category)
- Breadcrumb navigation
- Responsive grid/scroll for category sections
- Proper spacing between sections

## Category Assignment

Based on existing 15 blogs:

- **Root Canal Treatment**: blog1
- **General Dentistry**: blog2, blog4, blog7
- **Periodontics**: blog3
- **Orthodontics**: blog5, blog9, blog10, blog11, blog12, blog13, blog14, blog15
- **Dental Care Tips**: blog6
- **Oral Surgery**: blog8

## Benefits

✅ **Better UX**: Users see variety and can quickly find their topic of interest

✅ **No pagination**: Everything accessible in 1-2 clicks maximum

✅ **Clean design**: Professional, organized, not overwhelming

✅ **Patient-focused**: Easy to find specific dental concerns

✅ **Mobile-friendly**: Horizontal scroll works great on phones

✅ **Scalable**: Works for 15 blogs now, will work for 100+ blogs later

✅ **Performance**: Only loads 3 images per category on main page

## Future Migration to CMS

When ready (50+ blogs), migrate to Strapi:

1. Keep exact same frontend structure
2. Just change data source from local import to API fetch
3. All category logic remains identical
4. Zero frontend code changes needed

### To-dos

- [ ] Add category, date, and tags fields to all 15 blog posts in blog.js
- [ ] Create BlogFilter component with category tabs, search, and sort options
- [ ] Update Blog.jsx with filtering, search, and pagination logic
- [ ] Create Pagination component for page navigation
- [ ] Add category badges and lazy loading to BlogCard component
- [ ] Add category metadata, breadcrumbs, and related posts to BlogPost page
- [ ] Add CSS styles for filters, badges, pagination, and responsive design