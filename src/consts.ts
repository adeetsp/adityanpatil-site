export const SITE_TITLE = 'Aditya Patil';
export const SITE_URL = 'https://adityanpatil.com';
export const SITE_DESCRIPTION =
  "Aditya's corner of the internet — life, fitness, career, and the way I think about things, organized into four P's.";

export type CategoryKey = 'personal' | 'physical' | 'professional' | 'philosophical';

export const CATEGORIES: Record<
  CategoryKey,
  { name: string; tagline: string; blurb: string; color: string }
> = {
  personal: {
    name: 'Personal',
    tagline: 'life updates',
    blurb:
      "What's actually going on in my life — the people, the places, the dog. If we haven't caught up in a while, start here.",
    color: 'var(--c-personal)',
  },
  physical: {
    name: 'Physical',
    tagline: 'health & fitness',
    blurb:
      'How my body and health are doing — training, eating, sleeping, and being honest about the weeks where none of that happens.',
    color: 'var(--c-physical)',
  },
  professional: {
    name: 'Professional',
    tagline: 'career & work',
    blurb:
      "What I'm building and learning at work — the wins, the misses, and what I'd tell myself a year ago.",
    color: 'var(--c-professional)',
  },
  philosophical: {
    name: 'Philosophical',
    tagline: 'mindset & ideas',
    blurb:
      'The way I think about things — mindsets, values, and ideas I keep coming back to. The closest you can get to being in my head.',
    color: 'var(--c-philosophical)',
  },
};

export const CATEGORY_KEYS = Object.keys(CATEGORIES) as CategoryKey[];
