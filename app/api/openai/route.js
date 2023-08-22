import { NextResponse } from 'next/server'
import { OpenAIApi, Configuration } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function GET(request) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 70,
    prompt: request.headers.get('userPrompt'),
  });

  console.log(`request is `, request)
  console.log(`userprompt is `,request.headers.get('userPrompt'))
  const openAIResponse = await completion.data.choices[0].text

  return new NextResponse(openAIResponse)
}
