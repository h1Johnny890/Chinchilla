console.log("Script loaded!");

const catalogData = [
  {
    name: "Dust Bath House",
    category: "Accessories",
    section: "care",
    price: 15.99,
    img: "dust.png",
    link: "https://www.amazon.com/PINVNBY-Chinchilla-Bathroom-Transparent-Accessories/dp/B09CYDTP5W?th=1",
    description: "A cozy transparent bath house perfect for your chinchilla's dust baths..."
  },
  {
    name: "Bathing Dust",
    category: "Accessories",
    section: "care",
    price: 11.49,
    img: "dustbag.png",
    link: "https://www.chewy.com/oxbow-poof-chinchilla-dust-bath-blue/dp/123644",
    description: "Chinchillas need dust baths to eliminate the excess oil and dirt from their coat."
  },
  {
    name: "Grooming Kit",
    category: "Necessities",
    section: "care",
    price: 12.99,
    img: "groom.png",
    link: "https://www.chewy.com/ware-groom-n-kit-small-animals-1/dp/128628",
    description: "Pet Grooming Brushes: Reduces hair loss and prevents hairballs."
  },
  
  {
    name: "Timothy Hay Cubes",
    category: "Food",
    section: "food",
    price: 7.50,
    img: "hay.png",
    link: "https://www.walmart.com/ip/Evergreen-Farm-and-Garden-Southern-Seed-Feed-Alfalfa-Cubes-50-lb-Bundled/5279757818",
    description: "Chinchilla hay cubes are a mix of Timothy and Alfalfa hays that provide more fiber and less protein than plain alfalfa cubes."
  },
  {
    name: "Chinchilla Wheel",
    category: "Exercise",
    section: "accessories",
    price: 34.99,
    img: "wheel.png",
    link: "https://les-aliments-m-m.instacart.com/products/28900832?retailerSlug=petsmart",
    description: "A chinchilla wheel is a 15\" wheel made from metal and wood, making it chew-proof and chinchilla-safe."
  },

  {
    name: "Chinchilla Hammock",
    category: "Necessities",
    section: "accessories",
    img: "hammock.png",
    price: 13.67,
    link: "https://www.amazon.com/emours-Hammock-Chinchilla-Hanging-Squirrel/dp/B0BR3R2R86?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3Q9PLKR7IWP7F",
    description: "With four hanging clips,easily attached it to any cage and keep your pet in this sleeper. You can attached it to inside of the cage with four hanging clips as a hammock, or you can attached it to outside of the cage with only two hanging clips as a sleeper. Easy to clean. Made of fleece material, it’s quite warm and easy to clean. A little bit better than wooden shelves, because you can simply wash it once it's dirty.",
  },
  {
    name: "Wooden Chew Toys",
    category: "Toys",
    section: "accessories",
    price: 10.00,
    img: "chew.png",
    link: "https://www.etsy.com/au/listing/567181166/10pc-chinvilla-chinchilla-chew-toy",
    description: "Safe options include wooden toys, cardboard tubes, pumice stones, hay-based toys, and chew sticks."
  },
{
   name: "Wood Hideaway",
   category: "accessories",
   section: "accessories",
   price: 8.99,
   img: "house.png",
   link: "https://www.petco.com/shop/en/petcostore/product/everyyay-wood-hideaway-for-small-animals-3891611?store_code=2164&mr:device=c&mr:adType=plalocal&cm_mmc=PSH%7CGGL%7CCCY%7CCCO%7CPM%7C0%7CaxsvnXfjRWFFwpetHmZu75%7C%7C%7C0%7C0%7C%7C%7C21467366052&gad_source=1&gclid=Cj0KCQjw2N2_BhCAARIsAK4pEkX9Knv9zRwdhlCnoRklp_wB5F_Bf2NFLnOL3N0Cc4MqaJw6NLD50AgaAmmBEALw_wcB&gclsrc=aw.ds",
   description: "Give your chinchilla a safe place to rest with the EveryYay Wood Hideaway. It's colored with pet-safe paint, so it's free from artificial dyes or colors, and is chew-safe and non-toxic.",
  },

  {
    name: "Pellet Food",
    category: "Food",
    section: "food",
    price: 12.99,
    img: "pellets.png",
    link: "https://www.walmart.com/ip/Oxbow-Essentials-Dry-Chinchilla-Food-3-lbs/173674988",
    description: "Hay pellets form a core part of a chinchilla’s diet, made from timothy hay or alfalfa."
  },

{
  name:"Dried Strawberries",
  category:"Food",
  section:"food",
  price: 5.92,
  img: "strawberry.png",
  link: "https://www.google.com/aclk?sa=l&ai=DChsSEwilg7Pips-MAxXDmO4BHfTnN9cYACICCAEQAxoCZHo&co=1&ase=2&gclid=Cj0KCQjw2N2_BhCAARIsAK4pEkUlXnsuKraK7pQF6tn1gbj_XWDP8Ir10DHuLa9dHvmgOTww0Mpe98saAunCEALw_wcB&sig=AOD64_17ShwaEoXsqdgtcLlLK4DT5MXNOQ&ctype=5&q=&nis=4&ved=2ahUKEwia3q_ips-MAxUBPUQIHSrJFQ8Q9aACKAB6BAgHECE&adurl=",
  description: "Oxbow's Simple Rewards Strawberry Treats consist of only 100% strawberries, harvested and freeze-dried at the peak of ripeness to ensure the freshest, best-tasting treat for your special pet. Rabbits, guinea pigs, chinchillas, and other small animals love these tasty treats, and you'll love the feeling of providing a reward that contains no additives, preservatives, or added sugar. Simple Rewards Strawberry Treats are a natural source of vitamin C and contain natural antioxidants. Use Oxbow's all-natural Strawberry Treats to add variety and enrichment to your pet's diet.",
},

{
   name: "Apple Orchard Sticks",
   category: "Food",
   section: "food",
   price: 3.99,
   img: "apple.png",
   link: "https://www.google.com/aclk?sa=l&ai=DChsSEwilg7Pips-MAxXDmO4BHfTnN9cYACICCAEQCxoCZHo&co=1&ase=2&gclid=Cj0KCQjw2N2_BhCAARIsAK4pEkV9bVdcu0EzHyb6uhTOmLV-CE67NKsjtT6BwSYbeGYcQ8wCIWUgT8waAreLEALw_wcB&sig=AOD64_30fTDf4tCWRp5amHeAb4uU34yJ-g&ctype=5&q=&nis=4&ved=2ahUKEwia3q_ips-MAxUBPUQIHSrJFQ8Q9aACKAB6BAgHEFk&adurl=",
   description: "Kaytee Apple Orchard Sticks Small Animal Chews are the answer to all your small animal pet companion's chewing needs! All-natural Kaytee wood chews prevent boredom and keep those little teeth healthy and strong. Made from real apple trees, these chews are not only delicious but also packed with all the natural goodness of fresh fruit. Completely safe to chew, so you don't have to worry about any harmful chemicals or additives. With a small hole in the chew, you can easily slide it onto any Super Pet Ka-Bob dispenser (sold separately) for added fun and variety. Ideal for rabbits, guinea pigs, chinchillas, hamsters, gerbils, and other small furry critters, basically anyone who loves a good chew!",
},
{
   name: "Honey Coated Granola Sticks",
   category: "Food",
   section: "food",
   price: 3.99,
   img: "stick.png.",
   link: "https://www.google.com/aclk?sa=l&ai=DChsSEwilg7Pips-MAxXDmO4BHfTnN9cYACICCAEQDxoCZHo&co=1&ase=2&gclid=Cj0KCQjw2N2_BhCAARIsAK4pEkVNCD12Y575rXbft1mjrr7dZkAzWSGvupyFllHTgiKUwRpr7WgmLgYaAoxtEALw_wcB&sig=AOD64_2bjjjnIilLRMBdOFWtILQdGP5A3w&ctype=5&q=&nis=4&ved=2ahUKEwia3q_ips-MAxUBPUQIHSrJFQ8Q9aACKAB6BAgHEHU&adurl=",
   description: "Vitakraft Crunch Sticks don't just taste good: they also promote chinchillas' natural gnawing instincts to support strong, healthy teeth. The triple-baked layers make this treat last longer, with a natural wood chew center that provides hours of chewing fun long after the treat part is gone!",
},

{
   name: "Large Two Story Cage Habitat",
   category: "necessities",
   section: "necessities",
   price: 161.69,
   img: "cage.png",
   link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjEzLngzNCMAxVuKEQIHflwEYoYABAUGgJkeg&co=1&ase=2&gclid=CjwKCAjw--K_BhB5EiwAuwYoyibTxNyjZDANECH_08HslivLne0LARtsopbi5qOXU-rSB3wIQwV_GRoCoWcQAvD_BwE&ohost=www.google.com&cid=CAESVuD2Uwroncb261LtDlADi4vne0BGVVag5w4EJlwkSFcUYdvOQ2ZaHijttZ-7tTEEUyTn5jfHWFtXFyHNrkMYov0jwqfy4hFCl_inCmDOpq6jXbmWAjub&sig=AOD64_3uaW6MVpLdQCFkRKcZs30UK4cLzg&ctype=5&q=&nis=4&ved=2ahUKEwiwibTgzNCMAxUnOUQIHdmCEOcQ9aACKAB6BAgHEBY&adurl=",
   description: "Prevue Pet Products Stack Series lets your furry friend's cage grow as your needs grow! Our two story modular Ferret Stack Home 58502 includes plastic ramps and platforms, plush hammock and features a removable grille, pull-out debris tray, integrated storage shelf and easy rolling casters. Cage measures 31\" long, 20\" wide and 40\" high (54\" including stand), with 7/8\" wire spacing.",
},

{
   name:"Chinchilla Feeder",
   category:"necessities",
   section:"necessities",
   price:14.99,
   img:"feeder.png",
   link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjl6_zsztCMAxWhOkQIHelXAB0YABARGgJkeg&co=1&ase=2&gclid=CjwKCAjw--K_BhB5EiwAuwYoys9u_aHVXK0E4b9pOKtgS8Yns__s42_iAnVcsYQ_0Zdpz85uhB8O-BoCgnUQAvD_BwE&ohost=www.google.com&cid=CAESVuD2msXASEhWOYn8S4fhg2IOnjilb96pf7nsCCRNog8iou78qO78A5xP_bC4ygSzQ4jMIRUB4bjp0xWALRCkGUIakZ2FxpcyVSpmrcqW3cO3S7eenyWc&sig=AOD64_3iXBhxVpViK0vWDHQkLNFntO3vWw&ctype=46&q=&ved=2ahUKEwi-ifjsztCMAxVMLkQIHf_2PFwQ9aACKAB6BAgLEEI&adurl=", 
   description:"This Full Cheeks Ceramic Hay & Pellet Feeder makes it easy for your small pet to access hay and pellets whenever they please. Made with love for guinea pigs, chinchillas, and rabbits, this ceramic feeder stands up to chewing, and makes accessing food a breeze for your pet. We believe caring for your furry little one should be as easy as loving them, and now it can be. Our products are specially made for them, and are designed to be simple for you. All they need to do is what they do best: give lots of love. Only at PetSmart.",
},
{
   name:"Water Bottle",
   category:"necessities",
   section:"necessities",
   price:5.99,
   img:"water.png",
   link: "https://www.amazon.com/Lixit-Corporation-SLX0340-Weather-Hamster/dp/B000NGR3R4?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=ATVPDKIKX0DER&gQT=1", 
   description:"THE PERFECT SIZE: The 8oz bottle is designed for Hamsters, Mice, Chinchillas. The bottle is weather resistant and can be used in outdoor environments. Not all small animals need the same amount of water. For the 8oz we use a 3/8-inch tube that is large enough to accommodate the water needs of the pets noted above.",
},
{
   name:"Soft Bedding Shavings",
   category:"necessities",
   section:"necessities",
   price:34.99,
   img:"shaving.png",
   link: "https://www.petsmart.com/5365871.html?gQT=1", 
   description:"Only the Best for You and Your Furry Friend: The ideal Bedding for your rabbit, guinea pig, gerbil, hamster, chinchilla, rat, mouse, snake, reptile, or any small animal; Small Pet Select Premium Small Animal Aspen Bedding is a very low-dust, safe, high-quality product that will last.Pawtastic Products for Your Pet: When it comes to pet care, quality should never be compromised; Small Pet Select is a family-owned company that handpicks each of our products with love; We aim to deliver the safest, most effective, and highest-quality pet essentials",
},

{
name:"Disposable Training Pads",
   category:"necessities",
   section:"necessities",
   price: 19.99,
   img:"pads.png",
   link: "https://www.amazon.com/Disposable-Training-Rabbits-Waterproof-Absorbent/dp/B0B4G79JN7?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=AN1TCTAO0F5O9&gQT=1&th=1",
   description:"Training pads adopted 5 absorbent layers keep moisture away, quickly absorbs liquid without any mess. Fluff and polymer disposal puppy pad core absorbs fluid and quickly locks away odor to preventing tracking and leaking. The pet toilet pads feature a PE backing and border to protect all floor types by blocking leaks. Great for indoor, outdoor or car use; pet potty training, aging pet assist, travel carrier and pet crate.",
},
{
   name:"Granite Chiller Stone",
   category: "necessities",
   section: "necessities",
   price: 9.99,
   img:"stone.png",
   link: "https://www.amazon.com/Kaytee-Chinchilla-Chiller-Granite-Stone/dp/B000A7707O?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=ATVPDKIKX0DER&gQT=1",
   description: "Granite stones, like those used as cooling ledges for chinchillas, are designed to help keep chinchillas cool due to granite's natural ability to maintain a surface temperature below room temperature. These stones are typically made of a smooth, washable granite and simulate the natural rocky environment chinchillas may have lived in. They are a simple way for chinchillas to cool down, especially when they are unable to sweat.",
},

];

const sectionCare = document.getElementById("section-care");
const sectionAccessories = document.getElementById("section-accessories");
const sectionFood = document.getElementById("section-food");
const sectionNecessities = document.getElementById("section-necessities");

function displayCatalog(items) {
  sectionCare.innerHTML = "";
  sectionAccessories.innerHTML = "";
  sectionFood.innerHTML = "";
  sectionNecessities.innerHTML = "";

  items.forEach(item => {
    const cardHTML = `
      <div class="card fade-in">
        <img src="${item.img}" alt="${item.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200?text=No+Image';" />
        <h3>
          <a href="${item.link}" target="_blank" style="color: #5f3dc4; text-decoration: none;">${item.name}</a>
        </h3>
        <p>Category: ${item.category}</p>
        <p>Price: $${item.price.toFixed(2)}</p>
      <p class="fun-description"><em>${item.description}</em></p>

        
        <div class="button-container">
          <a href="${item.link}" target="_blank">
            <button class="btn-53">
              <div class="original">View</div>
              <div class="letters">
                <span>V</span>
                <span>I</span>
                <span>E</span>
                <span>W</span>
              </div>
            </button>
          </a>
        </div>
      </div>
    `;

    if (item.section === "care") {
      sectionCare.innerHTML += cardHTML;
    } else if (item.section === "accessories") {
      sectionAccessories.innerHTML += cardHTML;
    } else if (item.section === "food") {
      sectionFood.innerHTML += cardHTML;
    } else if (item.section === "necessities") {
      sectionNecessities.innerHTML += cardHTML;
    }
  });

  // Add fade-in effect for all cards
  setTimeout(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.add('show');
    });
  }, 100); // Add delay to make the fade-in visible
}

displayCatalog(catalogData);


// Dark mode toggle functionality
const darkModeButton = document.getElementById('toggle-mode');
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Search functionality
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredItems = catalogData.filter(item => 
    item.name.toLowerCase().includes(searchTerm) ||
    item.category.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  );
  displayCatalog(filteredItems);
});

// Sort functionality
const sortSelect = document.getElementById('sortSelect');
sortSelect.addEventListener('change', (e) => {
  const sortBy = e.target.value;
  let sortedItems = [...catalogData];

  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'price') {
    sortedItems.sort((a, b) => a.price - b.price);
  }

  displayCatalog(sortedItems);
});

let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slides");
  const totalSlides = slides.length;

  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = totalSlides - 1; // Wrap around to last slide
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0; // Wrap around to first slide
  }

  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function showSlides() {
  // Position the first slide (already done on load)
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModePref = localStorage.getItem('darkMode');
  if (darkModePref === 'enabled') {
    document.body.classList.add('dark');
  }

  const darkModeButton = document.getElementById('toggle-mode');
  darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});
