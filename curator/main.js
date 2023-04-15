
import { getNewArticle } from './cms.js'
import { addArticle, publishArticles, publishedArticles } from './webpage.js';

console.log('Starting curator')

// La api de ChatGPT tiene un limite de 3 usos por minuto
for (let i = 1; i <= 3; ++i) {
	const newArticle = await getNewArticle(publishedArticles())

	if (newArticle === null) {
		break
	}

	addArticle(newArticle)

	console.log(`Added ${i} articles`)
}

console.log('Publishing articles')

publishArticles()
