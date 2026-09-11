// Live chat (WBC Chat).
//
// A visitor writes from the bubble in the corner; the message opens a thread in
// the church's own private Slack channel (#countrysidebc) and @-mentions the
// person on call, so it reaches a phone in seconds instead of an inbox. Replies
// typed in Slack appear back in the visitor's chat.
//
// The key identifies this site to the chat backend. It can only post into this
// church's own channel and cannot read anything, so it lives in the repo rather
// than an env var — which keeps previews and local dev working.
//
// Site id 6ada6779-2464-4109-aee0-4862cd636652. The greeting is written in the
// church's voice rather than as Pastor Harvey speaking, because nothing here is
// a real quote from him yet.

export const CHAT = {
  origin: "https://slackwebsitechat.vercel.app",
  apiKey: "wbc_455ae07359f0b4b5ff0df2453445c8c57cfeda67166695fc",
  accentColor: "#7c5218",
  /** Pastor Harvey, already circle-cropped, so visitors see a person. */
  agentIcon: "/csbc/pastor-harvey-face.jpg",
  greeting:
    "Hello — thanks for stopping by Countryside Baptist. Ask us anything about the church, our service times, or planning a first visit, and we will get right back to you.",
} as const;
