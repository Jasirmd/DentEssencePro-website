// Import blog data from separate topic files
import { rootCanalBlogs } from './blogData/rootCanalTreatment'
import { orthodonticsBlogs } from './blogData/orthodonticsBraces'
import { teethCleaningBlogs } from './blogData/teethCleaningScaling'
import { periodonticsBlogs } from './blogData/periodonticsGumHealth'
import { dentalImplantsBlogs } from './blogData/dentalImplants'
import { wisdomTeethBlogs } from './blogData/wisdomTeeth'
import { cosmeticDentistryBlogs } from './blogData/cosmeticDentistry'
import { denturesBlogs } from './blogData/denturesProsthodontics'
import { oralHygieneBlogs } from './blogData/oralHygieneCare'
import { cavitiesFillingsBlogs } from './blogData/cavitiesFillings'
import { toothPainSensitivityBlogs } from './blogData/toothPainSensitivity'
import { dentalCareTipsBlogs } from './blogData/dentalCareTips'
import { sleepDisordersBlogs } from './blogData/sleepDisordersBruxism'
// Import other topics as you add them:
// ... etc

// Blog categories with their respective blogs
export const blogCategories = [
  {
    id: 1,
    name: 'Root Canal Treatment',
    slug: 'root-canal-treatment',
    blogs: rootCanalBlogs
  },
  {
    id: 2,
    name: 'Orthodontics & Braces',
    slug: 'orthodontics-braces',
    blogs: orthodonticsBlogs
  },
  {
    id: 3,
    name: 'Teeth Cleaning & Scaling',
    slug: 'teeth-cleaning-scaling',
    blogs: teethCleaningBlogs
  },
  {
    id: 4,
    name: 'Periodontics & Gum Health',
    slug: 'periodontics-gum-health',
    blogs: periodonticsBlogs
  },
  {
    id: 5,
    name: 'Dental Implants',
    slug: 'dental-implants',
    blogs: dentalImplantsBlogs
  },
  {
    id: 6,
    name: 'Wisdom Teeth',
    slug: 'wisdom-teeth',
    blogs: wisdomTeethBlogs
  },
  {
    id: 7,
    name: 'Cosmetic Dentistry',
    slug: 'cosmetic-dentistry',
    blogs: cosmeticDentistryBlogs
  },
  {
    id: 8,
    name: 'Dentures & Prosthodontics',
    slug: 'dentures-prosthodontics',
    blogs: denturesBlogs
  },
  {
    id: 9,
    name: 'Oral Hygiene & Care',
    slug: 'oral-hygiene-care',
    blogs: oralHygieneBlogs
  },
  {
    id: 10,
    name: 'Cavities & Fillings',
    slug: 'cavities-fillings',
    blogs: cavitiesFillingsBlogs
  },
  {
    id: 11,
    name: 'Tooth Pain & Sensitivity',
    slug: 'tooth-pain-sensitivity',
    blogs: toothPainSensitivityBlogs
  },
  {
    id: 12,
    name: 'Sleep Disorders & Bruxism',
    slug: 'sleep-disorders-bruxism',
    blogs: sleepDisordersBlogs
  },
  {
    id: 13,
    name: 'Dental Care Tips',
    slug: 'dental-care-tips',
    blogs: dentalCareTipsBlogs
  }
]

// Flat array of all posts for easy access
export const posts = blogCategories.flatMap(cat => cat.blogs)
