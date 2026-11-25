const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open)});
const searchButton=document.querySelector('.search-toggle');
const searchPanel=document.querySelector('.search-panel');
const input=document.querySelector('#site-search');
const results=document.querySelector('.search-results');
const status=document.querySelector('#search-status');
let searchData;
function closeSearch(){document.body.classList.remove('search-open');searchPanel.hidden=true;searchButton.setAttribute('aria-expanded','false');searchButton.focus()}
searchButton?.addEventListener('click',()=>{const open=searchPanel.hidden;if(!open){closeSearch();return}searchPanel.hidden=false;document.body.classList.add('search-open');searchButton.setAttribute('aria-expanded','true');input.focus()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!searchPanel.hidden)closeSearch()});
input?.addEventListener('input',async()=>{const query=input.value.trim().toLowerCase();results.replaceChildren();if(query.length<2){status.textContent='Type at least two characters to search the lab website.';return}try{searchData??=await fetch(document.body.dataset.base+'search.json').then(response=>{if(!response.ok)throw new Error('Search unavailable');return response.json()});if(input.value.trim().toLowerCase()!==query)return;const matches=searchData.filter(item=>(item.title+' '+item.text).toLowerCase().includes(query));status.textContent=`${matches.length} result${matches.length===1?'':'s'}`;for(const item of matches){const li=document.createElement('li');const a=document.createElement('a');a.href=document.body.dataset.base+item.url;a.textContent=item.title;const p=document.createElement('p');p.textContent=item.text.length>230?item.text.slice(0,227)+'…':item.text;li.append(a,p);results.append(li)}}catch{status.textContent='Search is temporarily unavailable. Please use the navigation links.'}});
