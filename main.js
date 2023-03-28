const YOUTUBE_API_KEY = "";
const SLACK_WEBHOOK = "";
const URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + YOUTUBE_API_KEY;
const DELAY = 30000;

const input = prompt("Enter YouTube keyword to monitor");

const fetchData = async (input) => {
  const response = await fetch(URL + "&q=" + input, {
    method: "GET",
  });

  const data = await response.json();

  const results =
    "Input query '" +
    input +
    "' results: \n" +
    data.items.map((item) => item.snippet.title).join("\n");

  console.log(results);
  if (SLACK_WEBHOOK) {
    fetch(SLACK_WEBHOOK, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text: results }),
    });
  }
};

fetchData(input);
const interval = setInterval(() => fetchData(input), DELAY);

const stopMonitoring = () => {
  clearInterval(interval);
};
