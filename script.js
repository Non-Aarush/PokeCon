const pokemonData = [
    { name: "Pikachu", type: "Electric", description: "The famous electric mouse Pokemon known worldwide.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
    { name: "Charizard", type: "Fire/Flying", description: "A powerful dragon-like Pokemon that breathes fire.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
    { name: "Blastoise", type: "Water", description: "A turtle Pokemon with powerful water cannons.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
    { name: "Venusaur", type: "Grass/Poison", description: "A large plant Pokemon with a beautiful flower.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" },
    { name: "Gengar", type: "Ghost/Poison", description: "A mischievous ghost Pokemon that hides in shadows.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" },
    { name: "Alakazam", type: "Psychic", description: "An incredibly intelligent psychic Pokemon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png" },
    { name: "Machamp", type: "Fighting", description: "A four-armed fighting Pokemon with incredible strength.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png" },
    { name: "Lapras", type: "Water/Ice", description: "A gentle sea Pokemon that ferries people across water.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png" },
    { name: "Eevee", type: "Normal", description: "A Pokemon with unstable DNA that can evolve in many ways.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" },
    { name: "Snorlax", type: "Normal", description: "A huge Pokemon that loves to sleep and eat.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" },
    
    { name: "Lugia", type: "Psychic/Flying", description: "A legendary bird Pokemon that controls the seas.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png" },
    { name: "Ho-Oh", type: "Fire/Flying", description: "A legendary phoenix Pokemon with rainbow wings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png" },
    { name: "Typhlosion", type: "Fire", description: "A volcano Pokemon with explosive fire attacks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png" },
    { name: "Feraligatr", type: "Water", description: "A powerful alligator Pokemon with crushing jaws.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png" },
    { name: "Meganium", type: "Grass", description: "A gentle dinosaur Pokemon with a soothing aroma.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png" },
    { name: "Umbreon", type: "Dark", description: "A dark-type evolution of Eevee that glows in moonlight.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png" },
    { name: "Espeon", type: "Psychic", description: "A psychic-type evolution of Eevee with precognitive powers.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png" },
    { name: "Ampharos", type: "Electric", description: "A lighthouse Pokemon that guides ships with its light.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png" },
    { name: "Heracross", type: "Bug/Fighting", description: "A powerful beetle Pokemon with a mighty horn.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png" },
    { name: "Skarmory", type: "Steel/Flying", description: "An armored bird Pokemon with steel wings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png" },
    
    { name: "Blaziken", type: "Fire/Fighting", description: "A fiery chicken Pokemon with powerful kicks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png" },
    { name: "Swampert", type: "Water/Ground", description: "A mudfish Pokemon that can predict storms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png" },
    { name: "Sceptile", type: "Grass", description: "A forest gecko Pokemon with blade-like leaves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png" },
    { name: "Rayquaza", type: "Dragon/Flying", description: "A legendary sky dragon that lives in the ozone layer.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png" },
    { name: "Metagross", type: "Steel/Psychic", description: "A supercomputer Pokemon with four brains.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png" },
    { name: "Gardevoir", type: "Psychic/Fairy", description: "A graceful Pokemon that protects its trainer with psychic power.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png" },
    { name: "Aggron", type: "Steel/Rock", description: "An iron armor Pokemon that protects its territory.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png" },
    { name: "Flygon", type: "Ground/Dragon", description: "A mystic Pokemon known as the desert spirit.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png" },
    { name: "Milotic", type: "Water", description: "The most beautiful Pokemon that calms hostile emotions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png" },
    { name: "Absol", type: "Dark", description: "A disaster Pokemon that appears before calamities.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png" },
    

    { name: "Garchomp", type: "Dragon/Ground", description: "A mach Pokemon that flies at sonic speed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png" },
    { name: "Lucario", type: "Fighting/Steel", description: "An aura Pokemon that can sense emotions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png" },
    { name: "Dialga", type: "Steel/Dragon", description: "A legendary Pokemon that controls time.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png" },
    { name: "Palkia", type: "Water/Dragon", description: "A legendary Pokemon that controls space.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png" },
    { name: "Giratina", type: "Ghost/Dragon", description: "A renegade Pokemon from the reverse world.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png" },
    { name: "Darkrai", type: "Dark", description: "A nightmare Pokemon that gives people bad dreams.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png" },
    { name: "Rotom", type: "Electric/Ghost", description: "A plasma Pokemon that inhabits electrical appliances.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png" },
    { name: "Leafeon", type: "Grass", description: "A verdant Pokemon that photosynthesizes like a plant.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png" },
    { name: "Glaceon", type: "Ice", description: "A fresh snow Pokemon that can freeze the air around it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png" },
    { name: "Togekiss", type: "Fairy/Flying", description: "A jubilee Pokemon that brings good fortune.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png" },
    

    { name: "Reshiram", type: "Dragon/Fire", description: "A legendary white dragon that seeks truth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png" },
    { name: "Zekrom", type: "Dragon/Electric", description: "A legendary black dragon that seeks ideals.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png" },
    { name: "Kyurem", type: "Dragon/Ice", description: "A boundary Pokemon with an icy body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png" },
    { name: "Serperior", type: "Grass", description: "A regal Pokemon that can stop opponents with a glare.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png" },
    { name: "Emboar", type: "Fire/Fighting", description: "A mega fire pig Pokemon with fiery beard.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png" },
    { name: "Samurott", type: "Water", description: "A formidable Pokemon that fights with seamitars.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png" },
    { name: "Zoroark", type: "Dark", description: "An illusion fox Pokemon that creates mirages.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png" },
    { name: "Chandelure", type: "Ghost/Fire", description: "A luring Pokemon that burns spirits with its flames.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png" },
    { name: "Haxorus", type: "Dragon", description: "An axe jaw Pokemon with unbreakable tusks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png" },
    { name: "Volcarona", type: "Bug/Fire", description: "A sun Pokemon said to replace the sun during volcanic winter.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png" },
    
    { name: "Greninja", type: "Water/Dark", description: "A ninja Pokemon that moves with ninja-like grace.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png" },
    { name: "Talonflame", type: "Fire/Flying", description: "A scorching Pokemon with incredible flight speed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png" },
    { name: "Chesnaught", type: "Grass/Fighting", description: "A spiny armor Pokemon that protects friends.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png" },
    { name: "Xerneas", type: "Fairy", description: "A life Pokemon that can grant eternal life.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png" },
    { name: "Yveltal", type: "Dark/Flying", description: "A destruction Pokemon that absorbs life energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png" },
    { name: "Sylveon", type: "Fairy", description: "An intertwining Pokemon that calms fights with ribbons.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png" },
    { name: "Goodra", type: "Dragon", description: "A dragon Pokemon covered in gooey slime.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png" },
    { name: "Noivern", type: "Flying/Dragon", description: "A sound wave Pokemon that attacks with ultrasonic waves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png" },
    
    { name: "Decidueye", type: "Grass/Ghost", description: "An arrow quill Pokemon that shoots arrow quills.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png" },
    { name: "Incineroar", type: "Fire/Dark", description: "A heel Pokemon that fights dirty in the ring.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png" },
    { name: "Primarina", type: "Water/Fairy", description: "A soloist Pokemon that controls water balloons with song.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png" },
    { name: "Lycanroc", type: "Rock", description: "A wolf Pokemon with different forms based on time.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png" },
    { name: "Mimikyu", type: "Ghost/Fairy", description: "A disguise Pokemon that hides under a Pikachu costume.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png" },
    { name: "Toxapex", type: "Poison/Water", description: "A brutal star Pokemon with toxic spikes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png" },
    { name: "Solgaleo", type: "Psychic/Steel", description: "A sunne Pokemon that devours light.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png" },
    { name: "Lunala", type: "Psychic/Ghost", description: "A moone Pokemon that calls the moon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png" },
    
    { name: "Dragapult", type: "Dragon/Ghost", description: "A stealth Pokemon that launches Dreepy like missiles.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png" },
    { name: "Corviknight", type: "Flying/Steel", description: "A raven Pokemon with steel armor and wings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png" },
    { name: "Grimmsnarl", type: "Dark/Fairy", description: "A bulk up Pokemon with hair that can ensnare opponents.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png" },
    { name: "Toxapex", type: "Poison/Water", description: "A brutal star Pokemon with twelve legs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png" },
    { name: "Zacian", type: "Fairy/Steel", description: "A warrior Pokemon that wields a sword in its mouth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png" },
    { name: "Zamazenta", type: "Fighting/Steel", description: "A warrior Pokemon that defends with its shield-like body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png" },

    { name: "Sprigatito", type: "Grass", description: "A grass cat Pokemon with a sweet aroma.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png" },
    { name: "Fuecoco", type: "Fire", description: "A fire croc Pokemon that loves to eat and sleep.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png" },
    { name: "Quaxly", type: "Water", description: "A duckling Pokemon that's serious and tidy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png" },
    { name: "Gimmighoul", type: "Ghost", description: "A coin entity Pokemon that collects coins.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png" }
];


document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index.html') || currentPage === '/') {
        populatePokemonGrid();
        populateVoteDropdown();
        setupVoteForm();
    }
    
    if (currentPage.includes('about.html')) {
        setupFAQToggle();
        setupThemeSelector();
    }
    
    const savedTheme = localStorage.getItem('pokemonSiteTheme') || 'blue';
    applyTheme(savedTheme);
}

function populatePokemonGrid() {
    const pokemonGrid = document.getElementById('pokemonGrid');
    if (!pokemonGrid) return;
    
    pokemonGrid.innerHTML = '';
    
    pokemonData.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'pokemon-card';
        
        pokemonCard.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-image" loading="lazy">
            <h3 class="pokemon-name">${pokemon.name}</h3>
            <div class="pokemon-info">
                <div class="pokemon-type">Type: ${pokemon.type}</div>
                <div class="pokemon-description">${pokemon.description}</div>
            </div>
        `;
        
        pokemonGrid.appendChild(pokemonCard);
    });
}

function populateVoteDropdown() {
    const pokemonSelect = document.getElementById('pokemonSelect');
    if (!pokemonSelect) return;
    
    pokemonData.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;
        option.textContent = pokemon.name;
        pokemonSelect.appendChild(option);
    });
}

function setupVoteForm() {
    const voteForm = document.getElementById('voteForm');
    if (!voteForm) return;
    
    voteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const selectedPokemon = document.getElementById('pokemonSelect').value;
        const voteReason = document.getElementById('voteReason').value;
        
        if (!selectedPokemon) {
            alert('Please select a Pokemon!');
            return;
        }
        
        if (!voteReason.trim()) {
            alert('Please tell us why you love this Pokemon!');
            return;
        }
        
        alert(`Thank you for voting for ${selectedPokemon}! Your reason: "${voteReason}"`);
        
        voteForm.reset();
    });
}


function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const currentItem = faqItems[index];
    
    faqItems.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
        }
    });
    
    
    currentItem.classList.toggle('active');
}


function setupThemeSelector() {
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.classList[1]; 
        });
    });
}


function changeTheme(themeName) {
    
    document.body.classList.remove('theme-blue', 'theme-green', 'theme-yellow', 'theme-pink', 'theme-red', 'theme-purple');
    
    
    document.body.classList.add(`theme-${themeName}`);
    
    
    localStorage.setItem('pokemonSiteTheme', themeName);
    
    
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.style.border = '3px solid transparent';
    });
    
    const selectedOption = document.querySelector(`.color-option.${themeName}`);
    if (selectedOption) {
        selectedOption.style.border = '3px solid #333';
    }
}


function applyTheme(themeName) {
    document.body.classList.add(`theme-${themeName}`);
    
    
    const selectedOption = document.querySelector(`.color-option.${themeName}`);
    if (selectedOption) {
        selectedOption.style.border = '3px solid #333';
    }
}


function setupFAQToggle() {
    
}


function animateVoteSubmission() {
    const voteBtn = document.querySelector('.vote-btn');
    if (voteBtn) {
        voteBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            voteBtn.style.transform = 'scale(1)';
        }, 150);
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const pokemonImages = document.querySelectorAll('.pokemon-image');
    pokemonImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});