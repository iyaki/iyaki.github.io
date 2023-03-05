package main

import (
	"context"
	"encoding/json"
	"fmt"
	"html/template"
	"os"

	"github.com/jomei/notionapi"
)

func main() {
	// postsData := retirevePostsData(days: 2)
	// postData.Comment = retrieveChatGPTComment(postData)
	// posts := hydratePostsTemplate(postsData)
	// writeToDisk(posts)

	retrievePostsData()

	// retrievePostsData()

	// fmt.Println("Hello, World!")




}

type Post struct {
	ID string
	Title string
	LastEditedTime string
	Cover string
	Icon string
	Tags []string
	Category []string
	URL string
	Comment string
}

func retrievePostsData() []Post {
	postsData := fetchPostsData()

	var posts []Post
	for _, postData := range postsData {
		page := &notionapi.Page{}

		j, err := json.Marshal(postData)
		if err != nil {
			fmt.Println(err)
		}

		err = json.Unmarshal(j, page)
		if err != nil {
			fmt.Println(err)
		}

		if !isPost(page) {
			continue
		}

		// fmt.Println(*page)

		posts = append(posts, Post{
			ID: string(page.ID),
		})

	}

		return posts
}

func fetchPostsData() []notionapi.Object {
	client := notionapi.NewClient("secret_sAPeq6W7XE9fzyzTicTDi2PKzX8AxSk9aNAmjikJDqA")

	searchRequest := &notionapi.SearchRequest{
		Filter: notionapi.SearchFilter{
			Value: "page",
			Property: "object",
		},
		Sort: &notionapi.SortObject{
			Timestamp: notionapi.TimestampLastEdited,
			Direction: notionapi.SortOrderDESC,
		},
		PageSize: 1,
	}

	searchResponse, _ := client.Search.Do(context.Background(), searchRequest)
	var data []byte
	searchResponse.UnmarshalJSON(data)

		return searchResponse.Results
}

func isPost(page *notionapi.Page) bool {
	for _, v := range page.Properties {
		fmt.Println(v.GetType())
	}

	return true
}

func hydratePostsTemplate() {
	tmpl, err := template.New("post.html").ParseFiles("./../templates/post.html")

	if err != nil {
		fmt.Println("Error processing post's template:", err.Error())
	}

	err = tmpl.Execute(os.Stdout, struct {
		Title string
		Date string
		Comment string
		URI string
	}{
		"El mejor titulo del mundo",
		"02/08/1996",
		"Articulo fabulantastico sobre algo increiblemente genial",
		"https://iyaki.ar",
	})

	if err != nil {
		fmt.Println("Error hidrating post's template: ", err.Error())
	}
}
