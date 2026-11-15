window.__RAW='https://raw.githubusercontent.com/EducacionContinuaUNIMINUTO/capacitacioncampa-acertificaciones/main/imagenes-web/';
window.__sleep=ms=>new Promise(r=>setTimeout(r,ms));
window.__waitFor=async(fn,t=30000)=>{const s=Date.now();while(Date.now()-s<t){try{const v=fn();if(v)return v}catch(e){}await __sleep(300)}throw new Error('timeout')};
window.__setv=(n,v)=>{const e=document.querySelector(`[name="${n}"]`);if(!e)return false;e.value=v;e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}));return true};
window.__ck=(n,html)=>{const ta=document.querySelector(`[name="${n}"]`);const id=ta&&ta.getAttribute('data-ckeditor5-id');const ed=id&&Drupal.CKEditor5Instances.get(id);if(!ta)return 'noTA';if(ed){ed.setData(html);}ta.value=html;return !!ed};
window.__img=async(field,file,alt)=>{
  const rm=document.querySelector(`[name="${field}_0_remove_button"]`);
  if(rm){rm.dispatchEvent(new MouseEvent('mousedown',{bubbles:true}));await __waitFor(()=>document.querySelector(`[name="files[${field}_0]"]`));}
  const inp=await __waitFor(()=>document.querySelector(`[name="files[${field}_0]"]`));await __sleep(1800);
  const b=await (await fetch(__RAW+file)).blob();
  const dt=new DataTransfer();dt.items.add(new File([b],file,{type:'image/jpeg'}));inp.files=dt.files;
  inp.dispatchEvent(new Event('change',{bubbles:true}));
  await __waitFor(()=>{const f=document.querySelector(`[name="${field}[0][fids]"]`);return f&&f.value&&document.querySelector(`[name="${field}_0_remove_button"]`)},60000);
  const err=document.querySelector(`[data-drupal-selector="edit-${field.replace(/_/g,'-')}-wrapper"] .messages--error, .form-item--error-message`);
  __setv(`${field}[0][alt]`,alt);__setv(`${field}[0][title]`,alt);
  return document.querySelector(`[name="${field}[0][fids]"]`).value+(err?' ERR:'+err.textContent.trim().slice(0,120):'');
};
window.__fill=async(slug)=>{
  const D=(await (await fetch(__RAW+'data.json?'+Date.now())).json())[slug];
  await __waitFor(()=>window.Drupal&&Drupal.CKEditor5Instances&&Drupal.CKEditor5Instances.size>=4);
  const log=[];
  __setv('title[0][value]',D.title);__setv('type_of_programs','150');__setv('rectory','224');__setv('modality',D.modality);
  __setv('hours_or_credits[0][value]',D.hours);__setv('official_price[0][value]',D.price);__setv('official_price_usd[0][value]','');
  const r=document.querySelector(`[name="tags_non_formal_programs"][value="${D.area}"]`);if(r){r.checked=true;r.dispatchEvent(new Event('change',{bubbles:true}))}
  __setv('general_description[0][value]',D.general);__setv('certificacion_otorgada[0][value]',D.cert);
  __setv('short_code[0][value]','');__setv('period[0][value]','');
  __setv('body[0][summary]',D.summary);
  log.push(__ck('body[0][value]',D.body),__setv('short_descripcion_block[0][value]',D.why),__ck('description_programs[0][value]',D.about),__ck('description_objetives[0][value]',D.obj),__ck('description_content[0][value]',D.cont));
  __setv('title_block[0][value]','¿Por qué estudiar?');__setv('generic_title[0][value]','Acerca de la certificación');__setv('about_subtitle[0][value]','Presentación');
  __setv('title_objetive[0][value]','Objetivos');__setv('subtitle_objetives[0][value]',D.subt_obj);__setv('title_content[0][value]','Contenido');__setv('subtitle_content[0][value]',D.subt_cont);
  const pa=document.querySelector('[name="path[0][pathauto]"]');if(pa&&pa.checked){pa.checked=false;pa.dispatchEvent(new Event('change',{bubbles:true}))}__setv('path[0][alias]',D.alias);
  const sh=document.querySelector('[name="show_home[value]"]');if(sh)sh.checked=false;
  __setv('moderation_state[0][state]','published');
  if(!window.__textOnly){for(const [f,file] of Object.entries(D.imgs)){log.push(f+':'+await __img(f,file,D.name));}}
  return log;
};
window.__start=(slug)=>{window.__res=null;__fill(slug).then(r=>window.__res=r).catch(e=>window.__res='ERR '+e.message);return 'started'};
window.__imgs=async(slug,skip=[])=>{const D=(await (await fetch(__RAW+'data.json')).json())[slug];const log=[];for(const [f,file] of Object.entries(D.imgs)){if(skip.includes(f))continue;log.push(f+':'+await __img(f,file,D.name));}return log};
