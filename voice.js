var intents = [
  {
    name: "HelloWorldIntent",
    phrases: ["hello", "say hello", "say hello world"],
  },
  {
    name: "AboutIntent",
    phrases: [
      "what this is about",
      "about",
      "say about",
      "what is this",
      "about your website",
    ],
    type: "speak",
  },
  {
    name: "ClickIntent",
    phrases: ["click on", "click", "go to"],
    type: "action",
  },
  {
    name: "ArticleIntent",
    phrases: ["what are the stories", "stories", "articles"],
  },
];

new window.ActiveIntent.default(intents);
