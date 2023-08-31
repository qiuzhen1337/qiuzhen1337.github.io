const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ot=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return W(e,t,s,n,i,1,o,""),n},W=(e,t,s,n,o,u,i,r)=>{const h=u*i;t:for(const c of e.keys())if(c===F){const d=o[h-1];d<=s&&n.set(r,[e.get(c),d])}else{let d=u;for(let l=0;l<c.length;++l,++d){const p=c[l],f=i*d,g=f-i;let a=o[f];const m=Math.max(0,d-s-1),y=Math.min(i-1,d+s);for(let _=m;_<y;++_){const b=p!==t[_],z=o[g+_]+ +b,A=o[g+_+1]+1,w=o[f+_]+1,L=o[f+_+1]=Math.min(z,A,w);L<a&&(a=L)}if(a>s)continue t}W(e.get(c),t,s,n,o,d,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==F&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ut(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ot(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,M(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);let o=n.get(F);return o===void 0&&n.set(F,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},M=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==F&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const h=e.get(u);if(r===u.length)e=h;else{const c=new Map;c.set(u.slice(r),h),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ut=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)R(n);else if(s.size===1){const[o,u]=s.entries().next().value;$(n,o,u)}}},R=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)R(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==F&&$(e.slice(0,-1),n,o)}},$=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",q="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},G=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},N=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),P(n.terms,u)}}return e},[q]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);P(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,o,u)=>{const{k:i,b:r,d:h}=u;return Math.log(1+(s-t+.5)/(t+.5))*(h+e*(i+1)/(e+i*(1-r+r*n/o)))},ft=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,ht),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof(console==null?void 0:console[e])=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:q,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,o,u,i,r,h=new Map)=>{if(o==null)return h;for(const c of Object.keys(u)){const d=u[c],l=e._fieldIds[c],p=o.get(l);if(p==null)continue;let f=p.size;const g=e._avgFieldLength[l];for(const a of p.keys()){if(!e._documentIds.has(a)){gt(e,l,a,s),f-=1;continue}const m=i?i(e._documentIds.get(a),s,e._storedFields.get(a)):1;if(!m)continue;const y=p.get(a),_=e._fieldLength.get(a)[l],b=at(y,f,e._documentCount,_,g,r),z=n*d*m*b,A=h.get(a);if(A){A.score+=z,lt(A.terms,t);const w=N(A.match,s);w?w.push(c):A.match[s]=[c]}else h.set(a,{score:z,terms:[t],match:{[s]:[c]}})}}return h},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((a,m)=>({...a,[m]:N(n.boost,m)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:h}=n,{fuzzy:c,prefix:d}={...J.weights,...i},l=e._index.get(t.term),p=B(e,t.term,t.term,1,l,o,u,h);let f,g;if(t.prefix&&(f=e._index.atPrefix(t.term)),t.fuzzy){const a=t.fuzzy===!0?.2:t.fuzzy,m=a<1?Math.min(r,Math.round(t.term.length*a)):a;m&&(g=e._index.fuzzyGet(t.term,m))}if(f)for(const[a,m]of f){const y=a.length-t.term.length;if(!y)continue;g==null||g.delete(a);const _=d*a.length/(a.length+.3*y);B(e,t.term,a,_,m,o,u,h,p)}if(g)for(const a of g.keys()){const[m,y]=g.get(a);if(!y)continue;const _=c*a.length/(a.length+y);B(e,t.term,a,_,m,o,u,h,p)}return p},X=(e,t,s={})=>{if(typeof t!="string"){const d={...s,...t,queries:void 0},l=t.queries.map(p=>X(e,p,d));return Y(l,d.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:h}=i,c=r(t).flatMap(d=>h(d)).filter(d=>!!d).map(ft(i)).map(d=>At(e,d,i));return Y(c,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),o=[];for(const[u,{score:i,terms:r,match:h}]of n){const c=r.length,d={id:e._documentIds.get(u),score:i*c,terms:Object.keys(h),match:h};Object.assign(d,e._storedFields.get(u)),(s.filter==null||s.filter(d))&&o.push(d)}return o.sort(G),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of K(e,t,s)){const r=i.join(" "),h=n.get(r);h!=null?(h.score+=u,h.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:h}]of n)o.push({suggestion:u,terms:r,score:i/h});return o.sort(G),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if((t==null?void 0:t.fields)==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:h,serializationVersion:c},d)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const l=new Et(d);l._documentCount=t,l._nextId=s,l._documentIds=k(n),l._idToShortId=new Map,l._fieldIds=o,l._fieldLength=k(u),l._avgFieldLength=i,l._storedFields=k(r),l._dirtCount=h||0,l._index=new C;for(const[p,f]of l._documentIds)l._idToShortId.set(f,p);for(const[p,f]of e){const g=new Map;for(const a of Object.keys(f)){let m=f[a];c===1&&(m=m.ds),g.set(parseInt(a,10),k(m))}l._index.set(p,g)}return l},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,d=!1)=>{let l="";i===0?l=c.length>20?`… ${c.slice(-20)}`:c:d?l=c.length+i>100?`${c.slice(0,100-i)}… `:c:l=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,l&&o.push(l),i+=l.length,d||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let h=s.indexOf(n,u);if(h===-1)return null;for(;h>=0;){const c=h+n.length;if(r(e.slice(u,h)),u=c,i>100)break;h=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(o=>{const{id:u,terms:i,score:r}=o,h=u.includes("@"),c=u.includes("#"),[d,l]=u.split(/[#@]/),{contents:p}=n[d]??={title:"",contents:[]};if(h)p.push([{type:"customField",key:d,index:l,display:i.map(f=>o.c.map(g=>j(g,f))).flat().filter(f=>f!==null)},r]);else{const f=i.map(g=>j(o.h,g)).filter(g=>g!==null);if(f.length&&p.push([{type:c?"heading":"title",key:d,...c&&{anchor:l},display:f},r]),"t"in o)for(const g of o.t){const a=i.map(m=>j(g,m)).filter(m=>m!==null);a.length&&p.push([{type:"text",key:d,...c&&{anchor:l},display:a},r])}}}),Q(n).sort(([,o],[,u])=>"max"==="total"?xt(o,u):kt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=it(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":129,\"nextId\":129,\"documentIds\":{\"0\":\"v-1b7cdbf8\",\"1\":\"v-1b7cdbf8#联系方式\",\"2\":\"v-1b7cdbf8#教育背景\",\"3\":\"v-1b7cdbf8#实习经历\",\"4\":\"v-1b7cdbf8#课外活动-社团经历\",\"5\":\"v-1b7cdbf8#学科竞赛\",\"6\":\"v-1b7cdbf8#其他信息\",\"7\":\"v-2f6627f0\",\"8\":\"v-2f6627f0@0\",\"9\":\"v-2f6627f0@1\",\"10\":\"v-0c71b814\",\"11\":\"v-0c71b814@0\",\"12\":\"v-0c71b814@1\",\"13\":\"v-ee3fcc80\",\"14\":\"v-ee3fcc80@0\",\"15\":\"v-ee3fcc80@1\",\"16\":\"v-ed73ffce\",\"17\":\"v-ed73ffce@0\",\"18\":\"v-ed73ffce@1\",\"19\":\"v-0dd7bc51\",\"20\":\"v-0dd7bc51@0\",\"21\":\"v-0dd7bc51@1\",\"22\":\"v-80f17010\",\"23\":\"v-80f17010@0\",\"24\":\"v-80f17010@1\",\"25\":\"v-7d87bed2\",\"26\":\"v-7d87bed2@0\",\"27\":\"v-7d87bed2@1\",\"28\":\"v-4e20d545\",\"29\":\"v-bb28ec8e\",\"30\":\"v-bb28ec8e#_1-如何手动编写侧边栏\",\"31\":\"v-bb28ec8e#_1-1第一种方法-侧边栏名称无法自定义\",\"32\":\"v-bb28ec8e#注意输入文件夹和文件后的显示效果\",\"33\":\"v-bb28ec8e#_1-2第二种方法-自定义文件名-图标\",\"34\":\"v-bb28ec8e#如何放置代码框\",\"35\":\"v-bb28ec8e#看清楚路径包裹范围\",\"36\":\"v-bb28ec8e#_1-3\",\"37\":\"v-bb28ec8e#_1-4\",\"38\":\"v-bb28ec8e#可折叠\",\"39\":\"v-bb28ec8e#_1-5自定义-一个大组里面套多个小组\",\"40\":\"v-bb28ec8e@0\",\"41\":\"v-bb28ec8e@1\",\"42\":\"v-39579f82\",\"43\":\"v-39579f82#网站本地启动\",\"44\":\"v-39579f82#修改网页名称、头像-左上角\",\"45\":\"v-39579f82#设置网页关键词\",\"46\":\"v-39579f82#社交平台汇总\",\"47\":\"v-39579f82#查看部署-仓库里\",\"48\":\"v-39579f82#部署\",\"49\":\"v-39579f82#脚注\",\"50\":\"v-39579f82#左上角\",\"51\":\"v-39579f82#跳转仓库\",\"52\":\"v-39579f82#修改网页头像\",\"53\":\"v-39579f82#修改网页头像部分内容\",\"54\":\"v-39579f82#保存网页本地修改内容\",\"55\":\"v-39579f82#快速截图\",\"56\":\"v-39579f82#在后台管理评论\",\"57\":\"v-39579f82#如何重新部署\",\"58\":\"v-39579f82#评论区\",\"59\":\"v-39579f82#管理评论区\",\"60\":\"v-39579f82#注释\",\"61\":\"v-39579f82#打开网页内容的路径\",\"62\":\"v-39579f82#如何快速重启\",\"63\":\"v-39579f82#修改主题色\",\"64\":\"v-39579f82#用户可选的主题色\",\"65\":\"v-39579f82#好用的图标库\",\"66\":\"v-39579f82#设置-修改个人简介\",\"67\":\"v-39579f82#快速把多个页面并到一起\",\"68\":\"v-39579f82#如何打开仓库-查看部署\",\"69\":\"v-39579f82#中英文网页文件区分\",\"70\":\"v-39579f82#如何打出淡色框\",\"71\":\"v-39579f82#获取准确时间\",\"72\":\"v-39579f82#如何打出圆点\",\"73\":\"v-39579f82#撤回\",\"74\":\"v-39579f82#停止\",\"75\":\"v-39579f82#剪切\",\"76\":\"v-39579f82#在自己网页里搜索关键词定位文章内容\",\"77\":\"v-39579f82#部署到底有什么用\",\"78\":\"v-39579f82#挑选头像\",\"79\":\"v-39579f82#如何设置自己的评论区教程以及各种表情包资源\",\"80\":\"v-39579f82#可直接打开\",\"81\":\"v-39579f82#网页所有内容的路径\",\"82\":\"v-39579f82#如何修改菜单栏-主\",\"83\":\"v-39579f82#遇到重复文章怎么办\",\"84\":\"v-39579f82#解密\",\"85\":\"v-39579f82@0\",\"86\":\"v-39579f82@1\",\"87\":\"v-24137c82\",\"88\":\"v-24137c82@0\",\"89\":\"v-24137c82@1\",\"90\":\"v-5b4d0484\",\"91\":\"v-5b4d0484@0\",\"92\":\"v-5b4d0484@1\",\"93\":\"v-6d845d1c\",\"94\":\"v-6d845d1c@0\",\"95\":\"v-6d845d1c@1\",\"96\":\"v-6a1aabde\",\"97\":\"v-6a1aabde@0\",\"98\":\"v-6a1aabde@1\",\"99\":\"v-66b0faa0\",\"100\":\"v-66b0faa0@0\",\"101\":\"v-66b0faa0@1\",\"102\":\"v-63474962\",\"103\":\"v-63474962@0\",\"104\":\"v-63474962@1\",\"105\":\"v-41a42975\",\"106\":\"v-41a42975@0\",\"107\":\"v-41a42975@1\",\"108\":\"v-43590214\",\"109\":\"v-43590214@0\",\"110\":\"v-43590214@1\",\"111\":\"v-7c2865ec\",\"112\":\"v-7c2865ec@0\",\"113\":\"v-7c2865ec@1\",\"114\":\"v-7cda8f2c\",\"115\":\"v-7cda8f2c@0\",\"116\":\"v-7cda8f2c@1\",\"117\":\"v-75b774d7\",\"118\":\"v-babdeb00\",\"119\":\"v-05862f56\",\"120\":\"v-810ce482\",\"121\":\"v-a80a44fc\",\"122\":\"v-f1aacd62\",\"123\":\"v-3dbb373c\",\"124\":\"v-0c2881aa\",\"125\":\"v-eedb8e7a\",\"126\":\"v-3f511423\",\"127\":\"v-eedb8e3c\",\"128\":\"v-3ca2e424\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[1,9],\"2\":[1,13],\"3\":[1,6],\"4\":[2,6],\"5\":[1,3],\"6\":[1,15],\"7\":[1],\"8\":[null,null,1],\"9\":[null,null,1],\"10\":[2],\"11\":[null,null,1],\"12\":[null,null,1],\"13\":[2],\"14\":[null,null,1],\"15\":[null,null,1],\"16\":[1],\"17\":[null,null,1],\"18\":[null,null,1],\"19\":[1],\"20\":[null,null,1],\"21\":[null,null,1],\"22\":[1],\"23\":[null,null,1],\"24\":[null,null,1],\"25\":[1],\"26\":[null,null,1],\"27\":[null,null,1],\"28\":[2,4],\"29\":[1],\"30\":[2],\"31\":[3,2],\"32\":[1,5],\"33\":[4,4],\"34\":[1,2],\"35\":[1,2],\"36\":[2,2],\"37\":[2,2],\"38\":[1,2],\"39\":[3,2],\"40\":[null,null,1],\"41\":[null,null,1],\"42\":[1],\"43\":[1,3],\"44\":[4,3],\"45\":[1,2],\"46\":[1,2],\"47\":[3,2],\"48\":[1,2],\"49\":[1,2],\"50\":[2,2],\"51\":[1,3],\"52\":[1,2],\"53\":[1,2],\"54\":[1,1],\"55\":[1,1],\"56\":[1,4],\"57\":[1,22],\"58\":[1,4],\"59\":[1,5],\"60\":[1,2],\"61\":[1,2],\"62\":[1,1],\"63\":[1,2],\"64\":[1,2],\"65\":[1,5],\"66\":[2,2],\"67\":[1,3],\"68\":[2,2],\"69\":[1,2],\"70\":[1,3],\"71\":[1,5],\"72\":[1,1],\"73\":[1,3],\"74\":[1,3],\"75\":[1,3],\"76\":[1,13],\"77\":[1,2],\"78\":[1,9],\"79\":[1,14],\"80\":[1,3],\"81\":[1,2],\"82\":[3,2],\"83\":[1,17],\"84\":[1,9],\"85\":[null,null,1],\"86\":[null,null,1],\"87\":[1],\"88\":[null,null,1],\"89\":[null,null,1],\"90\":[1],\"91\":[null,null,1],\"92\":[null,null,1],\"93\":[1],\"94\":[null,null,1],\"95\":[null,null,1],\"96\":[1],\"97\":[null,null,1],\"98\":[null,null,1],\"99\":[2],\"100\":[null,null,1],\"101\":[null,null,1],\"102\":[1],\"103\":[null,null,1],\"104\":[null,null,1],\"105\":[3],\"106\":[null,null,1],\"107\":[null,null,1],\"108\":[3],\"109\":[null,null,1],\"110\":[null,null,1],\"111\":[3],\"112\":[null,null,1],\"113\":[null,null,1],\"114\":[1],\"115\":[null,null,1],\"116\":[null,null,1],\"117\":[2],\"118\":[1],\"119\":[3],\"120\":[1],\"121\":[1],\"122\":[2],\"123\":[2],\"124\":[2],\"125\":[2],\"126\":[1],\"127\":[2],\"128\":[1]},\"averageFieldLength\":[1.388881566030122,5.204026369168358,0.6853600781109933],\"storedFields\":{\"0\":{\"h\":\"个人介绍\"},\"1\":{\"h\":\"联系方式\",\"t\":[\"+86 150-5744-1337\",\"qiuzhenqzzz@gmail.com\",\"坐标：宁波\"]},\"2\":{\"h\":\"教育背景\",\"t\":[\"嘉兴学院本科，市场营销（2026年毕业）：2022/08至今\",\"综合绩点（GPA）：3.8/4.0，专业排名第一，校级一等奖学金\"]},\"3\":{\"h\":\"实习经历\",\"t\":[\"欧莱雅（ 远程）：市场助理 2023/04-2023/05\"]},\"4\":{\"h\":\"课外活动/社团经历\",\"t\":[\"南湖革命纪念馆志愿宣讲队成员\",\"商学院演讲赛亚军获得者\",\"校主持队副队长，多次主持校内大型活动\",\"担任校史宣传视频主讲\",\"班级心理委员\"]},\"5\":{\"h\":\"学科竞赛\",\"t\":[\"全国大学生英语竞赛省级三等奖\",\"浙江省乡村振兴大赛入围省赛\",\"浙江省经济管理案例竞赛\"]},\"6\":{\"h\":\"其他信息\",\"t\":[\"语言技能：英语（流利，托福/雅思XX分，大学英语四级562分，六级xx）\",\"IT技能：Office，python\",\"兴趣爱好：演讲，宣讲，辩论，阅读\"]},\"7\":{\"h\":\"制作网页的笔记整理\"},\"8\":{\"c\":[\"网站制作\"]},\"9\":{\"c\":[\"网站制作\"]},\"10\":{\"h\":\"cet-6\"},\"11\":{\"c\":[\"网站制作\"]},\"12\":{\"c\":[\"网站制作\"]},\"13\":{\"h\":\"对知识网红的崇拜让我们离针织更近/远\"},\"14\":{\"c\":[\"网站制作\"]},\"15\":{\"c\":[\"网站制作\"]},\"16\":{\"h\":\"南湖革命纪念馆讲解\"},\"17\":{\"c\":[\"网站制作\"]},\"18\":{\"c\":[\"网站制作\"]},\"19\":{\"h\":\"制作网页的笔记整理\"},\"20\":{\"c\":[\"网站制作\"]},\"21\":{\"c\":[\"网站制作\"]},\"22\":{\"h\":\"a2023\"},\"23\":{\"c\":[\"网站制作\"]},\"24\":{\"c\":[\"网站制作\"]},\"25\":{\"h\":\"s2024\"},\"26\":{\"c\":[\"网站制作\"]},\"27\":{\"c\":[\"网站制作\"]},\"28\":{\"h\":\"Column-progamming\",\"t\":[\"名称\",\"链接\",\"网页制作\",\"笔记整理\"]},\"29\":{\"h\":\"文章编写\"},\"30\":{\"h\":\"1.如何手动编写侧边栏\"},\"31\":{\"h\":\"1.1第一种方法 侧边栏名称无法自定义\",\"t\":[\"image-20230831084705914\"]},\"32\":{\"h\":\"注意输入文件夹和文件后的显示效果\",\"t\":[\"**注意文件名和title：\",\"输入的是文件名，用于识别；网页中侧边栏真正显示的是title\"]},\"33\":{\"h\":\"1.2第二种方法 自定义文件名&图标\",\"t\":[\"image-20230831083520779\",\"image-20230831090446945\",\"注意大文件夹下直接有文件和还有一个文件夹\"]},\"34\":{\"h\":\"如何放置代码框\",\"t\":[\"image-20230825084154912\"]},\"35\":{\"h\":\"看清楚路径包裹范围\",\"t\":[\"image-20230825090450524\"]},\"36\":{\"h\":\"1.3\",\"t\":[\"image-20230831090707995\"]},\"37\":{\"h\":\"1.4\",\"t\":[\"image-20230831091118249\"]},\"38\":{\"h\":\"可折叠\",\"t\":[\"image-20230831091235838\"]},\"39\":{\"h\":\"1.5自定义 一个大组里面套多个小组\",\"t\":[\"image-20230831091649929\"]},\"40\":{\"c\":[\"网站制作\"]},\"41\":{\"c\":[\"网站制作\"]},\"42\":{\"h\":\"制作网页的笔记整理\"},\"43\":{\"h\":\"网站本地启动\",\"t\":[\"image-20230728072626503\",\"image-20230728073302956\"]},\"44\":{\"h\":\"修改网页名称、头像（左上角）\",\"t\":[\"image-20230728074530741\",\"image-20230728074842642\"]},\"45\":{\"h\":\"设置网页关键词\",\"t\":[\"image-20230728075905817\"]},\"46\":{\"h\":\"社交平台汇总\",\"t\":[\"image-20230728081749232\"]},\"47\":{\"h\":\"查看部署（仓库里）\",\"t\":[\"image-20230728082112750\"]},\"48\":{\"h\":\"部署\",\"t\":[\"image-20230728082422411\"]},\"49\":{\"h\":\"脚注\",\"t\":[\"image-20230729071629597\"]},\"50\":{\"h\":\"(左上角)\",\"t\":[\"image-20230729072117304\"]},\"51\":{\"h\":\"跳转仓库\",\"t\":[\"image-20230729072505222\",\"image-20230729073213780\"]},\"52\":{\"h\":\"修改网页头像\",\"t\":[\"image-20230729074919344\"]},\"53\":{\"h\":\"修改网页头像部分内容\",\"t\":[\"image-20230729075619564\"]},\"54\":{\"h\":\"保存网页本地修改内容\",\"t\":[\"command+s\"]},\"55\":{\"h\":\"快速截图\",\"t\":[\"option+1+enter\"]},\"56\":{\"h\":\"在后台管理评论\",\"t\":[\"https://mycomment.com/ui\"]},\"57\":{\"h\":\"如何重新部署\",\"t\":[\"image-20230804212954572\",\"image-20230804213038136\",\"image-20230804213220737\",\"image-20230804213316228\",\"image-20230804213406169\",\"image-20230801080913326\",\"image-20230801080750944\",\"image-20230801081057344\",\"image-20230804215344739\",\"image-20230801081142166\",\"https://theme-hope.vuejs.press/zh/guide/feature/comment.html#准备工作\"]},\"58\":{\"h\":\"评论区\",\"t\":[\"https://mycomment.weonlygettoday.com\"]},\"59\":{\"h\":\"管理评论区\",\"t\":[\"https://mycomment.weonlygettoday.com/ui\"]},\"60\":{\"h\":\"注释\",\"t\":[\"选中+command /\"]},\"61\":{\"h\":\"打开网页内容的路径\",\"t\":[\"image-20230805072317873\"]},\"62\":{\"h\":\"如何快速重启\",\"t\":[\"向上键+enter\"]},\"63\":{\"h\":\"修改主题色\",\"t\":[\"image-20230805080959712\"]},\"64\":{\"h\":\"用户可选的主题色\",\"t\":[\"image-20230805081047652\"]},\"65\":{\"h\":\"好用的图标库\",\"t\":[\"https://www.iconfont.cn/\"]},\"66\":{\"h\":\"设置/修改个人简介\",\"t\":[\"image-20230805081704726\"]},\"67\":{\"h\":\"快速把多个页面并到一起\",\"t\":[\"command+n\",\"image-20230806085623481\"]},\"68\":{\"h\":\"如何打开仓库，查看部署\",\"t\":[\"image-20230806092154452\"]},\"69\":{\"h\":\"中英文网页文件区分\",\"t\":[\"image-20230806092340374\"]},\"70\":{\"h\":\"如何打出淡色框\",\"t\":[\"三个- + enter\"]},\"71\":{\"h\":\"获取准确时间\",\"t\":[\"https://bornforthis.cn/python/#/\"]},\"72\":{\"h\":\"如何打出圆点\",\"t\":[\"减号+空格\"]},\"73\":{\"h\":\"撤回\",\"t\":[\"command + z\"]},\"74\":{\"h\":\"停止\",\"t\":[\"Control + c\"]},\"75\":{\"h\":\"剪切\",\"t\":[\"Control + x\"]},\"76\":{\"h\":\"在自己网页里搜索关键词定位文章内容\",\"t\":[\"https://theme-hope.vuejs.press/zh/guide/feature/search.html\",\"image-20230808082656144\",\"image-20230808082728705\"]},\"77\":{\"h\":\"部署到底有什么用\",\"t\":[\"一方面概括自己干了什么\",\"一方面把修改过的数据提交\"]},\"78\":{\"h\":\"挑选头像\",\"t\":[\"image-20230812074900289\",\"image-20230812074937473\",\"image-20230812075017017\",\"image-20230812075041650\",\"image-20230812075118226\",\"image-20230812080740526\",\"image-20230813081053602\",\"image-20230813082355006\"]},\"79\":{\"h\":\"如何设置自己的评论区教程以及各种表情包资源\",\"t\":[\"https://waline.js.org/guide/get-started/\",\"https://unpkg.com/browse/@waline/emojis@1.1.0/\"]},\"80\":{\"h\":\"可直接打开\",\"t\":[\"command按住 + 点击链接\"]},\"81\":{\"h\":\"网页所有内容的路径\",\"t\":[\"image-20230813090004922\"]},\"82\":{\"h\":\"如何修改菜单栏（主）\",\"t\":[\"image-20230818073922771\"]},\"83\":{\"h\":\"遇到重复文章怎么办\",\"t\":[\"image-20230818080215545\",\"image-20230823080927249\",\"【】+（）\",\"image-20230823082051569\",\"image-20230823085459751\",\"https://theme-hope.vuejs.press/zh/guide/markdown/card.html\",\"image-20230823085917036\"]},\"84\":{\"h\":\"解密\",\"t\":[\"注释掉\",\"image-20230823090014256\",\"剪切\",\"Command + X\",\"image-20230824083954138\",\"image-20230831080915456\"]},\"85\":{\"c\":[\"网站制作\"]},\"86\":{\"c\":[\"网站制作\"]},\"87\":{\"h\":\"经管案例竞赛\"},\"88\":{\"c\":[\"网站制作\"]},\"89\":{\"c\":[\"网站制作\"]},\"90\":{\"h\":\"乡村振兴大赛\"},\"91\":{\"c\":[\"网站制作\"]},\"92\":{\"c\":[\"网站制作\"]},\"93\":{\"h\":\"aiyc1\"},\"94\":{\"c\":[\"网站制作\"]},\"95\":{\"c\":[\"网站制作\"]},\"96\":{\"h\":\"啊u身上2\"},\"97\":{\"c\":[\"网站制作\"]},\"98\":{\"c\":[\"网站制作\"]},\"99\":{\"h\":\"a s3\"},\"100\":{\"c\":[\"网站制作爱上\"]},\"101\":{\"c\":[\"网站制作\"]},\"102\":{\"h\":\"s4\"},\"103\":{\"c\":[\"网站制作\"]},\"104\":{\"c\":[\"网站制作\"]},\"105\":{\"h\":\"2023.8.24\"},\"106\":{\"c\":[\"网站制作\"]},\"107\":{\"c\":[\"网站制作\"]},\"108\":{\"h\":\"2023.8.25\"},\"109\":{\"c\":[\"网站制作\"]},\"110\":{\"c\":[\"网站制作\"]},\"111\":{\"h\":\"2023.9.1\"},\"112\":{\"c\":[\"网站制作\"]},\"113\":{\"c\":[\"网站制作\"]},\"114\":{\"h\":\"python期末冲刺\"},\"115\":{\"c\":[\"网站制作\"]},\"116\":{\"c\":[\"网站制作\"]},\"117\":{\"h\":\"About Me\"},\"118\":{\"h\":\"Column\"},\"119\":{\"h\":\"Experience of Activity\"},\"120\":{\"h\":\"Month\"},\"121\":{\"h\":\"Year\"},\"122\":{\"h\":\"Skill Sharing\"},\"123\":{\"h\":\"Business Competion\"},\"124\":{\"h\":\"Class Presentation\"},\"125\":{\"h\":\"2023.8\"},\"126\":{\"h\":\"Day\"},\"127\":{\"h\":\"2023.9\"},\"128\":{\"h\":\"Python\"}},\"dirtCount\":0,\"index\":[[\"day\",{\"0\":{\"126\":1}}],[\"year\",{\"0\":{\"121\":1}}],[\"9\",{\"0\":{\"111\":1,\"127\":1}}],[\"啊u身上2\",{\"0\":{\"96\":1}}],[\"activity\",{\"0\":{\"119\":1}}],[\"about\",{\"0\":{\"117\":1}}],[\"a\",{\"0\":{\"99\":1}}],[\"aiyc1\",{\"0\":{\"93\":1}}],[\"a2023\",{\"0\":{\"22\":1}}],[\"乡村振兴大赛\",{\"0\":{\"90\":1}}],[\"经管案例竞赛\",{\"0\":{\"87\":1}}],[\"解密\",{\"0\":{\"84\":1}}],[\"month\",{\"0\":{\"120\":1}}],[\"me\",{\"0\":{\"117\":1}}],[\"markdown\",{\"1\":{\"83\":1}}],[\"mycomment\",{\"1\":{\"56\":1,\"58\":1,\"59\":1}}],[\"遇到重复文章怎么办\",{\"0\":{\"83\":1}}],[\"主\",{\"0\":{\"82\":1}}],[\"点击链接\",{\"1\":{\"80\":1}}],[\"可直接打开\",{\"0\":{\"80\":1}}],[\"可折叠\",{\"0\":{\"38\":1}}],[\"experience\",{\"0\":{\"119\":1}}],[\"emojis\",{\"1\":{\"79\":1}}],[\"enter\",{\"1\":{\"70\":1}}],[\"business\",{\"0\":{\"123\":1}}],[\"browse\",{\"1\":{\"79\":1}}],[\"bornforthis\",{\"1\":{\"71\":1}}],[\"unpkg\",{\"1\":{\"79\":1}}],[\"ui\",{\"1\":{\"56\":1,\"59\":1}}],[\"js\",{\"1\":{\"79\":1}}],[\"挑选头像\",{\"0\":{\"78\":1}}],[\"一方面把修改过的数据提交\",{\"1\":{\"77\":1}}],[\"一方面概括自己干了什么\",{\"1\":{\"77\":1}}],[\"一个大组里面套多个小组\",{\"0\":{\"39\":1}}],[\"sharing\",{\"0\":{\"122\":1}}],[\"skill\",{\"0\":{\"122\":1}}],[\"s4\",{\"0\":{\"102\":1}}],[\"s3\",{\"0\":{\"99\":1}}],[\"started\",{\"1\":{\"79\":1}}],[\"search\",{\"1\":{\"76\":1}}],[\"s2024\",{\"0\":{\"25\":1}}],[\"在自己网页里搜索关键词定位文章内容\",{\"0\":{\"76\":1}}],[\"在后台管理评论\",{\"0\":{\"56\":1}}],[\"x\",{\"1\":{\"75\":1,\"84\":1}}],[\"剪切\",{\"0\":{\"75\":1},\"1\":{\"84\":1}}],[\"停止\",{\"0\":{\"74\":1}}],[\"z\",{\"1\":{\"73\":1}}],[\"zh\",{\"1\":{\"57\":1,\"76\":1,\"83\":1}}],[\"撤回\",{\"0\":{\"73\":1}}],[\"减号+空格\",{\"1\":{\"72\":1}}],[\"获取准确时间\",{\"0\":{\"71\":1}}],[\"+\",{\"1\":{\"70\":1,\"73\":1,\"74\":1,\"75\":1,\"80\":1,\"83\":1,\"84\":1}}],[\"+86\",{\"1\":{\"1\":1}}],[\"三个\",{\"1\":{\"70\":1}}],[\"中英文网页文件区分\",{\"0\":{\"69\":1}}],[\"快速把多个页面并到一起\",{\"0\":{\"67\":1}}],[\"快速截图\",{\"0\":{\"55\":1}}],[\"设置\",{\"0\":{\"66\":1}}],[\"设置网页关键词\",{\"0\":{\"45\":1}}],[\"waline\",{\"1\":{\"79\":2}}],[\"www\",{\"1\":{\"65\":1}}],[\"weonlygettoday\",{\"1\":{\"58\":1,\"59\":1}}],[\"好用的图标库\",{\"0\":{\"65\":1}}],[\"用户可选的主题色\",{\"0\":{\"64\":1}}],[\"用于识别\",{\"1\":{\"32\":1}}],[\"修改个人简介\",{\"0\":{\"66\":1}}],[\"修改主题色\",{\"0\":{\"63\":1}}],[\"修改网页头像部分内容\",{\"0\":{\"53\":1}}],[\"修改网页头像\",{\"0\":{\"52\":1}}],[\"修改网页名称\",{\"0\":{\"44\":1}}],[\"向上键+enter\",{\"1\":{\"62\":1}}],[\"打开网页内容的路径\",{\"0\":{\"61\":1}}],[\"选中+command\",{\"1\":{\"60\":1}}],[\"注释掉\",{\"1\":{\"84\":1}}],[\"注释\",{\"0\":{\"60\":1}}],[\"注意大文件夹下直接有文件和还有一个文件夹\",{\"1\":{\"33\":1}}],[\"注意文件名和title\",{\"1\":{\"32\":1}}],[\"注意输入文件夹和文件后的显示效果\",{\"0\":{\"32\":1}}],[\"管理评论区\",{\"0\":{\"59\":1}}],[\"评论区\",{\"0\":{\"58\":1}}],[\"准备工作\",{\"1\":{\"57\":1}}],[\"feature\",{\"1\":{\"57\":1,\"76\":1}}],[\"vuejs\",{\"1\":{\"57\":1,\"76\":1,\"83\":1}}],[\"html\",{\"1\":{\"57\":1,\"76\":1,\"83\":1}}],[\"https\",{\"1\":{\"56\":1,\"57\":1,\"58\":1,\"59\":1,\"65\":1,\"71\":1,\"76\":1,\"79\":2,\"83\":1}}],[\"hope\",{\"1\":{\"57\":1,\"76\":1,\"83\":1}}],[\"theme\",{\"1\":{\"57\":1,\"76\":1,\"83\":1}}],[\"of\",{\"0\":{\"119\":1}}],[\"office\",{\"1\":{\"6\":1}}],[\"org\",{\"1\":{\"79\":1}}],[\"option+1+enter\",{\"1\":{\"55\":1}}],[\"保存网页本地修改内容\",{\"0\":{\"54\":1}}],[\"跳转仓库\",{\"0\":{\"51\":1}}],[\"脚注\",{\"0\":{\"49\":1}}],[\"部署到底有什么用\",{\"0\":{\"77\":1}}],[\"部署\",{\"0\":{\"48\":1}}],[\"仓库里\",{\"0\":{\"47\":1}}],[\"查看部署\",{\"0\":{\"47\":1,\"68\":1}}],[\"社交平台汇总\",{\"0\":{\"46\":1}}],[\"社团经历\",{\"0\":{\"4\":1}}],[\"左上角\",{\"0\":{\"44\":1,\"50\":1}}],[\"头像\",{\"0\":{\"44\":1}}],[\"5自定义\",{\"0\":{\"39\":1}}],[\"5744\",{\"1\":{\"1\":1}}],[\"看清楚路径包裹范围\",{\"0\":{\"35\":1}}],[\"如何修改菜单栏\",{\"0\":{\"82\":1}}],[\"如何设置自己的评论区教程以及各种表情包资源\",{\"0\":{\"79\":1}}],[\"如何打出圆点\",{\"0\":{\"72\":1}}],[\"如何打出淡色框\",{\"0\":{\"70\":1}}],[\"如何打开仓库\",{\"0\":{\"68\":1}}],[\"如何快速重启\",{\"0\":{\"62\":1}}],[\"如何重新部署\",{\"0\":{\"57\":1}}],[\"如何放置代码框\",{\"0\":{\"34\":1}}],[\"如何手动编写侧边栏\",{\"0\":{\"30\":1}}],[\"图标\",{\"0\":{\"33\":1}}],[\"自定义文件名\",{\"0\":{\"33\":1}}],[\"25\",{\"0\":{\"108\":1}}],[\"24\",{\"0\":{\"105\":1}}],[\"2第二种方法\",{\"0\":{\"33\":1}}],[\"20230729075619564\",{\"1\":{\"53\":1}}],[\"20230729074919344\",{\"1\":{\"52\":1}}],[\"20230729073213780\",{\"1\":{\"51\":1}}],[\"20230729072505222\",{\"1\":{\"51\":1}}],[\"20230729072117304\",{\"1\":{\"50\":1}}],[\"20230729071629597\",{\"1\":{\"49\":1}}],[\"20230728082422411\",{\"1\":{\"48\":1}}],[\"20230728082112750\",{\"1\":{\"47\":1}}],[\"20230728081749232\",{\"1\":{\"46\":1}}],[\"20230728075905817\",{\"1\":{\"45\":1}}],[\"20230728074842642\",{\"1\":{\"44\":1}}],[\"20230728074530741\",{\"1\":{\"44\":1}}],[\"20230728073302956\",{\"1\":{\"43\":1}}],[\"20230728072626503\",{\"1\":{\"43\":1}}],[\"20230824083954138\",{\"1\":{\"84\":1}}],[\"20230823090014256\",{\"1\":{\"84\":1}}],[\"20230823085917036\",{\"1\":{\"83\":1}}],[\"20230823085459751\",{\"1\":{\"83\":1}}],[\"20230823082051569\",{\"1\":{\"83\":1}}],[\"20230823080927249\",{\"1\":{\"83\":1}}],[\"20230825090450524\",{\"1\":{\"35\":1}}],[\"20230825084154912\",{\"1\":{\"34\":1}}],[\"20230818080215545\",{\"1\":{\"83\":1}}],[\"20230818073922771\",{\"1\":{\"82\":1}}],[\"20230813090004922\",{\"1\":{\"81\":1}}],[\"20230813082355006\",{\"1\":{\"78\":1}}],[\"20230813081053602\",{\"1\":{\"78\":1}}],[\"20230812080740526\",{\"1\":{\"78\":1}}],[\"20230812075118226\",{\"1\":{\"78\":1}}],[\"20230812075041650\",{\"1\":{\"78\":1}}],[\"20230812075017017\",{\"1\":{\"78\":1}}],[\"20230812074937473\",{\"1\":{\"78\":1}}],[\"20230812074900289\",{\"1\":{\"78\":1}}],[\"20230808082728705\",{\"1\":{\"76\":1}}],[\"20230808082656144\",{\"1\":{\"76\":1}}],[\"20230806092340374\",{\"1\":{\"69\":1}}],[\"20230806092154452\",{\"1\":{\"68\":1}}],[\"20230806085623481\",{\"1\":{\"67\":1}}],[\"20230805081704726\",{\"1\":{\"66\":1}}],[\"20230805081047652\",{\"1\":{\"64\":1}}],[\"20230805080959712\",{\"1\":{\"63\":1}}],[\"20230805072317873\",{\"1\":{\"61\":1}}],[\"20230801081142166\",{\"1\":{\"57\":1}}],[\"20230801081057344\",{\"1\":{\"57\":1}}],[\"20230801080750944\",{\"1\":{\"57\":1}}],[\"20230801080913326\",{\"1\":{\"57\":1}}],[\"20230804215344739\",{\"1\":{\"57\":1}}],[\"20230804213406169\",{\"1\":{\"57\":1}}],[\"20230804213316228\",{\"1\":{\"57\":1}}],[\"20230804213220737\",{\"1\":{\"57\":1}}],[\"20230804213038136\",{\"1\":{\"57\":1}}],[\"20230804212954572\",{\"1\":{\"57\":1}}],[\"20230831091649929\",{\"1\":{\"39\":1}}],[\"20230831091235838\",{\"1\":{\"38\":1}}],[\"20230831091118249\",{\"1\":{\"37\":1}}],[\"20230831090707995\",{\"1\":{\"36\":1}}],[\"20230831090446945\",{\"1\":{\"33\":1}}],[\"20230831080915456\",{\"1\":{\"84\":1}}],[\"20230831083520779\",{\"1\":{\"33\":1}}],[\"20230831084705914\",{\"1\":{\"31\":1}}],[\"2023\",{\"0\":{\"105\":1,\"108\":1,\"111\":1,\"125\":1,\"127\":1},\"1\":{\"3\":2}}],[\"2022\",{\"1\":{\"2\":1}}],[\"2026年毕业\",{\"1\":{\"2\":1}}],[\"输入的是文件名\",{\"1\":{\"32\":1}}],[\"iconfont\",{\"1\":{\"65\":1}}],[\"image\",{\"1\":{\"31\":1,\"33\":2,\"34\":1,\"35\":1,\"36\":1,\"37\":1,\"38\":1,\"39\":1,\"43\":2,\"44\":2,\"45\":1,\"46\":1,\"47\":1,\"48\":1,\"49\":1,\"50\":1,\"51\":2,\"52\":1,\"53\":1,\"57\":10,\"61\":1,\"63\":1,\"64\":1,\"66\":1,\"67\":1,\"68\":1,\"69\":1,\"76\":2,\"78\":8,\"81\":1,\"82\":1,\"83\":5,\"84\":3}}],[\"it技能\",{\"1\":{\"6\":1}}],[\"侧边栏名称无法自定义\",{\"0\":{\"31\":1}}],[\"文章编写\",{\"0\":{\"29\":1}}],[\"笔记整理\",{\"1\":{\"28\":1}}],[\"网站本地启动\",{\"0\":{\"43\":1}}],[\"网站制作爱上\",{\"2\":{\"100\":1}}],[\"网站制作\",{\"2\":{\"8\":1,\"9\":1,\"11\":1,\"12\":1,\"14\":1,\"15\":1,\"17\":1,\"18\":1,\"20\":1,\"21\":1,\"23\":1,\"24\":1,\"26\":1,\"27\":1,\"40\":1,\"41\":1,\"85\":1,\"86\":1,\"88\":1,\"89\":1,\"91\":1,\"92\":1,\"94\":1,\"95\":1,\"97\":1,\"98\":1,\"101\":1,\"103\":1,\"104\":1,\"106\":1,\"107\":1,\"109\":1,\"110\":1,\"112\":1,\"113\":1,\"115\":1,\"116\":1}}],[\"网页所有内容的路径\",{\"0\":{\"81\":1}}],[\"网页中侧边栏真正显示的是title\",{\"1\":{\"32\":1}}],[\"网页制作\",{\"1\":{\"28\":1}}],[\"链接\",{\"1\":{\"28\":1}}],[\"名称\",{\"1\":{\"28\":1}}],[\"presentation\",{\"0\":{\"124\":1}}],[\"press\",{\"1\":{\"57\":1,\"76\":1,\"83\":1}}],[\"progamming\",{\"0\":{\"28\":1}}],[\"python期末冲刺\",{\"0\":{\"114\":1}}],[\"python\",{\"0\":{\"128\":1},\"1\":{\"6\":1,\"71\":1}}],[\"南湖革命纪念馆讲解\",{\"0\":{\"16\":1}}],[\"南湖革命纪念馆志愿宣讲队成员\",{\"1\":{\"4\":1}}],[\"远\",{\"0\":{\"13\":1}}],[\"远程\",{\"1\":{\"3\":1}}],[\"对知识网红的崇拜让我们离针织更近\",{\"0\":{\"13\":1}}],[\"6\",{\"0\":{\"10\":1}}],[\"class\",{\"0\":{\"124\":1}}],[\"card\",{\"1\":{\"83\":1}}],[\"c\",{\"1\":{\"74\":1}}],[\"cn\",{\"1\":{\"65\":1,\"71\":1}}],[\"control\",{\"1\":{\"74\":1,\"75\":1}}],[\"column\",{\"0\":{\"28\":1,\"118\":1}}],[\"competion\",{\"0\":{\"123\":1}}],[\"command按住\",{\"1\":{\"80\":1}}],[\"command\",{\"1\":{\"73\":1,\"84\":1}}],[\"command+n\",{\"1\":{\"67\":1}}],[\"command+s\",{\"1\":{\"54\":1}}],[\"comment\",{\"1\":{\"57\":1}}],[\"com\",{\"1\":{\"1\":1,\"56\":1,\"58\":1,\"59\":1,\"79\":1}}],[\"cet\",{\"0\":{\"10\":1}}],[\"制作网页的笔记整理\",{\"0\":{\"7\":1,\"19\":1,\"42\":1}}],[\"阅读\",{\"1\":{\"6\":1}}],[\"辩论\",{\"1\":{\"6\":1}}],[\"宣讲\",{\"1\":{\"6\":1}}],[\"演讲\",{\"1\":{\"6\":1}}],[\"兴趣爱好\",{\"1\":{\"6\":1}}],[\"六级xx\",{\"1\":{\"6\":1}}],[\"大学英语四级562分\",{\"1\":{\"6\":1}}],[\"雅思xx分\",{\"1\":{\"6\":1}}],[\"托福\",{\"1\":{\"6\":1}}],[\"流利\",{\"1\":{\"6\":1}}],[\"英语\",{\"1\":{\"6\":1}}],[\"语言技能\",{\"1\":{\"6\":1}}],[\"其他信息\",{\"0\":{\"6\":1}}],[\"浙江省经济管理案例竞赛\",{\"1\":{\"5\":1}}],[\"浙江省乡村振兴大赛入围省赛\",{\"1\":{\"5\":1}}],[\"全国大学生英语竞赛省级三等奖\",{\"1\":{\"5\":1}}],[\"学科竞赛\",{\"0\":{\"5\":1}}],[\"班级心理委员\",{\"1\":{\"4\":1}}],[\"担任校史宣传视频主讲\",{\"1\":{\"4\":1}}],[\"多次主持校内大型活动\",{\"1\":{\"4\":1}}],[\"校主持队副队长\",{\"1\":{\"4\":1}}],[\"校级一等奖学金\",{\"1\":{\"2\":1}}],[\"商学院演讲赛亚军获得者\",{\"1\":{\"4\":1}}],[\"课外活动\",{\"0\":{\"4\":1}}],[\"市场助理\",{\"1\":{\"3\":1}}],[\"市场营销\",{\"1\":{\"2\":1}}],[\"欧莱雅\",{\"1\":{\"3\":1}}],[\"实习经历\",{\"0\":{\"3\":1}}],[\"专业排名第一\",{\"1\":{\"2\":1}}],[\"05\",{\"1\":{\"3\":1}}],[\"04\",{\"1\":{\"3\":1}}],[\"0\",{\"1\":{\"2\":1,\"79\":1}}],[\"08至今\",{\"1\":{\"2\":1}}],[\"4\",{\"0\":{\"37\":1},\"1\":{\"2\":1}}],[\"8\",{\"0\":{\"105\":1,\"108\":1,\"125\":1},\"1\":{\"2\":1}}],[\"3\",{\"0\":{\"36\":1},\"1\":{\"2\":1}}],[\"get\",{\"1\":{\"79\":1}}],[\"guide\",{\"1\":{\"57\":1,\"76\":1,\"79\":1,\"83\":1}}],[\"gpa\",{\"1\":{\"2\":1}}],[\"gmail\",{\"1\":{\"1\":1}}],[\"综合绩点\",{\"1\":{\"2\":1}}],[\"嘉兴学院本科\",{\"1\":{\"2\":1}}],[\"教育背景\",{\"0\":{\"2\":1}}],[\"宁波\",{\"1\":{\"1\":1}}],[\"坐标\",{\"1\":{\"1\":1}}],[\"qiuzhenqzzz\",{\"1\":{\"1\":1}}],[\"1第一种方法\",{\"0\":{\"31\":1}}],[\"1\",{\"0\":{\"30\":1,\"31\":1,\"33\":1,\"36\":1,\"37\":1,\"39\":1,\"111\":1},\"1\":{\"79\":2}}],[\"1337\",{\"1\":{\"1\":1}}],[\"150\",{\"1\":{\"1\":1}}],[\"联系方式\",{\"0\":{\"1\":1}}],[\"个人介绍\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
