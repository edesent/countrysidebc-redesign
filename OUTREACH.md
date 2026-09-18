# Outreach

## Welcome / handover email to Pastor Paul Harvey — drafted 2026-09-18, NOT SENT

Send from Eli directly. The CRM record is flagged *no automated outreach* for
this church.

**Subject:** Your website is live — here's everything you need

---

Pastor Harvey,

Your site is live at **www.countrysidebc.com**. Here is everything in one place,
and none of it is urgent.

**Messages from the website come to you in Slack.**
You're already in the `#countrysidebc` channel. When somebody uses the chat
bubble in the corner of the site, or the contact form, it opens a thread there
and tags you. Reply in the thread and your answer appears in their chat window
on the website — they never see Slack, and they never get your phone number or
email. If you put the free Slack app on your phone, a visitor's question reaches
you in about the time it takes to read this sentence.

**You can edit the website yourself, by chatting with it.**
Service times, wording, photos, a new page — you describe the change in plain
English and it happens. Setup is four short steps here:

https://www.elijahdesent.com/connect

It starts with a free GitHub account. Step two is sending me the username so I
can give you access to your site; the rest takes a few minutes.

**Photos and information, whenever you have them.**
This page is yours to add to — photos, ministry details, bios, events, anything
you'd like on the site:

https://www.elijahdesent.com/intake/b3a0bbf6-6015-4d86-a5d6-02889e35d810

It saves as you go, so there's no need to do it in one sitting. Real photos of
your own people are the single biggest improvement available to the site right
now.

**One thing I'd like in your words.**
The sentence under your photo on the homepage is a placeholder I wrote in what I
guessed your voice sounds like — it isn't a real quote from you. Would you send
me a line or two you'd actually say to somebody thinking about visiting? I'll
put yours in and take mine out. If you'd rather not have a quote there at all,
say so and I'll remove it.

**One thing that runs itself.**
Your sermons page reads your YouTube channel directly. Every service you upload
appears there on its own, with the date and the title — Sunday morning, Sunday
evening, Wednesday. There is nothing to maintain and nothing to remember.

Anything at all — a typo, a time change, an idea — just reply to this and I'll
take care of it.

Eli

---

### Notes for Eli before sending

- **Chat verified working end to end** (2026-09-18): a message from the live
  domain opened a thread in `#countrysidebc`; test deleted afterwards.
- **Notifications now tag Pastor Harvey** (`pjharvey712` / `U0C2SUCDAKX`), not
  you. He was already in the channel. Say the word if you'd rather keep getting
  them during the handover and I'll point it back at you.
- **He has no GitHub access yet.** `pastorGithubUsername` is empty on the CRM
  record, so the editor will not work for him until he sends a username and it
  is added to `edesent/countrysidebc-redesign` as a collaborator.
- **The placeholder quote is live on the homepage** (`pastor.welcomeQuote` in
  `src/lib/site.ts`, rendered by `WelcomePastor`). `visitFacts` — parking,
  dress, children's classes — were also inferred rather than confirmed, though
  his 2026-09-17 note corrected the dress line himself.
