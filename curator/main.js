
import { getNewArticle } from './cms.js'
import { addArticle, publishArticles, publishedArticles } from './webpage.js';

console.log('Starting curator')

let existNewArticles = false

// La api de ChatGPT tiene un limite de 3 usos por minuto
for (let i = 1; i <= 3; ++i) {
	const newArticle = await getNewArticle(publishedArticles())

	if (newArticle === null) {
		break
	}

	existNewArticles = true
	addArticle(newArticle)

	console.log(`Added ${i} articles`)
}


if (existNewArticles) {
	console.log('Publishing articles')
	publishArticles()
}

console.log('Curator finished')
