{
  "name": "Gmail POP refresher",
  "version": "1.0",
  "description": "You use Gmail on desktop as a POP client, and you want to control the email fetching frequency.",
  "manifest_version": 2,
  "content_scripts": [
    {
      "matches": ["https://mail.google.com/*"],
      "js": ["refresh.js"]
    }
  ]
}
