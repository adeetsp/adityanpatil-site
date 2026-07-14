import type { CollectionEntry } from 'astro:content';

export function postSlug(post: CollectionEntry<'posts'>): string {
  return post.id.split('/').pop()!;
}

export function postUrl(post: CollectionEntry<'posts'>): string {
  return `/${post.data.category}/${postSlug(post)}/`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function byDateDesc(
  a: CollectionEntry<'posts'>,
  b: CollectionEntry<'posts'>
): number {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}
