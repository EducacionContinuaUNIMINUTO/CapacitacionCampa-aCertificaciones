window.__CARDS={
iso55001:[32845694,'Auditor Interno ISO 55001','Gestión de Activos','#2EC7E6'],
iso27001:[5473298,'Auditor Interno ISO 27001','Seguridad de la Información','#2EC7E6'],
iso39001:[11213261,'Auditor Interno ISO 39001','Seguridad Vial','#2EC7E6'],
iso28000:[4481256,'Auditor Interno ISO 28000','Cadena de Suministro','#2EC7E6'],
iso9001:[7937365,'ISO 9001','Gestión de Calidad','#2EC7E6'],
trinorma:[1216589,'Auditor Integral','Trinorma','#2EC7E6'],
ai:[8728285,'Artificial','Intelligence','#E6007E'],
python:[3861951,'Python','Certificación Certiport','#E6007E'],
pmi:[7691694,'Project','Management','#E6007E'],
meta:[7514837,'Meta','Marketing digital','#E6007E'],
cyber:[11341890,'Cyber','security','#E6007E'],
adobe:[7675023,'Adobe Certified','Professional','#E6007E'],
scrum:[39204846,'Scrum','Metodologías ágiles','#FF8A00'],
agile:[18999464,'Agile','Coach','#FF8A00'],
design:[4623496,'Design','Thinking','#FF8A00']};
window.__makeCard=async(slug)=>{const [pid,t1,t2,acc]=__CARDS[slug]; await document.fonts.load('700 24px MontBold'); await document.fonts.load('24px MontHeavy');
 const blob=await (await fetch(`https://images.pexels.com/photos/${pid}/pexels-photo-${pid}.jpeg?auto=compress&cs=tinysrgb&w=1000`)).blob(); const img=await createImageBitmap(blob);
 const W=400,H=350,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');
 const s=Math.max(W/img.width,H/img.height),dw=img.width*s,dh=img.height*s; x.drawImage(img,(W-dw)*0.6,(H-dh)*0.35,dw,dh);
 let g=x.createLinearGradient(0,0,W*0.85,0);g.addColorStop(0,'rgba(0,48,133,0.92)');g.addColorStop(0.45,'rgba(0,48,133,0.55)');g.addColorStop(1,'rgba(0,48,133,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(40,300,0,40,300,200);g.addColorStop(0,acc+'99');g.addColorStop(1,acc+'00');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.fillStyle='rgba(255,255,255,.35)';for(let i=0;i<5;i++)for(let j=0;j<4;j++){x.beginPath();x.arc(300+i*16,250+j*16,1.8,0,7);x.fill();}
 x.font='800 11px MontBold';const pill='CERTIFICACIÓN INTERNACIONAL';const pw=x.measureText(pill).width+22;x.fillStyle='#CDEB00';x.beginPath();x.roundRect(22,64,pw,24,12);x.fill();x.fillStyle='#111827';x.textBaseline='middle';x.fillText(pill,33,76.5);
 x.fillStyle='#FFFFFF';x.textBaseline='alphabetic';const wrap=(t,f,y,lh,maxW)=>{x.font=f;const ws=t.split(' ');let line='',yy=y;for(const w of ws){const tt=line?line+' '+w:w;if(x.measureText(tt).width>maxW&&line){x.fillText(line,22,yy);line=w;yy+=lh}else line=tt}x.fillText(line,22,yy);return yy};
 let y=wrap(t1,'30px MontHeavy',128,32,240); x.fillStyle=acc==='#2EC7E6'?'#2EC7E6':(acc==='#E6007E'?'#FF7AC0':'#FFB04D'); y=wrap(t2,'20px MontBold',y+28,24,240);
 x.fillStyle=acc;x.fillRect(22,y+16,54,5);
 return await new Promise(r=>c.toBlob(r,'image/jpeg',0.9));};
window.__swapCard=async(slug)=>{const field='image_non_formal';const file=slug+'_tarjeta_400x350_foto.jpg';const b=await __makeCard(slug);
 const W=(fn,t)=>new Promise((res,rej)=>{const s=Date.now();const i=setInterval(()=>{try{const v=fn();if(v){clearInterval(i);res(v)}}catch(e){} if(Date.now()-s>t){clearInterval(i);rej(new Error('timeout'))}},300)});
 const rm=document.querySelector(`[name="${field}_0_remove_button"]`);if(rm)rm.dispatchEvent(new MouseEvent('mousedown',{bubbles:true}));
 const inp=await W(()=>document.querySelector(`[name="files[${field}_0]"]`),20000);await new Promise(r=>setTimeout(r,1800));
 const put=(el)=>{const dt=new DataTransfer();dt.items.add(new File([b],file,{type:'image/jpeg'}));el.files=dt.files};put(inp);inp.dispatchEvent(new Event('change',{bubbles:true}));
 const done=()=>{const f=document.querySelector(`[name="${field}[0][fids]"]`);return f&&f.value&&document.querySelector(`[name="${field}_0_remove_button"]`)};
 try{await W(done,9000)}catch(e){const i2=document.querySelector(`[name="files[${field}_0]"]`);if(i2&&!i2.files.length)put(i2);const up=document.querySelector(`[name="${field}_0_upload_button"]`);if(up)up.dispatchEvent(new MouseEvent('mousedown',{bubbles:true}));await W(done,12000)}
 const a=document.querySelector(`[name="${field}[0][alt]"]`);if(a)a.value=document.querySelector('[name="title[0][value]"]').value.replace('Certificación Internacional ','');
 const sm=document.querySelector('[name="simple_sitemap_regenerate_now"]');if(sm)sm.checked=false;
 const ok=document.querySelector('#edit-image-non-formal-wrapper').textContent.includes(file);if(ok)document.getElementById('edit-submit').click();return {ok,fid:document.querySelector(`[name="${field}[0][fids]"]`).value}};
