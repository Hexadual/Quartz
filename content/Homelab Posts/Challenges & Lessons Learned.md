I have been tinkering with my server since 2017. In that time I have learned a lot of lessons the hard way. From not backing up data properly, to not testing before committing changes. This page acts as a repo for some of the weirdest and funniest issues that I have encountered. 

Also check out 

[Cursed Knowledge](https://immich.app/cursed-knowledge) by [The Immich Team](https://immich.app/)

["We ran out of columns"](https://jimmyhmiller.com/ugliest-beautiful-codebase) by [Jimmy Miller](https://github.com/jimmyhmiller)

[Software Folklore](https://beza1e1.tuxen.de/lore/ ) by [Andreas Zwinkau](https://beza1e1.tuxen.de/)

[awesome-bugs](https://github.com/Julian/awesome-bugs)  by [Julian Berman](https://github.com/Julian)

---
# Quartz 4 wont delete deleted files
`9/16/25`
This issue is actuality about updating this very website. When I was first creating the [[Homelab]] page I first created a folder called "Homelab" to store sub pages in. But I realized that I cant have a folder and a page with the same name. So I renamed the "Homelab" folder to "Homelab Posts" and then rebuilt the website.  I then found that the "Homelab" page was still a folder for some reason. After several rebuilds that included editing both the `quartz.config.ts`  and the `quartz.layout.ts` I found the issue. The `/Quartz/public` folder does not reflect files that are deleted in `/Quartz/content`. So after deleting everything in `/Quartz/public` and building yet again the changes were finally reflected in the built site and I was able to push the changes.


---
