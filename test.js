const blogs_card = [
    {
      image: "https://media.licdn.com/dms/image/D4D12AQEjt12bq1FrxA/article-cover_image-shrink_720_1280/0/1716195366796?e=2147483647&v=beta&t=xpua2U5EemqTXwUn0CH3STngDbRMKPQij4AVpdUKyJs",
      title: "Healthy Lifestyle",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jVJCxFI6qTn7XYGPdViJlADGEq0aCoOSZw&s",
      ownerName: "Mike Johnson",
      publishTime: "10",
      type: "Health",
    },
    {
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202309/2212/d0746e543cf6cde4f6972d64b9b78f38d066587ee4d91e3a.png",
      title: "Cricket",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojhc0eP8SdlrT09cY4hB7ijDhC1kjGIczyw&s",
      ownerName: "John Doe",
      publishTime: "2",
      type: "Sports",
    },
    {
      image: "https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg",
      title: "Global Warming",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRkYDLBamjd-sdfPYq4g9U6sfSNxsAQf6VA&s",
      ownerName: "Emily Clark",
      publishTime: "3",
      type: "Environment",
    },
    {
      image: "https://cdn.britannica.com/62/156662-050-5D93F2F9/India-War-Memorial-arch-New-Delhi.jpg?w=400&h=400&c=crop",
      title: "India",
      ownerImage: "https://tiermaker.com/images/chart/chart/cartoon-characters-i-want-to-punch-in-the-face-full-748002/bartgif.png",
      ownerName: "Jane Smith",
      publishTime: "3",
      type: "Country",
    },
    {
      image: "https://thephysiocompany.co.uk/wp-content/uploads/football.jpg",
      title: "Football",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqis1FtLO5yEfSqcR_fQ-zGu7Q2XZ4tghROw&s",
      ownerName: "Sam Curran",
      publishTime: "20",
      type: "Sports",
    },
    {
      image: "https://www.nationsencyclopedia.com/photos/united-states-of-america-1087.jpg",
      title: "USA",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqis1FtLO5yEfSqcR_fQ-zGu7Q2XZ4tghROw&s",
      ownerName: "Sam Curran",
      publishTime: "9",
      type: "Country",
    },
    {
      image: "https://cdn.creatureandcoagency.com/uploads/2017/02/75e516848bb75038a8674f0e29ecff365f617e91_1466165510.jpg",
      title: "Russia",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jVJCxFI6qTn7XYGPdViJlADGEq0aCoOSZw&s",
      ownerName: "Mike Johnson",
      publishTime: "8",
      type: "Country",
    },
    {
      image: "https://blog.feniceenergy.com/wp-content/uploads/2024/05/difference-between-green-energy-and-renewable-energy.jpg",
      title: "Renewable Energy",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojhc0eP8SdlrT09cY4hB7ijDhC1kjGIczyw&s",
      ownerName: "John Doe",
      publishTime: "5",
      type: "Environment",
    },
    {
      image: "https://www.hccb.in/images/34991210106_d305469765_c.jpg",
      title: "Mental Awarness",
      ownerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRkYDLBamjd-sdfPYq4g9U6sfSNxsAQf6VA&s",
      ownerName: "Emily Clark",
      publishTime: "5",
      type: "Health",
    },
    {
      image: "https://ss-i.thgim.com/public/photos/article35426302.ece/alternates/FREE_385/Birendra-Lakrajpg",
      title: "Hockey",
      ownerImage: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/82937756529961.59b2075873405.png",
      ownerName: "Rocky Star",
      publishTime: "10",
      type: "Sports",
    },
    {
      image: "https://media.tehrantimes.com/d/t/2022/08/01/4/4231951.jpg?ts=1659354544474",
      title: "Climate Change",
      ownerImage: "https://tiermaker.com/images/chart/chart/cartoon-characters-i-want-to-punch-in-the-face-full-748002/bartgif.png",
      ownerName: "Jane Smith",
      publishTime: "25",
      type: "Environment",
    },
    {
      image: "https://thelogicalindian.com/wp-content/uploads/2024/10/500x300_234587-fireflytheimportanceofphysicalfitnessandfactorsimpactingit6686.webp",
      title: "Gym",
      ownerImage: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/82937756529961.59b2075873405.png",
      ownerName: "Rocky Star",
      publishTime: "10",
      type: "Health",
    },
   
    
    
];


function card_maker(main_div){
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
    h4.textContent=elem.publishTime+"days ago";
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
