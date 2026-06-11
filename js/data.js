const STORIES = [
  {
    "id": 1,
    "date": "5/25/2026",
    "publication": "Tampa Beacon",
    "title": "Record-setting Wharton valedictorian emphasizes kindness over accolades",
    "url": "https://www.tampabaybeacons.com/2026/05/25/record-setting-wharton-valedictorian-emphasizes-kindness-over-accolades/",
    "tags": [
      "features"
    ],
    "category": "Features",
    "image": "assets/story-images/record-setting-wharton-valedictorian-emphasizes-kindness-over-accolades.jpg",
    "slug": "record-setting-wharton-valedictorian-emphasizes-kindness-over-accolade"
  },
  {
    "id": 2,
    "date": "2/24/2026",
    "publication": "Tampa Beacon",
    "title": "One move at a time: How a national master is rebuilding Tampa’s competitive chess community",
    "url": "https://www.tampabaybeacons.com/2026/02/24/one-move-at-a-time-how-a-national-master-is-rebuilding-tampas-competitive-chess-community/",
    "tags": [
      "investigation",
      "features"
    ],
    "category": "Investigation",
    "image": "assets/story-images/one-move-at-a-time-how-a-national-master-is-rebuilding-tampa-s-competitive-chess-community.jpg",
    "slug": "one-move-at-a-time-how-a-national-master-is-rebuilding-tampa-s-competi"
  },
  {
    "id": 3,
    "date": "10/3/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Sheriff fires deputy accused of pointing gun at teens, ‘appalled’ by the viral video",
    "url": "https://www.islandpacket.com/news/local/crime/article312367429.html",
    "tags": [
      "crime",
      "gun violence"
    ],
    "category": "Crime",
    "image": "assets/story-images/sheriff-fires-deputy-accused-of-pointing-gun-at-teens-appalled-by-the-viral-video.jpg",
    "slug": "sheriff-fires-deputy-accused-of-pointing-gun-at-teens-appalled-by-the-"
  },
  {
    "id": 4,
    "date": "9/30/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Video of deputy pointing gun at teens divides 2 Hilton Head neighborhoods",
    "url": "https://www.islandpacket.com/news/local/crime/article312325964.html",
    "tags": [
      "crime",
      "gun violence"
    ],
    "category": "Crime",
    "image": "assets/story-images/video-of-deputy-pointing-gun-at-teens-divides-2-hilton-head-neighborhoods.jpg",
    "slug": "video-of-deputy-pointing-gun-at-teens-divides-2-hilton-head-neighborho"
  },
  {
    "id": 5,
    "date": "9/29/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Update: Off-duty Beaufort Co. deputy who pointed gun at teens loses badge, SLED now involved",
    "url": "https://www.islandpacket.com/news/local/crime/article312305154.html",
    "tags": [
      "education",
      "crime",
      "gun violence"
    ],
    "category": "Crime",
    "image": "assets/story-images/update-off-duty-beaufort-co-deputy-who-pointed-gun-at-teens-loses-badge-sled-now-involved.jpg",
    "slug": "update-off-duty-beaufort-co-deputy-who-pointed-gun-at-teens-loses-badg"
  },
  {
    "id": 6,
    "date": "9/19/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County resident dies from mosquito-borne virus — first SC death in 20+ years",
    "url": "https://www.islandpacket.com/news/local/article312179872.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-county-resident-dies-from-mosquito-borne-virus-first-sc-death-in-20-years.jpg",
    "slug": "beaufort-county-resident-dies-from-mosquito-borne-virus-first-sc-death"
  },
  {
    "id": 7,
    "date": "9/17/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Barely read, heavily restricted: the data behind Beaufort County’s school library restricted section",
    "url": "https://www.islandpacket.com/news/local/education/article312119676.html",
    "tags": [
      "book bans",
      "education",
      "government",
      "data journalism"
    ],
    "category": "Education",
    "image": "assets/story-images/barely-read-heavily-restricted-the-data-behind-beaufort-county-s-school-library-restricted-secti.png",
    "slug": "barely-read-heavily-restricted-the-data-behind-beaufort-county-s-schoo"
  },
  {
    "id": 8,
    "date": "9/11/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Aging HVAC units leave some classrooms dependent on portable ACs — find out which schools",
    "url": "https://www.islandpacket.com/news/local/education/article312119676.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/aging-hvac-units-leave-some-classrooms-dependent-on-portable-acs-find-out-which-schools.jpg",
    "slug": "aging-hvac-units-leave-some-classrooms-dependent-on-portable-acs-find-"
  },
  {
    "id": 9,
    "date": "8/26/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Rebuilding trust: New Jasper County schools superintendent promises big improvements",
    "url": "https://www.islandpacket.com/news/local/education/article311843657.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/rebuilding-trust-new-jasper-county-schools-superintendent-promises-big-improvements.jpg",
    "slug": "rebuilding-trust-new-jasper-county-schools-superintendent-promises-big"
  },
  {
    "id": 10,
    "date": "8/22/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "School board restricts 9 books for first time under state regulation: ‘bittersweet’",
    "url": "https://www.islandpacket.com/news/local/education/article311808419.html",
    "tags": [
      "book bans",
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/school-board-restricts-9-books-for-first-time-under-state-regulation-bittersweet.png",
    "slug": "school-board-restricts-9-books-for-first-time-under-state-regulation-b"
  },
  {
    "id": 11,
    "date": "8/20/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Jasper County school board changes its mind, won’t fight state takeover",
    "url": "https://www.islandpacket.com/news/local/education/article311773866.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/jasper-county-school-board-changes-its-mind-won-t-fight-state-takeover.jpg",
    "slug": "jasper-county-school-board-changes-its-mind-won-t-fight-state-takeover"
  },
  {
    "id": 12,
    "date": "8/19/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "US 278 bridge project to Hilton Head gets legislative approval",
    "url": "https://www.islandpacket.com/news/politics-government/article311762416.html",
    "tags": [
      "transportation"
    ],
    "category": "Transportation",
    "image": "assets/story-images/us-278-bridge-project-to-hilton-head-gets-legislative-approval.jpg",
    "slug": "us-278-bridge-project-to-hilton-head-gets-legislative-approval"
  },
  {
    "id": 13,
    "date": "8/12/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Jasper County school board votes to appeal state’s takeover: ‘You don’t know what I know’",
    "url": "https://www.islandpacket.com/news/local/education/article311665715.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/jasper-county-school-board-votes-to-appeal-state-s-takeover-you-don-t-know-what-i-know.jpg",
    "slug": "jasper-county-school-board-votes-to-appeal-state-s-takeover-you-don-t-"
  },
  {
    "id": 14,
    "date": "8/8/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Jasper Co. school board to meet Monday with jobs on the line after state action",
    "url": "https://www.islandpacket.com/news/local/education/article311634918.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/jasper-co-school-board-to-meet-monday-with-jobs-on-the-line-after-state-action.jpg",
    "slug": "jasper-co-school-board-to-meet-monday-with-jobs-on-the-line-after-stat"
  },
  {
    "id": 15,
    "date": "8/6/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "State appoints new interim superintendent to lead Jasper Co. School District amid crisis",
    "url": "https://www.islandpacket.com/news/local/education/article311611166.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/state-appoints-new-interim-superintendent-to-lead-jasper-co-school-district-amid-crisis.jpg",
    "slug": "state-appoints-new-interim-superintendent-to-lead-jasper-co-school-dis"
  },
  {
    "id": 16,
    "date": "8/5/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "How Beaufort County Sheriff’s Office error voided tickets for masked ‘No Kings’ protesters",
    "url": "https://www.islandpacket.com/news/local/crime/article311587393.html",
    "tags": [
      "education",
      "crime",
      "government",
      "investigation"
    ],
    "category": "Crime",
    "image": "assets/story-images/how-beaufort-county-sheriff-s-office-error-voided-tickets-for-masked-no-kings-protesters.jpg",
    "slug": "how-beaufort-county-sheriff-s-office-error-voided-tickets-for-masked-n"
  },
  {
    "id": 17,
    "date": "8/5/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "‘One of the most dysfunctional’ boards: State takes over Jasper County School District",
    "url": "https://www.islandpacket.com/news/local/education/article311592024.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/one-of-the-most-dysfunctional-boards-state-takes-over-jasper-county-school-district.jpg",
    "slug": "one-of-the-most-dysfunctional-boards-state-takes-over-jasper-county-sc"
  },
  {
    "id": 18,
    "date": "8/1/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Classrooms become saunas: Beaufort Co. schools battle no AC ahead of first day of school",
    "url": "https://www.islandpacket.com/news/local/education/article311552501.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/classrooms-become-saunas-beaufort-co-schools-battle-no-ac-ahead-of-first-day-of-school.jpg",
    "slug": "classrooms-become-saunas-beaufort-co-schools-battle-no-ac-ahead-of-fir"
  },
  {
    "id": 19,
    "date": "7/30/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "State may dissolve Jasper County school board, assume control of district",
    "url": "https://www.islandpacket.com/news/local/education/article311526398.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/state-may-dissolve-jasper-county-school-board-assume-control-of-district.jpg",
    "slug": "state-may-dissolve-jasper-county-school-board-assume-control-of-distri"
  },
  {
    "id": 20,
    "date": "7/22/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Letter shows SC education board asked school district to follow ‘book ban’ guidelines",
    "url": "https://www.islandpacket.com/news/local/education/article311092905.html",
    "tags": [
      "book bans",
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/letter-shows-sc-education-board-asked-school-district-to-follow-book-ban-guidelines.png",
    "slug": "letter-shows-sc-education-board-asked-school-district-to-follow-book-b"
  },
  {
    "id": 21,
    "date": "7/18/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Jasper County airport manager fired over financial issues. Disputes continue",
    "url": "https://www.islandpacket.com/news/politics-government/article310875010.html",
    "tags": [
      "courts",
      "government",
      "transportation"
    ],
    "category": "Courts",
    "image": "assets/story-images/jasper-county-airport-manager-fired-over-financial-issues-disputes-continue.jpg",
    "slug": "jasper-county-airport-manager-fired-over-financial-issues-disputes-con"
  },
  {
    "id": 22,
    "date": "7/15/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "SC Inspector General alleges ex-Jasper Co. school superintendent forged docs, misused funds",
    "url": "https://www.islandpacket.com/news/politics-government/article310646310.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/sc-inspector-general-alleges-ex-jasper-co-school-superintendent-forged-docs-misused-funds.jpg",
    "slug": "sc-inspector-general-alleges-ex-jasper-co-school-superintendent-forged"
  },
  {
    "id": 23,
    "date": "7/15/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County applies for federal funds to revive full US 278 bridge project",
    "url": "https://www.islandpacket.com/news/politics-government/article310705620.html",
    "tags": [
      "education",
      "courts",
      "government",
      "transportation"
    ],
    "category": "Courts",
    "image": "assets/story-images/beaufort-county-applies-for-federal-funds-to-revive-full-us-278-bridge-project.jpg",
    "slug": "beaufort-county-applies-for-federal-funds-to-revive-full-us-278-bridge"
  },
  {
    "id": 24,
    "date": "7/8/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "More books challenged in Beaufort County School District. Board mulls options",
    "url": "https://www.islandpacket.com/news/local/education/article310237505.html",
    "tags": [
      "book bans",
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/more-books-challenged-in-beaufort-county-school-district-board-mulls-options.png",
    "slug": "more-books-challenged-in-beaufort-county-school-district-board-mulls-o"
  },
  {
    "id": 25,
    "date": "6/27/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Surprise grant option may revive full 278 bridge plan. Where’s the money coming from?",
    "url": "https://www.islandpacket.com/news/politics-government/article309571065.html",
    "tags": [
      "transportation"
    ],
    "category": "Transportation",
    "image": "assets/story-images/surprise-grant-option-may-revive-full-278-bridge-plan-where-s-the-money-coming-from.jpg",
    "slug": "surprise-grant-option-may-revive-full-278-bridge-plan-where-s-the-mone"
  },
  {
    "id": 26,
    "date": "6/23/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County’s US 278 project gets green light from State Infrastructure Bank",
    "url": "https://www.islandpacket.com/news/politics-government/article309238170.html",
    "tags": [
      "education",
      "government",
      "transportation"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-county-s-us-278-project-gets-green-light-from-state-infrastructure-bank.jpg",
    "slug": "beaufort-county-s-us-278-project-gets-green-light-from-state-infrastru"
  },
  {
    "id": 27,
    "date": "6/18/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Wearing a mask in public got 4 ‘No Kings’ protesters arrested, 2 jailed. What’s the law?",
    "url": "https://www.islandpacket.com/news/politics-government/article308938920.html",
    "tags": [
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/wearing-a-mask-in-public-got-4-no-kings-protesters-arrested-2-jailed-what-s-the-law.jpg",
    "slug": "wearing-a-mask-in-public-got-4-no-kings-protesters-arrested-2-jailed-w"
  },
  {
    "id": 28,
    "date": "6/15/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "7 years, 1 penny tax, few projects built. Voters may pay again",
    "url": "https://www.islandpacket.com/news/local/traffic/article308516925.html",
    "tags": [
      "government"
    ],
    "category": "Government",
    "image": "assets/story-images/7-years-1-penny-tax-few-projects-built-voters-may-pay-again.jpg",
    "slug": "7-years-1-penny-tax-few-projects-built-voters-may-pay-again"
  },
  {
    "id": 29,
    "date": "6/12/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "UPDATE: Over 1K join ‘No Kings’ protests in Beaufort County, police arrest 3",
    "url": "https://www.islandpacket.com/news/politics-government/article308588520.html",
    "tags": [
      "education",
      "crime",
      "government"
    ],
    "category": "Crime",
    "image": "assets/story-images/update-over-1k-join-no-kings-protests-in-beaufort-county-police-arrest-3.jpg",
    "slug": "update-over-1k-join-no-kings-protests-in-beaufort-county-police-arrest"
  },
  {
    "id": 30,
    "date": "6/11/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County to see anti-Trump rallies Saturday as part of national ‘No Kings’ movement",
    "url": "https://www.islandpacket.com/news/politics-government/article308411065.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-county-to-see-anti-trump-rallies-saturday-as-part-of-national-no-kings-movement.png",
    "slug": "beaufort-county-to-see-anti-trump-rallies-saturday-as-part-of-national"
  },
  {
    "id": 31,
    "date": "6/3/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "SC banned more school books than any other state. Can any be reinstated?",
    "url": "https://www.islandpacket.com/news/local/education/article307814115.html",
    "tags": [
      "book bans",
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/sc-banned-more-school-books-than-any-other-state-can-any-be-reinstated.png",
    "slug": "sc-banned-more-school-books-than-any-other-state-can-any-be-reinstated"
  },
  {
    "id": 32,
    "date": "5/29/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "New plan for Hilton Head bridge aims for completion in six years. What would it entail?",
    "url": "https://www.islandpacket.com/news/politics-government/article307387761.html",
    "tags": [
      "transportation"
    ],
    "category": "Transportation",
    "image": "assets/story-images/new-plan-for-hilton-head-bridge-aims-for-completion-in-six-years-what-would-it-entail.jpg",
    "slug": "new-plan-for-hilton-head-bridge-aims-for-completion-in-six-years-what-"
  },
  {
    "id": 33,
    "date": "5/22/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Defamation suit over ‘grooming’ claims moves forward after judge denies dismissal",
    "url": "https://www.islandpacket.com/news/local/education/article306925491.html",
    "tags": [
      "courts"
    ],
    "category": "Courts",
    "image": "assets/story-images/defamation-suit-over-grooming-claims-moves-forward-after-judge-denies-dismissal.png",
    "slug": "defamation-suit-over-grooming-claims-moves-forward-after-judge-denies-"
  },
  {
    "id": 34,
    "date": "5/22/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Becky Hill TikTok",
    "url": "https://www.tiktok.com/@thestatenewspaper/video/7507007755803168046",
    "tags": [
      "courts"
    ],
    "category": "Courts",
    "image": "assets/story-images/becky-hill-tiktok.jpg",
    "slug": "becky-hill-tiktok"
  },
  {
    "id": 35,
    "date": "5/20/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County faces deadline on replacing Hilton Head bridge. What were the issues?",
    "url": "https://www.islandpacket.com/news/politics-government/article306798196.html",
    "tags": [
      "education",
      "courts",
      "government",
      "transportation"
    ],
    "category": "Courts",
    "image": "assets/story-images/beaufort-county-faces-deadline-on-replacing-hilton-head-bridge-what-were-the-issues.jpg",
    "slug": "beaufort-county-faces-deadline-on-replacing-hilton-head-bridge-what-we"
  },
  {
    "id": 36,
    "date": "5/14/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Becky Hill, Murdaugh murder trial’s clerk, faces obstruction, perjury charges",
    "url": "https://www.islandpacket.com/news/state/south-carolina/article306320151.html",
    "tags": [
      "courts",
      "crime"
    ],
    "category": "Courts",
    "image": "assets/story-images/becky-hill-murdaugh-murder-trial-s-clerk-faces-obstruction-perjury-charges.jpg",
    "slug": "becky-hill-murdaugh-murder-trial-s-clerk-faces-obstruction-perjury-cha"
  },
  {
    "id": 37,
    "date": "5/14/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Murdaugh clerk Becky Hill lied to SC judge, warrants say. Here’s what she said",
    "url": "https://www.islandpacket.com/news/politics-government/article306798196.html",
    "tags": [
      "courts"
    ],
    "category": "Courts",
    "image": "assets/story-images/murdaugh-clerk-becky-hill-lied-to-sc-judge-warrants-say-here-s-what-she-said.jpg",
    "slug": "murdaugh-clerk-becky-hill-lied-to-sc-judge-warrants-say-here-s-what-sh"
  },
  {
    "id": 38,
    "date": "5/13/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "‘Blood, sweat and tears’ put into the US 278 corridor project. Has it been a waste?",
    "url": "https://www.islandpacket.com/news/politics-government/article306281546.html",
    "tags": [
      "transportation"
    ],
    "category": "Transportation",
    "image": "assets/story-images/blood-sweat-and-tears-put-into-the-us-278-corridor-project-has-it-been-a-waste.jpg",
    "slug": "blood-sweat-and-tears-put-into-the-us-278-corridor-project-has-it-been"
  },
  {
    "id": 39,
    "date": "5/10/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Book Ban TikTok",
    "url": "https://www.tiktok.com/@thestatenewspaper/video/7502507480682040622",
    "tags": [
      "book bans"
    ],
    "category": "Book Bans",
    "image": "assets/story-images/book-ban-tiktok.jpg",
    "slug": "book-ban-tiktok"
  },
  {
    "id": 40,
    "date": "5/7/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "SC now leads nation in book bans, largely due to one Beaufort County parent",
    "url": "https://www.islandpacket.com/news/local/education/article305895076.html",
    "tags": [
      "book bans",
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/sc-now-leads-nation-in-book-bans-largely-due-to-one-beaufort-county-parent.jpg",
    "slug": "sc-now-leads-nation-in-book-bans-largely-due-to-one-beaufort-county-pa"
  },
  {
    "id": 41,
    "date": "5/6/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Initial round of recommendations for Pine Island zoning changes made. What was the decision?",
    "url": "https://www.islandpacket.com/news/politics-government/article305817706.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/initial-round-of-recommendations-for-pine-island-zoning-changes-made-what-was-the-decision.jpg",
    "slug": "initial-round-of-recommendations-for-pine-island-zoning-changes-made-w"
  },
  {
    "id": 42,
    "date": "4/24/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "SC Congresswoman Nancy Mace holds Beaufort town hall. Was it open to the public?",
    "url": "https://www.islandpacket.com/news/politics-government/article304919701.html",
    "tags": [
      "government",
      "politics"
    ],
    "category": "Government",
    "image": "assets/story-images/sc-congresswoman-nancy-mace-holds-beaufort-town-hall-was-it-open-to-the-public.png",
    "slug": "sc-congresswoman-nancy-mace-holds-beaufort-town-hall-was-it-open-to-th"
  },
  {
    "id": 43,
    "date": "4/24/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "What did Rep. Nancy Mace say at closed-door South Carolina town hall?",
    "url": "https://www.islandpacket.com/news/politics-government/article304957656.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/what-did-rep-nancy-mace-say-at-closed-door-south-carolina-town-hall.png",
    "slug": "what-did-rep-nancy-mace-say-at-closed-door-south-carolina-town-hall"
  },
  {
    "id": 44,
    "date": "4/23/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Did upgrades to these Beaufort County highways reduce crashes? Here’s the data",
    "url": "https://www.islandpacket.com/news/local/traffic/article304793516.html",
    "tags": [
      "education",
      "government",
      "data journalism",
      "transportation"
    ],
    "category": "Education",
    "image": "assets/story-images/did-upgrades-to-these-beaufort-county-highways-reduce-crashes-here-s-the-data.jpg",
    "slug": "did-upgrades-to-these-beaufort-county-highways-reduce-crashes-here-s-t"
  },
  {
    "id": 45,
    "date": "4/17/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Trump team cuts funding for Beaufort Co. flood fixes. See what areas are affected",
    "url": "https://www.islandpacket.com/news/weather-news/article304446606.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/trump-team-cuts-funding-for-beaufort-co-flood-fixes-see-what-areas-are-affected.jpg",
    "slug": "trump-team-cuts-funding-for-beaufort-co-flood-fixes-see-what-areas-are"
  },
  {
    "id": 46,
    "date": "4/7/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "‘I actually got tears in my eyes’: Hundred’s flood Beaufort County in rebuke of Trump",
    "url": "https://www.islandpacket.com/news/politics-government/article303617296.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/i-actually-got-tears-in-my-eyes-hundred-s-flood-beaufort-county-in-rebuke-of-trump.png",
    "slug": "i-actually-got-tears-in-my-eyes-hundred-s-flood-beaufort-county-in-reb"
  },
  {
    "id": 47,
    "date": "4/2/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "SC board halts book bans, questions fairness as Beaufort County resident leads push",
    "url": "https://www.islandpacket.com/news/local/education/article303268791.html",
    "tags": [
      "book bans",
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/sc-board-halts-book-bans-questions-fairness-as-beaufort-county-resident-leads-push.jpg",
    "slug": "sc-board-halts-book-bans-questions-fairness-as-beaufort-county-residen"
  },
  {
    "id": 48,
    "date": "4/2/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "LGBTQ+ stickers removed from two Beaufort County schools: what’s happening and why?",
    "url": "https://www.islandpacket.com/news/local/education/article303250386.html",
    "tags": [
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/lgbtq-stickers-removed-from-two-beaufort-county-schools-what-s-happening-and-why.jpg",
    "slug": "lgbtq-stickers-removed-from-two-beaufort-county-schools-what-s-happeni"
  },
  {
    "id": 49,
    "date": "3/31/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort Co. spends over $20K on snow removal after rare January storm — see cost breakdown",
    "url": "https://www.islandpacket.com/news/weather/article303173636.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-co-spends-over-20k-on-snow-removal-after-rare-january-storm-see-cost-breakdown.jpg",
    "slug": "beaufort-co-spends-over-20k-on-snow-removal-after-rare-january-storm-s"
  },
  {
    "id": 50,
    "date": "3/27/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County school superintendent discusses ICE, vouchers, safety & teacher shortage",
    "url": "https://www.islandpacket.com/news/local/education/article302759014.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-county-school-superintendent-discusses-ice-vouchers-safety-and-teacher-shortage.jpg",
    "slug": "beaufort-county-school-superintendent-discusses-ice-vouchers-safety-te"
  },
  {
    "id": 51,
    "date": "3/14/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort Co. parent leads push as review committee recommends banning 10 more books statewide",
    "url": "https://www.islandpacket.com/news/local/education/article302004584.html",
    "tags": [
      "book bans",
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-co-parent-leads-push-as-review-committee-recommends-banning-10-more-books-statewide.png",
    "slug": "beaufort-co-parent-leads-push-as-review-committee-recommends-banning-1"
  },
  {
    "id": 52,
    "date": "3/7/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Ten more books face school statewide ban as Beaufort County resident pushes for review",
    "url": "https://www.islandpacket.com/news/local/education/article301655859.html",
    "tags": [
      "book bans",
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/ten-more-books-face-school-statewide-ban-as-beaufort-county-resident-pushes-for-review.png",
    "slug": "ten-more-books-face-school-statewide-ban-as-beaufort-county-resident-p"
  },
  {
    "id": 53,
    "date": "3/6/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Biggest ‘job creation’ in Jasper history. McMaster announces 400+ new jobs in Lowcountry",
    "url": "https://www.islandpacket.com/news/politics-government/article301583299.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/biggest-job-creation-in-jasper-history-mcmaster-announces-400-new-jobs-in-lowcountry.jpg",
    "slug": "biggest-job-creation-in-jasper-history-mcmaster-announces-400-new-jobs"
  },
  {
    "id": 54,
    "date": "2/26/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Tree-cutting mishap causes power outage for 7K in Beaufort County, surrounding counties",
    "url": "https://www.islandpacket.com/news/local/article301021634.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/tree-cutting-mishap-causes-power-outage-for-7k-in-beaufort-county-surrounding-counties.jpeg",
    "slug": "tree-cutting-mishap-causes-power-outage-for-7k-in-beaufort-county-surr"
  },
  {
    "id": 55,
    "date": "2/26/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Duffie Stone requests $1.7M budget bump to combat case backlog and prepare for future",
    "url": "https://www.islandpacket.com/news/politics-government/article300962689.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/duffie-stone-requests-1-7m-budget-bump-to-combat-case-backlog-and-prepare-for-future.jpeg",
    "slug": "duffie-stone-requests-1-7m-budget-bump-to-combat-case-backlog-and-prep"
  },
  {
    "id": 56,
    "date": "2/13/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Clock ticking on US 278 Corridor project: Has Beaufort County reached a decision?",
    "url": "https://www.islandpacket.com/news/local/traffic/article300190209.html",
    "tags": [
      "education",
      "government",
      "transportation"
    ],
    "category": "Education",
    "image": "assets/story-images/clock-ticking-on-us-278-corridor-project-has-beaufort-county-reached-a-decision.jpg",
    "slug": "clock-ticking-on-us-278-corridor-project-has-beaufort-county-reached-a"
  },
  {
    "id": 57,
    "date": "2/6/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "SCDOT presented options for US 278. Which ones can Beaufort County actually afford?",
    "url": "https://www.islandpacket.com/news/local/traffic/article299800684.html",
    "tags": [
      "education",
      "government",
      "transportation"
    ],
    "category": "Education",
    "image": "assets/story-images/scdot-presented-options-for-us-278-which-ones-can-beaufort-county-actually-afford.jpg",
    "slug": "scdot-presented-options-for-us-278-which-ones-can-beaufort-county-actu"
  },
  {
    "id": 58,
    "date": "2/5/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "More books banned for all of SC after Beaufort Co. complaint gets statewide scrutiny",
    "url": "https://www.islandpacket.com/news/local/education/article299731294.html",
    "tags": [
      "book bans",
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/more-books-banned-for-all-of-sc-after-beaufort-co-complaint-gets-statewide-scrutiny.png",
    "slug": "more-books-banned-for-all-of-sc-after-beaufort-co-complaint-gets-state"
  },
  {
    "id": 59,
    "date": "2/4/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Six options SCDOT gave Beaufort County for the US 278 project. Costs vary by $378M",
    "url": "https://www.islandpacket.com/news/local/traffic/article299642784.html",
    "tags": [
      "education",
      "government",
      "transportation"
    ],
    "category": "Education",
    "image": "assets/story-images/six-options-scdot-gave-beaufort-county-for-the-us-278-project-costs-vary-by-378m.jpg",
    "slug": "six-options-scdot-gave-beaufort-county-for-the-us-278-project-costs-va"
  },
  {
    "id": 60,
    "date": "1/31/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "County to explore six SCDOT funding options for U.S. 278 corridor project on Monday",
    "url": "https://www.islandpacket.com/news/local/traffic/article299512219.html",
    "tags": [
      "government",
      "transportation"
    ],
    "category": "Government",
    "image": "assets/story-images/county-to-explore-six-scdot-funding-options-for-u-s-278-corridor-project-on-monday.jpg",
    "slug": "county-to-explore-six-scdot-funding-options-for-u-s-278-corridor-proje"
  },
  {
    "id": 61,
    "date": "1/30/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "‘We don’t have any more time’: County, town to meet DOT to address US 278 corridor concerns",
    "url": "https://www.islandpacket.com/news/local/traffic/article299369659.html",
    "tags": [
      "government",
      "transportation"
    ],
    "category": "Government",
    "image": "assets/story-images/we-don-t-have-any-more-time-county-town-to-meet-dot-to-address-us-278-corridor-concerns.jpg",
    "slug": "we-don-t-have-any-more-time-county-town-to-meet-dot-to-address-us-278-"
  },
  {
    "id": 62,
    "date": "1/29/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "What are released-time religious programs & are they legal? Here’s what you need to know",
    "url": "https://www.islandpacket.com/news/local/education/article299363459.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/what-are-released-time-religious-programs-and-are-they-legal-here-s-what-you-need-to-know.jpeg",
    "slug": "what-are-released-time-religious-programs-are-they-legal-here-s-what-y"
  },
  {
    "id": 63,
    "date": "1/24/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Ohio-based academy launches 1st daytime Bible classes in SC for young Hilton Head students",
    "url": "https://www.islandpacket.com/news/local/education/article298945380.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/ohio-based-academy-launches-1st-daytime-bible-classes-in-sc-for-young-hilton-head-students.jpeg",
    "slug": "ohio-based-academy-launches-1st-daytime-bible-classes-in-sc-for-young-"
  },
  {
    "id": 64,
    "date": "1/23/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Major intersection upgrades leaving Okatie drivers ‘confused.’ Are changes a good thing?",
    "url": "https://www.islandpacket.com/news/local/traffic/article298967130.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/major-intersection-upgrades-leaving-okatie-drivers-confused-are-changes-a-good-thing.jpg",
    "slug": "major-intersection-upgrades-leaving-okatie-drivers-confused-are-change"
  },
  {
    "id": 65,
    "date": "1/17/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County parent pushes for statewide book ban decision. What’s next for schools?",
    "url": "https://www.islandpacket.com/news/local/education/article298667188.html",
    "tags": [
      "book bans",
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-county-parent-pushes-for-statewide-book-ban-decision-what-s-next-for-schools.png",
    "slug": "beaufort-county-parent-pushes-for-statewide-book-ban-decision-what-s-n"
  },
  {
    "id": 66,
    "date": "1/14/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County schools see promising results following phone ban. How many were confiscated?",
    "url": "https://www.islandpacket.com/news/local/education/article298512103.html",
    "tags": [
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-county-schools-see-promising-results-following-phone-ban-how-many-were-confiscated.jpg",
    "slug": "beaufort-county-schools-see-promising-results-following-phone-ban-how-"
  },
  {
    "id": 67,
    "date": "1/10/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Can Sen. Tom Davis’ proposal save the U.S. 278 Corridor Project? His plan explained",
    "url": "https://www.islandpacket.com/news/politics-government/article298234638.html",
    "tags": [
      "transportation"
    ],
    "category": "Transportation",
    "image": "assets/story-images/can-sen-tom-davis-proposal-save-the-u-s-278-corridor-project-his-plan-explained.jpg",
    "slug": "can-sen-tom-davis-proposal-save-the-u-s-278-corridor-project-his-plan-"
  },
  {
    "id": 68,
    "date": "1/10/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Heated words exchanged: Hilton Head council clashes over ‘secret’ Dec. 6 US 278 meeting",
    "url": "https://www.islandpacket.com/news/politics-government/article298317068.html",
    "tags": [
      "government",
      "transportation"
    ],
    "category": "Government",
    "image": "assets/story-images/heated-words-exchanged-hilton-head-council-clashes-over-secret-dec-6-us-278-meeting.jpg",
    "slug": "heated-words-exchanged-hilton-head-council-clashes-over-secret-dec-6-u"
  },
  {
    "id": 69,
    "date": "1/4/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Leasing battle at Ridgeland airport leaves hangar owners in limbo over investments",
    "url": "https://www.islandpacket.com/news/politics-government/article297902683.html",
    "tags": [
      "transportation"
    ],
    "category": "Transportation",
    "image": "assets/story-images/leasing-battle-at-ridgeland-airport-leaves-hangar-owners-in-limbo-over-investments.jpg",
    "slug": "leasing-battle-at-ridgeland-airport-leaves-hangar-owners-in-limbo-over"
  },
  {
    "id": 70,
    "date": "12/12/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County has new CFO who promises to tackle transparency issues after Greenway-era",
    "url": "https://www.islandpacket.com/news/politics-government/article296984779.html",
    "tags": [
      "education",
      "courts",
      "government"
    ],
    "category": "Courts",
    "image": "assets/story-images/beaufort-county-has-new-cfo-who-promises-to-tackle-transparency-issues-after-greenway-era.jpg",
    "slug": "beaufort-county-has-new-cfo-who-promises-to-tackle-transparency-issues"
  },
  {
    "id": 71,
    "date": "12/11/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Missing FOIA documents reveal blurred timeline of Beaufort County attorney’s resignation",
    "url": "https://www.islandpacket.com/news/politics-government/article296820349.html",
    "tags": [
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/missing-foia-documents-reveal-blurred-timeline-of-beaufort-county-attorney-s-resignation.jpg",
    "slug": "missing-foia-documents-reveal-blurred-timeline-of-beaufort-county-atto"
  },
  {
    "id": 72,
    "date": "12/5/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "SC Board of Education seizes Jasper County School District’s finances after audit problems",
    "url": "https://www.islandpacket.com/news/local/education/article296604639.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/sc-board-of-education-seizes-jasper-county-school-district-s-finances-after-audit-problems.webp",
    "slug": "sc-board-of-education-seizes-jasper-county-school-district-s-finances-"
  },
  {
    "id": 73,
    "date": "11/26/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "October’s Hilton Head & Bluffton restaurant health report: rodents & roaches in kitchens",
    "url": "https://www.islandpacket.com/news/business/article296152309.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/october-s-hilton-head-and-bluffton-restaurant-health-report-rodents-and-roaches-in-kitchens.png",
    "slug": "october-s-hilton-head-bluffton-restaurant-health-report-rodents-roache"
  },
  {
    "id": 74,
    "date": "11/21/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "278 corridor funding deadline extended through March. Will Beaufort County find the cash?",
    "url": "https://www.islandpacket.com/news/politics-government/article295920439.html",
    "tags": [
      "education",
      "government",
      "transportation"
    ],
    "category": "Education",
    "image": "assets/story-images/278-corridor-funding-deadline-extended-through-march-will-beaufort-county-find-the-cash.jpg",
    "slug": "278-corridor-funding-deadline-extended-through-march-will-beaufort-cou"
  },
  {
    "id": 75,
    "date": "11/20/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Complaints filed on land sale by family of Beaufort County attorney. What’s in the report?",
    "url": "https://www.islandpacket.com/news/politics-government/article295789379.html",
    "tags": [
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/complaints-filed-on-land-sale-by-family-of-beaufort-county-attorney-what-s-in-the-report.png",
    "slug": "complaints-filed-on-land-sale-by-family-of-beaufort-county-attorney-wh"
  },
  {
    "id": 76,
    "date": "11/19/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Could Hilton Head see a parallel bridge to 278 or will county secure $90M by March?",
    "url": "https://www.islandpacket.com/news/politics-government/article295798384.html",
    "tags": [
      "government",
      "transportation"
    ],
    "category": "Government",
    "image": "assets/story-images/could-hilton-head-see-a-parallel-bridge-to-278-or-will-county-secure-90m-by-march.jpg",
    "slug": "could-hilton-head-see-a-parallel-bridge-to-278-or-will-county-secure-9"
  },
  {
    "id": 77,
    "date": "11/13/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "With penny tax defeat, Beaufort County’s US 278 project stalls: Funding dilemma unfolds",
    "url": "https://www.islandpacket.com/news/politics-government/article295437364.html",
    "tags": [
      "education",
      "government",
      "transportation"
    ],
    "category": "Education",
    "image": "assets/story-images/with-penny-tax-defeat-beaufort-county-s-us-278-project-stalls-funding-dilemma-unfolds.jpg",
    "slug": "with-penny-tax-defeat-beaufort-county-s-us-278-project-stalls-funding-"
  },
  {
    "id": 78,
    "date": "11/8/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "The audit report into Beaufort County’s spending mess under Greenway remains secret. Why?",
    "url": "https://www.islandpacket.com/news/politics-government/article295255209.html",
    "tags": [
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/the-audit-report-into-beaufort-county-s-spending-mess-under-greenway-remains-secret-why.jpg",
    "slug": "the-audit-report-into-beaufort-county-s-spending-mess-under-greenway-r"
  },
  {
    "id": 79,
    "date": "11/7/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Ex-Beaufort Co. parks & rec director hit with ethics fines, reprimand. Will crackdown widen?",
    "url": "https://www.islandpacket.com/news/politics-government/article295160884.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/ex-beaufort-co-parks-and-rec-director-hit-with-ethics-fines-reprimand-will-crackdown-widen.png",
    "slug": "ex-beaufort-co-parks-rec-director-hit-with-ethics-fines-reprimand-will"
  },
  {
    "id": 80,
    "date": "11/5/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "York Glover, running unopposed, rolls to victory in Beaufort County District 3 seat",
    "url": "https://www.islandpacket.com/news/politics-government/election/article294791374.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/york-glover-running-unopposed-rolls-to-victory-in-beaufort-county-district-3-seat.jpg",
    "slug": "york-glover-running-unopposed-rolls-to-victory-in-beaufort-county-dist"
  },
  {
    "id": 81,
    "date": "11/5/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Incumbent Gerald Dawson wins sixth term in Beaufort County Dist. 1 council race by 17% points",
    "url": "https://www.islandpacket.com/news/politics-government/election/article294791359.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/incumbent-gerald-dawson-wins-sixth-term-in-beaufort-county-dist-1-council-race-by-17-points.jpg",
    "slug": "incumbent-gerald-dawson-wins-sixth-term-in-beaufort-county-dist-1-coun"
  },
  {
    "id": 82,
    "date": "11/5/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Republican incumbent Logan Cunningham wins reelection in Beaufort County’s Dist. 7 by 35% points",
    "url": "https://www.islandpacket.com/news/politics-government/election/article294791439.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/republican-incumbent-logan-cunningham-wins-reelection-in-beaufort-county-s-dist-7-by-35-points.jpeg",
    "slug": "republican-incumbent-logan-cunningham-wins-reelection-in-beaufort-coun"
  },
  {
    "id": 83,
    "date": "11/5/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County voters reject sales tax by 11% points, leaving infrastructure projects unfunded",
    "url": "https://www.islandpacket.com/news/politics-government/election/article294848694.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-county-voters-reject-sales-tax-by-11-points-leaving-infrastructure-projects-unfunded.jpg",
    "slug": "beaufort-county-voters-reject-sales-tax-by-11-points-leaving-infrastru"
  },
  {
    "id": 84,
    "date": "11/5/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Republican incumbent Bill Herbkersman wins 12th term in SC District 118 by wide margin",
    "url": "https://www.islandpacket.com/news/politics-government/election/article294791234.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/republican-incumbent-bill-herbkersman-wins-12th-term-in-sc-district-118-by-wide-margin.jpg",
    "slug": "republican-incumbent-bill-herbkersman-wins-12th-term-in-sc-district-11"
  },
  {
    "id": 85,
    "date": "11/1/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Herbkersman faces Owens in District 118 election: Experience vs. change on key local issues",
    "url": "https://www.islandpacket.com/news/politics-government/election/article294877064.html",
    "tags": [
      "courts",
      "government"
    ],
    "category": "Courts",
    "image": "assets/story-images/herbkersman-faces-owens-in-district-118-election-experience-vs-change-on-key-local-issues.jpg",
    "slug": "herbkersman-faces-owens-in-district-118-election-experience-vs-change-"
  },
  {
    "id": 86,
    "date": "10/29/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Midpoint check-in: Beaufort County voter turnout climbs as early voting surges",
    "url": "https://www.islandpacket.com/news/politics-government/election/article294708334.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/midpoint-check-in-beaufort-county-voter-turnout-climbs-as-early-voting-surges.jpg",
    "slug": "midpoint-check-in-beaufort-county-voter-turnout-climbs-as-early-voting"
  },
  {
    "id": 87,
    "date": "10/24/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Want to avoid long lines during early voting in Beaufort County? Here’s the best time to vote",
    "url": "https://www.islandpacket.com/news/politics-government/election/article294466754.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/want-to-avoid-long-lines-during-early-voting-in-beaufort-county-here-s-the-best-time-to-vote.jpeg",
    "slug": "want-to-avoid-long-lines-during-early-voting-in-beaufort-county-here-s"
  },
  {
    "id": 88,
    "date": "10/23/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort candidate forum sees only one county council candidate attendee: Who showed up?",
    "url": "https://www.islandpacket.com/news/politics-government/article294355879.html",
    "tags": [
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-candidate-forum-sees-only-one-county-council-candidate-attendee-who-showed-up.jpg",
    "slug": "beaufort-candidate-forum-sees-only-one-county-council-candidate-attend"
  },
  {
    "id": 89,
    "date": "10/21/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County’s election prep: Security, new locations and key ballot questions",
    "url": "https://www.islandpacket.com/news/politics-government/election/article294192719.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-county-s-election-prep-security-new-locations-and-key-ballot-questions.jpg",
    "slug": "beaufort-county-s-election-prep-security-new-locations-and-key-ballot-"
  },
  {
    "id": 90,
    "date": "10/20/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County’s top attorneys depart after controversial time with county — what’s next?",
    "url": "https://www.islandpacket.com/news/politics-government/article294771799.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-county-s-top-attorneys-depart-after-controversial-time-with-county-what-s-next.jpeg",
    "slug": "beaufort-county-s-top-attorneys-depart-after-controversial-time-with-c"
  },
  {
    "id": 91,
    "date": "10/17/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "2023-24 record graduation rates and improved ratings for Beaufort County Schools",
    "url": "https://www.islandpacket.com/news/local/education/article294113889.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/2023-24-record-graduation-rates-and-improved-ratings-for-beaufort-county-schools.png",
    "slug": "2023-24-record-graduation-rates-and-improved-ratings-for-beaufort-coun"
  },
  {
    "id": 92,
    "date": "10/8/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Dead flies + rodent activity: September Bluffton, Beaufort restaurant health report",
    "url": "https://www.islandpacket.com/news/business/article293597789.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/dead-flies-rodent-activity-september-bluffton-beaufort-restaurant-health-report.png",
    "slug": "dead-flies-rodent-activity-september-bluffton-beaufort-restaurant-heal"
  },
  {
    "id": 93,
    "date": "10/2/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Legal expert: What’s next in Beaufort County teachers’ ‘grooming’ defamation lawsuits?",
    "url": "https://www.islandpacket.com/news/local/education/article293371324.html",
    "tags": [
      "education",
      "courts",
      "government"
    ],
    "category": "Courts",
    "image": "assets/story-images/legal-expert-what-s-next-in-beaufort-county-teachers-grooming-defamation-lawsuits.png",
    "slug": "legal-expert-what-s-next-in-beaufort-county-teachers-grooming-defamati"
  },
  {
    "id": 94,
    "date": "10/1/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Second Hilton Head teacher sues student’s parent for defamation over ‘grooming’ claims",
    "url": "https://www.islandpacket.com/news/local/education/article293304754.html",
    "tags": [
      "education",
      "courts"
    ],
    "category": "Courts",
    "image": "assets/story-images/second-hilton-head-teacher-sues-student-s-parent-for-defamation-over-grooming-claims.png",
    "slug": "second-hilton-head-teacher-sues-student-s-parent-for-defamation-over-g"
  },
  {
    "id": 95,
    "date": "9/30/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort students back to in-person classes Tuesday: Are power outages still an issue?",
    "url": "https://www.islandpacket.com/news/weather/article293261569.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-students-back-to-in-person-classes-tuesday-are-power-outages-still-an-issue.jpg",
    "slug": "beaufort-students-back-to-in-person-classes-tuesday-are-power-outages-"
  },
  {
    "id": 96,
    "date": "9/28/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Bluffton man arrested after fatal Hilton Head Island shooting Saturday, victim identified",
    "url": "https://www.islandpacket.com/news/local/crime/article293180384.html",
    "tags": [
      "education",
      "crime",
      "gun violence"
    ],
    "category": "Crime",
    "image": "assets/story-images/bluffton-man-arrested-after-fatal-hilton-head-island-shooting-saturday-victim-identified.png",
    "slug": "bluffton-man-arrested-after-fatal-hilton-head-island-shooting-saturday"
  },
  {
    "id": 97,
    "date": "9/28/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Power outages persist in Beaufort and Jasper counties post-Hurricane Helene",
    "url": "https://www.islandpacket.com/news/weather/article293186289.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/power-outages-persist-in-beaufort-and-jasper-counties-post-hurricane-helene.jpg",
    "slug": "power-outages-persist-in-beaufort-and-jasper-counties-post-hurricane-h"
  },
  {
    "id": 98,
    "date": "9/24/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Internet back in Beaufort County after 10-hour outage. What we know",
    "url": "https://www.islandpacket.com/news/business/article292967869.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/internet-back-in-beaufort-county-after-10-hour-outage-what-we-know.jpg",
    "slug": "internet-back-in-beaufort-county-after-10-hour-outage-what-we-know"
  },
  {
    "id": 99,
    "date": "9/19/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Fact Check: Out of context video surfaces to muddy waters in Hilton Head council race",
    "url": "https://www.islandpacket.com/news/politics-government/article292729594.html",
    "tags": [
      "government"
    ],
    "category": "Government",
    "image": "assets/story-images/fact-check-out-of-context-video-surfaces-to-muddy-waters-in-hilton-head-council-race.jpg",
    "slug": "fact-check-out-of-context-video-surfaces-to-muddy-waters-in-hilton-hea"
  },
  {
    "id": 100,
    "date": "9/17/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "‘Banned Together’ documentary follows Beaufort Co. students battling book bans. Where to watch?",
    "url": "https://www.islandpacket.com/news/local/education/article292425139.html",
    "tags": [
      "book bans",
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/banned-together-documentary-follows-beaufort-co-students-battling-book-bans-where-to-watch.png",
    "slug": "banned-together-documentary-follows-beaufort-co-students-battling-book"
  },
  {
    "id": 101,
    "date": "9/11/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "August restaurant health report: Live moths, flies and larval worms found in food bins",
    "url": "https://www.islandpacket.com/news/business/article292240250.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/august-restaurant-health-report-live-moths-flies-and-larval-worms-found-in-food-bins.png",
    "slug": "august-restaurant-health-report-live-moths-flies-and-larval-worms-foun"
  },
  {
    "id": 102,
    "date": "9/9/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County teacher sues parents for defamation. They said she ‘groomed’ students",
    "url": "https://www.islandpacket.com/news/local/education/article292032630.html",
    "tags": [
      "education",
      "courts",
      "government"
    ],
    "category": "Courts",
    "image": "assets/story-images/beaufort-county-teacher-sues-parents-for-defamation-they-said-she-groomed-students.png",
    "slug": "beaufort-county-teacher-sues-parents-for-defamation-they-said-she-groo"
  },
  {
    "id": 103,
    "date": "9/4/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Over 15,000 traffic accidents in Beaufort County since 2020: Key causes revealed",
    "url": "https://www.islandpacket.com/news/local/traffic/article291915535.html",
    "tags": [
      "education",
      "government",
      "data journalism",
      "transportation",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/over-15-000-traffic-accidents-in-beaufort-county-since-2020-key-causes-revealed.jpg",
    "slug": "over-15-000-traffic-accidents-in-beaufort-county-since-2020-key-causes"
  },
  {
    "id": 104,
    "date": "9/3/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Sweltering classrooms in Beaufort County: HVAC issues persist three weeks into school year",
    "url": " https://www.islandpacket.com/news/local/education/article291861030.html",
    "tags": [
      "education",
      "courts",
      "government"
    ],
    "category": "Courts",
    "image": "assets/story-images/sweltering-classrooms-in-beaufort-county-hvac-issues-persist-three-weeks-into-school-year.jpeg",
    "slug": "sweltering-classrooms-in-beaufort-county-hvac-issues-persist-three-wee"
  },
  {
    "id": 105,
    "date": "8/30/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Why is spending $146M on traffic fixes complicated? Beaufort Council looks to repeat it",
    "url": "https://www.islandpacket.com/news/politics-government/article291711075.html",
    "tags": [
      "education",
      "government",
      "transportation",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/why-is-spending-146m-on-traffic-fixes-complicated-beaufort-council-looks-to-repeat-it.jpeg",
    "slug": "why-is-spending-146m-on-traffic-fixes-complicated-beaufort-council-loo"
  },
  {
    "id": 106,
    "date": "8/28/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "UPDATE: Jasper County Treasurer wins partial victory in bank account access battle, what happened?",
    "url": "https://www.islandpacket.com/news/politics-government/article291550220.html",
    "tags": [
      "government"
    ],
    "category": "Government",
    "image": "assets/story-images/update-jasper-county-treasurer-wins-partial-victory-in-bank-account-access-battle-what-happened.png",
    "slug": "update-jasper-county-treasurer-wins-partial-victory-in-bank-account-ac"
  },
  {
    "id": 107,
    "date": "8/27/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Parents, students: find out how Beaufort County school’s test scores compete with the state",
    "url": "https://www.islandpacket.com/news/local/education/article291367285.html",
    "tags": [
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/parents-students-find-out-how-beaufort-county-school-s-test-scores-compete-with-the-state.jpg",
    "slug": "parents-students-find-out-how-beaufort-county-school-s-test-scores-com"
  },
  {
    "id": 108,
    "date": "8/26/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County got $146M in 2018 for traffic issue. Why are only 10% of projects complete?",
    "url": "https://www.islandpacket.com/news/local/traffic/article291247085.html",
    "tags": [
      "education",
      "government",
      "transportation",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-county-got-146m-in-2018-for-traffic-issue-why-are-only-10-of-projects-complete.jpg",
    "slug": "beaufort-county-got-146m-in-2018-for-traffic-issue-why-are-only-10-of-"
  },
  {
    "id": 109,
    "date": "8/22/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "July health inspections reveal fly strips, live roaches inside Beaufort County restaurants",
    "url": "https://www.islandpacket.com/news/business/article291063055.html",
    "tags": [
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/july-health-inspections-reveal-fly-strips-live-roaches-inside-beaufort-county-restaurants.png",
    "slug": "july-health-inspections-reveal-fly-strips-live-roaches-inside-beaufort"
  },
  {
    "id": 110,
    "date": "8/15/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Top 10 worst intersections in Beaufort county: accidents surge, fatalities persist",
    "url": "https://www.islandpacket.com/news/local/traffic/article291041955.html",
    "tags": [
      "education",
      "government",
      "data journalism",
      "transportation"
    ],
    "category": "Education",
    "image": "assets/story-images/top-10-worst-intersections-in-beaufort-county-accidents-surge-fatalities-persist.png",
    "slug": "top-10-worst-intersections-in-beaufort-county-accidents-surge-fataliti"
  },
  {
    "id": 111,
    "date": "7/19/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Jasper Co. school board retains legal firm amid superintendent investigation",
    "url": "https://www.islandpacket.com/news/local/education/article290229949.html",
    "tags": [
      "education",
      "government",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/jasper-co-school-board-retains-legal-firm-amid-superintendent-investigation.jpg",
    "slug": "jasper-co-school-board-retains-legal-firm-amid-superintendent-investig"
  },
  {
    "id": 112,
    "date": "7/18/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Jasper Co. schedules second ‘surprise’ meeting amid investigation into superintendent",
    "url": "https://www.islandpacket.com/news/local/education/article290200329.html",
    "tags": [
      "education",
      "investigation"
    ],
    "category": "Education",
    "image": "assets/story-images/jasper-co-schedules-second-surprise-meeting-amid-investigation-into-superintendent.jpg",
    "slug": "jasper-co-schedules-second-surprise-meeting-amid-investigation-into-su"
  },
  {
    "id": 113,
    "date": "7/16/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "June restaurant health report: Rodent droppings and dogs playing near food",
    "url": "https://www.islandpacket.com/news/business/article290109454.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/june-restaurant-health-report-rodent-droppings-and-dogs-playing-near-food.png",
    "slug": "june-restaurant-health-report-rodent-droppings-and-dogs-playing-near-f"
  },
  {
    "id": 114,
    "date": "7/10/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Estimated $5 million more needed to relocate St. James Baptist Church, Cherry Hill School",
    "url": "https://www.islandpacket.com/news/politics-government/article289897684.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/estimated-5-million-more-needed-to-relocate-st-james-baptist-church-cherry-hill-school.jpg",
    "slug": "estimated-5-million-more-needed-to-relocate-st-james-baptist-church-ch"
  },
  {
    "id": 115,
    "date": "7/5/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Jasper officials fire back on new treasurer’s demand for access to county bank accounts",
    "url": "https://www.islandpacket.com/news/politics-government/article289744969.html",
    "tags": [
      "government"
    ],
    "category": "Government",
    "image": "assets/story-images/jasper-officials-fire-back-on-new-treasurer-s-demand-for-access-to-county-bank-accounts.jpeg",
    "slug": "jasper-officials-fire-back-on-new-treasurer-s-demand-for-access-to-cou"
  },
  {
    "id": 116,
    "date": "6/28/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Frozen out: FOIA reveals 119 Jasper Co. bank accounts, the treasurer can’t access 75%",
    "url": "https://www.islandpacket.com/news/politics-government/article289612464.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/frozen-out-foia-reveals-119-jasper-co-bank-accounts-the-treasurer-can-t-access-75.jpg",
    "slug": "frozen-out-foia-reveals-119-jasper-co-bank-accounts-the-treasurer-can-"
  },
  {
    "id": 117,
    "date": "6/25/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Jasper County Council hires legal counsel to challenge treasurer’s lawsuit",
    "url": "https://www.islandpacket.com/news/politics-government/article289530776.html",
    "tags": [
      "courts",
      "government"
    ],
    "category": "Courts",
    "image": "assets/story-images/jasper-county-council-hires-legal-counsel-to-challenge-treasurer-s-lawsuit.jpeg",
    "slug": "jasper-county-council-hires-legal-counsel-to-challenge-treasurer-s-law"
  },
  {
    "id": 118,
    "date": "6/24/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort City Council’s secret ballot appointments raise transparency concerns, legal debate",
    "url": "https://www.islandpacket.com/news/local/community/beaufort-news/article289483656.html",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/beaufort-city-council-s-secret-ballot-appointments-raise-transparency-concerns-legal-debate.jpg",
    "slug": "beaufort-city-council-s-secret-ballot-appointments-raise-transparency-"
  },
  {
    "id": 119,
    "date": "7/21/2023",
    "publication": "The Kansas City Star",
    "title": "Kansas City TV anchor Abby Eden to return to WDAF-TV FOX4’s morning show",
    "url": "https://www.kansascity.com/news/local/article277531898.html",
    "tags": [
      "investigation"
    ],
    "category": "Investigation",
    "image": "assets/story-images/kansas-city-tv-anchor-abby-eden-to-return-to-wdaf-tv-fox4-s-morning-show.png",
    "slug": "kansas-city-tv-anchor-abby-eden-to-return-to-wdaf-tv-fox4-s-morning-sh"
  },
  {
    "id": 120,
    "date": "7/20/2023",
    "publication": "The Kansas City Star",
    "title": "Leavenworth man who left toddler son unattended with gun will serve 2 years probation",
    "url": "https://www.kansascity.com/news/local/crime/article277497533.html",
    "tags": [
      "crime",
      "gun violence"
    ],
    "category": "Crime",
    "image": "assets/story-images/leavenworth-man-who-left-toddler-son-unattended-with-gun-will-serve-2-years-probation.jpg",
    "slug": "leavenworth-man-who-left-toddler-son-unattended-with-gun-will-serve-2-"
  },
  {
    "id": 121,
    "date": "7/19/2023",
    "publication": "The Kansas City Star",
    "title": "Suspect shoves employee, breaking their arm during Overland Park shoplifting attempt",
    "url": "https://www.kansascity.com/news/local/crime/article277460623.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/suspect-shoves-employee-breaking-their-arm-during-overland-park-shoplifting-attempt.jpg",
    "slug": "suspect-shoves-employee-breaking-their-arm-during-overland-park-shopli"
  },
  {
    "id": 122,
    "date": "7/19/2023",
    "publication": "The Kansas City Star",
    "title": "Pedestrian hit by minivan hospitalized in critical condition after crossing KC highway",
    "url": "https://www.kansascity.com/news/local/crime/article277458568.html",
    "tags": [
      "transportation"
    ],
    "category": "Transportation",
    "image": "assets/story-images/pedestrian-hit-by-minivan-hospitalized-in-critical-condition-after-crossing-kc-highway.jpg",
    "slug": "pedestrian-hit-by-minivan-hospitalized-in-critical-condition-after-cro"
  },
  {
    "id": 123,
    "date": "7/18/2023",
    "publication": "The Kansas City Star",
    "title": "Kansas men convicted of kidnapping and torturing victim in KCK sentenced to prison",
    "url": "https://www.kansascity.com/news/local/crime/article277423043.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/kansas-men-convicted-of-kidnapping-and-torturing-victim-in-kck-sentenced-to-prison.jpg",
    "slug": "kansas-men-convicted-of-kidnapping-and-torturing-victim-in-kck-sentenc"
  },
  {
    "id": 124,
    "date": "7/14/2023",
    "publication": "The Kansas City Star",
    "title": "More than 130,000 residents lose power as storms roll through KC, restoration could take days",
    "url": "https://www.kansascity.com/news/local/article277337313.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/more-than-130-000-residents-lose-power-as-storms-roll-through-kc-restoration-could-take-days.jpg",
    "slug": "more-than-130-000-residents-lose-power-as-storms-roll-through-kc-resto"
  },
  {
    "id": 125,
    "date": "7/14/2023",
    "publication": "The Kansas City Star",
    "title": "Man found fatally shot in backyard of Kansas City home, near Marlborough Green Space",
    "url": "https://www.kansascity.com/news/local/crime/article277324353.html",
    "tags": [
      "crime",
      "gun violence"
    ],
    "category": "Crime",
    "image": "assets/story-images/man-found-fatally-shot-in-backyard-of-kansas-city-home-near-marlborough-green-space.jpeg",
    "slug": "man-found-fatally-shot-in-backyard-of-kansas-city-home-near-marlboroug"
  },
  {
    "id": 126,
    "date": "7/11/2023",
    "publication": "The Kansas City Star",
    "title": "Kansas City man who admitted to stabbing his baby sentenced to 18 years in prison",
    "url": "https://www.kansascity.com/news/local/crime/article277215483.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/kansas-city-man-who-admitted-to-stabbing-his-baby-sentenced-to-18-years-in-prison.jpg",
    "slug": "kansas-city-man-who-admitted-to-stabbing-his-baby-sentenced-to-18-year"
  },
  {
    "id": 127,
    "date": "7/11/2023",
    "publication": "The Kansas City Star",
    "title": "Three people charged Monday after weekend shooting near Shawnee Mission Northwest",
    "url": "https://www.kansascity.com/news/local/crime/article277201588.html",
    "tags": [
      "courts",
      "gun violence"
    ],
    "category": "Courts",
    "image": "assets/story-images/three-people-charged-monday-after-weekend-shooting-near-shawnee-mission-northwest.jpg",
    "slug": "three-people-charged-monday-after-weekend-shooting-near-shawnee-missio"
  },
  {
    "id": 128,
    "date": "7/7/2023",
    "publication": "The Kansas City Star",
    "title": "‘Unsafe for occupancy’: Taylor Swift fans stranded after arriving at closed hotel",
    "url": "https://www.kansascity.com/news/local/article277113648.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/unsafe-for-occupancy-taylor-swift-fans-stranded-after-arriving-at-closed-hotel.jpeg",
    "slug": "unsafe-for-occupancy-taylor-swift-fans-stranded-after-arriving-at-clos"
  },
  {
    "id": 129,
    "date": "7/6/2023",
    "publication": "The Kansas City Star",
    "title": "Two people are dead in an alleged murder-suicide in Kansas City, North, neighborhood",
    "url": "https://www.kansascity.com/news/local/crime/article277068083.html",
    "tags": [
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/two-people-are-dead-in-an-alleged-murder-suicide-in-kansas-city-north-neighborhood.jpg",
    "slug": "two-people-are-dead-in-an-alleged-murder-suicide-in-kansas-city-north-"
  },
  {
    "id": 130,
    "date": "7/5/2023",
    "publication": "The Kansas City Star",
    "title": "Meet Mr. Gay America: A Kansas City teacher using his platform to celebrate diversity",
    "url": "https://www.kansascity.com/news/local/article276902483.html",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/meet-mr-gay-america-a-kansas-city-teacher-using-his-platform-to-celebrate-diversity.jpeg",
    "slug": "meet-mr-gay-america-a-kansas-city-teacher-using-his-platform-to-celebr"
  },
  {
    "id": 131,
    "date": "6/27/2023",
    "publication": "The Kansas City Star",
    "title": "‘Lived life fast’: Biker killed by drunk driver honored at Blip Roasters coffee shop",
    "url": "https://www.kansascity.com/news/local/article276590156.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/lived-life-fast-biker-killed-by-drunk-driver-honored-at-blip-roasters-coffee-shop.png",
    "slug": "lived-life-fast-biker-killed-by-drunk-driver-honored-at-blip-roasters-"
  },
  {
    "id": 132,
    "date": "6/21/2023",
    "publication": "The Kansas City Star",
    "title": "Kansas City man indicted by federal grand jury in murder-for-hire plot",
    "url": "https://www.kansascity.com/news/local/crime/article276612591.html",
    "tags": [
      "courts",
      "crime"
    ],
    "category": "Courts",
    "image": "assets/story-images/kansas-city-man-indicted-by-federal-grand-jury-in-murder-for-hire-plot.jpeg",
    "slug": "kansas-city-man-indicted-by-federal-grand-jury-in-murder-for-hire-plot"
  },
  {
    "id": 133,
    "date": "6/15/2023",
    "publication": "The Kansas City Star",
    "title": "Police release details on car likely involved in January road rage killing on I-435",
    "url": "https://www.kansascity.com/news/local/crime/article276454711.html",
    "tags": [
      "crime",
      "transportation"
    ],
    "category": "Crime",
    "image": "assets/story-images/police-release-details-on-car-likely-involved-in-january-road-rage-killing-on-i-435.jpg",
    "slug": "police-release-details-on-car-likely-involved-in-january-road-rage-kil"
  },
  {
    "id": 134,
    "date": "6/14/2023",
    "publication": "The Kansas City Star",
    "title": "GoFundMe for family of teen killed at Missouri recycling center nears goal of $10,000",
    "url": "https://www.kansascity.com/news/local/article276410051.html",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/gofundme-for-family-of-teen-killed-at-missouri-recycling-center-nears-goal-of-10-000.png",
    "slug": "gofundme-for-family-of-teen-killed-at-missouri-recycling-center-nears-"
  },
  {
    "id": 135,
    "date": "6/14/2023",
    "publication": "The Kansas City Star",
    "title": "Woman found fatally shot inside Kansas City home, person of interest in custody",
    "url": "https://www.kansascity.com/news/local/crime/article276401026.html",
    "tags": [
      "crime",
      "gun violence",
      "investigation"
    ],
    "category": "Crime",
    "image": "assets/story-images/woman-found-fatally-shot-inside-kansas-city-home-person-of-interest-in-custody.jpg",
    "slug": "woman-found-fatally-shot-inside-kansas-city-home-person-of-interest-in"
  },
  {
    "id": 136,
    "date": "1/9/2024",
    "publication": "Fresh Take Florida",
    "title": "Florida prisoner who threatened to behead US judge given 3 years behind bars",
    "url": "https://www.wuft.org/fresh-take-florida/2024-01-09/florida-prisoner-who-threatened-to-behead-us-judge-given-3-years-behind-bars",
    "tags": [
      "courts",
      "crime",
      "statewide"
    ],
    "category": "Courts",
    "image": "assets/story-images/florida-prisoner-who-threatened-to-behead-us-judge-given-3-years-behind-bars.jpg",
    "slug": "florida-prisoner-who-threatened-to-behead-us-judge-given-3-years-behin"
  },
  {
    "id": 137,
    "date": "1/3/2023",
    "publication": "Fresh Take Florida",
    "title": "Remembering Rosewood: Descendants mark racial violence that razed Florida town 100 years ago",
    "url": "https://www.wuft.org/human-interest/2023-01-03/remembering-rosewood-descendants-mark-racial-violence-that-razed-florida-town-100-years-ago",
    "tags": [
      "crime",
      "statewide"
    ],
    "category": "Crime",
    "image": "assets/story-images/remembering-rosewood-descendants-mark-racial-violence-that-razed-florida-town-100-years-ago.jpg",
    "slug": "remembering-rosewood-descendants-mark-racial-violence-that-razed-flori"
  },
  {
    "id": 138,
    "date": "4/29/2022",
    "publication": "WUFT",
    "title": "Man who masturbated in front of UF student at Reitz Union is identified",
    "url": "https://www.wuft.org/education/2022-04-29/man-who-masturbated-in-front-of-uf-student-at-reitz-union-is-identified",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/man-who-masturbated-in-front-of-uf-student-at-reitz-union-is-identified.jpg",
    "slug": "man-who-masturbated-in-front-of-uf-student-at-reitz-union-is-identifie"
  },
  {
    "id": 139,
    "date": "4/14/2022",
    "publication": "WUFT",
    "title": "UF rises to fourth place for most Fulbright U.S. Scholars in the nation",
    "url": "https://www.wuft.org/education/2022-04-14/uf-rises-to-fourth-place-for-most-fulbright-u-s-scholars-in-the-nation",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/uf-rises-to-fourth-place-for-most-fulbright-u-s-scholars-in-the-nation.jpg",
    "slug": "uf-rises-to-fourth-place-for-most-fulbright-u-s-scholars-in-the-nation"
  },
  {
    "id": 140,
    "date": "3/17/2022",
    "publication": "WUFT",
    "title": "Attacks on Ukraine ignite UF student support",
    "url": "https://www.wuft.org/immigration/2022-03-17/attacks-on-ukraine-ignite-uf-student-support",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/attacks-on-ukraine-ignite-uf-student-support.jpg",
    "slug": "attacks-on-ukraine-ignite-uf-student-support"
  },
  {
    "id": 141,
    "date": "2/11/2022",
    "publication": "WUFT",
    "title": "Alachua County to open first dual language immersion school",
    "url": "https://www.wuft.org/education/2022-02-11/alachua-county-to-open-first-dual-language-immersion-school",
    "tags": [
      "education",
      "government"
    ],
    "category": "Education",
    "image": "assets/story-images/alachua-county-to-open-first-dual-language-immersion-school.jpg",
    "slug": "alachua-county-to-open-first-dual-language-immersion-school"
  },
  {
    "id": 142,
    "date": "1/26/2022",
    "publication": "WUFT",
    "title": "Lords, ladies, knights and royalty return in person at Gainesville’s Hoggetowne Medieval Faire after two years",
    "url": "https://www.wuft.org/entertainment/2022-01-26/gainesville-hoggetown-medieval-faire",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/lords-ladies-knights-and-royalty-return-in-person-at-gainesville-s-hoggetowne-medieval-faire-aft.jpg",
    "slug": "lords-ladies-knights-and-royalty-return-in-person-at-gainesville-s-hog"
  },
  {
    "id": 143,
    "date": "12/11/2023",
    "publication": "Atrium Magazine",
    "title": "Two bodies, three graves",
    "url": "https://issuu.com/atriummagazine/docs/atrium_issuu_winter_23",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/two-bodies-three-graves.png",
    "slug": "two-bodies-three-graves"
  },
  {
    "id": 144,
    "date": "9/8/2022",
    "publication": "New Tampa & Wesley Chapel News",
    "title": "Blue Heron Senior Living Offers The Best Of Four Worlds!",
    "url": "https://neighborhoodnewsonline.net/blue-heron-senior-living-offers-the-best-of-four-worlds/",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/blue-heron-senior-living-offers-the-best-of-four-worlds.jpg",
    "slug": "blue-heron-senior-living-offers-the-best-of-four-worlds"
  },
  {
    "id": 145,
    "date": "8/14/2022",
    "publication": "New Tampa & Wesley Chapel News",
    "title": "Cort Of Appeal Brings Style To Your Fashions & Interior Design",
    "url": "https://neighborhoodnewsonline.net/cort-of-appeal-brings-style-to-your-fashions-interior-design/",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/cort-of-appeal-brings-style-to-your-fashions-and-interior-design.jpg",
    "slug": "cort-of-appeal-brings-style-to-your-fashions-interior-design"
  },
  {
    "id": 146,
    "date": "6/21/2022",
    "publication": "New Tampa & Wesley Chapel News",
    "title": "‘DON’T LOSE HOPE’",
    "url": "https://neighborhoodnewsonline.net/dont-lose-hope/",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/don-t-lose-hope.jpg",
    "slug": "don-t-lose-hope"
  },
  {
    "id": 147,
    "date": "3/27/2022",
    "publication": "New Tampa & Wesley Chapel News",
    "title": "Wiregrass Ranch High Health Fair Draws A Crowd",
    "url": "https://neighborhoodnewsonline.net/wiregrass-ranch-high-health-fair-draws-a-crowd/",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/wiregrass-ranch-high-health-fair-draws-a-crowd.jpg",
    "slug": "wiregrass-ranch-high-health-fair-draws-a-crowd"
  },
  {
    "id": 148,
    "date": "9/6/2021",
    "publication": "New Tampa & Wesley Chapel News",
    "title": "Wiregrass Ranch High Senior Named National SADD President",
    "url": "https://neighborhoodnewsonline.net/wiregrass-ranch-high-senior-named-national-sadd-president/",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/wiregrass-ranch-high-senior-named-national-sadd-president.jpg",
    "slug": "wiregrass-ranch-high-senior-named-national-sadd-president"
  },
  {
    "id": 149,
    "date": "8/12/2021",
    "publication": "New Tampa & Wesley Chapel News",
    "title": "Local Author Finds Inspiration Around Wesley Chapel",
    "url": "https://neighborhoodnewsonline.net/local-author-finds-inspiration-around-wesley-chapel/",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/local-author-finds-inspiration-around-wesley-chapel.jpg",
    "slug": "local-author-finds-inspiration-around-wesley-chapel"
  },
  {
    "id": 150,
    "date": "6/3/2021",
    "publication": "New Tampa & Wesley Chapel News",
    "title": "College Students Host ‘Zoomhall’ For New Tampa Study",
    "url": "https://neighborhoodnewsonline.net/college-students-host-zoomhall-for-new-tampa-study/",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/college-students-host-zoomhall-for-new-tampa-study.jpg",
    "slug": "college-students-host-zoomhall-for-new-tampa-study"
  },
  {
    "id": 151,
    "date": "12/04/23",
    "publication": "The Independent Florida Alligator",
    "title": "Turning Pages Closing Tabs A Farewell from Volume 115 to Volume 118",
    "url": "https://www.alligator.org/article/2023/12/turning-pages-closing-tabs-a-farewell-from-volume-115-to-volume-118",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/turning-pages-closing-tabs-a-farewell-from-volume-115-to-volume-118.jpg",
    "slug": "turning-pages-closing-tabs-a-farewell-from-volume-115-to-volume-118"
  },
  {
    "id": 152,
    "date": "11/02/23",
    "publication": "The Independent Florida Alligator",
    "title": "Ben Sasse’s inauguration as UF’s 13th president",
    "url": "https://www.alligator.org/article/2023/11/ben-sasses-inauguration-as-ufs-13th-president",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/ben-sasse-s-inauguration-as-uf-s-13th-president.jpg",
    "slug": "ben-sasse-s-inauguration-as-uf-s-13th-president"
  },
  {
    "id": 153,
    "date": "08/23/23",
    "publication": "The Independent Florida Alligator",
    "title": "The Alligator introduces new website that tracks crimes on UF campus",
    "url": "https://www.alligator.org/article/2023/08/the-alligator-introduces-new-website-that-tracks-crimes-on-uf-campus",
    "tags": [
      "education",
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/the-alligator-introduces-new-website-that-tracks-crimes-on-uf-campus.jpeg",
    "slug": "the-alligator-introduces-new-website-that-tracks-crimes-on-uf-campus"
  },
  {
    "id": 154,
    "date": "11/29/22",
    "publication": "The Independent Florida Alligator",
    "title": "UF athletes athletic leaders speak on reproductive health in sports",
    "url": "https://www.alligator.org/article/2022/11/uf-athletes-athletic-leaders-speak-on-reproductive-health-in-sports",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/uf-athletes-athletic-leaders-speak-on-reproductive-health-in-sports.jpeg",
    "slug": "uf-athletes-athletic-leaders-speak-on-reproductive-health-in-sports"
  },
  {
    "id": 155,
    "date": "12/07/21",
    "publication": "The Independent Florida Alligator",
    "title": "Let's Talk About It",
    "url": "https://www.alligator.org/article/2021/12/lets-talk-about-it",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/let-s-talk-about-it.png",
    "slug": "let-s-talk-about-it"
  },
  {
    "id": 156,
    "date": "12/01/21",
    "publication": "The Independent Florida Alligator",
    "title": "Internal investigation reveals no policy misconduct in death of former inmate’s baby",
    "url": "https://www.alligator.org/article/2021/12/internal-investigation-reveals-no-policy-misconduct-in-death-of-former-inmates-baby",
    "tags": [
      "investigation"
    ],
    "category": "Investigation",
    "image": "assets/story-images/internal-investigation-reveals-no-policy-misconduct-in-death-of-former-inmate-s-baby.jpg",
    "slug": "internal-investigation-reveals-no-policy-misconduct-in-death-of-former"
  },
  {
    "id": 157,
    "date": "12/01/21",
    "publication": "The Independent Florida Alligator",
    "title": "La investigación interna revela ninguna mala conducta política en la muerte del bebé de una ex reclusa",
    "url": "https://www.alligator.org/article/2021/12/muerte-de-bebe-ex-reclusa-investigacion",
    "tags": [
      "crime",
      "gun violence"
    ],
    "category": "Crime",
    "image": "assets/story-images/la-investigacion-interna-revela-ninguna-mala-conducta-politica-en-la-muerte-del-bebe-de-una-ex-r.jpg",
    "slug": "la-investigaci-n-interna-revela-ninguna-mala-conducta-pol-tica-en-la-m"
  },
  {
    "id": 158,
    "date": "11/29/21",
    "publication": "The Independent Florida Alligator",
    "title": "UF UPD respond to sexual violence at Reitz Union",
    "url": "https://www.alligator.org/article/2021/11/uf-upd-respond-to-sexual-violence",
    "tags": [
      "education",
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/uf-upd-respond-to-sexual-violence-at-reitz-union.jpg",
    "slug": "uf-upd-respond-to-sexual-violence-at-reitz-union"
  },
  {
    "id": 159,
    "date": "11/15/21",
    "publication": "The Independent Florida Alligator",
    "title": "UF sophomore details sexual violence at Reitz Union",
    "url": "https://www.alligator.org/article/2021/11/uf-sophomore-details-sexual-violence-at-reitz-union",
    "tags": [
      "education",
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/uf-sophomore-details-sexual-violence-at-reitz-union.jpg",
    "slug": "uf-sophomore-details-sexual-violence-at-reitz-union"
  },
  {
    "id": 160,
    "date": "11/10/21",
    "publication": "The Independent Florida Alligator",
    "title": "Marion County man arrested on UF Sorority Row",
    "url": "https://www.alligator.org/article/2021/11/marion-county-man-arrested-on-ufs-sorority-row",
    "tags": [
      "education",
      "crime",
      "government"
    ],
    "category": "Crime",
    "image": "assets/story-images/marion-county-man-arrested-on-uf-sorority-row.jpg",
    "slug": "marion-county-man-arrested-on-uf-sorority-row"
  },
  {
    "id": 161,
    "date": "11/05/21",
    "publication": "The Independent Florida Alligator",
    "title": "Gainesville man arrested for killing high school student in car crash injuring victim’s mother",
    "url": "https://www.alligator.org/article/2021/11/gainesville-man-arrested-for-killing-high-school-student-in-car-crash-injuring-victims-mother",
    "tags": [
      "education",
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/gainesville-man-arrested-for-killing-high-school-student-in-car-crash-injuring-victim-s-mother.png",
    "slug": "gainesville-man-arrested-for-killing-high-school-student-in-car-crash-"
  },
  {
    "id": 162,
    "date": "11/01/21",
    "publication": "The Independent Florida Alligator",
    "title": "Former UF resident assistant found guilty of sexual battery kidnapping after two-year trial delay",
    "url": "https://www.alligator.org/article/2021/11/former-uf-resident-assistant-found-guilty-of-sexual-battery-kidnapping-after-two-year-trial-delay",
    "tags": [
      "education",
      "courts"
    ],
    "category": "Courts",
    "image": "assets/story-images/former-uf-resident-assistant-found-guilty-of-sexual-battery-kidnapping-after-two-year-trial-dela.jpg",
    "slug": "former-uf-resident-assistant-found-guilty-of-sexual-battery-kidnapping"
  },
  {
    "id": 163,
    "date": "10/27/21",
    "publication": "The Independent Florida Alligator",
    "title": "UF freshman arrested on campus for refusing to leave RTS bus",
    "url": "https://www.alligator.org/article/2021/10/uf-freshman-arrested-on-campus-for-refusing-to-leave-rts-bus",
    "tags": [
      "education",
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/uf-freshman-arrested-on-campus-for-refusing-to-leave-rts-bus.jpg",
    "slug": "uf-freshman-arrested-on-campus-for-refusing-to-leave-rts-bus"
  },
  {
    "id": 164,
    "date": "10/22/21",
    "publication": "The Independent Florida Alligator",
    "title": "Two Newberry High School students charged as adults in connection to bomb threats",
    "url": "https://www.alligator.org/article/2021/10/newberry-students-charged-as-adults",
    "tags": [
      "education",
      "courts"
    ],
    "category": "Courts",
    "image": "assets/story-images/two-newberry-high-school-students-charged-as-adults-in-connection-to-bomb-threats.png",
    "slug": "two-newberry-high-school-students-charged-as-adults-in-connection-to-b"
  },
  {
    "id": 165,
    "date": "10/20/21",
    "publication": "The Independent Florida Alligator",
    "title": "Gainesville Police Department to destroy guns collected through buyback program",
    "url": "https://www.alligator.org/article/2021/10/gainesville-police-department-to-destroy-guns-collected-through-buyback-program",
    "tags": [
      "crime",
      "gun violence"
    ],
    "category": "Crime",
    "image": "assets/story-images/gainesville-police-department-to-destroy-guns-collected-through-buyback-program.jpeg",
    "slug": "gainesville-police-department-to-destroy-guns-collected-through-buybac"
  },
  {
    "id": 166,
    "date": "10/20/21",
    "publication": "The Independent Florida Alligator",
    "title": "El Departamento de Policía de Gainesville destruirá las armas recolectadas a través del programa de recompra",
    "url": "https://www.alligator.org/article/2021/10/gpd-armas-recolectadas",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/el-departamento-de-policia-de-gainesville-destruira-las-armas-recolectadas-a-traves-del-programa.jpeg",
    "slug": "el-departamento-de-polic-a-de-gainesville-destruir-las-armas-recolecta"
  },
  {
    "id": 167,
    "date": "10/19/21",
    "publication": "The Independent Florida Alligator",
    "title": "Gainesville police search for suspects from Green Apple Liquor shooting",
    "url": "https://www.alligator.org/article/2021/10/green-apple-liquor-shooting-suspects-search",
    "tags": [
      "crime",
      "gun violence"
    ],
    "category": "Crime",
    "image": "assets/story-images/gainesville-police-search-for-suspects-from-green-apple-liquor-shooting.jpg",
    "slug": "gainesville-police-search-for-suspects-from-green-apple-liquor-shootin"
  },
  {
    "id": 168,
    "date": "10/18/21",
    "publication": "The Independent Florida Alligator",
    "title": "Johnston Chiropractic Health Center closes doors amid sexual assault claims protests",
    "url": "https://www.alligator.org/article/2021/10/johnston-chiropractic-health-center-closes-amid-sexual-assault-claims-protests",
    "tags": [
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/johnston-chiropractic-health-center-closes-doors-amid-sexual-assault-claims-protests.jpg",
    "slug": "johnston-chiropractic-health-center-closes-doors-amid-sexual-assault-c"
  },
  {
    "id": 169,
    "date": "10/11/21",
    "publication": "The Independent Florida Alligator",
    "title": "Gainesville man dies in Copeland Park shooting at unauthorized party",
    "url": "https://www.alligator.org/article/2021/10/gainesville-man-dies-in-alachuas-copeland-park-shooting-at-unauthorized-party",
    "tags": [
      "gun violence"
    ],
    "category": "Gun Violence",
    "image": "assets/story-images/gainesville-man-dies-in-copeland-park-shooting-at-unauthorized-party.jpg",
    "slug": "gainesville-man-dies-in-copeland-park-shooting-at-unauthorized-party"
  },
  {
    "id": 170,
    "date": "10/10/21",
    "publication": "The Independent Florida Alligator",
    "title": "Gator fan dies after receiving CPR at Florida football game",
    "url": "https://www.alligator.org/article/2021/10/gator-fan-dies-after-receiving-cpr-at-florida-football-game",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/gator-fan-dies-after-receiving-cpr-at-florida-football-game.jpg",
    "slug": "gator-fan-dies-after-receiving-cpr-at-florida-football-game"
  },
  {
    "id": 171,
    "date": "10/06/21",
    "publication": "The Independent Florida Alligator",
    "title": "Alachua County Public Schools bomb threats persist despite arrests",
    "url": "https://www.alligator.org/article/2021/10/alachua-county-public-schools-bomb-threats-persist-despite-arrests",
    "tags": [
      "education",
      "crime",
      "government"
    ],
    "category": "Crime",
    "image": "assets/story-images/alachua-county-public-schools-bomb-threats-persist-despite-arrests.jpg",
    "slug": "alachua-county-public-schools-bomb-threats-persist-despite-arrests"
  },
  {
    "id": 172,
    "date": "09/30/21",
    "publication": "The Independent Florida Alligator",
    "title": "Gainesville man charged with possessing and distributing child pornography on Kik Messenger",
    "url": "https://www.alligator.org/article/2021/09/gainesville-man-charged-with-possessing-and-distributing-child-pornography-on-kik-messenger",
    "tags": [
      "courts"
    ],
    "category": "Courts",
    "image": "assets/story-images/gainesville-man-charged-with-possessing-and-distributing-child-pornography-on-kik-messenger.png",
    "slug": "gainesville-man-charged-with-possessing-and-distributing-child-pornogr"
  },
  {
    "id": 173,
    "date": "09/27/21",
    "publication": "The Independent Florida Alligator",
    "title": "We're going to lose a generation pandemic gun violence spike leaves many in anguish",
    "url": "https://www.alligator.org/article/2021/09/were-going-to-lose-a-generation-pandemic-gun-violence-spike-leaves-many-in-anguish",
    "tags": [
      "crime",
      "gun violence"
    ],
    "category": "Crime",
    "image": "assets/story-images/we-re-going-to-lose-a-generation-pandemic-gun-violence-spike-leaves-many-in-anguish.jpeg",
    "slug": "we-re-going-to-lose-a-generation-pandemic-gun-violence-spike-leaves-ma"
  },
  {
    "id": 174,
    "date": "09/25/21",
    "publication": "The Independent Florida Alligator",
    "title": "Gainesville man dies in Newberry shootout with Alachua County Sheriff deputies",
    "url": "https://www.alligator.org/article/2021/09/gainesville-man-dies-in-newberry-shootout-with-alachua-county-sheriff-deputies",
    "tags": [
      "crime",
      "government"
    ],
    "category": "Crime",
    "image": "assets/story-images/gainesville-man-dies-in-newberry-shootout-with-alachua-county-sheriff-deputies.jpg",
    "slug": "gainesville-man-dies-in-newberry-shootout-with-alachua-county-sheriff-"
  },
  {
    "id": 175,
    "date": "09/20/21",
    "publication": "The Independent Florida Alligator",
    "title": "Man dies in crash after crossing Interstate 75 on foot",
    "url": "https://www.alligator.org/article/2021/09/car-crash-interstate",
    "tags": [
      "government"
    ],
    "category": "Government",
    "image": "assets/story-images/man-dies-in-crash-after-crossing-interstate-75-on-foot.jpg",
    "slug": "man-dies-in-crash-after-crossing-interstate-75-on-foot"
  },
  {
    "id": 176,
    "date": "09/17/21",
    "publication": "The Independent Florida Alligator",
    "title": "Preschool teacher arrested for sexually assaulting a minor",
    "url": "https://www.alligator.org/article/2021/09/preschool-teacher-arrested-and-charged-of-sexually-assaulting-a-minor-wednesday",
    "tags": [
      "education",
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/preschool-teacher-arrested-for-sexually-assaulting-a-minor.png",
    "slug": "preschool-teacher-arrested-for-sexually-assaulting-a-minor"
  },
  {
    "id": 177,
    "date": "09/14/21",
    "publication": "The Independent Florida Alligator",
    "title": "Buchholz High School student arrested for bomb threats",
    "url": "https://www.alligator.org/article/2021/09/buchholz-high-school-student-arrested-for-two-counts-of-false-bomb-threats",
    "tags": [
      "education",
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/buchholz-high-school-student-arrested-for-bomb-threats.jpg",
    "slug": "buchholz-high-school-student-arrested-for-bomb-threats"
  },
  {
    "id": 178,
    "date": "09/10/21",
    "publication": "The Independent Florida Alligator",
    "title": "One woman raped another kidnapped blocks away from UF campus",
    "url": "https://www.alligator.org/article/2021/09/one-woman-raped-another-kidnapped-blocks-away-from-ufs-campus",
    "tags": [
      "education",
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/one-woman-raped-another-kidnapped-blocks-away-from-uf-campus.jpg",
    "slug": "one-woman-raped-another-kidnapped-blocks-away-from-uf-campus"
  },
  {
    "id": 179,
    "date": "09/05/21",
    "publication": "The Independent Florida Alligator",
    "title": "One dead after game night shooting on West University Avenue",
    "url": "https://www.alligator.org/article/2021/09/one-dead-after-game-night-shooting-on-west-university-avenue",
    "tags": [
      "gun violence"
    ],
    "category": "Gun Violence",
    "image": "assets/story-images/one-dead-after-game-night-shooting-on-west-university-avenue.jpg",
    "slug": "one-dead-after-game-night-shooting-on-west-university-avenue"
  },
  {
    "id": 180,
    "date": "08/31/21",
    "publication": "The Independent Florida Alligator",
    "title": "Gators football player in stable condition following scooter crash",
    "url": "https://www.alligator.org/article/2021/08/gators-football-player-in-stable-condition-following-scooter-crash",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/gators-football-player-in-stable-condition-following-scooter-crash.jpg",
    "slug": "gators-football-player-in-stable-condition-following-scooter-crash"
  },
  {
    "id": 181,
    "date": "08/30/21",
    "publication": "The Independent Florida Alligator",
    "title": "Gainesville activists point to the Tammy Jackson Act in the death of former inmate Erica Thompson’s baby",
    "url": "https://www.alligator.org/article/2021/08/gainesville-activists-point-to-the-tammy-jackson-act-in-the-death-of-former-inmate-erica-thompsons-baby",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/gainesville-activists-point-to-the-tammy-jackson-act-in-the-death-of-former-inmate-erica-thompso.jpg",
    "slug": "gainesville-activists-point-to-the-tammy-jackson-act-in-the-death-of-f"
  },
  {
    "id": 182,
    "date": "08/19/21",
    "publication": "The Independent Florida Alligator",
    "title": "Armed Fort White man arrested after wreaking havoc in Gainesville",
    "url": "https://www.alligator.org/article/2021/08/armed-fort-white-man-arrested-after-wreaking-havoc-in-gainesville",
    "tags": [
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/armed-fort-white-man-arrested-after-wreaking-havoc-in-gainesville.jpg",
    "slug": "armed-fort-white-man-arrested-after-wreaking-havoc-in-gainesville"
  },
  {
    "id": 183,
    "date": "08/16/21",
    "publication": "The Independent Florida Alligator",
    "title": "Dear freshman Welcome to UF",
    "url": "https://www.alligator.org/article/2021/08/dear-freshman-welcome-to-uf",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/dear-freshman-welcome-to-uf.jpg",
    "slug": "dear-freshman-welcome-to-uf"
  },
  {
    "id": 184,
    "date": "08/14/21",
    "publication": "The Independent Florida Alligator",
    "title": "Son accused of father’s murder hiding evidence",
    "url": "https://www.alligator.org/article/2021/08/son-accused-of-fathers-murder-hiding-evidence",
    "tags": [
      "crime"
    ],
    "category": "Crime",
    "image": "assets/story-images/son-accused-of-father-s-murder-hiding-evidence.jpg",
    "slug": "son-accused-of-father-s-murder-hiding-evidence"
  },
  {
    "id": 185,
    "date": "08/12/21",
    "publication": "The Independent Florida Alligator",
    "title": "Loss of Gainesville woman’s baby born in jail sparks community protest",
    "url": "https://www.alligator.org/article/2021/08/alachua-jail-baby",
    "tags": [
      "crime",
      "features"
    ],
    "category": "Crime",
    "image": "assets/story-images/loss-of-gainesville-woman-s-baby-born-in-jail-sparks-community-protest.png",
    "slug": "loss-of-gainesville-woman-s-baby-born-in-jail-sparks-community-protest"
  },
  {
    "id": 186,
    "date": "07/26/21",
    "publication": "The Independent Florida Alligator",
    "title": "UF welcomes first Ph.D. plant breeding program first in Florida",
    "url": "https://www.alligator.org/article/2021/07/uf-welcomes-first-ph-d-plant-breeding-program-first-in-florida",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/uf-welcomes-first-ph-d-plant-breeding-program-first-in-florida.jpg",
    "slug": "uf-welcomes-first-ph-d-plant-breeding-program-first-in-florida"
  },
  {
    "id": 187,
    "date": "07/19/21",
    "publication": "The Independent Florida Alligator",
    "title": "UF Heavener School of Business names new assistant dean and director",
    "url": "https://www.alligator.org/article/2021/07/uf-heavener-school-of-business-names-new-assistant-dean-and-director",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/uf-heavener-school-of-business-names-new-assistant-dean-and-director.jpeg",
    "slug": "uf-heavener-school-of-business-names-new-assistant-dean-and-director"
  },
  {
    "id": 188,
    "date": "07/19/21",
    "publication": "The Independent Florida Alligator",
    "title": "UF Online set to welcome largest ever incoming class this Fall",
    "url": "https://www.alligator.org/article/2021/07/uf-online-set-to-welcome-largest-ever-incoming-class-this-fall",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/uf-online-set-to-welcome-largest-ever-incoming-class-this-fall.jpg",
    "slug": "uf-online-set-to-welcome-largest-ever-incoming-class-this-fall"
  },
  {
    "id": 189,
    "date": "07/09/21",
    "publication": "The Independent Florida Alligator",
    "title": "Traces of COVID-19 found in UF residence halls wastewater",
    "url": "https://www.alligator.org/article/2021/07/traces-of-covid-19-found-in-uf-residence-halls-wastewater",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/traces-of-covid-19-found-in-uf-residence-halls-wastewater.jpg",
    "slug": "traces-of-covid-19-found-in-uf-residence-halls-wastewater"
  },
  {
    "id": 190,
    "date": "07/08/21",
    "publication": "The Independent Florida Alligator",
    "title": "International students watch restrictions loosen in Gainesville as COVID-19 rages at home",
    "url": "https://www.alligator.org/article/2021/07/covidinternational",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/international-students-watch-restrictions-loosen-in-gainesville-as-covid-19-rages-at-home.png",
    "slug": "international-students-watch-restrictions-loosen-in-gainesville-as-cov"
  },
  {
    "id": 191,
    "date": "07/02/21",
    "publication": "The Independent Florida Alligator",
    "title": "Brian Baumgartner and Oscar Nuñez share advice with UF students",
    "url": "https://www.alligator.org/article/2021/07/brian-baumgartner-and-oscar-nuez-share-advice-with-uf-students",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/brian-baumgartner-and-oscar-nunez-share-advice-with-uf-students.jpg",
    "slug": "brian-baumgartner-and-oscar-nu-ez-share-advice-with-uf-students"
  },
  {
    "id": 192,
    "date": "06/30/21",
    "publication": "The Independent Florida Alligator",
    "title": "In memory of Joshua Toledo",
    "url": "https://www.alligator.org/article/2021/06/in-memory-of-joshua-toledo",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/in-memory-of-joshua-toledo.jpg",
    "slug": "in-memory-of-joshua-toledo"
  },
  {
    "id": 193,
    "date": "06/28/21",
    "publication": "The Independent Florida Alligator",
    "title": "GatorWell and the CWC help UF community with mental health",
    "url": "https://www.alligator.org/article/2021/06/gatorwell-and-the-cwc-help-uf-community-with-mental-health",
    "tags": [
      "education",
      "features"
    ],
    "category": "Education",
    "image": "assets/story-images/gatorwell-and-the-cwc-help-uf-community-with-mental-health.jpg",
    "slug": "gatorwell-and-the-cwc-help-uf-community-with-mental-health"
  },
  {
    "id": 194,
    "date": "06/26/21",
    "publication": "The Independent Florida Alligator",
    "title": "Iconic The Office duo will speak to students Wednesday",
    "url": "https://www.alligator.org/article/2021/06/iconic-the-office-duo-will-speak-to-students-wednesday",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/iconic-the-office-duo-will-speak-to-students-wednesday.jpg",
    "slug": "iconic-the-office-duo-will-speak-to-students-wednesday"
  },
  {
    "id": 195,
    "date": "06/26/21",
    "publication": "The Independent Florida Alligator",
    "title": "Gainesville salon breaks Guinness World Record for most eyebrows threaded",
    "url": "https://www.alligator.org/article/2021/06/gainesville-salon-breaks-guinness-world-record-for-most-eyebrows-threaded",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/gainesville-salon-breaks-guinness-world-record-for-most-eyebrows-threaded.jpg",
    "slug": "gainesville-salon-breaks-guinness-world-record-for-most-eyebrows-threa"
  },
  {
    "id": 196,
    "date": "06/01/21",
    "publication": "The Independent Florida Alligator",
    "title": "West University Avenue changes prioritize pedestrian safety",
    "url": "https://www.alligator.org/article/2021/06/west-university-avenue-updates",
    "tags": [
      "reporting"
    ],
    "category": "Reporting",
    "image": "assets/story-images/west-university-avenue-changes-prioritize-pedestrian-safety.jpg",
    "slug": "west-university-avenue-changes-prioritize-pedestrian-safety"
  },
  {
    "id": 197,
    "date": "05/10/21",
    "publication": "The Independent Florida Alligator",
    "title": "UF graduates attend first in-person commencement ceremonies since 2019",
    "url": "https://www.alligator.org/article/2021/05/first-in-person-uf-gradutations-in-pandemic",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/uf-graduates-attend-first-in-person-commencement-ceremonies-since-2019.jpg",
    "slug": "uf-graduates-attend-first-in-person-commencement-ceremonies-since-2019"
  },
  {
    "id": 198,
    "date": "05/10/21",
    "publication": "The Independent Florida Alligator",
    "title": "Nicole Stedman takes on new position as Dean of UF’s Graduate School",
    "url": "https://www.alligator.org/article/2021/05/new-uf-grad-dean",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/nicole-stedman-takes-on-new-position-as-dean-of-uf-s-graduate-school.jpg",
    "slug": "nicole-stedman-takes-on-new-position-as-dean-of-uf-s-graduate-school"
  },
  {
    "id": 199,
    "date": "02/24/21",
    "publication": "The Independent Florida Alligator",
    "title": "UF students march to honor Black history in Gainesville",
    "url": "https://www.alligator.org/article/2021/02/uf-students-march-to-honor-black-history-in-gainesville",
    "tags": [
      "education"
    ],
    "category": "Education",
    "image": "assets/story-images/uf-students-march-to-honor-black-history-in-gainesville.jpg",
    "slug": "uf-students-march-to-honor-black-history-in-gainesville"
  }
];

const FEATURED_STORIES = [
  {
    "id": "featured-1",
    "date": "9/30/2025",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Video of deputy pointing gun at teens divides 2 Hilton Head neighborhoods",
    "url": "https://www.islandpacket.com/news/local/crime/article312325964.html#storylink=cpy",
    "tags": [
      "crime",
      "accountability",
      "law enforcement"
    ],
    "category": "Accountability",
    "image": "assets/story-images/video-of-deputy-pointing-gun-at-teens-divides-2-hilton-head-neighborhoods.jpg",
    "slug": "deputy-video-neighborhoods"
  },
  {
    "id": "featured-2",
    "date": "9/9/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County teacher sues parents for defamation. They said she ‘groomed’ students",
    "url": "https://www.islandpacket.com/news/local/education/article292032630.html#storylink=cpy",
    "tags": [
      "education",
      "courts",
      "book bans",
      "lgbtq"
    ],
    "category": "Education / Courts",
    "image": "assets/story-images/beaufort-county-teacher-sues-parents-for-defamation-they-said-she-groomed-students.png",
    "slug": "teacher-defamation-suit"
  },
  {
    "id": "featured-3",
    "date": "8/13/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Top 10 worst intersections in Beaufort County: accidents surge, fatalities persist",
    "url": "https://www.islandpacket.com/news/local/traffic/article291041955.html",
    "tags": [
      "traffic",
      "transportation",
      "data journalism",
      "government"
    ],
    "category": "Data Journalism",
    "image": "assets/story-images/top-10-worst-intersections-in-beaufort-county-accidents-surge-fatalities-persist.png",
    "slug": "worst-intersections"
  },
  {
    "id": "featured-4",
    "date": "8/20/2024",
    "publication": "The Island Packet & Beaufort Gazette",
    "title": "Beaufort County got $146M in 2018 for traffic issue. Why are only 10% of projects complete?",
    "url": "https://www.islandpacket.com/news/local/traffic/article291247085.html",
    "tags": [
      "traffic",
      "government",
      "accountability",
      "transportation"
    ],
    "category": "Government Accountability",
    "image": "assets/story-images/beaufort-county-got-146m-in-2018-for-traffic-issue-why-are-only-10-of-projects-complete.jpg",
    "slug": "traffic-penny-tax"
  },
  {
    "id": "featured-5",
    "date": "6/17/2023",
    "publication": "The Kansas City Star",
    "title": "Meet Mr. Gay America: A Kansas City teacher using his platform to celebrate diversity",
    "url": "https://www.kansascity.com/news/local/article276902483.html",
    "tags": [
      "features",
      "lgbtq",
      "education",
      "narrative"
    ],
    "category": "Narrative Feature",
    "image": "assets/story-images/meet-mr-gay-america-a-kansas-city-teacher-using-his-platform-to-celebrate-diversity.jpeg",
    "slug": "mr-gay-america"
  },
  {
    "id": "featured-6",
    "date": "1/1/2023",
    "publication": "The Miami Herald",
    "title": "Remembering Rosewood: Descendants mark racial violence that razed Florida town 100 years ago",
    "url": "https://www.miamiherald.com/news/state/florida/article270583557.html",
    "tags": [
      "history",
      "features",
      "accountability",
      "narrative"
    ],
    "category": "Narrative / History",
    "image": "assets/story-images/remembering-rosewood-descendants-mark-racial-violence-that-razed-florida-town-100-years-ago.jpg",
    "slug": "remembering-rosewood"
  }
];

const PROJECTS = [
  {
    "title": "Mind Over Stigma",
    "url": "https://theindependentflalligator.github.io/mind-over-stigma-special-edition/",
    "type": "Interactive Project",
    "description": "A mental health reporting project combining narrative storytelling, data, graphics and interactive design around people in the community, helping break the stigma surrounding mental health conversations.",
    "tags": [
      "Mental Health",
      "Data Analysis",
      "Interactive",
      "Storytelling"
    ],
    "image": "assets/story-images/project-mind-over-stigma.jpg"
  },
  {
    "title": "UF Crime Map",
    "url": "https://www.ufcrime.com/",
    "type": "Data Project",
    "description": "Interactive database built with Python and SQL allowing users to explore University of Florida crime reports dating back to 2016.",
    "tags": [
      "Python",
      "SQL",
      "Interactive Database",
      "Public Safety"
    ],
    "image": "assets/story-images/project-uf-crime-map.jpg"
  },
  {
    "title": "Roe in Review",
    "url": "https://issadouglas.github.io/the_alligator_roe_in_review/",
    "type": "Custom-Coded News Feature",
    "description": "A custom-coded project for The Independent Florida Alligator examining the impact of Dobbs through data, maps and interactive visuals.",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Data"
    ],
    "image": "assets/story-images/project-roe-in-review.jpg"
  }
];
