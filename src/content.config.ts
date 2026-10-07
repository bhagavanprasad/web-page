import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    email: z.string().email(),
    summary: z.string(),
    tagline: z.string(),
    avatar: z.string().optional(),
    banner: z.string().optional(),
    social: z.object({
      linkedin: z.string().url().optional().or(z.literal('')),
      github: z.string().url().optional().or(z.literal('')),
      twitter: z.string().url().optional().or(z.literal('')),
      email: z.string().email().optional().or(z.literal('')),
    }).optional(),
    philosophy: z.array(z.string()).optional(),
    inspirations: z.array(z.object({
      name: z.string(),
      role: z.string(),
      impact: z.string(),
    })).optional(),
  })
})

const experience = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/experience' }),
  schema: z.object({
    experience: z.array(z.object({
      id: z.string(),
      company: z.string(),
      role: z.string(),
      type: z.enum(['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship', 'Education']),
      location: z.string(),
      startDate: z.string(),
      endDate: z.string().optional(),
      current: z.boolean().optional(),
      description: z.array(z.string()),
      technologies: z.array(z.string()).optional(),
      achievements: z.array(z.string()).optional(),
    }))
  })
})

const skills = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/skills' }),
  schema: z.object({
    categories: z.array(z.object({
      name: z.string(),
      icon: z.string(),
      skills: z.array(z.string()),
    }))
  })
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
  schema: z.object({
    projects: z.array(z.object({
      id: z.string(),
      title: z.string(),
      shortDescription: z.string(),
      longDescription: z.string().optional(),
      thumbnail: z.string().optional(),
      techStack: z.array(z.string()),
      category: z.string(),
      featured: z.boolean(),
      liveUrl: z.string().url().optional().or(z.literal('')),
      githubUrl: z.string().url().optional().or(z.literal('')),
      startDate: z.string(),
      endDate: z.string().optional(),
    }))
  })
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.number().optional(),
    featured: z.boolean().optional(),
  })
})

export const collections = {
  about,
  experience,
  skills,
  projects,
  blog,
}