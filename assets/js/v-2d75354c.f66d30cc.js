"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[777],{2619:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-2d75354c",path:"/docs/configuration/schema-registry/tibco.html",title:"TIBCO schema registry",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/schema-registry/tibco.md",git:{updatedTime:1643313903e3,contributors:[{name:"jgrammen-agilitypr",email:"jason.grammenos@agilitypr.com",commits:1}]}}},6375:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="tibco-schema-registry" tabindex="-1"><a class="header-anchor" href="#tibco-schema-registry" aria-hidden="true">#</a> TIBCO schema registry</h1><p>If you are using the TIBCO schema registry, you will also need to mount and use the TIBCO Avro client library and its dependencies. The akhq service in a docker compose file might look something like:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>  <span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n    <span class="token comment"># build:</span>\n    <span class="token comment">#   context: .</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> tchiotludo/akhq\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /opt/tibco/akd/repo/1.2/lib/tibftl<span class="token punctuation">-</span>kafka<span class="token punctuation">-</span>avro<span class="token punctuation">-</span>1.2.0<span class="token punctuation">-</span>thin.jar<span class="token punctuation">:</span>/app/tibftl<span class="token punctuation">-</span>kafka<span class="token punctuation">-</span>avro<span class="token punctuation">-</span>1.2.0<span class="token punctuation">-</span>thin.jar\n      <span class="token punctuation">-</span> /opt/tibco/akd/repo/1.2/lib/deps<span class="token punctuation">:</span>/app/deps\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token key atrule">AKHQ_CONFIGURATION</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n        akhq:\n          connections:\n            docker-kafka-server:\n              properties:\n                bootstrap.servers: &quot;kafka:9092&quot;\n              schema-registry:\n                type: &quot;tibco&quot;\n                url: &quot;http://repo:8081&quot;\n              connect:\n                - name: &quot;connect&quot;\n                  url: &quot;http://connect:8083&quot;</span>\n      <span class="token key atrule">CLASSPATH</span><span class="token punctuation">:</span> <span class="token string">&quot;/app/tibftl-kafka-avro-1.2.0-thin.jar:/app/deps/*&quot;</span>\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>\n    <span class="token key atrule">links</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> kafka\n      <span class="token punctuation">-</span> repo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',3),t={},p=(0,a(3744).Z)(t,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);