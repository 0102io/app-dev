import{q as O,E as Q,v as o}from"./index-8894bb6f.js";function V(P,I,i,R){const{w:x,h:T,scale:M,relative_size:W,center_offset_x:S,center_offset_y:q}=I,{ctx:s}=i,v=P.define_rect,p=R.enable_resize,g=([u,f])=>o.remap([u,f],[0,0],[1,1],o.mul(v.pos,[x,T]),o.mul(v.size,[x,T]));s.strokeStyle=O,s.fillStyle=Q,s.lineWidth=1/M;const e=p?W/8/M:0,[n,r]=g([0,0]),[c,l]=g([1,1]);s.beginPath(),s.moveTo(n+e,r),s.lineTo(c-e,r),p&&s.moveTo(c,r+e),s.lineTo(c,l-e),p&&s.moveTo(c-e,l),s.lineTo(n+e,l),p&&s.moveTo(n,l-e),s.lineTo(n,r+e),s.stroke();const A=p?"circle":"none";if(A==="rect")s.beginPath(),s.rect(n-e,r-e,e*2,e*2),s.rect(n-e,l-e,e*2,e*2),s.rect(c-e,r-e,e*2,e*2),s.rect(c-e,l-e,e*2,e*2),s.fill(),s.stroke();else if(A==="circle"){const u=o.sub(i.mouse.pos??[1e3,1e3],[S,q]),f=(_,b,z,m)=>k=>{const t=P.define_rect;[...t.pos],[...t.size];const B=t.pos[0],F=t.pos[1],G=t.pos[0]+t.size[0],H=t.pos[1]+t.size[1],C=d=>o.div(o.sub([d.x,d.y],[S,q]),[x,T]),w=d=>{const K=C(d),y=o.sub(K,J),D=B+(_?y[0]:0),E=F+(b?y[1]:0),L=G+(z?y[0]:0),N=H+(m?y[1]:0);t.pos=[D,E],t.size=o.sub([L,N],[D,E])},J=C(k);return w(k),{onmove(d){w(d)},onrelease(d){w(d)}}},a=e*2;o.inbounds(u,[n,r],[c,l])&&(i.mouse.action={cursor:"grab",callback:f(!0,!0,!0,!0)}),o.inbounds(u,[n-a,r],[n+a,l])?i.mouse.action={cursor:"ew-resize",callback:f(!0,!1,!1,!1)}:o.inbounds(u,[c-a,r],[c+a,l])?i.mouse.action={cursor:"ew-resize",callback:f(!1,!1,!0,!1)}:o.inbounds(u,[n,r-a],[c,r+a])?i.mouse.action={cursor:"ns-resize",callback:f(!1,!0,!1,!1)}:o.inbounds(u,[n,l-a],[c,l+a])&&(i.mouse.action={cursor:"ns-resize",callback:f(!1,!1,!1,!0)});const j=(_,b,z)=>i.mouse.pos==null?!1:Math.hypot(...o.sub([_,b],u))<z,h=(_,b)=>{const[z,m]=[[n,c][_],[r,l][b]],k=j(z,m,a*2),t=e;s.beginPath(),s.ellipse(z,m,t,t,0,0,2*Math.PI),s.fill(),s.stroke(),k&&(i.mouse.action={cursor:_===b?"nwse-resize":"nesw-resize",callback:f(!_,!b,!!_,!!b)})};h(0,0),h(0,1),h(1,0),h(1,1)}return g}export{V as r};
