function imageHTML(src, title){
  if(!src){
    return `<div class="story-image empty" aria-label="No image available"></div>`;
  }
  return `<div class="story-image"><img src="${src}" alt="${title}" onerror="this.remove(); this.parentElement.classList.add('empty')"></div>`;
}
function storyCard(story){
  const tag = story.category || (story.tags && story.tags[0]) || 'Reporting';
  return `<a class="story-card" href="${story.url}" target="_blank" rel="noopener">
    ${imageHTML(story.image, story.title)}
    <div class="story-body">
      <div class="label">${tag}</div>
      <h3>${story.title}</h3>
      <div class="meta">${story.publication} · ${story.date}</div>
      <div class="read">Read Story →</div>
    </div>
  </a>`;
}
function projectCard(project){
  return `<a class="project-card" href="${project.url}" target="_blank" rel="noopener">
    <div class="project-icon">${project.title.includes('Crime')?'◌':project.title.includes('Stigma')?'☁':'⚖'}</div>
    <div class="label">${project.type}</div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="chips">${project.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div>
  </a>`;
}
function setActiveNav(){
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{ if(a.getAttribute('href')===page) a.classList.add('active'); });
}
function initHome(){
  const featured = document.querySelector('#featuredStories');
  if(featured){
    featured.innerHTML = FEATURED_STORIES.map(storyCard).join('');
  }
  const projects = document.querySelector('#projectGrid');
  if(projects) projects.innerHTML = PROJECTS.map(projectCard).join('');
}
function initWork(){
  const grid = document.querySelector('#archiveGrid');
  if(!grid) return;
  const search = document.querySelector('#search');
  const pub = document.querySelector('#publicationFilter');
  const tagWrap = document.querySelector('#tagFilters');
  const count = document.querySelector('#resultCount');
  const publications = ['All', ...Array.from(new Set(STORIES.map(s=>s.publication))).sort()];
  pub.innerHTML = publications.map(p=>`<option value="${p}">${p}</option>`).join('');
  const tags = ['All','courts','crime','education','government','book bans','gun violence','data journalism','transportation','investigation','features'];
  let activeTag='All';
  tagWrap.innerHTML = tags.map(t=>`<button class="tag-btn ${t==='All'?'active':''}" data-tag="${t}">${t}</button>`).join('');
  tagWrap.addEventListener('click', e=>{ if(!e.target.matches('.tag-btn')) return; activeTag=e.target.dataset.tag; document.querySelectorAll('.tag-btn').forEach(b=>b.classList.remove('active')); e.target.classList.add('active'); render(); });
  search.addEventListener('input', render); pub.addEventListener('change', render);
  function render(){
    const q = search.value.toLowerCase().trim();
    const p = pub.value;
    const filtered = STORIES.filter(s=>{
      const hay = [s.title,s.publication,s.category,...s.tags].join(' ').toLowerCase();
      return (!q || hay.includes(q)) && (p==='All'||s.publication===p) && (activeTag==='All'||s.tags.includes(activeTag));
    });
    count.textContent = `${filtered.length} stories`;
    grid.innerHTML = filtered.map(storyCard).join('');
  }
  render();
}
document.addEventListener('DOMContentLoaded',()=>{setActiveNav();initHome();initWork();});
