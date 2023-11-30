import { Configuration, OpenAIApi } from 'openai'

const openai = new OpenAIApi(new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
}));

export async function getComment(excerpt) {
	const completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [{
			role: 'user',
			content: `Write, in spanish, in a non personal way (definitively not in first person), a short (no more than two short sentences) catchy epigraph for this article: ${excerpt.substring(0, 17000)}`,
		}]
	})

	return completion.data.choices[0].message.content
}
