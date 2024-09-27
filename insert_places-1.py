from pymongo import MongoClient

client = MongoClient('mongodb+srv://manar414:manar695847@cluster0.u21vs.mongodb.net/?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true')

db = client['mydatabase']
collection = db['Places']


Places=[
    { "name":"Alexandria Bibliotheca",
      "describtion":"The Bibliotheca Alexandrina is a major library and cultural center on the shore of the Mediterranean Sea in Alexandria, Egypt. It is a commemoration of the Library of Alexandria, once one of the largest libraries worldwide, which was lost in antiquity.",
      "card_describtion":"Major library,one of the largest libraries worldwide",
      "wikipedia_link":"https://en.wikipedia.org/wiki/Bibliotheca_Alexandrina",
      "historical":"true",
      "kids":"Not Allowed",
      "indoor_outdoor":"indoor",
      "weather":"All",
      "location":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27299.41480016515!2d29.929758351677727!3d31.208901507593144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38a0562fe85%3A0xa34cc632ec23e7!2z2YXZg9iq2KjYqSDYp9mE2KXYs9mD2YbYr9ix2YrYqQ!5e0!3m2!1sar!2seg!4v1726538663498!5m2!1sar!2seg",
      "hidden_gem":"false", 
      "image_url":"https://tse2.mm.bing.net/th?id=OIP.t6T77MVqXMgj37kKvyGyoAHaDO&pid=Api&P=0&h=220",
      "top visit": "true",
      "tickets": {
       "egyption student":"EGP5" ,
       "non_egyptions student":"EGP20",
      "egyption adult":"EGP10",
       "non_egyptions adult":"EGP150",
      "egyption senior citizen":"EGP 5" ,
       "non_egyptions senior citizen":"EGP 150"
       }
      },
    {
      "name": "Qaitbay Citadel",
      "describtion":"The Citadel of Qaitbay is a 15th-century fortress built between 1477 and 1479 by Sultan Al-Ashraf Sayf al-Din Qa'it Bay. Located on the Mediterranean coast in Alexandria, Egypt, it played a key role in the city's defense system and is considered one of the most significant fortifications along the Mediterranean.",
      "card_describtion":"A 15th-century fortress,one of the most important defensive strongholds",
      "wikipedia_link":"https://en.wikipedia.org/wiki/Citadel_of_Qaitbay",
      "historical":"true",
      "kids": "Allowed",
      "indoor_outdoor": "outdoor",
      "weather": ["Clear", "Sunny"],
      "location":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.2537452222873!2d29.887967025125313!3d31.213698674355847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c352282911bb%3A0xe59f8308f8b23d1f!2z2YLZhNi52Kkg2YLYp9mK2KrYqNin2You2KfYs9mD2YbYr9ix2YrYqQ!5e0!3m2!1sar!2seg!4v1726537916637!5m2!1sar!2seg",
      "hidden_gem": "false",
      "image_url":"https://i.pinimg.com/564x/e3/a7/ab/e3a7ab17cbf37e3c0c6c40cbda1c3d7e.jpg",
      "top_visit": "true",
      "tickets": {
        "egyptian_student": "EGP 5",
        "non_egyptian_student": "EGP 20",
        "egyptian_adult": "EGP 10",
        "non_egyptian_adult": "EGP 150",
        "egyptian_senior_citizen": "EGP 5",
        "non_egyptian_senior_citizen": "EGP 150"
      }
    },
    {
      "name": "Fouad Street",
      "describtion":"Fouad Street, one of Alexandria's most iconic and oldest streets, is a vibrant blend of history and culture. Lined with historic buildings, theaters, and cinemas, it reflects the city's rich architectural heritage. This bustling street remains a cornerstone of Alexandria's cultural and social life.",
      "card_describtion":"one of Alexandria's most iconic and oldest streets",
      "wikipedia_link":"https://ar.wikipedia.org/wiki/%D8%B4%D8%A7%D8%B1%D8%B9_%D9%81%D8%A4%D8%A7%D8%AF",
      "historical":"true",
      "kids": "Allowed",
      "indoor_outdoor": "outdoor",
      "weather": ["Clear", "Sunny"],
      "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.9006341002746!2d29.903302925126223!3d31.195768374364214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3cf1691665b%3A0xee00d23bcd79f7b2!2sFouad%20St!5e0!3m2!1sar!2seg!4v1726538060190!5m2!1sar!2seg",
      "hidden_gem": "false",
      "image_url":"https://img.3ain.net/Slider1/517201706230252265226.jpg",
      "top_visit": "false",
      "tickets": "Free"
    },
    {
      "name": "Mansheya",
      "describtion":"One of the oldest and largest squares in the city, it was previously called “Consuls Square.” In the middle of it is Al-Midan Park, which has a huge bronze statue in the middle of the founder of modern Egypt, Muhammad Ali Pasha, It is an ancient commercial area in the city",
      "card_describtion":"One of the oldest and largest squares in the city...",
      "wikipedia_link":"none",
      "historical":"false",
      "kids": "Allowed",
      "indoor_outdoor": "outdoor",
      "weather": ["Clear", "Sunny"],
      "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6825.632463152981!2d29.895743759196428!3d31.198108347452056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3e12aa23501%3A0x9457520867d4818!2z2YLYs9mFINin2YTZhdmG2LTZitip2Iwg2YXYrdin2YHYuNipINin2YTYpdiz2YPZhtiv2LHZitip!5e0!3m2!1sar!2seg!4v1726539314791!5m2!1sar!2seg",
      "hidden_gem": "false",
      "image_url":"https://tse4.mm.bing.net/th?id=OIP.1Pa4jl2PGPxz1g9DXtfU8gHaFj&pid=Api&P=0&h=220",
      "top_visit": "false",
      "tickets": "Free"
    },
    {
      "name": "Delice",
      "describtion":"Délices Patisserie undoubtedly has the highest quality desserts in Alexandria. It also boosts the largest variety of sweets from around the Globe Since 1922",
      "card_describtion":"the highest quality Patisserie in alexandria",
      "wikipedia_link":"https://www.tripadvisor.com/Restaurant_Review-g295398-d2321542-Reviews-Delices-Alexandria_Alexandria_Governorate.html",
      "historical":"false",
      "kids": "Allowed",
      "indoor_outdoor": "indoor",
      "weather": "All",
      "location":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.7441368574405!2d29.902127825125916!3d31.20010697436217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5dad28f33e327%3A0xc70657569f1e2b35!2z2K3ZhNmI2KfZhtmJINiv2YrZhNmK2LM!5e0!3m2!1sar!2seg!4v1726538407493!5m2!1sar!2seg",
      "hidden_gem": "false",
      "image_url": "https://i.pinimg.com/564x/24/fe/07/24fe07458361626f1cd8138de44ddff4.jpg",
      "top_visit": "false",
      "tickets": "Free"
    },
    {
      "name": "Montazah",  
      "describtion":"Royal gardens of King Faruk which was the last Egyptian monarch it has Montazah Palace which is a historic royal complex in Alexandria, Egypt, spanning 370 acres and featuring two main palaces: Salamlek, built by Khedive Abbas Helmy II in 1892, and Haramlek,constructed by King Fuad I in 1925. The area includes lush gardens, several tourist facilities,and five beaches. Following the 1952 Revolution, the gardens were opened to the public, and the palaces now serve various functions, including hosting dignitaries.",
      "card_describtion":"Royal gardens of King Faruk which was the last Egyptian monarch",
      "wikipedia_link":"https://en.wikipedia.org/wiki/Montaza_Palace",
      "historical":"true",
      "kids": "Allowed",
      "indoor_outdoor": "outdoor",
      "weather": ["Clear", "Sunny"],
      "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.5516280473244!2d30.018544025121805!3d31.288495374320966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5d05ef533eccb%3A0xae82154762ef9858!2z2YLYtdixINin2YTZhdmG2KrYstip!5e0!3m2!1sar!2seg!4v1726538500637!5m2!1sar!2seg",
      "hidden_gem": "false",
      "image_url":"https://i.pinimg.com/564x/60/2f/e3/602fe3f1d24467d99eae7ddb4ba153dd.jpg",
      "top_visit": "true",
      "tickets": {
        "egyptian": "EGP 25",
        "non_egyptian": "EGP 50"
      }
    },
    {
      "name": "Jewelry Museum",
      "describtion":"The Royal Jewelry Museum in Alexandria, Egypt, is located in the former palace of Princess Fatma Al-Zahra' and showcases an invaluable collection of jewels and jewelry from the Muhammad Ali Dynasty. The museum also features 19th-century paintings, statues, and decorative arts. It was inaugurated on October 24, 1986, and after renovations, reopened in April 2010.",
      "card_describtion":"invaluable collection of jewels and jewelry from the Muhammad Ali Dynasty",
      "wikipedia_link":"https://en.wikipedia.org/wiki/Royal_Jewelry_Museum",
      "historical":"true",
      "kids": "Allowed",
      "indoor_outdoor": "indoor",
      "weather": "All",
      "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.282227370374!2d29.96585972512409!3d31.240609574343274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5293b29f3cb%3A0xf790955947954877!2z2YXYqtit2YEg2KfZhNmF2KzZiNmH2LHYp9iqINin2YTZhdmE2YPZitipINio2KfZhNij2LPZg9mG2K_YsdmK2Kk!5e0!3m2!1sar!2seg!4v1726538598048!5m2!1sar!2seg",
      "hidden_gem": "false",
      "image_url":"https://i.pinimg.com/736x/79/41/d8/7941d8fa1805ac29aa349f0924359515.jpg",
      "top_visit": "true",
      "tickets": {
        "egyptian_student": "EGP 5",
        "non_egyptian_student": "EGP 20",
        "egyptian_adult": "EGP 10",
        "non_egyptian_adult": "EGP 150"
      }
    },
    {
      "name": "Raya and Sakina House",
      "describtion":"the house of Raya and Sakina the infamous Egyptian serial killers and siblings responsible for the murders of 17 women in Alexandria's Labban neighborhood in 1919. The victims, often seen wearing gold jewelry and carrying money, went missing under suspicious circumstances linked to the sisters. Despite multiple police inquiries, Sakina evaded suspicion regarding her involvement in the crimes.",
      "card_describtion":"the house of Raya and Sakina the infamous Egyptian serial killers...",
      "wikipedia_link":"https://en.wikipedia.org/wiki/Raya_and_Sakina",
      "historical":"true",
      "kids": "Allowed",
      "indoor_outdoor": "indoor",
      "weather": "All",
      "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.084123524769!2d29.892478525126446!3d31.190680774366598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3dc53385c55%3A0xe75649180ddfd010!2z2YLYsdipINmC2YjZhCDYp9mE2YTYqNin2YYg2KfZhNmC2K_ZitmFINio2YrYqiDYsdmK2Kcg2YjYs9mD2YrZhtipINit2KfYsdipINmF2KfZg9mI2LHZitizINmI2KfZhNmG2KzYp9ip!5e0!3m2!1sar!2seg!4v1726538741521!5m2!1sar!2seg",
      "hidden_gem": "true",
      "image_url":"https://cdn.al-ain.com/lg/images/2022/12/12/135-200356-raya-sakina-crime-shrine-egypt-abroad_700x400.jpg",
      "top_visit": "false",
      "tickets": {
        "egyptian_student": "EGP 5",
        "non_egyptian_student": "EGP 20",
        "egyptian_adult": "EGP 10",
        "non_egyptian_adult": "EGP 150"
      }
    },
    {
      "name": "Cavafy Museum",
      "describtion":"Cavafy Museum is an apartment museum in center Alexandria, Egypt, which formerly was the residence of the Greek poet Constantine P. Cavafy, where he lived most of his life.",
      "card_describtion":"the Greek poet Constantine P. Cavafy's apartment museum",
      "wikipedia_link":"https://en.wikipedia.org/wiki/Cavafy_Museum",
      "historical":"true",
      "kids": "Allowed",
      "indoor_outdoor": "indoor",
      "weather": "All",
      "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.8350920344124!2d29.903818125126055!3d31.197585474363333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4eab0c6dea1%3A0xe7c12b67092dd128!2z2YXYqtit2YEg2YPZgdin2YHZitiz!5e0!3m2!1sar!2seg!4v1726538813635!5m2!1sar!2seg",
      "hidden_gem": "false",
      "image_url":"https://partify.io/upload/gallery/9103/13868-lwktaqcrbs-1920.jpg",
      "top_visit": "true",
      "tickets": {
        "egyptian_student": "EGP 5",
        "non_egyptian_student": "EGP 20",
        "egyptian_adult": "EGP 10",
        "non_egyptian_adult": "EGP 150"
      }
    },
    {
      "name": "Roman Museum",
      "describtion":"The Graeco-Roman Museum in Alexandria, Egypt, is an archaeological museum established in 1892,Inaugurated by Khedive Abbas II, it features artifacts from the Greco-Roman (Ptolemaic) era,including sculptures, mummies, and sarcophagi that highlight the interaction between Greco-Roman civilization and ancient Egypt.Notable early directors included Giuseppe Botti, Evaristo Breccia, and Achille Adriani.",
      "card_describtion":"archaeological museum features artifacts from the Greco-Roman (Ptolemaic) era",
      "wikipedia_link":"https://en.wikipedia.org/wiki/Graeco-Roman_Museum",
      "historical":"true",
      "kids": "Allowed",
      "indoor_outdoor": "indoor",
      "weather": "All",
      "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13651.109550932393!2d29.92462494458007!3d31.1991852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c33529a0fac1%3A0xe8132f86930de461!2z2KfZhNmF2KrYrdmBINin2YTZitmI2YbYp9mG2Yog2KfZhNix2YjZhdin2YbZig!5e0!3m2!1sar!2seg!4v1726538889375!5m2!1sar!2seg",
      "hidden_gem": "false",
      "image_url":"https://i.pinimg.com/564x/ff/3e/3b/ff3e3b0ae49652a1be7c531628d09a84.jpg",
      "top_visit": "true",
      "tickets": {
        "egyptian_student": "EGP 5",
        "non_egyptian_student": "EGP 20",
        "egyptian_adult": "EGP 10",
        "non_egyptian_adult": "EGP 150"
      }
    },
    {
      "name": "Antoniadis Gardens",
      "describtion":"The Antoniadis Palace and its park are constructed as a miniature version of the Palace of Versaille. The villa and its garden date back to the 19th century, and are mainly used to house a collection of statues sculpted in the Greek style and owned by Sir John Antoniadis",
      "card_describtion":"A park full of huge gardens with different trees and many Roman characters",
      "wikipedia_link":"https://en.wikipedia.org/wiki/Palais_d%27Antoniadis",
      "historical":"true",
      "kids": "Allowed",
      "indoor_outdoor": "outdoor",
      "weather": ["Clear", "Sunny"],
      "location":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.543211249989!2d29.949573725125664!3d31.20567647435952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4a035763b83%3A0x78b75d983257fe7f!2z2K3Yr9mK2YLYqSDYp9mG2LfZiNmG2YrYp9iv2LM!5e0!3m2!1sar!2seg!4v1726538990862!5m2!1sar!2seg",
      "hidden_gem": "false",
      "image_url":"https://media.gemini.media/img/Original/2023/5/22/2023_5_22_15_45_11_574.jpg",
      "top_visit": "true",
      "tickets": "Free"
    },
    {
      "name": "Africano Park",
      "describtion":"Discover the extraordinary world of wildlife during Africano Park Alexandria This unique experience takes you to the heart of Africano Park, a haven for a variety of African animals living in beautifully recreated habitats. Enjoy viewing the animals up-close in a safe, well-monitored environment. This experience, guided by experienced professionals, offers you a delightful chance to learn about biodiversity while being close to some of the world's most amazing creatures.",
      "card_describtion":"a variety of African animals living in beautifully recreated habitats",
      "wikipedia_link":"https://www.instagram.com/africasafaripark/",
      "historical":"false",
      "kids": "Allowed",
      "indoor_outdoor": "outdoor",
      "weather": ["Clear", "Sunny"],
      "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292980.728943038!2d36.17292674106299!3d26.807308816606326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145f57f7536cea13%3A0x22933dbbb41869fb!2sAfrica%20Safari%20Park!5e0!3m2!1sar!2seg!4v1726539464994!5m2!1sar!2seg",
      "hidden_gem": "false",
      "image_url":"https://i.pinimg.com/564x/8e/86/c1/8e86c1a47eebbb453bdd7516aaf687f9.jpg",
      "top_visit": "true",
      "tickets": {"egyptian": "EGP 20","non_egyptian": "EGP 150"}},

    {
    "name": "Catacomb of Kom El Shoqafa",
    "describtion":"The Catacombs of Kom El Shoqafa in Alexandria, Egypt, are a historical archaeological site and one of the Seven Wonders of the Middle Ages. This necropolis features tombs, statues, and artifacts combining Pharaonic, Hellenistic, and Roman influences, reflecting a blend of cultural elements. A circular staircase leads down to the tombs, which were carved into bedrock during the 2nd century CE under the Antonine emperors.",
    "card_describtion":"A historical archaeological site and one of the Seven Wonders of the Middle Ages.",
    "wikipedia_link":"https://en.wikipedia.org/wiki/Catacombs_of_Kom_El_Shoqafa",
    "historical":"true",
    "kids":"Allowed",
    "indoor_outdoor": "indoor",
    "weather": "All",
    "location":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.5147541267993!2d29.895645525126934!3d31.178737774372195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c39a2a19a397%3A0x6cc09f316aeb7191!2z2YPYqtin2YPZiNmF2Kgg2YPZiNmFINin2YTYtNmC2KfZgdip!5e0!3m2!1sar!2seg!4v1726539577186!5m2!1sar!2seg",
    "hidden_gem": "false",
    "image_url":"https://tse1.mm.bing.net/th?id=OIP.QECIHZeMGHQVtRqtPaNqTgHaEl&pid=Api&P=0&h=220",
    "top_visit": "true",
     "tickets": { "egyptian_student": "EGP 5",
      "non_egyptian_student": "EGP 20",
      "egyptian_adult": "EGP 10",
      "non_egyptian_adult": "EGP 150",
      "egyptian_senior_citizen": "EGP 5",
      "non_egyptian_senior_citizen": "EGP 150"
}  }
,
{
  "name": "Alexandria Naval Unknown Soldier Memorial",
  "describtion":"The Alexandria Naval Unknown Soldier Memorial at the Manshaya district is dedicated to the unknown soldiers who lost their lives in the sea battles, it is present on the Corniche of Alexandria.[1] It was built under the rule of Muhammed Ali of Egypt as Alexandria was the main naval base for his son Ibrahim Pasha's expedition to Greece during the Greek War of Independence, that culminated in the Battle of Navarino.",
  "card_describtion":"it was dedicated to the unknown soldiers who lost their lives in the sea battles",
  "wikipedia_link":"https://en.wikipedia.org/wiki/Alexandria_Naval_Unknown_Soldier_Memorial",
  "historical":"true",
  "kids": "Allowed",
  "indoor_outdoor": "outdoor",
  "weather": ["Clear", "Sunny"],
  "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.7480399676465!2d29.89633182512604!3d31.19999877436226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3ef832cefdb%3A0x304d50967e6abf61!2z2KfZhNmG2LXYqCDYp9mE2KrYsNmD2KfYsdmKINmE2YTYrNmG2K_ZiiDYp9mE2YXYrNmH2YjZhA!5e0!3m2!1sar!2seg!4v1726539723250!5m2!1sar!2seg",
  "hidden_gem": "false",
  "image_url":"https://thumbs.dreamstime.com/b/landscape-view-alexandria-naval-unknown-soldier-memorial-egypt-248321640.jpg",
  "top_visit": "true",
  "tickets": "Free"
},
{
  "name": "St. Mark's Cathedral in Alexandria",
  "describtion":"Saint Mark's Coptic Orthodox Cathedral is a Coptic church in Alexandria, Egypt. It is the historical seat of the Pope of Alexandria, the head of the Coptic Orthodox Church.",
  "card_describtion":"A historical church",
  "wikipedia_link":"https://en.wikipedia.org/wiki/Saint_Mark%27s_Coptic_Orthodox_Cathedral_(Alexandria)",
  "historical":"true",
  "kids":"Allowed",
  "indoor_outdoor": "indoor",
  "weather": "All",
  "location":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.8063723392033!2d29.902140425125978!3d31.198381674363116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3ec27017fb3%3A0x20dc630759223b1!2z2YTZg9in2KrYr9ix2KfYptmK2Kkg2KfZhNmF2LHZgtiz2YrYqSDYqNin2YTYp9iz2YPZhtiv2LHZitip!5e0!3m2!1sar!2seg!4v1726539800718!5m2!1sar!2seg",
  "hidden_gem": "false",
  "image_url":"https://i1.wp.com/www.ospreyobserver.com/wp-content/uploads/2019/04/St.-Marks-2.jpg?fit=720,743&ssl=1",
  "top_visit": "true",
  "tickets": "Free"
},
{
  "name": "Mostafa Kamel Hellenistic Necropolis",
  "describtion":"The Mustafa Kamel Necropolis, located in Alexandria, dates back to the Ptolemaic era and consists of four rock-carved tombs. Discovered by chance between 1933 and 1934, two tombs are below ground, while parts of the other two rise above the surface. The tombs date to the late 3rd and early 2nd centuries BCE.",
  "card_describtion":" Necropolis is an archaeological site from the Ptolemaic era",
  "wikipedia_link":"https://ar.wikipedia.org/wiki/%D9%85%D9%82%D8%A7%D8%A8%D8%B1_%D9%85%D8%B5%D8%B7%D9%81%D9%89_%D9%83%D8%A7%D9%85%D9%84",
  "historical":"true",
  "kids":"Allowed",
  "indoor_outdoor": "outdoor",
  "weather": ["Clear", "Sunny"],
  "location":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.638529668032!2d29.950177525124495!3d31.230742474347892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4e87fb40fa1%3A0xfdfc9c747cc17d4d!2z2YXZgtin2KjYsSDZhdi12LfZgdmJINmD2KfZhdmEINin2YTYo9ir2LHZitip!5e0!3m2!1sar!2seg!4v1726539933165!5m2!1sar!2seg",
  "hidden_gem": "true",
  "image_url":"https://editorial01.shutterstock.com/preview-440/5850823er/029f49b8/Shutterstock_5850823er.jpg",
  "top_visit": "false",
  "tickets": "Free"
},
{
  "name": "Ancient Roman Theatre",
  "describtion":"The theatre of ancient Rome referred to a period of time in which theatrical practice and performance took place in Rome. The tradition has been linked back even further to the 4th century BC, following the state’s transition from monarchy to republic.",
  "card_describtion":"A theatre of ancient Rome",
  "wikipedia_link":"https://en.wikipedia.org/wiki/Theatre_of_ancient_Rome",
  "historical":"true",
  "kids":"Allowed",
  "indoor_outdoor": "outdoor",
  "weather": ["Clear", "Sunny"],
  "location":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.9411313286405!2d29.90660002512621!3d31.19464557436468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3eb59fbc5c3%3A0xf53cf227d8ca06e4!2z2KfZhNmF2LPYsditINin2YTYsdmI2YXYp9mG2YogLSDYp9mE2KXYs9mD2YbYr9ix2YrYqQ!5e0!3m2!1sar!2seg!4v1726540062321!5m2!1sar!2seg",
  "hidden_gem": "false",
  "image_url":"https://i.pinimg.com/236x/3b/52/ef/3b52ef4f44fa61e3828826bd74742465.jpg",
  "top_visit": "true",
  "tickets": {
     "egyptian_student": "EGP 5",
     "non_egyptian_student": "EGP 20",
     "egyptian_adult": "EGP 10",
     "non_egyptian_adult": "EGP 150"
}
},
{
  "name": "Serapeum of Alexandria",
  "describtion":"The Serapeum of Alexandria in the Ptolemaic Kingdom was an ancient Greek temple built by Ptolemy III Euergetes (reigned 246–222 BC) and dedicated to Serapis, who was made the protector of Alexandria, Egypt. There are also signs of Harpocrates. It has been referred to as the daughter of the Library of Alexandria. The site has been heavily plundered",
  "card_describtion":"An ancient Greek temple",
  "wikipedia_link":"https://en.wikipedia.org/wiki/Serapeum_of_Alexandria",
  "historical":"true",
  "kids":"Allowed",
  "indoor_outdoor": "outdoor",
  "weather": ["Clear", "Sunny"],
  "location":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.384646702014!2d29.8988621251268!3d31.182346574370488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3c5a2084c55%3A0xba01b18741829299!2z2LnZhdmI2K8g2KfZhNiz2YjYp9ix2YrYjCDYp9mE2KXYs9mD2YbYr9ix2YrYqQ!5e0!3m2!1sar!2seg!4v1726540274846!5m2!1sar!2seg",
  "hidden_gem": "true",
  "image_url":"data:image/jpeg;base64,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",
  "top_visit": "false",
  "tickets": "Free"
}
]

collection.insert_many(Places)


# inserted_document = collection.insert_one(document)

# print(f"Inserted Document ID: {inserted_document.inserted_id}")
client.close()





