import { NextResponse } from 'next/server'
import { OpenAIApi, Configuration } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log(process.env.OPENAI_API_KEY)

const openai = new OpenAIApi(configuration);

export async function GET(request) {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `sing me a song`,
    });
    // console.log(`${completion.data.choices[0].text}`)

    const openAIResponse = await completion.data.choices[0].text
    // console.log(`typeof product" `, typeof product)
    // console.log(`product: `, product)
 
    return new NextResponse(openAIResponse)
  }
  //   res.status(200).json({ text: `${completion.data.choices[0].text}` });
  // } else {
  //   res.status(400).json({ text: "No prompt provided." });
  // }
