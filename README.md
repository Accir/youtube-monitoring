# YouTube query monitoring

Javascript script which monitors YouTube query results and outputs to console and slack webhook

To start the script:

- Paste YouTube API key into `YOUTUBE_API_KEY`
- Paste slack webhook into `SLACK_WEBHOOK` (optional)
- Copy, paste and run code in browser's developer console

### Possible way to setup more permament monitoring:

- Setup node.js server
- Query the YouTube API with provided keyword
- Save results to a database if response is different from the last one
