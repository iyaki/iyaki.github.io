import OpenAIApi from 'openai'

const openai = new OpenAIApi({
	apiKey: process.env.OPENAI_API_KEY,
});

export async function getComment(excerpt) {
	const completion = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages: [{
			role: 'user',
			content: `Write, in spanish, in a non personal way (definitively not in first person), with a simple language, a short (no more than two or three short sentences), catchy epigraph for this article: ${excerpt.substring(0, 17000)}`,
		}]
	})

	return completion.choices[0].message.content
}
