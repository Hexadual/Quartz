# Tock Archivist
`9/18/2025`
A few years ago I found an amazing project on GitHub called [Tube Archivist](https://www.tubearchivist.com/). It allows you to "Subscribe to your favorite YouTube channels, Download videos, Index and make videos searchable, Play videos, Keep track of viewed and unviewed videos". Its a great way to save the videos from YouTube that you love just in case they get deleted. Growing up I often heard the saying that "The Internet is Forever" and that stuck with me as a kid. However, now that I am older I know that to not be true. Posts can be deleted, even entire websites. Like we saw with the recent [removal of AnandTech's website archive](https://www.thefpsreview.com/2025/08/02/anandtechs-archives-disappear-without-a-trace/). 

Platforms like YouTube are no better. You can find videos that are as old as the platform itself. Which leads people to believe that the content that is uploaded there is there forever. That may be the case for cat videos from 2008. But in recent memory I can recall many of my favorite videos that were taken down for one reason or another. From [copyright strikes](https://techraptor.net/gaming/news/nintendo-causes-gilvasunner-shut-down-youtube-channel), retroactive terms of service violations, to even [lawsuits](https://www.androidauthority.com/once-were-nerd-youtuber-copyright-lawsuit-3577995/). Time has shown that nothing on the internet is guaranteed
to last. That also goes for TikTok. Which deletes, moderates, and mutes videos frequently. After trying to find a solution similar to Tube Archivist I came up short. So I decided to make a solution myself.

What I ended up with was a python script that uses YT-DLP to download all the videos from the profiles that I specify in a text file. The scrip uses an archive file so that it doesn't downloads the same video more than once. and much like Tube Archivist it downloads all the videos into folders for each of the profiles that I have "saved".

If I were to start this project over again one thing that I would do differently is use [gallery-dl](https://github.com/mikf/gallery-dl) instead of YT-DLP. it is much better at downloading things like pictures as well as videos from a profile. 

---
# Windows Auto deployment
`9/19/2025`
Last week I was asked to set up three new windows machines 