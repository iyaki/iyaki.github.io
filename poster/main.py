import json
import requests
import sys

def main():
	file = open("../templates/post.html", "r")

	template = file.read()

	file.close()

	results = retrievePosts()

	for result in results:
		postData = extract_data(result)

		post = template.format(**postData)

		file = open(f"../docs/posts/{postData['id']}.html", "w")
		file.write(post)
		file.close()

def retrievePosts():
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
		"cover": result["cover"]["external"]["url"],
		"last_edited_time": result["last_edited_time"],
		"tags": [tag["name"] for tag in result["properties"]["Tags"]["multi_select"]],
		"url": result["properties"]["URL"]["url"],
		"comment": ""
	}

main()
