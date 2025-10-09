# Blog Writing Instructions for DentEssencePro Website

## Critical Rules to Avoid Syntax Errors

### 1. **NEVER USE SPECIAL CHARACTERS**

❌ **DO NOT USE:**
- Curly/smart apostrophes: `'` or `'` (Unicode U+2018, U+2019)
- Curly/smart quotes: `"` or `"` (Unicode U+201C, U+201D)
- Em dashes: `—` (Unicode U+2014)
- En dashes: `–` (Unicode U+2013)

✅ **ALWAYS USE:**
- Straight apostrophes: `'` (standard ASCII)
- Straight quotes: `"` (standard ASCII)
- Regular hyphens: `-` (standard ASCII)

**Example:**
```javascript
// ❌ WRONG - will cause syntax errors
title: 'What's the difference?',
excerpt: 'The clinic's expertise is world-class—proven by results.'

// ✅ CORRECT
title: 'What is the difference?',
excerpt: 'The clinic expertise is world-class - proven by results.'
```

### 2. **Avoid Possessives and Contractions**

Instead of using apostrophes in contractions or possessives, rewrite the sentence:

❌ **AVOID:**
- `"What's the cost?"` → Use: `"What is the cost?"`
- `"clinic's expertise"` → Use: `"clinic expertise"` or `"expertise of the clinic"`
- `"don't have"` → Use: `"do not have"`
- `"you're eligible"` → Use: `"you are eligible"`
- `"it's important"` → Use: `"it is important"`

### 3. **File Structure**

Every blog topic file must follow this exact structure:

```javascript
const fallback = 'https://images.unsplash.com/photo-XXXXXX?q=80&w=1200&auto=format&fit=crop'

export const topicNameBlogs = [
  {
    slug: 'blog-url-slug',
    title: 'Blog Title Without Special Characters',
    category: 'Category Name',
    categorySlug: 'category-slug',
    cover: fallback,
    excerpt: 'Short 1-2 sentence description without special characters.',
    content: `Full blog content here...`
  },
  // More blog objects...
]
```

### 4. **Content Formatting Delimiters**

Use these special delimiters for formatting within blog content:

**Purple Headings (Questions/Important Sections):**
```
||Heading Text Here||
```

**Dark Grey Section Headings with Purple Border:**
```
//Section Heading Here//
```

**Example:**
```javascript
content: `||What is Root Canal Treatment?||

Root canal treatment is a procedure...

//Why Choose Our Clinic?//

We offer advanced care...`
```

### 5. **Tables Format**

Use pipe-separated format for tables:

```javascript
content: `//Cost Breakdown//

Type of Treatment | Price Range
Simple Procedure | ₹2,000 - ₹5,000
Complex Procedure | ₹5,000 - ₹10,000

The costs vary based on...`
```

**Important:**
- Use single pipe `|` for table columns
- DO NOT use `||` in table rows (that's for headings)
- First row is automatically treated as table header

### 6. **Lists and Bullet Points**

Use emojis for visual bullets:

```javascript
content: `||Benefits||

✅ Painless procedure
✅ Quick recovery time
✅ Long-lasting results

||Risks||

⚠️ Minor swelling possible
⚠️ Temporary sensitivity
⚠️ Requires follow-up care`
```

### 7. **Naming Conventions**

**File names:** Use camelCase
- ✅ `dentalImplants.js`
- ✅ `wisdomTeeth.js`
- ✅ `rootCanalTreatment.js`

**Variable names:** Use camelCase with "Blogs" suffix
- ✅ `dentalImplantsBlogs`
- ✅ `wisdomTeethBlogs`
- ✅ `rootCanalBlogs`

**Slugs:** Use kebab-case (lowercase with hyphens)
- ✅ `dental-implants`
- ✅ `wisdom-teeth`
- ✅ `root-canal-treatment`

### 8. **Integration Steps**

After creating a new blog file, you MUST update `src/data/blog.js`:

```javascript
// 1. Add import at top
import { wisdomTeethBlogs } from './blogData/wisdomTeeth'

// 2. Add to blogCategories array
{
  id: 6,
  name: 'Wisdom Teeth',
  slug: 'wisdom-teeth',
  blogs: wisdomTeethBlogs
}
```

### 9. **Syntax Validation**

Always validate JavaScript syntax after creating the file:

```bash
node -c "/path/to/file.js"
```

If you see any syntax errors, check for:
1. Curly apostrophes or quotes
2. Em dashes or en dashes
3. Missing commas between blog objects
4. Unclosed template literals (backticks)

### 10. **Common Errors and Fixes**

**Error:** `SyntaxError: Unexpected identifier 's'`
- **Cause:** Curly apostrophe in possessive or contraction
- **Fix:** Replace with straight apostrophe OR rewrite to avoid apostrophe

**Error:** `Failed to parse source for import analysis`
- **Cause:** Unicode special characters in string literals
- **Fix:** Use Python script to replace all Unicode characters:
```python
python3 -c "
with open('file.js', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('\u2019', \"'\")
content = content.replace('\u2014', '-')
with open('file.js', 'w', encoding='utf-8') as f:
    f.write(content)
"
```

**Error:** Table showing raw pipe characters `|`
- **Cause:** Incorrect table detection or formatting
- **Fix:** Ensure single pipes `|` separate columns, not `||`

### 11. **Content Guidelines**

**Length:**
- Excerpt: 1-2 sentences, under 200 characters
- Content: 300-800 words per blog (varies by topic)

**Tone:**
- Professional but approachable
- Use second person ("you", "your")
- Include clinic information and call-to-action

**Structure:**
- Start with introduction
- Use headings to break up content
- Include benefits/features with bullet points
- End with location and contact info

### 12. **Testing Checklist**

Before considering a blog topic complete:

- [ ] File created in `/src/data/blogData/`
- [ ] No curly quotes, apostrophes, or em dashes
- [ ] All contractions expanded (what's → what is)
- [ ] Syntax validation passes (`node -c file.js`)
- [ ] Import added to `src/data/blog.js`
- [ ] Category linked to blogs array
- [ ] Tables formatted with single pipes
- [ ] Headings use `||` and `//` delimiters
- [ ] Emojis used for bullet points
- [ ] Dev server runs without errors
- [ ] Blogs display correctly on website

### 13. **Quick Reference Template**

```javascript
const fallback = 'https://images.unsplash.com/photo-XXXXXX'

export const topicBlogs = [
  {
    slug: 'example-blog-slug',
    title: 'Example Blog Title Without Apostrophes',
    category: 'Topic Name',
    categorySlug: 'topic-slug',
    cover: fallback,
    excerpt: 'Brief description without special characters.',
    content: `||Main Question or Title||

Introduction paragraph explaining the topic.

//Section Heading//

Content with details about the section.

||Benefits or Features||

✅ First benefit point
✅ Second benefit point
✅ Third benefit point

//Cost or Pricing//

Service Type | Price Range
Basic | ₹2,000 - ₹5,000
Advanced | ₹5,000 - ₹10,000

||Important Information||

⚠️ Important note one
⚠️ Important note two

💡 "Quote or tip in quotation marks"

||Contact Information||

📍 DentEssencePRO Dental Clinic, Bangalore
📞 9742503814
🌐 www.drmakamgangaiah.com`
  }
]
```

---

## Summary: The Golden Rules

1. **NO SPECIAL UNICODE CHARACTERS** - Only ASCII apostrophes, quotes, and hyphens
2. **EXPAND ALL CONTRACTIONS** - "what's" becomes "what is"
3. **USE DELIMITERS** - `||heading||` and `//section//` for formatting
4. **VALIDATE SYNTAX** - Always run `node -c` before committing
5. **UPDATE BLOG.JS** - Import and link every new topic file
6. **TEST IN DEV SERVER** - Ensure blogs display without errors

---

**Last Updated:** 2025-10-09
**File Location:** `/BLOG_WRITING_INSTRUCTIONS.md`
