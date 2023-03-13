import json
import openai
import requests
import sys

def main():
	file = open("../templates/post.html", "r")

	template = file.read()

	file.close()

	results = retrieve_posts()

	for result in results:
		post_data = extract_data(result)

		get_post_comment(post_data["id"])

		# print(response.text)

		write_post(template, post_data)

def retrieve_posts():
	url = "https://api.notion.com/v1/databases/066daa9a7abb4c029724323209c85ca6/query"

	payload = {
		"page_size": 1,
		"filter": {
			"and": [
				{
					"property": "Category",
					"multi_select": {
						"does_not_contain": "Tool",
					},
				},
				{
					"property": "Category",
					"multi_select": {
						"does_not_contain": "Service",
					},
				},
				{
					"property": "Category",
					"multi_select": {
						"does_not_contain": "Website",
					},
				},
				{
					"property": "Category",
					"multi_select": {
						"does_not_contain": "Note",
					},
				},
				{
					"property": "Category",
					"multi_select": {
						"does_not_contain": "Framework/Library",
					},
				},
			]
		}
	}
	headers = {
			"accept": "application/json",
			"Notion-Version": "2022-06-28",
			"content-type": "application/json",
			"Authorization": f"Bearer {sys.argv[1]}"
	}

	response = requests.post(url, json=payload, headers=headers)

	return json.loads(response.text)["results"]

def extract_data(result):
	return {
		"id": result["id"],
		"title": result["properties"]["Name"]["title"][0]["plain_text"],
		# "cover": result["cover"]["external"]["url"],
		# "last_edited_time": result["last_edited_time"],
		# "tags": [tag["name"] for tag in result["properties"]["Tags"]["multi_select"]],
		"url": result["properties"]["URL"]["url"],
		"comment": get_post_comment(result["id"])
	}

def get_post_comment(id_page_notion):
	excerpt = get_article_excerpt(id_page_notion)

	return get_comment_from_chatgpt(excerpt)

def get_article_excerpt(id_page_notion):
	blocks = retrieve_page_blocks(id_page_notion)

	excerpt = ""

	for block in blocks:
		if block["type"] != "paragraph":
			continue

		excerpt = excerpt + "".join([paragraph["plain_text"] for paragraph in block["paragraph"]["rich_text"]]) + "\n"

	return excerpt

def retrieve_page_blocks(id_page_notion):
	url = f"https://api.notion.com/v1/blocks/{id_page_notion}/children?page_size=15"

	headers = {
			"accept": "application/json",
			"Notion-Version": "2022-06-28",
			"Authorization": f"Bearer {sys.argv[1]}"
	}

	response = requests.get(url, headers=headers)

	return json.loads(response.text)["results"]

def get_comment_from_chatgpt(excerpt):
	openai.api_key = "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"
	completion = openai.ChatCompletion.create(
		model="gpt-3.5-turbo",
		messages=[{
			"role": "user",
			"content": f"Write, in spanish, an striking comment for this article: {excerpt}"
			}]
	)

	return completion.choices[0].message.content

def write_post(template, post_data):
	post = template.format(**post_data)

	file = open(f"../docs/posts/{post_data['id']}.html", "w")
	file.write(post)
	file.close()

main()
