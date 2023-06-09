//this file contains all the data; name latitude, longitude, information, pictures, types and city where located
var markerData = [
    {'name': 'Heydar Aliyev Centre',
    'lat': 40.395967832128406, 
    'lng': 49.86783119102456,
    'info': "The Heydar Aliyev Center is a cultural center and museum located in the capital city of Baku, Azerbaijan. The center was designed by renowned architect Zaha Hadid. It is named after Heydar Aliyev, the former President of Azerbaijan, and is dedicated to promoting Azerbaijani culture. The building's unique design features flowing curves and undulating lines, and it has won several international architecture awards for its innovative and striking appearance.",
    'type': 'museum',
    'location': 'Baku',
    'pic': 'https://apa.az/storage/news/2022/november/04/big/6364b0eee22306364b0eee223116675432786364b0eee222c6364b0eee222e.jpg'},
    {'name': 'Maiden Tower',
    'lat': 40.36620222274625,  
    'lng': 49.8372477400984,
    'info': "The Maiden Tower is a 12th-century monument in the Baku. The Tower is covered by cloud of mysteries and legends which are rooted to the history and culture of Azerbaijan. Indeed, some epics became a subject for scenario for ballets and theatre's plays.",
    'type': 'history',
    'location':'Baku',
    'pic': 'https://img.itinari.com/activity/images/original/d13a5c7f-5490-4beb-8f58-52eb8e42616c-istock-637826312.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=c63c7c72eace87bb5909d8d83b999f6e'},
    {'name': 'Old City',
    'lat': 40.3664222949203, 
    'lng': 49.83497512660558 ,
    'info': "Old City is the historical core of Baku, Azerbaijan. The Old City is the most ancient part of Baku, which is surrounded by walls. In December 2000, the Old City of Baku, became the first location in Azerbaijan to be classified as a UNESCO World Heritage Site. It is widely accepted that the Old City, including its Maiden Tower, date at least to the 12th century, with some researchers contending that construction dates as far back as the 7th century.",
    'type': 'history',
    'location': 'Baku',
    'pic': 'https://openskiesmagazine.com/wp-content/uploads/2020/03/GettyImages-125212121-750x497.jpg'},
    {'name': 'Flame Towers',
    'lat': 40.359699462392996,  
    'lng': 49.826538540098156,
    'info': "Flame Towers is a group of three skyscrapers in Baku, Azerbaijan. The height of the tallest tower is 182 m (597 ft). The three flame-shaped towers are intended to symbolize the elements of fire, and are a reference to Azerbaijan's nickname 'The Land of Fire', historically rooted in a region where natural gas flares emit from the ground and Zoroastrian worshippers considered flames to be a symbol of the divine.",
    'type': 'skyscraper',
    'location':'Baku',
    'pic': 'https://www.schueco.com/resource/blob/81412/c6659be61a57a19c18aa5b87a6306523/3103a12-data.jpg'},
    {'name': 'Gobustan National Park',
    'lat': 40.0875667653858,  
    'lng': 49.402658057411884,
    'info': "Gobustan National Park is very rich in archeological monuments. Gobustan Rock Art Cultural Landscape within the park, which covers an area of 537 ha, has more than 6,000 rock carvings, which depict people, animals, battle-pieces, ritual dances, bullfights, boats with armed oarsmen, warriors with lances in their hands, camel caravans, pictures of sun and stars, on the average dating back to 5,000-20,000 years. This place acquired national status in 2006, and Gobustan Rock Art Cultural Landscape was inscribed on the UNESCO World Heritage List in 2007.",
    'type': 'park',
    'location': 'Baku',
    'pic': 'https://whc.unesco.org/uploads/thumbs/site_1076_0017-1200-630-20131001175023.jpg'},
    {'name': 'Carpet Museum',
    'lat': 40.35996248048595, 
    'lng': 49.8364889855867, 
    'info': "Azerbaijan National Carpet Museum is a museum located in Baku that displays Azerbaijani carpets and rugs with historical and modern weaving techniques and materials. It has the largest collection of Azerbaijani carpets in the world. The structure of the building is intended to look like a rolled carpet.",
    'type': 'museum',
    'location':'Baku',
    'pic': 'https://www.systemair.com/fileadmin/_processed_/1/2/csm_ref_Carpetmuseum_Azerbaijan_5569579eab.jpg'},
    {'name': "Martyrs' Lane",
    'lat': 40.35684051699854,  
    'lng': 49.828164595919255,
    'info': "Martyrs' Lane, is a cemetery and memorial in Baku, Azerbaijan dedicated to those killed by the Soviet Army during Black January 1990 and in the First Nagorno-Karabakh War of 1988–1994.",
    'type': 'park',
    'location':'Baku',
    'pic': 'https://s.inyourpocket.com/gallery/246426.jpg'},
    {'name': 'Palace of The Shirvanshahs',
    'lat': 40.36625004625342,  
    'lng': 49.833578911262535,
    'info': "The Palace of the Shirvanshahs is a historic palace complex located in the Old City of Baku, Azerbaijan. The palace was built in the 15th century by the Shirvanshah dynasty, who ruled Azerbaijan at the time. The complex includes a variety of buildings and structures, including a palace, mosque, mausoleum, and bathhouse. The complex was used as a royal residence and seat of government for several centuries, and is considered to be one of the most important landmarks in Azerbaijan.",
    'type': 'palace',
    'location':'Baku',
    'pic': 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/00/a5/72.jpg'},    
    {'name': 'Palace of Shaki Khans',
    'lat': 41.20394798081952, 
    'lng': 47.196796568961375,
    'info': "The Palace of Shaki Khans in Shaki, Azerbaijan was a summer residence for the Shaki Khans. It was built in 1797 by Muhammed Hasan Khan. The palace was intended to house the Khans who were in charge of controlling Shaki, as viceroys of the ruling Zand and later Qajar Persian dynasties around 1750 until the time when these territories were annexed by the Russian Empire per treaty of Gulistan in 1813 after the Russo-Persian War (1804–1813). The Palace of Shaki Khans was nominated for List of World Heritage Sites, UNESCO.",
    'type': 'palace',
    'location':'Shaki',
    'pic': 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/07/12/847609-sheki-palace.jpg'},
    {'name': 'Ateshgah of Baku',
    'lat': 40.4155563388997, 
    'lng': 50.00862172660718,
    'info': 'Ateshgah of Baku, is a historic religious temple located on the outskirts of the city of Baku, the capital of Azerbaijan. The temple was originally built in the 17th century by Indian Zoroastrians, who were attracted to the natural gas and oil fields in the area. The temple was used for worship of the Zoroastrian fire god, and it is believed that the natural gas vents in the area were considered sacred by the Zoroastrians. Today, the Ateshgah of Baku is a popular tourist attraction, and is considered to be an important cultural and religious site in Azerbaijan.',
    'type': 'religious',
    'location':'Baku',
    'pic': 'http://www.fourseasons.com/content/dam/fourseasons/images/web/BKU/BKU_043_aspect16x9.jpg'},
    {'name': 'Momine Khatun Mausoleum',
    'lat': 39.205239006979184,  
    'lng': 45.40620778424004,
    'info': 'The Momine Khatun Mausoleum is a historic mausoleum located in the city of Nakhchivan in Azerbaijan. The mausoleum was built in the 12th century and is considered to be one of the most impressive examples of medieval Islamic architecture in Azerbaijan. It was constructed in honor of Momine Khatun, the wife of the ruler of the Atabegs of Azerbaijan. The Momine Khatun Mausoleum is a significant cultural and historical site in Azerbaijan, and attracts visitors from around the world who come to admire its stunning architecture and learn about its rich history.',
    'type': 'history',
    'location':'Nakchivan',
    'pic': 'http://www.alluringworld.com/wp-content/uploads/2017/02/3-Momine-Khatun.jpg'},
    {'name': 'Shahdag Mountain Resort',
    'lat': 41.321892229137006, 
    'lng': 48.14861774197973, 
    'info': 'Shahdag is a mountain range located in the northeast of Azerbaijan, close to the border with Russia. The range is situated in the Gusar region. Shahdag is the highest peak in the range, with an elevation of 4,243 meters. The area is known for its natural beauty and is a popular destination for outdoor activities, including skiing, snowboarding, hiking, and mountain biking. There is a ski resort located on the slopes of Shahdag mountain, known as the Shahdag Mountain Resort, which offers a range of winter sports and other activities.',
    'type': 'resort',
    'location':'Gusar',
    'pic': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/59/25/23/caption.jpg?w=1200&h=-1&s=1'},
    {'name': 'National Art Museum',
    'lat': 40.3633644763932, 
    'lng': 49.83183295729172,
    'info': "Azerbaijan National Museum of Art is the biggest art museum of Azerbaijan. It was founded in 1936 in Baku. The museum consists of two 19th century buildings standing next to each other. The museum's total collection includes over 15,000 artworks. There are over 3,000 items in 60 rooms on permanent display. About 12,000 items are kept in storage. The museum changes the exhibits periodically so that more of these artworks can be displayed temporarily.",
    'type': 'museum',
    'location':'Baku',
    'pic': 'https://static.tildacdn.com/tild3065-3538-4938-b462-376131613536/National_Art_Museum_.JPG'},
    {'name': 'Yanar Dag',
    'lat': 40.502610655584704, 
    'lng': 49.890906642388444,
    'info': "Yanar Dag, is a natural gas fire which has been burning continuously on a hillside on the Absheron Peninsula near Baku, the capital city of Azerbaijan, for several decades. The flames are the result of the combustion of natural gas which seeps out from the ground. Yanar Dag is considered to be one of the most unique natural attractions in Azerbaijan and has been a popular tourist destination for many years. The flames can reach up to three meters in height and can be seen from several kilometers away, especially at night. The natural gas that fuels the fire is believed to have been burning since ancient times, and the site is considered to be a symbol of Azerbaijan's rich history and natural resources. The flame is also one of the reasons why Azerbaijan is nicknamed the 'The Land of Fire' ",
    'type': 'volcano',
    'location':'Baku',
    'pic': 'https://t3.ftcdn.net/jpg/02/87/47/24/360_F_287472405_4wwV0lrvwSAFm8QCasyGLFyqe4hMhvnb.jpg'},
    {'name': 'Bibi Heybat Mosque',
    'lat': 40.308696309375755,
    'lng': 49.82045605543949,
    'info': "The Bibi-Heybat Mosque is a historical mosque in Baku, Azerbaijan. The existing structure, built in the 1990s, is a recreation of the mosque with the same name built in the 13th century by Shirvanshah, which was completely destroyed by the Bolsheviks in 1936. The Bibi-Heybat Mosque includes the tomb of Ukeyma Khanum (a descendant of The Islamic Prophet Muhammad), and today is the spiritual center for the Muslims of the region and one of the major monuments of Islamic architecture in Azerbaijan.",
    'type': 'religious',
    'location':'Baku',
    'pic': 'https://ulduztourism.az/wp-content/uploads/2017/09/Bibi-Heybat.Mosque.original.35450.jpg'},
    {'name': 'Juma Mosque',
    'lat': 40.36565814277766, 
    'lng': 49.83569528242687,
    'info': "The Juma Mosque, is a historic mosque located in the Shamakhi, Azerbaijan. The mosque was built in the 8th century, and is considered to be one of the oldest mosques in Azerbaijan. The mosque's design includes a central dome and two minarets, and it has an ornate interior with intricate tile work, calligraphy, and other decorative elements. The Juma Mosque is a significant cultural and religious site in Azerbaijan, and is still in use today for prayers and other religious ceremonies",
    'type': 'religious',
    'location':'Shamakhi',
    'pic': 'https://cdn.odysseytraveller.com/app/uploads/2020/01/Juma-Mosque-of-Samakhi-Azerbaijan-azerbaijan-3699444_1920.jpg'},
    {'name': 'Dalga Beach Aquapark Resort',
    'lat': 40.51319576955496, 
    'lng': 50.168365940103094,
    'info': "Dalga Beach Aquapark Resort is a water park and resort located in the city of Baku, Azerbaijan. The water park features a variety of attractions, including water slides, wave pools, and a lazy river, as well as several restaurants and cafes. The resort also offers a variety of accommodations, including rooms, suites, and villas, as well as a spa, fitness center, and other amenities. ",
    'type': 'resort',
    'location':'Baku',
    'pic': 'http://dalgha.az/photos/products/1564387646.DSC03791.JPG'},
    {'name': 'Tufandag Mountain Resort',
    'lat': 41.033300326923076, 
    'lng': 47.88685944012004,
    'info': 'Tufandag Resort is a ski resort located in Gabala, Azerbaijan. It is situated on the slopes of Mount Tufandag in the Caucasus Mountains and offers a range of winter sports activities such as skiing, snowboarding, and tubing. The resort also has restaurants, cafes, and a spa for visitors to enjoy. In the summer, visitors can enjoy outdoor activities such as hiking, mountain biking, and zip-lining.',
    'type': 'resort',
    'location':'Gabala',
    'pic': 'https://ak.jogurucdn.com/media/image/p14/place-2018-03-30-6-a82933f625e53377a13d2cd2fbf37bbd.jpg'},
    {'name': 'Flag square',
    'lat': 40.34471498029537,   
    'lng': 49.84470978135301,
    'info': "The National Flag Square  is a large city square off Neftchiler Avenue in Baku, Azerbaijan. The National Flag Square covers 60 hectares (150 acres) overall. The area of the upper part is 3 hectares (7.4 acres). It is home to one of the world's tallest flagpoles, standing at 162 meters (531 feet) tall. The flagpole is designed to hold a flag measuring 70 by 35 meters (230 by 115 feet), which is one of the largest national flags in the world.  The square features the state symbols of Azerbaijan—the coat of arms and the anthem—and a map of the country.",
    'type': 'park',
    'location':'Baku',
    'pic': 'http://www.diplomatie.ma/sites/default/files/medias/actualites/img/bakou.jpg'},
    {'name': 'Khudafarin Bridges',
    'lat': 39.1509119795258, 
    'lng': 46.93992475023636,
    'info': "Khudafarin Bridges, are two arch bridges located at the border of Azerbaijan and Iran connecting the northern and southern banks of the Aras River. Located on the historical Silk Road, the 11-span bridge was built in the 11th–12th centuries and the 15-span bridge in the 13th century.",
    'type': 'history',
    'location':'Shusha',
    'pic': 'https://caspiannews.com/media/caspian_news/all_original_photos/1660911323_8999596_1660911254_303839xudaferin_korpu.jpg'},
    {'name': 'Jidir Plain',
    'lat': 39.7527991454249, 
    'lng': 46.7581343400788 ,
    'info': "The Jidir Plain is a plain in the southern part of Shusha, Azerbaijan. The name literally translates as horse racing field from Azerbaijani referring to the tradition of holding horse racing games in the times of the Karabakh Khanate. The Jidir Plain has always been the main location for festivities and sporting events in Shusha. From the time of Shusha's establishment, wrestling matches were part of periodic competitions held by the Karabakh Khans. Both horse racing and camel racing matches were held here.",
    'type': 'history',
    'location':'Shusha',
    'pic': 'https://qph.cf2.quoracdn.net/main-qimg-eb09403a25d40de20e6857fae1670fbd-lq'},
    {'name': 'Shusha Castle',
    'lat': 39.76602674217593, 
    'lng': 46.75016826891494,
    'info': "Shusha Castle, is a historic fortress located in the city of Shusha in the Azerbaijan. The fortress was originally built in the 18th century by the Karabakh Khanate, a feudal state in the South Caucasus. The castle played an important role in the region's history. The fortress is known for its unique architecture, which combines elements of Azerbaijani, Persian, and European styles, and for its strategic location on a hill overlooking the city. Today, the fortress is recognized as a symbol of Azerbaijani culture and identity and is a popular tourist attraction.",
    'type': 'palace',
    'location':'Shusha',
    'pic': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/%C5%9Eu%C5%9Fa_qalas%C4%B1_%282%29.jpg/640px-%C5%9Eu%C5%9Fa_qalas%C4%B1_%282%29.jpg'},
    {'name': 'Baku Crystal Hall',
    'lat': 40.3444471629928, 
    'lng': 49.850247611261906,
    'info': 'Baku Crystal Hall is a multi-purpose indoor arena located in Baku, the capital of Azerbaijan. It was built in 2012 to host the Eurovision Song Contest that year, and has since been used for a variety of events, including concerts, sports events, and conferences',
    'type': 'arena',
    'location':'Baku',
    'pic': 'https://www.nussli.com/ecomaXL/files/AZ_2012_ESC_Crystal-Hall-Baku_01.jpg'},
    {'name': 'Lake Masazir',
    'lat': 40.5094116757661,  
    'lng': 49.771103191243604,
    'info': "Lake Masazir is a saltwater lake located in the Absheron Peninsula of Azerbaijan. The lake has a surface area of about 5.5 square kilometers (2.1 square miles) and is known for its high salt content, which is about 6 times higher than that of the ocean. Lake Masazir appears to have a brownish-red color due to the presence of algae and minerals in the water. The lake is also surrounded by reddish-brown mud and rocks, which further contribute to the reddish-brown color of the lake. ",
    'type': 'lake',
    'location':'Baku',
    'pic': 'https://blog.dookinternational.com/images/posts/a1-1.jpg'},
    {'name': 'Sea Breeze Resort',
    'lat': 40.59154601068705, 
    'lng': 49.985243011269965 ,
    'info': "Sea Breeze Resort Baku is a luxury resort located on the Absheron Peninsula of Azerbaijan, near the city of Baku. The resort features a range of accommodations, including villas and apartments, as well as a variety of amenities and activities for guests. These include an outdoor swimming pool, a spa and wellness center, a fitness center, tennis courts, and a beach club with a private beach. Sea Breeze Resort Baku is known for its beautiful seaside location, luxurious amenities, and high level of service, making it a popular destination for travelers seeking a relaxing and indulgent vacation.",
    'type': 'resort',
    'location':'Baku',
    'pic': 'https://www.seabreeze.az/uploads/2022/10/05/7_34_dji-0983mj-0.jpg'},
    {'name': 'Naftalan Oil Resort',
    'lat': 40.50245768678496,  
    'lng': 46.829468538848445,
    'info': "Naftalan Oil Resort is a health and wellness center located in the city of Naftalan, Azerbaijan. The resort is built around the town's famous Naftalan oil, which is known for its therapeutic properties. The oil, which is a type of crude oil, is extracted from underground wells in the region and is used in a variety of treatments, including baths, massages, and wraps. The resort offers a range of accommodations, including standard and deluxe rooms, as well as suites and villas. ",
    'type': 'resort',
    'location':'Naftalan',
    'pic': 'https://cdn.thecrazytourist.com/wp-content/uploads/2023/02/ccimage-shutterstock_1929767930.jpg'},
    {'name': 'Garasu Volcano',
    'lat': 40.27802368001929, 
    'lng': 49.311676747190155,
    'info': 'Garasu Volcano, is located in the northern part of Azerbaijan, close to the border with Russia. The volcano is situated in the Garasu Volcano Group, which is a cluster of volcanoes in the Greater Caucasus mountain range. The nearest city to Garasu Volcano is Quba',
    'type': 'volcano',
    'location':'Quba',
    'pic': 'https://cdn.thecrazytourist.com/wp-content/uploads/2023/02/ccimage-shutterstock_1017995422.jpg'},
    {'name': 'Shirvan National Park',
    'lat': 39.586056074759554, 
    'lng': 49.1179521404985,
    'info': 'Shirvan National Park is located in the southeastern part of Azerbaijan, primarily in the Shirvan and Salyan districts. The park covers an area of approximately 54,373 hectares and includes a diverse range of landscapes, including semi-desert, wetlands, and forests. ',
    'type': 'park',
    'location':'Salyan',
    'pic': 'https://ulduztourism.az/wp-content/uploads/2017/09/8l-a03b-1.jpg-cropper-1400x615-1.jpg'},
    {'name': 'Lake Goygol',
    'lat': 40.410848394359036,  
    'lng': 46.32699595317145,
    'info': 'Lake Goygol is a scenic mountain lake located in the Goygol region of western Azerbaijan. The lake is situated in the foothills of the Caucasus Mountains and is surrounded by forested mountains and rolling hills, making it a popular destination for hiking and outdoor recreation. The lake is fed by mountain streams and has clear, turquoise-blue water, which is said to have healing properties. ',
    'type': 'lake',
    'location':'Ganja',
    'pic': 'https://azerbaijan.travel/resize3000/center/pages/398/64061df9-3106-4863-accb-e0c548258f23.jpg'},
    {'name': 'Absheron National Park',
    'lat': 40.296837555158184, 
    'lng': 50.348896070782246,
    'info': "Absheron National Park is a protected area located on the Absheron Peninsula in Azerbaijan, near the capital city of Baku. The park is home to a diverse range of flora and fauna, including rare and endangered species. The park's landscape is characterized by semi-desert areas, coastal wetlands, and sandy beaches, and it is an important habitat for migratory birds and other wildlife",
    'type': 'park',
    'location':'Baku',
    'pic': 'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/67946854_102319877785513_8080225474086699008_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=oNDBpYGaxy4AX-5Dk3k&_nc_ht=scontent-lhr8-2.xx&oh=00_AfDY0WM6wH2R2xhq79csuj9GOAWoji0eaf0XeIAN05rczQ&oe=645052B7'}
]
