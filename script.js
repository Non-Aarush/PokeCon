const pd = [
    { name: "Pikachu", type: "Electric", description: "Ash's Partner", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
    { name: "Charizard", type: "Fire/Flying", description: "My FAV :D", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
    { name: "Blastoise", type: "Water", description: "Gary's Choice", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
    { name: "Venusaur", type: "Grass/Poison", description: "Looks like froggggg", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" },
    { name: "Gengar", type: "Ghost/Poison", description: "Scared me as a child", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" },
    { name: "Alakazam", type: "Psychic", description: "Moustache cool", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png" },
    { name: "Snorlax", type: "Normal", description: "The big sleepy pokemon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" },
    
    { name: "Lugia", type: "Psychic/Flying", description: "Super cool flying, water dragon :O", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png" },
    { name: "Ho-Oh", type: "Fire/Flying", description: "Super hot flying, rainbow phoenix", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png" },
    { name: "Typhlosion", type: "Fire", description: "A volcano :O", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png" },
    { name: "Feraligatr", type: "Water", description: "A powerful alligator :O", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png" },
    { name: "Meganium", type: "Grass", description: "A gentle dinosaur :O", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png" },
    
    { name: "Blaziken", type: "Fire/Fighting", description: "LAVAAAAA CHIKEEENNNN", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png" },
    { name: "Swampert", type: "Water/Ground", description: "Evolves from cute pokemon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png" },
    { name: "Sceptile", type: "Grass", description: "Bro seems egoistic", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png" },
    { name: "Rayquaza", type: "Dragon/Flying", description: "Everyone's Fav", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png" },
    { name: "Metagross", type: "Steel/Psychic", description: "The robot alien :O", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png" },
    { name: "Absol", type: "Dark", description: "Bro is from the artic", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png" },
    

    { name: "Garchomp", type: "Dragon/Ground", description: "Land dragon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png" },
    { name: "Lucario", type: "Fighting/Steel", description: "Bipedal fox with powers", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png" },
    { name: "Dialga", type: "Steel/Dragon", description: "Time God", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png" },
    { name: "Palkia", type: "Water/Dragon", description: "Space God", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png" },
    { name: "Giratina", type: "Ghost/Dragon", description: "Anti-matter God", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png" },
    { name: "Darkrai", type: "Dark", description: "Bro loves giving people nightmares", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png" },
    

    { name: "Reshiram", type: "Dragon/Fire", description: "Yin dragon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png" },
    { name: "Zekrom", type: "Dragon/Electric", description: "Yan Dragon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png" },
    { name: "Kyurem", type: "Dragon/Ice", description: "Balances the Yin and Yan", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png" },
    { name: "Zoroark", type: "Dark", description: "Another bipedal fox pokemon with powerss", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png" },
    { name: "Chandelure", type: "Ghost/Fire", description: "Fireeeeeee", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png" },

    { name: "Greninja", type: "Water/Dark", description: "Ash-Greninja by far the coolest ever transformation", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png" },
    { name: "Xerneas", type: "Fairy", description: "Life Deer", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png" },
    { name: "Yveltal", type: "Dark/Flying", description: "Death Vulture", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png" },
    
    { name: "Incineroar", type: "Fire/Dark", description: "Cat with fire", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png" },
    { name: "Lycanroc", type: "Rock", description: "Wolf :SOB: ", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png" },
    { name: "Mimikyu", type: "Ghost/Fairy", description: "Pikachu Doppelganger", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png" },
    { name: "Solgaleo", type: "Psychic/Steel", description: "The Sun pokemon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png" },
    { name: "Lunala", type: "Psychic/Ghost", description: "The Moon pokemon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png" },
    
    { name: "Dragapult", type: "Dragon/Ghost", description: "Pokemon with cool powers", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png" },
    { name: "Corviknight", type: "Flying/Steel", description: "The Giga Chad", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png" },
    { name: "Zacian", type: "Fairy/Steel", description: "Has sword powers", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png" },
    { name: "Zamazenta", type: "Fighting/Steel", description: "Has shield powers", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png" },

];

document.addEventListener('DOMContentLoaded', function() 
{
    ia();
    const pi = document.querySelectorAll('.pokemon-image');
    pi.forEach(img => 
        {
        img.addEventListener('load', function() 
        {
            this.style.opacity = '1';
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(a => 
        {
        a.addEventListener('click', function(e) 
        {
            e.preventDefault();
            const t = document.querySelector(this.getAttribute('href'));
            if (t) {
                t.scrollIntoView(
                    {
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function ia() 
{
    const cp = window.location.pathname;
    if (cp.includes('index.html') || cp === '/') 
        {
        pp();
        pv();
        sv();
    }
    if (cp.includes('about.html')) 
        {
        sf();
        st();
    }
    const th = localStorage.getItem('pokemonSiteTheme') || 'blue';
    at(th);
}

function pp() 
{
    const pg = document.getElementById('pokemonGrid');
    if (!pg) return;
    pg.innerHTML = '';
    pd.forEach(pk => {
        const pc = document.createElement('div');
        pc.className = 'pokemon-card';
        pc.innerHTML = `
            <img src="${pk.image}" alt="${pk.name}" class="pokemon-image" loading="lazy">
            <h3 class="pokemon-name">${pk.name}</h3>
            <div class="pokemon-info">
                <div class="pokemon-type">Type: ${pk.type}</div>
                <div class="pokemon-description">${pk.description}</div>
            </div>
        `;
        pg.appendChild(pc);
    });
}

function pv() 
{
    const ps = document.getElementById('pokemonSelect');
    if (!ps) return;
    pd.forEach(pk => 
        {
        const op = document.createElement('option');
        op.value = pk.name;
        op.textContent = pk.name;
        ps.appendChild(op);
    });
}

function sv() 
{
    const vf = document.getElementById('voteForm');
    if (!vf) return;
    vf.addEventListener('submit', function(e) 
    {
        e.preventDefault();
        const sp = document.getElementById('pokemonSelect').value;
        const vr = document.getElementById('voteReason').value;
        if (!sp) 
            {
            alert('Select Fav');
            return;
        }
        if (!vr.trim()) 
            {
            alert('Hmm Why this?');
            return;
        }
        alert(`Thanks for the vote blud ${sp}! Your reason: "${vr}"`);
        vf.reset();
    });
}

function tf(i) 
{
    const fi = document.querySelectorAll('.faq-item');
    const ci = fi[i];
    fi.forEach((el, j) => 
        {
        if (j !== i) 
            {
            el.classList.remove('active');
        }
    });
    ci.classList.toggle('active');
}

function st() 
{
    const co = document.querySelectorAll('.color-option');
    co.forEach(opt => 
        {
        opt.addEventListener('click', function() 
        {
            const th = this.classList[1];
            ct(th);
        });
    });
}

function ct(tn) 
{
    document.body.classList.remove('theme-blue', 'theme-green', 'theme-yellow', 'theme-pink', 'theme-red', 'theme-purple');
    document.body.classList.add(`theme-${tn}`);
    localStorage.setItem('pokemonSiteTheme', tn);
    const co = document.querySelectorAll('.color-option');
    co.forEach(opt => 
        {
        opt.style.border = '3px solid transparent';
    });
    const so = document.querySelector(`.color-option.${tn}`);
    if (so) 
        {
        so.style.border = '3px solid #333';
    }
}

function at(tn) 
{
    document.body.classList.add(`theme-${tn}`);
    const so = document.querySelector(`.color-option.${tn}`);
    if (so) 
        {
        so.style.border = '3px solid #333';
    }
}

function sf() {}

function av() 
{
    const vb = document.querySelector('.vote-btn');
    if (vb) {
        vb.style.transform = 'scale(0.95)';
        setTimeout(() => 
            {
            vb.style.transform = 'scale(1)';
        }, 150);
    }
}
