This page discusses the hardware (servers, storage, networking gear, virtualization hosts), Virtualization (VMware, Proxmox, Hyper-V, Docker, Kubernetes), Storage (RAID/ZFS, NAS, backup strategy), and Networking (firewalls, VLANs, NAT, VPN, reverse proxy).

> [!info] Reminder: Last Updated 9/17/2025
> This page is constantly being updated to reflect the current state of both hardware and software. Check out [[Homelab Evolution]] to see the changes that I have made over the years and how I got here.

---
# Hardware
## Hypervisor
`Dell PowerEdge R630 Server`
- OS: [Proxmox](https://www.proxmox.com/en/)
- CPU: 2x E5-2680 V4 - 28 Cores
- RAM: 128GB RAM DDR4
- RAID Controller: H730P
- Storage: 
	- 2x 1TB SSD 
	- 6X 1TB WD Black 7200 RPM 
- Services:
	- Hardware virtualization
---
## Plex Server
`Custom Build`
- OS: [Debian](https://wiki.debian.org/)
- CPU: Intel Core i5-7600K
- RAM: 2x 4GB DDR4-2133 CL15
- RAID Card: LSI SAS 93​00-16I 12G​B/S HBA
- Storage: 
	- 1x Kingston A400 120 GB 2.5" SSD
	- 1x Western Digital Red 4 TB 3.5" 5400 RPM 
- Services:
	- Plex
---
## Supermicro 
`X9DRi-LN4F+`
- OS: [Fedora](https://www.fedoraproject.org/)
- CPU: 
- RAM: 
- Storage: 
- Services: 
> [!error] Power
> This machine uses so much energy and puts out so much heat that I rarely use it for anything long term. Its more of a cold spare that I keep around for larger one off projects. 

---
## NAS 2.0
`Custom Build`
- OS: [TrueNAS](https://www.truenas.com/)
- CPU: Ryzen 5 5600G 
- RAM: 16 GB (2 x 8 GB) DDR4-2400 CL16
- Storage: 
	- 5x Western Digital Red 6 TB 3.5" 5400 RPM 
	- 5x Western Digital Red Plus 10 TB 3.5" 7200 RPM 
---
## Synology NAS
`DS418`
- OS: DiskStation Manager (DSM)
- CPU: Realtek RTD1296 quad-core
- RAM: 2 GB DDR4
- Storage: 
	- 4x Seagate IronWolf 6TB NAS Hard Drive 7200 RPM 
- Services:
	- Synology Drive 
	- Synology Photos 
---
## Raspberry Pi #1 
`Pi 5`
- OS: [DietPi](https://dietpi.com/)
- CPU: Broadcom BCM2712 
- RAM: 8GB
- Storage: 
	- 32GB SD Card
- Services:
	- Jellyfin Live TV
---
## OFF Site Backup
### Raspberry Pi #2
`Pi 3 B+`
- OS: [DietPi](https://dietpi.com/)
- CPU: Broadcom BCM2837B0
- RAM: 1GB LPDDR2 
- Storage: 
	- 32GB SD Card
- Services:
	- Offsite backup. Details TBD
---
### Synology NAS
`DS220+`
- OS: DiskStation Manager (DSM)
- CPU: Intel Celeron J4025 2-core 
- RAM: 2 GB DDR4 
- Storage:
	- 2x Seagate IronWolf 6TB NAS Hard Drive 7200 RPM 
---
# Virtualization
Currently I only have 1 Hypervisor that is has about 10-15 VMs on it at any given time. Some of the VMs handle things like
- Docker
- Syncthing
	- See "[[Accessing all my files from every device]]"
- PiHole
- Game Servers
- Reverse Proxy
- Friends VMs for their projects.
- See More: [[Services]]
> [!tip] [Security through obscurity](https://www.okta.com/identity-101/security-through-obscurity/) 
> I will not go into specifics because I would be making any attackers job easier. Security by obfuscation serves to make reconnaissance from bad actors and unauthorized users harder.

---
# Storage
NAS 1 and NAS 2 have a combined RAW capacity of 104 Terabytes. However, I use [RAID 5](https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_5) so that reduces the usable storage to 82 Terabytes. There is also a 4TB hard drive in the Plex server that is used for temporary project storage. So the total usable space is 86 Terabytes of useable space.

---
# Networking
By having a wildcard certificate in my DNS records I can direct all traffic from my domain to my [reverse proxy server.](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/) Personally I use [Caddy.](https://caddyserver.com/)So then the proxy server can serve different content from the same IP address.
![[reverse_proxy_flow.png]]