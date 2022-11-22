import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const response = await fetch('https://jxezbaggvb.execute-api.us-east-1.amazonaws.com/dev')
  const json = await response.json()
  console.log(json)
  const data = await json;
  return data.qotd
  // const data = {question: "What's up?"}
  // return data
}
  // const data = {question: "What's up?"}
  // return data

