const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ot=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return W(e,t,s,n,i,1,o,""),n},W=(e,t,s,n,o,u,i,r)=>{const h=u*i;t:for(const c of e.keys())if(c===F){const d=o[h-1];d<=s&&n.set(r,[e.get(c),d])}else{let d=u;for(let l=0;l<c.length;++l,++d){const p=c[l],f=i*d,g=f-i;let a=o[f];const m=Math.max(0,d-s-1),y=Math.min(i-1,d+s);for(let _=m;_<y;++_){const b=p!==t[_],z=o[g+_]+ +b,A=o[g+_+1]+1,w=o[f+_]+1,L=o[f+_+1]=Math.min(z,A,w);L<a&&(a=L)}if(a>s)continue t}W(e.get(c),t,s,n,o,d,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==F&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ut(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ot(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,M(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);let o=n.get(F);return o===void 0&&n.set(F,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},M=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==F&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const h=e.get(u);if(r===u.length)e=h;else{const c=new Map;c.set(u.slice(r),h),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ut=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)R(n);else if(s.size===1){const[o,u]=s.entries().next().value;$(n,o,u)}}},R=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)R(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==F&&$(e.slice(0,-1),n,o)}},$=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",q="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},G=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},N=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),P(n.terms,u)}}return e},[q]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);P(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,o,u)=>{const{k:i,b:r,d:h}=u;return Math.log(1+(s-t+.5)/(t+.5))*(h+e*(i+1)/(e+i*(1-r+r*n/o)))},ft=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,ht),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof(console==null?void 0:console[e])=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:q,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,o,u,i,r,h=new Map)=>{if(o==null)return h;for(const c of Object.keys(u)){const d=u[c],l=e._fieldIds[c],p=o.get(l);if(p==null)continue;let f=p.size;const g=e._avgFieldLength[l];for(const a of p.keys()){if(!e._documentIds.has(a)){gt(e,l,a,s),f-=1;continue}const m=i?i(e._documentIds.get(a),s,e._storedFields.get(a)):1;if(!m)continue;const y=p.get(a),_=e._fieldLength.get(a)[l],b=at(y,f,e._documentCount,_,g,r),z=n*d*m*b,A=h.get(a);if(A){A.score+=z,lt(A.terms,t);const w=N(A.match,s);w?w.push(c):A.match[s]=[c]}else h.set(a,{score:z,terms:[t],match:{[s]:[c]}})}}return h},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((a,m)=>({...a,[m]:N(n.boost,m)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:h}=n,{fuzzy:c,prefix:d}={...J.weights,...i},l=e._index.get(t.term),p=B(e,t.term,t.term,1,l,o,u,h);let f,g;if(t.prefix&&(f=e._index.atPrefix(t.term)),t.fuzzy){const a=t.fuzzy===!0?.2:t.fuzzy,m=a<1?Math.min(r,Math.round(t.term.length*a)):a;m&&(g=e._index.fuzzyGet(t.term,m))}if(f)for(const[a,m]of f){const y=a.length-t.term.length;if(!y)continue;g==null||g.delete(a);const _=d*a.length/(a.length+.3*y);B(e,t.term,a,_,m,o,u,h,p)}if(g)for(const a of g.keys()){const[m,y]=g.get(a);if(!y)continue;const _=c*a.length/(a.length+y);B(e,t.term,a,_,m,o,u,h,p)}return p},X=(e,t,s={})=>{if(typeof t!="string"){const d={...s,...t,queries:void 0},l=t.queries.map(p=>X(e,p,d));return Y(l,d.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:h}=i,c=r(t).flatMap(d=>h(d)).filter(d=>!!d).map(ft(i)).map(d=>At(e,d,i));return Y(c,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),o=[];for(const[u,{score:i,terms:r,match:h}]of n){const c=r.length,d={id:e._documentIds.get(u),score:i*c,terms:Object.keys(h),match:h};Object.assign(d,e._storedFields.get(u)),(s.filter==null||s.filter(d))&&o.push(d)}return o.sort(G),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of K(e,t,s)){const r=i.join(" "),h=n.get(r);h!=null?(h.score+=u,h.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:h}]of n)o.push({suggestion:u,terms:r,score:i/h});return o.sort(G),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if((t==null?void 0:t.fields)==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:h,serializationVersion:c},d)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const l=new Et(d);l._documentCount=t,l._nextId=s,l._documentIds=k(n),l._idToShortId=new Map,l._fieldIds=o,l._fieldLength=k(u),l._avgFieldLength=i,l._storedFields=k(r),l._dirtCount=h||0,l._index=new C;for(const[p,f]of l._documentIds)l._idToShortId.set(f,p);for(const[p,f]of e){const g=new Map;for(const a of Object.keys(f)){let m=f[a];c===1&&(m=m.ds),g.set(parseInt(a,10),k(m))}l._index.set(p,g)}return l},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,d=!1)=>{let l="";i===0?l=c.length>20?`… ${c.slice(-20)}`:c:d?l=c.length+i>100?`${c.slice(0,100-i)}… `:c:l=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,l&&o.push(l),i+=l.length,d||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let h=s.indexOf(n,u);if(h===-1)return null;for(;h>=0;){const c=h+n.length;if(r(e.slice(u,h)),u=c,i>100)break;h=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(o=>{const{id:u,terms:i,score:r}=o,h=u.includes("@"),c=u.includes("#"),[d,l]=u.split(/[#@]/),{contents:p}=n[d]??={title:"",contents:[]};if(h)p.push([{type:"customField",key:d,index:l,display:i.map(f=>o.c.map(g=>j(g,f))).flat().filter(f=>f!==null)},r]);else{const f=i.map(g=>j(o.h,g)).filter(g=>g!==null);if(f.length&&p.push([{type:c?"heading":"title",key:d,...c&&{anchor:l},display:f},r]),"t"in o)for(const g of o.t){const a=i.map(m=>j(g,m)).filter(m=>m!==null);a.length&&p.push([{type:"text",key:d,...c&&{anchor:l},display:a},r])}}}),Q(n).sort(([,o],[,u])=>"max"==="total"?xt(o,u):kt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=it(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":7,\"nextId\":7,\"documentIds\":{\"0\":\"v-184f4da6\",\"1\":\"v-184f4da6#contact-information\",\"2\":\"v-184f4da6#educational-background\",\"3\":\"v-184f4da6#internship-experience\",\"4\":\"v-184f4da6#extracurricular-activities-club-experience\",\"5\":\"v-184f4da6#competition-for-college-students\",\"6\":\"v-184f4da6#other-information\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[2],\"1\":[2,9],\"2\":[2,22],\"3\":[2,8],\"4\":[4,40],\"5\":[4,15],\"6\":[2,20]},\"averageFieldLength\":[2.5714285714285716,16.285714285714285],\"storedFields\":{\"0\":{\"h\":\"Personal Introduction\"},\"1\":{\"h\":\"Contact Information\",\"t\":[\"+86 150-5744-1337\",\"qiuzhenqzzz@gmail.com\",\"Location : Ningbo\"]},\"2\":{\"h\":\"educational background\",\"t\":[\"Jiaxing University , Bachelor , Marketing ( graduate2026) : 2022/08 to present\",\"GPA：3.8/4.0，rankend first in major，university-level first-class scholarship\"]},\"3\":{\"h\":\"Internship Experience\",\"t\":[\"L’Oreal ( remote ) : Marketing Assistant 2023/08-2023/09\"]},\"4\":{\"h\":\"Extracurricular activities/club experience\",\"t\":[\"Member of the volunteer propaganda team at Nanhu Revolutionary Memorial Hall\",\"Runner-up of Business School speech Contest\",\"Vice leader of the school hosting team, presided over large-scale campus activities for many times\",\"Served as the school history propaganda video presenter\",\"Commissary in charge of class psychology\"]},\"5\":{\"h\":\"Competition for College Students\",\"t\":[\"Zhejiang Provincial Rural Revitalization Competition was selected for the provincial competition\",\"Zhejiang Province economic management case competition\"]},\"6\":{\"h\":\"Other information\",\"t\":[\"Language skills: English (fluent, TOEFL/IELTS XX, CET-4 562, CET-6 xx)\",\"IT skills: Office, python\",\"Interests: Speaking, preaching, debating, reading\"]}},\"dirtCount\":0,\"index\":[[\"debating\",{\"1\":{\"6\":1}}],[\"6\",{\"1\":{\"6\":1}}],[\"562\",{\"1\":{\"6\":1}}],[\"5744\",{\"1\":{\"1\":1}}],[\"xx\",{\"1\":{\"6\":2}}],[\"it\",{\"1\":{\"6\":1}}],[\"ielts\",{\"1\":{\"6\":1}}],[\"interests\",{\"1\":{\"6\":1}}],[\"internship\",{\"0\":{\"3\":1}}],[\"introduction\",{\"0\":{\"0\":1}}],[\"in\",{\"1\":{\"2\":1,\"4\":1}}],[\"information\",{\"0\":{\"1\":1,\"6\":1}}],[\"was\",{\"1\":{\"5\":1}}],[\"zhejiang\",{\"1\":{\"5\":2}}],[\"fluent\",{\"1\":{\"6\":1}}],[\"for\",{\"0\":{\"5\":1},\"1\":{\"4\":1,\"5\":1}}],[\"first\",{\"1\":{\"2\":2}}],[\"history\",{\"1\":{\"4\":1}}],[\"hosting\",{\"1\":{\"4\":1}}],[\"hall\",{\"1\":{\"4\":1}}],[\"video\",{\"1\":{\"4\":1}}],[\"vice\",{\"1\":{\"4\":1}}],[\"volunteer\",{\"1\":{\"4\":1}}],[\"speaking\",{\"1\":{\"6\":1}}],[\"speech\",{\"1\":{\"4\":1}}],[\"skills\",{\"1\":{\"6\":2}}],[\"selected\",{\"1\":{\"5\":1}}],[\"served\",{\"1\":{\"4\":1}}],[\"students\",{\"0\":{\"5\":1}}],[\"scale\",{\"1\":{\"4\":1}}],[\"school\",{\"1\":{\"4\":3}}],[\"scholarship\",{\"1\":{\"2\":1}}],[\"business\",{\"1\":{\"4\":1}}],[\"bachelor\",{\"1\":{\"2\":1}}],[\"background\",{\"0\":{\"2\":1}}],[\"up\",{\"1\":{\"4\":1}}],[\"university\",{\"1\":{\"2\":2}}],[\"nanhu\",{\"1\":{\"4\":1}}],[\"ningbo\",{\"1\":{\"1\":1}}],[\"times\",{\"1\":{\"4\":1}}],[\"team\",{\"1\":{\"4\":2}}],[\"the\",{\"1\":{\"4\":3,\"5\":1}}],[\"toefl\",{\"1\":{\"6\":1}}],[\"to\",{\"1\":{\"2\":1}}],[\"other\",{\"0\":{\"6\":1}}],[\"over\",{\"1\":{\"4\":1}}],[\"office\",{\"1\":{\"6\":1}}],[\"of\",{\"1\":{\"4\":4}}],[\"oreal\",{\"1\":{\"3\":1}}],[\"memorial\",{\"1\":{\"4\":1}}],[\"member\",{\"1\":{\"4\":1}}],[\"management\",{\"1\":{\"5\":1}}],[\"many\",{\"1\":{\"4\":1}}],[\"major\",{\"1\":{\"2\":1}}],[\"marketing\",{\"1\":{\"2\":1,\"3\":1}}],[\"as\",{\"1\":{\"4\":1}}],[\"assistant\",{\"1\":{\"3\":1}}],[\"at\",{\"1\":{\"4\":1}}],[\"activities\",{\"0\":{\"4\":1},\"1\":{\"4\":1}}],[\"2023\",{\"1\":{\"3\":2}}],[\"2022\",{\"1\":{\"2\":1}}],[\"rural\",{\"1\":{\"5\":1}}],[\"runner\",{\"1\":{\"4\":1}}],[\"reading\",{\"1\":{\"6\":1}}],[\"revitalization\",{\"1\":{\"5\":1}}],[\"revolutionary\",{\"1\":{\"4\":1}}],[\"remote\",{\"1\":{\"3\":1}}],[\"rankend\",{\"1\":{\"2\":1}}],[\"english\",{\"1\":{\"6\":1}}],[\"economic\",{\"1\":{\"5\":1}}],[\"extracurricular\",{\"0\":{\"4\":1}}],[\"experience\",{\"0\":{\"3\":1,\"4\":1}}],[\"educational\",{\"0\":{\"2\":1}}],[\"cet\",{\"1\":{\"6\":2}}],[\"case\",{\"1\":{\"5\":1}}],[\"campus\",{\"1\":{\"4\":1}}],[\"charge\",{\"1\":{\"4\":1}}],[\"club\",{\"0\":{\"4\":1}}],[\"class\",{\"1\":{\"2\":1,\"4\":1}}],[\"college\",{\"0\":{\"5\":1}}],[\"contest\",{\"1\":{\"4\":1}}],[\"contact\",{\"0\":{\"1\":1}}],[\"competition\",{\"0\":{\"5\":1},\"1\":{\"5\":3}}],[\"commissary\",{\"1\":{\"4\":1}}],[\"com\",{\"1\":{\"1\":1}}],[\"language\",{\"1\":{\"6\":1}}],[\"large\",{\"1\":{\"4\":1}}],[\"leader\",{\"1\":{\"4\":1}}],[\"level\",{\"1\":{\"2\":1}}],[\"l\",{\"1\":{\"3\":1}}],[\"location\",{\"1\":{\"1\":1}}],[\"09\",{\"1\":{\"3\":1}}],[\"0\",{\"1\":{\"2\":1}}],[\"08\",{\"1\":{\"2\":1,\"3\":1}}],[\"4\",{\"1\":{\"2\":1,\"6\":1}}],[\"8\",{\"1\":{\"2\":1}}],[\"3\",{\"1\":{\"2\":1}}],[\"python\",{\"1\":{\"6\":1}}],[\"psychology\",{\"1\":{\"4\":1}}],[\"preaching\",{\"1\":{\"6\":1}}],[\"presided\",{\"1\":{\"4\":1}}],[\"presenter\",{\"1\":{\"4\":1}}],[\"present\",{\"1\":{\"2\":1}}],[\"province\",{\"1\":{\"5\":1}}],[\"provincial\",{\"1\":{\"5\":2}}],[\"propaganda\",{\"1\":{\"4\":2}}],[\"personal\",{\"0\":{\"0\":1}}],[\"gpa\",{\"1\":{\"2\":1}}],[\"graduate2026\",{\"1\":{\"2\":1}}],[\"gmail\",{\"1\":{\"1\":1}}],[\"jiaxing\",{\"1\":{\"2\":1}}],[\"qiuzhenqzzz\",{\"1\":{\"1\":1}}],[\"1337\",{\"1\":{\"1\":1}}],[\"150\",{\"1\":{\"1\":1}}],[\"+86\",{\"1\":{\"1\":1}}]],\"serializationVersion\":2},\"/zh/\":{\"documentCount\":45,\"nextId\":45,\"documentIds\":{\"0\":\"v-858cfdd6\",\"1\":\"v-858cfdd6#联系方式\",\"2\":\"v-858cfdd6#教育背景\",\"3\":\"v-858cfdd6#实习经历\",\"4\":\"v-858cfdd6#课外活动-社团经历\",\"5\":\"v-858cfdd6#学科竞赛\",\"6\":\"v-858cfdd6#其他信息\",\"7\":\"v-1b43b226\",\"8\":\"v-1b43b226#网站本地启动\",\"9\":\"v-1b43b226#修改网页名称、头像-左上角\",\"10\":\"v-1b43b226#设置网页关键词\",\"11\":\"v-1b43b226#社交平台汇总\",\"12\":\"v-1b43b226#查看部署-仓库里\",\"13\":\"v-1b43b226#部署\",\"14\":\"v-1b43b226#脚注\",\"15\":\"v-1b43b226#左上角\",\"16\":\"v-1b43b226#跳转仓库\",\"17\":\"v-1b43b226#修改网页头像\",\"18\":\"v-1b43b226#修改网页头像部分内容\",\"19\":\"v-1b43b226#保存网页本地修改内容\",\"20\":\"v-1b43b226#快速截图\",\"21\":\"v-1b43b226#在后台管理评论\",\"22\":\"v-1b43b226#如何重新部署\",\"23\":\"v-1b43b226#评论区\",\"24\":\"v-1b43b226#管理评论区\",\"25\":\"v-1b43b226#注释\",\"26\":\"v-1b43b226#打开网页内容的路径\",\"27\":\"v-1b43b226#如何快速重启\",\"28\":\"v-1b43b226#修改主题色\",\"29\":\"v-1b43b226#用户可选的主题色\",\"30\":\"v-1b43b226#好用的图标库\",\"31\":\"v-1b43b226#设置-修改个人简介\",\"32\":\"v-1b43b226#快速把多个页面并到一起\",\"33\":\"v-1b43b226#如何打开仓库-查看部署\",\"34\":\"v-1b43b226#中英文网页文件区分\",\"35\":\"v-1b43b226#如何打出淡色框\",\"36\":\"v-1b43b226#获取准确时间\",\"37\":\"v-1b43b226#如何打出圆点\",\"38\":\"v-1b43b226#撤回\",\"39\":\"v-1b43b226#停止\",\"40\":\"v-1b43b226#剪切\",\"41\":\"v-1b43b226#在自己网页里搜索关键词定位文章内容\",\"42\":\"v-1b43b226#部署到底有什么用\",\"43\":\"v-1b43b226@0\",\"44\":\"v-1b43b226@1\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[1,9],\"2\":[1,13],\"3\":[1,6],\"4\":[2,6],\"5\":[1,3],\"6\":[1,15],\"7\":[1],\"8\":[1,3],\"9\":[4,3],\"10\":[1,2],\"11\":[1,2],\"12\":[3,2],\"13\":[1,2],\"14\":[1,2],\"15\":[2,2],\"16\":[1,3],\"17\":[1,2],\"18\":[1,2],\"19\":[1,1],\"20\":[1,1],\"21\":[1,4],\"22\":[1,22],\"23\":[1,4],\"24\":[1,5],\"25\":[1,2],\"26\":[1,2],\"27\":[1,1],\"28\":[1,2],\"29\":[1,2],\"30\":[1,5],\"31\":[2,2],\"32\":[1,3],\"33\":[2,2],\"34\":[1,2],\"35\":[1,3],\"36\":[1,5],\"37\":[1,1],\"38\":[1,3],\"39\":[1,3],\"40\":[1,3],\"41\":[1,13],\"42\":[1,9],\"43\":[null,null,1],\"44\":[null,null,1]},\"averageFieldLength\":[1.2093023255813953,4.289036544850496,0.044444444444444446],\"storedFields\":{\"0\":{\"h\":\"个人介绍\"},\"1\":{\"h\":\"联系方式\",\"t\":[\"+86 150-5744-1337\",\"qiuzhenqzzz@gmail.com\",\"坐标：宁波\"]},\"2\":{\"h\":\"教育背景\",\"t\":[\"嘉兴学院本科，市场营销（2026年毕业）：2022/08至今\",\"综合绩点（GPA）：3.8/4.0，专业排名第一，校级一等奖学金\"]},\"3\":{\"h\":\"实习经历\",\"t\":[\"欧莱雅（ 远程）：市场助理 2023/04-2023/05\"]},\"4\":{\"h\":\"课外活动/社团经历\",\"t\":[\"南湖革命纪念馆志愿宣讲队成员\",\"商学院演讲赛亚军获得者\",\"校主持队副队长，多次主持校内大型活动\",\"担任校史宣传视频主讲\",\"班级心理委员\"]},\"5\":{\"h\":\"学科竞赛\",\"t\":[\"全国大学生英语竞赛省级三等奖\",\"浙江省乡村振兴大赛入围省赛\",\"浙江省经济管理案例竞赛\"]},\"6\":{\"h\":\"其他信息\",\"t\":[\"语言技能：英语（流利，托福/雅思XX分，大学英语四级562分，六级xx）\",\"IT技能：Office，python\",\"兴趣爱好：演讲，宣讲，辩论，阅读\"]},\"7\":{\"h\":\"制作网页的笔记整理\"},\"8\":{\"h\":\"网站本地启动\",\"t\":[\"image-20230728072626503\",\"image-20230728073302956\"]},\"9\":{\"h\":\"修改网页名称、头像（左上角）\",\"t\":[\"image-20230728074530741\",\"image-20230728074842642\"]},\"10\":{\"h\":\"设置网页关键词\",\"t\":[\"image-20230728075905817\"]},\"11\":{\"h\":\"社交平台汇总\",\"t\":[\"image-20230728081749232\"]},\"12\":{\"h\":\"查看部署（仓库里）\",\"t\":[\"image-20230728082112750\"]},\"13\":{\"h\":\"部署\",\"t\":[\"image-20230728082422411\"]},\"14\":{\"h\":\"脚注\",\"t\":[\"image-20230729071629597\"]},\"15\":{\"h\":\"(左上角)\",\"t\":[\"image-20230729072117304\"]},\"16\":{\"h\":\"跳转仓库\",\"t\":[\"image-20230729072505222\",\"image-20230729073213780\"]},\"17\":{\"h\":\"修改网页头像\",\"t\":[\"image-20230729074919344\"]},\"18\":{\"h\":\"修改网页头像部分内容\",\"t\":[\"image-20230729075619564\"]},\"19\":{\"h\":\"保存网页本地修改内容\",\"t\":[\"command+s\"]},\"20\":{\"h\":\"快速截图\",\"t\":[\"option+1+enter\"]},\"21\":{\"h\":\"在后台管理评论\",\"t\":[\"https://mycomment.com/ui\"]},\"22\":{\"h\":\"如何重新部署\",\"t\":[\"image-20230804212954572\",\"image-20230804213038136\",\"image-20230804213220737\",\"image-20230804213316228\",\"image-20230804213406169\",\"image-20230801080913326\",\"image-20230801080750944\",\"image-20230801081057344\",\"image-20230804215344739\",\"image-20230801081142166\",\"https://theme-hope.vuejs.press/zh/guide/feature/comment.html#准备工作\"]},\"23\":{\"h\":\"评论区\",\"t\":[\"https://mycomment.weonlygettoday.com\"]},\"24\":{\"h\":\"管理评论区\",\"t\":[\"https://mycomment.weonlygettoday.com/ui\"]},\"25\":{\"h\":\"注释\",\"t\":[\"选中+command /\"]},\"26\":{\"h\":\"打开网页内容的路径\",\"t\":[\"image-20230805072317873\"]},\"27\":{\"h\":\"如何快速重启\",\"t\":[\"向上键+enter\"]},\"28\":{\"h\":\"修改主题色\",\"t\":[\"image-20230805080959712\"]},\"29\":{\"h\":\"用户可选的主题色\",\"t\":[\"image-20230805081047652\"]},\"30\":{\"h\":\"好用的图标库\",\"t\":[\"https://www.iconfont.cn/\"]},\"31\":{\"h\":\"设置/修改个人简介\",\"t\":[\"image-20230805081704726\"]},\"32\":{\"h\":\"快速把多个页面并到一起\",\"t\":[\"command+n\",\"image-20230806085623481\"]},\"33\":{\"h\":\"如何打开仓库，查看部署\",\"t\":[\"image-20230806092154452\"]},\"34\":{\"h\":\"中英文网页文件区分\",\"t\":[\"image-20230806092340374\"]},\"35\":{\"h\":\"如何打出淡色框\",\"t\":[\"三个- + enter\"]},\"36\":{\"h\":\"获取准确时间\",\"t\":[\"https://bornforthis.cn/python/#/\"]},\"37\":{\"h\":\"如何打出圆点\",\"t\":[\"减号+空格\"]},\"38\":{\"h\":\"撤回\",\"t\":[\"command + z\"]},\"39\":{\"h\":\"停止\",\"t\":[\"Control + c\"]},\"40\":{\"h\":\"剪切\",\"t\":[\"Control + x\"]},\"41\":{\"h\":\"在自己网页里搜索关键词定位文章内容\",\"t\":[\"https://theme-hope.vuejs.press/zh/guide/feature/search.html\",\"image-20230808082656144\",\"image-20230808082728705\"]},\"42\":{\"h\":\"部署到底有什么用\",\"t\":[\"一方面概括自己干了什么\",\"一方面把修改过的数据提交\",\"image-20230812074900289\",\"image-20230812074937473\",\"image-20230812075017017\",\"image-20230812075041650\",\"image-20230812075118226\",\"image-20230812080740526\"]},\"43\":{\"c\":[\"网站制作\"]},\"44\":{\"c\":[\"网站制作\"]}},\"dirtCount\":0,\"index\":[[\"网站制作\",{\"2\":{\"43\":1,\"44\":1}}],[\"网站本地启动\",{\"0\":{\"8\":1}}],[\"一方面把修改过的数据提交\",{\"1\":{\"42\":1}}],[\"一方面概括自己干了什么\",{\"1\":{\"42\":1}}],[\"search\",{\"1\":{\"41\":1}}],[\"在自己网页里搜索关键词定位文章内容\",{\"0\":{\"41\":1}}],[\"在后台管理评论\",{\"0\":{\"21\":1}}],[\"x\",{\"1\":{\"40\":1}}],[\"剪切\",{\"0\":{\"40\":1}}],[\"停止\",{\"0\":{\"39\":1}}],[\"z\",{\"1\":{\"38\":1}}],[\"zh\",{\"1\":{\"22\":1,\"41\":1}}],[\"撤回\",{\"0\":{\"38\":1}}],[\"减号+空格\",{\"1\":{\"37\":1}}],[\"bornforthis\",{\"1\":{\"36\":1}}],[\"获取准确时间\",{\"0\":{\"36\":1}}],[\"enter\",{\"1\":{\"35\":1}}],[\"+\",{\"1\":{\"35\":1,\"38\":1,\"39\":1,\"40\":1}}],[\"+86\",{\"1\":{\"1\":1}}],[\"三个\",{\"1\":{\"35\":1}}],[\"中英文网页文件区分\",{\"0\":{\"34\":1}}],[\"快速把多个页面并到一起\",{\"0\":{\"32\":1}}],[\"快速截图\",{\"0\":{\"20\":1}}],[\"设置\",{\"0\":{\"31\":1}}],[\"设置网页关键词\",{\"0\":{\"10\":1}}],[\"c\",{\"1\":{\"39\":1}}],[\"control\",{\"1\":{\"39\":1,\"40\":1}}],[\"command\",{\"1\":{\"38\":1}}],[\"command+n\",{\"1\":{\"32\":1}}],[\"command+s\",{\"1\":{\"19\":1}}],[\"comment\",{\"1\":{\"22\":1}}],[\"com\",{\"1\":{\"1\":1,\"21\":1,\"23\":1,\"24\":1}}],[\"cn\",{\"1\":{\"30\":1,\"36\":1}}],[\"www\",{\"1\":{\"30\":1}}],[\"weonlygettoday\",{\"1\":{\"23\":1,\"24\":1}}],[\"好用的图标库\",{\"0\":{\"30\":1}}],[\"用户可选的主题色\",{\"0\":{\"29\":1}}],[\"修改个人简介\",{\"0\":{\"31\":1}}],[\"修改主题色\",{\"0\":{\"28\":1}}],[\"修改网页头像部分内容\",{\"0\":{\"18\":1}}],[\"修改网页头像\",{\"0\":{\"17\":1}}],[\"修改网页名称\",{\"0\":{\"9\":1}}],[\"向上键+enter\",{\"1\":{\"27\":1}}],[\"如何打出圆点\",{\"0\":{\"37\":1}}],[\"如何打出淡色框\",{\"0\":{\"35\":1}}],[\"如何打开仓库\",{\"0\":{\"33\":1}}],[\"如何快速重启\",{\"0\":{\"27\":1}}],[\"如何重新部署\",{\"0\":{\"22\":1}}],[\"打开网页内容的路径\",{\"0\":{\"26\":1}}],[\"选中+command\",{\"1\":{\"25\":1}}],[\"注释\",{\"0\":{\"25\":1}}],[\"管理评论区\",{\"0\":{\"24\":1}}],[\"评论区\",{\"0\":{\"23\":1}}],[\"准备工作\",{\"1\":{\"22\":1}}],[\"feature\",{\"1\":{\"22\":1,\"41\":1}}],[\"press\",{\"1\":{\"22\":1,\"41\":1}}],[\"python\",{\"1\":{\"6\":1,\"36\":1}}],[\"vuejs\",{\"1\":{\"22\":1,\"41\":1}}],[\"html\",{\"1\":{\"22\":1,\"41\":1}}],[\"https\",{\"1\":{\"21\":1,\"22\":1,\"23\":1,\"24\":1,\"30\":1,\"36\":1,\"41\":1}}],[\"hope\",{\"1\":{\"22\":1,\"41\":1}}],[\"theme\",{\"1\":{\"22\":1,\"41\":1}}],[\"ui\",{\"1\":{\"21\":1,\"24\":1}}],[\"mycomment\",{\"1\":{\"21\":1,\"23\":1,\"24\":1}}],[\"option+1+enter\",{\"1\":{\"20\":1}}],[\"office\",{\"1\":{\"6\":1}}],[\"保存网页本地修改内容\",{\"0\":{\"19\":1}}],[\"跳转仓库\",{\"0\":{\"16\":1}}],[\"脚注\",{\"0\":{\"14\":1}}],[\"部署到底有什么用\",{\"0\":{\"42\":1}}],[\"部署\",{\"0\":{\"13\":1}}],[\"仓库里\",{\"0\":{\"12\":1}}],[\"查看部署\",{\"0\":{\"12\":1,\"33\":1}}],[\"社交平台汇总\",{\"0\":{\"11\":1}}],[\"社团经历\",{\"0\":{\"4\":1}}],[\"左上角\",{\"0\":{\"9\":1,\"15\":1}}],[\"头像\",{\"0\":{\"9\":1}}],[\"iconfont\",{\"1\":{\"30\":1}}],[\"image\",{\"1\":{\"8\":2,\"9\":2,\"10\":1,\"11\":1,\"12\":1,\"13\":1,\"14\":1,\"15\":1,\"16\":2,\"17\":1,\"18\":1,\"22\":10,\"26\":1,\"28\":1,\"29\":1,\"31\":1,\"32\":1,\"33\":1,\"34\":1,\"41\":2,\"42\":6}}],[\"it技能\",{\"1\":{\"6\":1}}],[\"制作网页的笔记整理\",{\"0\":{\"7\":1}}],[\"阅读\",{\"1\":{\"6\":1}}],[\"辩论\",{\"1\":{\"6\":1}}],[\"宣讲\",{\"1\":{\"6\":1}}],[\"演讲\",{\"1\":{\"6\":1}}],[\"兴趣爱好\",{\"1\":{\"6\":1}}],[\"六级xx\",{\"1\":{\"6\":1}}],[\"大学英语四级562分\",{\"1\":{\"6\":1}}],[\"雅思xx分\",{\"1\":{\"6\":1}}],[\"托福\",{\"1\":{\"6\":1}}],[\"流利\",{\"1\":{\"6\":1}}],[\"英语\",{\"1\":{\"6\":1}}],[\"语言技能\",{\"1\":{\"6\":1}}],[\"其他信息\",{\"0\":{\"6\":1}}],[\"浙江省经济管理案例竞赛\",{\"1\":{\"5\":1}}],[\"浙江省乡村振兴大赛入围省赛\",{\"1\":{\"5\":1}}],[\"全国大学生英语竞赛省级三等奖\",{\"1\":{\"5\":1}}],[\"学科竞赛\",{\"0\":{\"5\":1}}],[\"班级心理委员\",{\"1\":{\"4\":1}}],[\"担任校史宣传视频主讲\",{\"1\":{\"4\":1}}],[\"多次主持校内大型活动\",{\"1\":{\"4\":1}}],[\"校主持队副队长\",{\"1\":{\"4\":1}}],[\"校级一等奖学金\",{\"1\":{\"2\":1}}],[\"商学院演讲赛亚军获得者\",{\"1\":{\"4\":1}}],[\"南湖革命纪念馆志愿宣讲队成员\",{\"1\":{\"4\":1}}],[\"课外活动\",{\"0\":{\"4\":1}}],[\"市场助理\",{\"1\":{\"3\":1}}],[\"市场营销\",{\"1\":{\"2\":1}}],[\"远程\",{\"1\":{\"3\":1}}],[\"欧莱雅\",{\"1\":{\"3\":1}}],[\"实习经历\",{\"0\":{\"3\":1}}],[\"专业排名第一\",{\"1\":{\"2\":1}}],[\"05\",{\"1\":{\"3\":1}}],[\"04\",{\"1\":{\"3\":1}}],[\"0\",{\"1\":{\"2\":1}}],[\"08至今\",{\"1\":{\"2\":1}}],[\"4\",{\"1\":{\"2\":1}}],[\"8\",{\"1\":{\"2\":1}}],[\"3\",{\"1\":{\"2\":1}}],[\"guide\",{\"1\":{\"22\":1,\"41\":1}}],[\"gpa\",{\"1\":{\"2\":1}}],[\"gmail\",{\"1\":{\"1\":1}}],[\"综合绩点\",{\"1\":{\"2\":1}}],[\"20230812080740526\",{\"1\":{\"42\":1}}],[\"20230812075118226\",{\"1\":{\"42\":1}}],[\"20230812075041650\",{\"1\":{\"42\":1}}],[\"20230812075017017\",{\"1\":{\"42\":1}}],[\"20230812074937473\",{\"1\":{\"42\":1}}],[\"20230812074900289\",{\"1\":{\"42\":1}}],[\"20230808082728705\",{\"1\":{\"41\":1}}],[\"20230808082656144\",{\"1\":{\"41\":1}}],[\"20230806092340374\",{\"1\":{\"34\":1}}],[\"20230806092154452\",{\"1\":{\"33\":1}}],[\"20230806085623481\",{\"1\":{\"32\":1}}],[\"20230805081704726\",{\"1\":{\"31\":1}}],[\"20230805081047652\",{\"1\":{\"29\":1}}],[\"20230805080959712\",{\"1\":{\"28\":1}}],[\"20230805072317873\",{\"1\":{\"26\":1}}],[\"20230801081142166\",{\"1\":{\"22\":1}}],[\"20230801081057344\",{\"1\":{\"22\":1}}],[\"20230801080750944\",{\"1\":{\"22\":1}}],[\"20230801080913326\",{\"1\":{\"22\":1}}],[\"20230804215344739\",{\"1\":{\"22\":1}}],[\"20230804213406169\",{\"1\":{\"22\":1}}],[\"20230804213316228\",{\"1\":{\"22\":1}}],[\"20230804213220737\",{\"1\":{\"22\":1}}],[\"20230804213038136\",{\"1\":{\"22\":1}}],[\"20230804212954572\",{\"1\":{\"22\":1}}],[\"20230729075619564\",{\"1\":{\"18\":1}}],[\"20230729074919344\",{\"1\":{\"17\":1}}],[\"20230729073213780\",{\"1\":{\"16\":1}}],[\"20230729072505222\",{\"1\":{\"16\":1}}],[\"20230729072117304\",{\"1\":{\"15\":1}}],[\"20230729071629597\",{\"1\":{\"14\":1}}],[\"20230728082422411\",{\"1\":{\"13\":1}}],[\"20230728082112750\",{\"1\":{\"12\":1}}],[\"20230728081749232\",{\"1\":{\"11\":1}}],[\"20230728075905817\",{\"1\":{\"10\":1}}],[\"20230728074842642\",{\"1\":{\"9\":1}}],[\"20230728074530741\",{\"1\":{\"9\":1}}],[\"20230728073302956\",{\"1\":{\"8\":1}}],[\"20230728072626503\",{\"1\":{\"8\":1}}],[\"2023\",{\"1\":{\"3\":2}}],[\"2022\",{\"1\":{\"2\":1}}],[\"2026年毕业\",{\"1\":{\"2\":1}}],[\"嘉兴学院本科\",{\"1\":{\"2\":1}}],[\"教育背景\",{\"0\":{\"2\":1}}],[\"宁波\",{\"1\":{\"1\":1}}],[\"坐标\",{\"1\":{\"1\":1}}],[\"qiuzhenqzzz\",{\"1\":{\"1\":1}}],[\"1337\",{\"1\":{\"1\":1}}],[\"150\",{\"1\":{\"1\":1}}],[\"5744\",{\"1\":{\"1\":1}}],[\"联系方式\",{\"0\":{\"1\":1}}],[\"个人介绍\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
