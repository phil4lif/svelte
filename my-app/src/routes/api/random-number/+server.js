import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
  const min = Number(url.searchParams.get('min') ?? '0');
  const max = Number(url.searchParams('max') ?? '1')

  const d = max - min;

  if (isNan(d) || d < 0) {
    throw error(400, 'min and max must be numbers')
  }

  const random = min + Math.random() * d;

  return new Response(String(random));
}