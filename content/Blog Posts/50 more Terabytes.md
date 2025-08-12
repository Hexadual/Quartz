`4/23/2025` 
TLDR: Over the Summer I managed to buy 10 more hard drives (WD Red Plus's). Each one was 10TB and was going to be installed into my NAS. This was a much needed upgrade as I was completely out of storage 

---
# Part 1: The RAID
In the middle pod I added 5 more hard drives, each one was 10 Terabytes for a total raw addition of 50 terabytes. However, due to redundancy this is not how much space I was able to get back. In that pod of 5 I configured the system to allow for 1 drive to fail and still retail all the data that is stored across the 5 drives. So the total usable space is 40 Terabytes of usable space. This is all possible due to a cool technology called a [RAID](https://en.wikipedia.org/wiki/RAID) (Redundant Array of Independent Disks.) and an operating system called [TrueNAS](https://www.truenas.com/).

![[photo_2025-04-26_17-00-49.jpg|500]]
*Figure 1: The New five hard drives installed in the middle pod of the NAS Chassis*

---
# Part 2: Airflow
The fun was not over that easily! After finishing everything that needed to be done I cleaned up the server and put it back on the rack and all was well. Until about 30 minuets later when I realized that the new RAID performance was extremely worse than what was expected. After digging around I saw that the new drives that were installed were running at 65 degrees (149F). For reference the recommended temperature of a hard drive is 5 to 50 degrees. After googling that fact I realized that I forgot to install the fan in the front of the new hard drives. There was no fan that was blowing fresh air over the drives to cool them. Which is why they were 15 degrees over temperature. After I installed the fan the temps were able to drop all the way down to 45 degrees (113F) 

![[NAS FANS.png]]
*Figure 2: Hard Drive temps before and after the cooling fan*

So morale of the story is to always install fans in a server.
