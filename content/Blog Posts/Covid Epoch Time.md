`6/24/2025`
TDLR: I made a website that tracks the seconds since the day school shut down for COVID-19 in Illinois. 

---
My friends and I recently realized we've been keeping track of the time in our lives by how long its been since the COVID-19 school shutdowns in 2020. That instantly brought the UNIX epoch timestamp to mind, so an hour later, the COVID Epoch Timestamp was born. 

---
# [Time.Hexadual.io](https://time.hexadual.io/)
<iframe src="https://time.hexadual.io/" width="100%" height="600" frameborder="0"></iframe>

---
UPDATE: `8/30/25`
I have also added a counter at the bottom for the 2038 Overflow. aka the **[Epochalypse](https://en.wikipedia.org/wiki/Year_2038_problem)**. This is caused when a system is using a 32 bit integer to store Unix time. The latest time a 32 bit integer can sore is `231 − 1 = (2,147,483,647)` or 03:14:07 UTC on 19 January 2038.

![[Year_2038_problem.gif]]

Also check out more [time formatting and storage bugs](https://en.wikipedia.org/wiki/Time_formatting_and_storage_bugs)
