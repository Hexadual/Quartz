`6/19/2025` 
TLDR: I used [Synching](https://syncthing.net/) to backup and sync all my files across 3 states and 4 devices.

---
# WHY?
In the modern world everyone relies on things like Google Drive, Microsoft OneDrive and to a lesser extent iCloud to be able to access files when they need them. For me I didn't like the idea of using something like OneDrive to store all of the documents that I was working on for school. I wanted to be able to access my projects even when I was offline. Because of this I needed to have the files on my computer. However this posed a new question. If I were to start something on my laptop and then come home from class I would need to transfer it to my desktop to keep working on it. I need some**thing** to **Sync** the files between my devices. Upon first thought the solution is to simply install Syncthing on my laptop and desktop then boom problem solved. Well not exactly.  for Syncthing to work both devices need to be awake to talk to each other. This means that I still need to get my laptop out when I get home and then let it connect to my PC and then once its done I can put it away. So I needed to get more creative.

---
# HOW?
The solution that I came up with is to have a server running Syncthing that is always accessible on a VM in my homelab. Then on all of the devices that need to access my files they connect to the server and constantly synchronize what I am working on to the server. When one of my devices comes online it gets the latest changes and new files. This allows me to work on something in class on my laptop in the morning. Then when I get home form class my work is already in the Syncthing server. So when I turn on my PC it automatically gets the work from the server. I don't even need to take my laptop out of my backpack.
![[Syncthing Diagram.png]]
*Image 1: My Syncthing implantation diagram.*

## Clients
~~[Synctrazor](https://github.com/canton7/SyncTrayzor?tab=readme-ov-file)~~ [Synctrazor V2](https://github.com/GermanCoding/SyncTrayzor?tab=readme-ov-file) is a great tool that runs Syncthing in the windows tray on startup. 

[Syncthing Tray](https://martchus.github.io/syncthingtray/) Is also another client that does the same thing and works on Linux. 

---
# Other cool configurations
## Picking what Files get synced
My laptop only has 500GB of storage so I don't want all the files that are on my desktop to get sent to my laptop. So what I did was configure Syncthing so that only my school folder and my pictures folder got synced to my laptop. On my gaming computer It only synced my video's folder for game recordings and pictures for screenshots. 
![[Pasted image 20250619165830.png]]
*Image 2: My PCs Syncthing panel*

---
## 321 BACKUP
One fun extra perk of using a central Syncthing server is it also acts as a central point for a backup server. For my implementation I followed the 321 backup method. 
> [!quote]
> - **Three Copies:** This includes your original data and two separate backup copies.
>- **Two Different Media:** This means storing your backups on different types of storage, such as a hard drive and cloud storage, or a server and an external drive.
>- **One Off-site Copy:** This ensures that one backup is stored in a physically separate location from your primary data and other backups, protecting against site-specific disasters like fires or floods

**Three Copies:** I have three copies of my data. One on my PC, one on the Syncthing server, and the third is on the offsite backup server that my Syncthing server backs up to. 

**Two Different Media:** For two different media, all of the storage for the Syncthing and the off site backup servers are in a RAID5 configuration as well as on different systems. 

**One Off-site Copy:** My Syncthing server stores all of its data on a NAS that is in my homelab. Every night that NAS backs up a copy of itself to another NAS that I have at a different location. 

---
Syncthing has become such a seamless part of my daily life that I often forget it's even there. Quietly running in the background, it keeps my files synced across my devices without me even thinking about it. 