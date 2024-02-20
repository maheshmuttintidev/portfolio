# Notion API Documentation

## Posts

- New Key 1: `secret_QpMumDVZjLdSU9zpILtRcogvtLIPSzmpycwsAdy071r` - `44922cf437074db6962e8eb48f82f631`

### Process to create a new database in notion website and add connection

1. Create a new post and select as the database from the sidebar
2. Create a new Integration in "<https://www.notion.so/my-integrations>"
3. Click on database and select "..." menu and select "Add connections" and select one of your groups (in my case, "Mahesh Muttinti Profile" group can access my notion database)

### Create a new Post in Notion
```curl
curl 'https://api.notion.com/v1/pages' \
  -H 'Authorization: Bearer '"secret_QpMumDVZjLdSU9zpILtRcogvtLIPSzmpycwsAdy071r"'' \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2022-06-28" \
  --data '{
	"parent": { "database_id": "44922cf437074db6962e8eb48f82f631" },
  "icon": {
  	"emoji": "🥬"
  },
	"cover": {
		"external": {
			"url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
		}
	},
	"properties": {
		"Title": {
			"title": [
				{
					"text": {
						"content": "Tuscan Kale"
					}
				}
			]
		},
		"Description": {
			"rich_text": [
				{
					"text": {
						"content": "A dark green leafy vegetable"
					}
				}
			]
		}
	}
	
}'
```
