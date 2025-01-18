const blogs_card = [
    {
      image: "https://media.licdn.com/dms/image/D4D12AQEjt12bq1FrxA/article-cover_image-shrink_720_1280/0/1716195366796?e=2147483647&v=beta&t=xpua2U5EemqTXwUn0CH3STngDbRMKPQij4AVpdUKyJs",
      title: "Healthy Lifestyle",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jVJCxFI6qTn7XYGPdViJlADGEq0aCoOSZw&s",
      ownerName: "Mike Johnson",
      publishTime: "10",
      type: "Health"
    },
    {
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202309/2212/d0746e543cf6cde4f6972d64b9b78f38d066587ee4d91e3a.png",
      title: "Cricket",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojhc0eP8SdlrT09cY4hB7ijDhC1kjGIczyw&s",
      ownerName: "John Doe",
      publishTime: "2",
      type: "Sports"
    },
    {
      image: "https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg",
      title: "Global Warming",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRkYDLBamjd-sdfPYq4g9U6sfSNxsAQf6VA&s",
      ownerName: "Emily Clark",
      publishTime: "3",
      type: "Environment"
    },
    {
      image: "https://cdn.britannica.com/62/156662-050-5D93F2F9/India-War-Memorial-arch-New-Delhi.jpg?w=400&h=400&c=crop",
      title: "India",
      ownerImage: "https://tiermaker.com/images/chart/chart/cartoon-characters-i-want-to-punch-in-the-face-full-748002/bartgif.png",
      ownerName: "Jane Smith",
      publishTime: "3",
      type: "Country"
    },
    {
      image: "https://thephysiocompany.co.uk/wp-content/uploads/football.jpg",
      title: "Football",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqis1FtLO5yEfSqcR_fQ-zGu7Q2XZ4tghROw&s",
      ownerName: "Sam Curran",
      publishTime: "20",
      type: "Sports"
    },
    {
      image: "https://www.nationsencyclopedia.com/photos/united-states-of-america-1087.jpg",
      title: "USA",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqis1FtLO5yEfSqcR_fQ-zGu7Q2XZ4tghROw&s",
      ownerName: "Sam Curran",
      publishTime: "9",
      type: "Country"
    },
    {
      image: "https://cdn.creatureandcoagency.com/uploads/2017/02/75e516848bb75038a8674f0e29ecff365f617e91_1466165510.jpg",
      title: "Russia",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jVJCxFI6qTn7XYGPdViJlADGEq0aCoOSZw&s",
      ownerName: "Mike Johnson",
      publishTime: "8",
      type: "Country"
    },
    {
      image: "https://blog.feniceenergy.com/wp-content/uploads/2024/05/difference-between-green-energy-and-renewable-energy.jpg",
      title: "Renewable Energy",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojhc0eP8SdlrT09cY4hB7ijDhC1kjGIczyw&s",
      ownerName: "John Doe",
      publishTime: "5",
      type: "Environment"
    },
    {
      image: "https://www.hccb.in/images/34991210106_d305469765_c.jpg",
      title: "Mental Awarness",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRkYDLBamjd-sdfPYq4g9U6sfSNxsAQf6VA&s",
      ownerName: "Emily Clark",
      publishTime: "5",
      type: "Health"
    },
    {
      image: "https://ss-i.thgim.com/public/photos/article35426302.ece/alternates/FREE_385/Birendra-Lakrajpg",
      title: "Hockey",
      ownerImage: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/82937756529961.59b2075873405.png",
      ownerName: "Rocky Star",
      publishTime: "10",
      type: "Sports"
    },
    {
      image: "https://media.tehrantimes.com/d/t/2022/08/01/4/4231951.jpg?ts=1659354544474",
      title: "Climate Change",
      ownerImage: "https://tiermaker.com/images/chart/chart/cartoon-characters-i-want-to-punch-in-the-face-full-748002/bartgif.png",
      ownerName: "Jane Smith",
      publishTime: "25",
      type: "Environment"
    },
    {
      image: "https://thelogicalindian.com/wp-content/uploads/2024/10/500x300_234587-fireflytheimportanceofphysicalfitnessandfactorsimpactingit6686.webp",
      title: "Gym",
      ownerImage: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/82937756529961.59b2075873405.png",
      ownerName: "Rocky Star",
      publishTime: "10",
      type: "Health"
    },
   
    
    
];
const blogs = [
    {
      "title": "Healthy Lifestyle",
      "content": "It is said that it is easy to learn and maintain bad habits but very difficult to switch them back. The issue of a healthy lifestyle is very serious but people take it very lightly. To improve your lifestyle, you should take small steps and one at a time. Do not go overboard with efforts to maintain a healthy lifestyle. Plan and follow a strict diet containing essential minerals and vitamins. Wake up early in the morning and sleep early to de-stress the body. Exercise regularly to make the body active and release stress. Reduce the usage of mobile phones to avoid physical and mental problems. Connect with positive-minded people. Avoid habits like smoking, drinking, junk food, addiction, meal skipping, and overuse of pills. A healthy lifestyle reduces the risk of cancer, heart disease, diabetes, obesity, and osteoporosis. It also improves social and personal life, enhances family relationships, and increases life expectancy. A healthy lifestyle has numerous benefits for both the body and mind, improving relationships and helping individuals live longer."
    },
    {
      "title": "Cricket",
      "content": "Cricket is a popular sport involving a bat and ball, played between two teams of 11 players each. It is especially famous in India and England. The game has various formats, including the Test Match, which is a traditional format lasting up to five days between two countries. National League Systems include county matches in England lasting three to four days. Limited Overs Cricket is a single-innings format with results determined in one day. One Day Internationals (ODIs) involve fifty-over matches played between two countries, while Twenty-20 (T20) cricket has twenty-over matches known for excitement and engagement. Despite hockey being the national sport, cricket dominates the hearts of Indians. It unites people and creates excitement, with players revered as demi-gods. Innovations like the Indian Premier League (IPL) boost the game's popularity, and business tycoons invest in cricket to capitalize on its appeal. Cricket is not merely a sport but an emotion in India, fostering unity, excitement, and international relationships."
    },
    {
      "title": "Global Warming",
      "content": "Global warming refers to the gradual rise in the Earth's atmospheric temperature, mainly due to human and natural activities. Natural causes include greenhouse gases trapped in the atmosphere and volcanic eruptions releasing carbon dioxide. Manmade causes include the excessive use of automobiles and fossil fuels, deforestation and loss of carbon absorption sources, and activities like mining and cattle rearing. Solutions to combat global warming include reducing greenhouse gas emissions, monitoring gasoline consumption, and switching to hybrid cars. Encourage carpooling and public transport, recycle and reduce waste, and limit electricity usage to reduce carbon dioxide release. Governments must regulate industrial emissions and encourage reforestation. Global warming is a severe issue that requires collective efforts from individuals and governments to mitigate its impact and protect future generations."
    },
    {
      "title": "India",
      "content": "India, also known as Bharat or Hindustan, is a diverse country with a rich cultural heritage and historical significance. It is the seventh-largest country in the world, bordered by the Bay of Bengal to the east, the Arabian Sea to the west, and the Indian Ocean to the south. India's national symbols include the tiger as the national animal, the peacock as the national bird, the mango as the national fruit, 'Jana Gana Mana' as the national anthem, 'Vande Mataram' as the national song, and hockey as the national sport. India is home to multiple religions, languages, and cultures, living together in unity. Famous regions include Rajasthan, known for its desert landscape, heritage, and bravery of kings; Madhya Pradesh, rich in temples, lakes, forts, and natural beauty; Jammu and Kashmir, referred to as 'Heaven on Earth' for its scenic beauty; and Kerala, known as 'God's Own Country' for its backwaters, beaches, and natural beauty. India is a nation of unity in diversity, famous for its heritage, spices, and cultural richness."
    },
    {
      "title": "Football",
      "content": "It is said that it is easy to learn and maintain bad habits but very difficult to switch them back. The issue of a healthy lifestyle is very serious but people take it very lightly. To improve your lifestyle, you should take small steps and one at a time. Do not go overboard with efforts to maintain a healthy lifestyle. Plan and follow a strict diet containing essential minerals and vitamins. Wake up early in the morning and sleep early to de-stress the body. Exercise regularly to make the body active and release stress. Reduce the usage of mobile phones to avoid physical and mental problems. Connect with positive-minded people. Avoid habits like smoking, drinking, junk food, addiction, meal skipping, and overuse of pills. A healthy lifestyle reduces the risk of cancer, heart disease, diabetes, obesity, and osteoporosis. It also improves social and personal life, enhances family relationships, and increases life expectancy. A healthy lifestyle has numerous benefits for both the body and mind, improving relationships and helping individuals live longer."
    },
    {
      "title": "USA",
      "content": "Cricket is a popular sport involving a bat and ball, played between two teams of 11 players each. It is especially famous in India and England. The game has various formats, including the Test Match, which is a traditional format lasting up to five days between two countries. National League Systems include county matches in England lasting three to four days. Limited Overs Cricket is a single-innings format with results determined in one day. One Day Internationals (ODIs) involve fifty-over matches played between two countries, while Twenty-20 (T20) cricket has twenty-over matches known for excitement and engagement. Despite hockey being the national sport, cricket dominates the hearts of Indians. It unites people and creates excitement, with players revered as demi-gods. Innovations like the Indian Premier League (IPL) boost the game's popularity, and business tycoons invest in cricket to capitalize on its appeal. Cricket is not merely a sport but an emotion in India, fostering unity, excitement, and international relationships."
    },
    {
      "title": "Russia",
      "content": "Global warming refers to the gradual rise in the Earth's atmospheric temperature, mainly due to human and natural activities. Natural causes include greenhouse gases trapped in the atmosphere and volcanic eruptions releasing carbon dioxide. Manmade causes include the excessive use of automobiles and fossil fuels, deforestation and loss of carbon absorption sources, and activities like mining and cattle rearing. Solutions to combat global warming include reducing greenhouse gas emissions, monitoring gasoline consumption, and switching to hybrid cars. Encourage carpooling and public transport, recycle and reduce waste, and limit electricity usage to reduce carbon dioxide release. Governments must regulate industrial emissions and encourage reforestation. Global warming is a severe issue that requires collective efforts from individuals and governments to mitigate its impact and protect future generations."
    },
    {
      "title": "Renewable Energy",
      "content": "India, also known as Bharat or Hindustan, is a diverse country with a rich cultural heritage and historical significance. It is the seventh-largest country in the world, bordered by the Bay of Bengal to the east, the Arabian Sea to the west, and the Indian Ocean to the south. India's national symbols include the tiger as the national animal, the peacock as the national bird, the mango as the national fruit, 'Jana Gana Mana' as the national anthem, 'Vande Mataram' as the national song, and hockey as the national sport. India is home to multiple religions, languages, and cultures, living together in unity. Famous regions include Rajasthan, known for its desert landscape, heritage, and bravery of kings; Madhya Pradesh, rich in temples, lakes, forts, and natural beauty; Jammu and Kashmir, referred to as 'Heaven on Earth' for its scenic beauty; and Kerala, known as 'God's Own Country' for its backwaters, beaches, and natural beauty. India is a nation of unity in diversity, famous for its heritage, spices, and cultural richness."
    },
    {
      "title": "Mental Awarness",
      "content": "It is said that it is easy to learn and maintain bad habits but very difficult to switch them back. The issue of a healthy lifestyle is very serious but people take it very lightly. To improve your lifestyle, you should take small steps and one at a time. Do not go overboard with efforts to maintain a healthy lifestyle. Plan and follow a strict diet containing essential minerals and vitamins. Wake up early in the morning and sleep early to de-stress the body. Exercise regularly to make the body active and release stress. Reduce the usage of mobile phones to avoid physical and mental problems. Connect with positive-minded people. Avoid habits like smoking, drinking, junk food, addiction, meal skipping, and overuse of pills. A healthy lifestyle reduces the risk of cancer, heart disease, diabetes, obesity, and osteoporosis. It also improves social and personal life, enhances family relationships, and increases life expectancy. A healthy lifestyle has numerous benefits for both the body and mind, improving relationships and helping individuals live longer."
    },
    {
      "title": "Hockey",
      "content": "Cricket is a popular sport involving a bat and ball, played between two teams of 11 players each. It is especially famous in India and England. The game has various formats, including the Test Match, which is a traditional format lasting up to five days between two countries. National League Systems include county matches in England lasting three to four days. Limited Overs Cricket is a single-innings format with results determined in one day. One Day Internationals (ODIs) involve fifty-over matches played between two countries, while Twenty-20 (T20) cricket has twenty-over matches known for excitement and engagement. Despite hockey being the national sport, cricket dominates the hearts of Indians. It unites people and creates excitement, with players revered as demi-gods. Innovations like the Indian Premier League (IPL) boost the game's popularity, and business tycoons invest in cricket to capitalize on its appeal. Cricket is not merely a sport but an emotion in India, fostering unity, excitement, and international relationships."
    },
    {
      "title": "Climate Change",
      "content": "Global warming refers to the gradual rise in the Earth's atmospheric temperature, mainly due to human and natural activities. Natural causes include greenhouse gases trapped in the atmosphere and volcanic eruptions releasing carbon dioxide. Manmade causes include the excessive use of automobiles and fossil fuels, deforestation and loss of carbon absorption sources, and activities like mining and cattle rearing. Solutions to combat global warming include reducing greenhouse gas emissions, monitoring gasoline consumption, and switching to hybrid cars. Encourage carpooling and public transport, recycle and reduce waste, and limit electricity usage to reduce carbon dioxide release. Governments must regulate industrial emissions and encourage reforestation. Global warming is a severe issue that requires collective efforts from individuals and governments to mitigate its impact and protect future generations."
    },
    {
      "title": "Gym",
      "content": "India, also known as Bharat or Hindustan, is a diverse country with a rich cultural heritage and historical significance. It is the seventh-largest country in the world, bordered by the Bay of Bengal to the east, the Arabian Sea to the west, and the Indian Ocean to the south. India's national symbols include the tiger as the national animal, the peacock as the national bird, the mango as the national fruit, 'Jana Gana Mana' as the national anthem, 'Vande Mataram' as the national song, and hockey as the national sport. India is home to multiple religions, languages, and cultures, living together in unity. Famous regions include Rajasthan, known for its desert landscape, heritage, and bravery of kings; Madhya Pradesh, rich in temples, lakes, forts, and natural beauty; Jammu and Kashmir, referred to as 'Heaven on Earth' for its scenic beauty; and Kerala, known as 'God's Own Country' for its backwaters, beaches, and natural beauty. India is a nation of unity in diversity, famous for its heritage, spices, and cultural richness."
    }
]


//Time block
function format(unit){
    if(unit<10)
    {unit='0'+unit}
    return unit;
}
function update_clock(){
const now=new Date();

const hours=format(now.getHours());
const minutes=format(now.getMinutes());
const seconds=format(now.getSeconds());

document.getElementById('time').textContent=`${hours} : ${minutes} : ${seconds}`;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

const day=days[now.getDay()];
const month=months[now.getMonth()];
const date=now.getDate();
document.getElementById('date').textContent=`${day}, ${month} ${date}`
}
setInterval(update_clock,1000);
update_clock();


//sticky notes
let click=0;
document.querySelector(".note").addEventListener('click',()=>{
  if(click==0){
  document.querySelector(".note_space").classList.remove("hidden");
  click++}
  else{
  document.querySelector(".note_space").classList.add("hidden");
  click=0}

})
const submit=document.querySelector(".note_submit");
let note=[];
let index=0;
submit.addEventListener('click', ()=>{
  
  note[index]=document.querySelector("#user_note").value
  localStorage.setItem('note', JSON.stringify(note));

  document.querySelector(".note_space").classList.add("hidden");
  index++;

})


//Create Blog cards
function cardMaker(main_div,elem,index){

  //card = card_iamge + card_info  
  const card=document.createElement('div');
  card.classList.add('card')
  card.setAttribute("data-id",index+1);
  
  
  //card_image
  const card_image=document.createElement('div');
  card_image.classList.add('card_image');
  
  const image=document.createElement('img');
  image.setAttribute("src",elem.image)
  
  const h2=document.createElement('h2');
  h2.textContent=elem.title;
  
  card_image.appendChild(image);
  card_image.appendChild(h2);
  
  
  //card_info
  const card_info=document.createElement('div')
  card_info.classList.add('card_info')
  
  
  const card_info1=document.createElement('div');
  card_info1.classList.add('card_info1');
  const image2=document.createElement('img');
  image2.classList.add('owner_image')
  image2.setAttribute("src",elem.ownerImage)
  card_info1.appendChild(image2)
  
  const card_info2=document.createElement('div');
  card_info2.classList.add('card_info2');
  const h3=document.createElement('h3');
  h3.textContent=elem.ownerName;
  const h4=document.createElement('h4');
  h4.textContent=elem.publishTime+" days ago";
  card_info2.appendChild(h3);
  card_info2.appendChild(h4);
  
  
  card_info.appendChild(card_info1);
  card_info.appendChild(card_info2);
  
  
  //fullcard
  const blog_list=document.getElementById(main_div)
  card.appendChild(card_image);
  card.appendChild(card_info);
  
  blog_list.appendChild(card);
}

//Filter blogs
function filter_blogs(filter){
  document.getElementById("selected_tag").innerHTML="";
  blogs_card.forEach((elem,index)=>{
  if(elem.type==filter){
  cardMaker('selected_tag',elem,index);}
})
}


//Blog Cards for "new-here" section
blogs_card.forEach((elem,index)=>{
  cardMaker('new_blog_list',elem,index);
})

//Blog Cards for "recent-blogs" section
blogs_card.forEach((elem,index)=>{
  if(elem.publishTime<=7){
  cardMaker('blog_list',elem,index);}
})

//Blog Cards for "filter-blog section"
document.querySelector(".tags").addEventListener('click',(elem)=>{
  filter_blogs(elem.target.id)
})

 

//blogs-content
document.querySelectorAll('.card').forEach(blog => {
    blog.addEventListener('click', () => {
        const blogId = blog.getAttribute('data-id');
        localStorage.setItem('selectedBlog', blogId);
        window.location.href = 'blog.html';
    });
});







