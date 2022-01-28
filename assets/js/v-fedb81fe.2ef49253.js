"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[353],{6930:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-fedb81fe",path:"/docs/configuration/authentifications/header.html",title:"Header configuration (reverse proxy)",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/authentifications/header.md",git:{updatedTime:1643353215e3,contributors:[{name:"wktsugue",email:"40995323+wktsugue@users.noreply.github.com",commits:1}]}}},3159:(n,a,s)=>{s.r(a),s.d(a,{default:()=>o});const e=(0,s(6252).uE)('<h1 id="header-configuration-reverse-proxy" tabindex="-1"><a class="header-anchor" href="#header-configuration-reverse-proxy" aria-hidden="true">#</a> Header configuration (reverse proxy)</h1><p>To enable Header authentication in the application, you&#39;ll have to configure the header that will resolve users &amp; groups:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token comment"># Header configuration (reverse proxy)</span>\n    <span class="token key atrule">header-auth</span><span class="token punctuation">:</span>\n      <span class="token key atrule">user-header</span><span class="token punctuation">:</span> x<span class="token punctuation">-</span>akhq<span class="token punctuation">-</span>user <span class="token comment"># mandatory (the header name that will contain username)</span>\n      <span class="token key atrule">groups-header</span><span class="token punctuation">:</span> x<span class="token punctuation">-</span>akhq<span class="token punctuation">-</span>group <span class="token comment"># optional (the header name that will contain groups separated by groups-header-separator)</span>\n      <span class="token key atrule">groups-header-separator</span><span class="token punctuation">:</span> <span class="token punctuation">,</span> <span class="token comment"># optional (separator, defaults to &#39;,&#39;)</span>\n      <span class="token key atrule">ip-patterns</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>0.0.0.0<span class="token punctuation">]</span> <span class="token comment"># optional (Java regular expressions for matching trusted IP addresses, &#39;0.0.0.0&#39; matches all addresses)</span>\n      <span class="token key atrule">default-group</span><span class="token punctuation">:</span> topic<span class="token punctuation">-</span>reader\n      <span class="token key atrule">groups</span><span class="token punctuation">:</span> <span class="token comment"># optional</span>\n        <span class="token comment"># the name of the user group read from header</span>\n        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> header<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>group\n          <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n            <span class="token comment"># the corresponding akhq groups (eg. topic-reader/writer or akhq default groups like admin/reader/no-role)</span>\n            <span class="token punctuation">-</span> admin\n      <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token comment"># optional</span>\n        <span class="token punctuation">-</span> <span class="token key atrule">username</span><span class="token punctuation">:</span> header<span class="token punctuation">-</span>user <span class="token comment"># username matching the `user-header` value</span>\n          <span class="token key atrule">groups</span><span class="token punctuation">:</span> <span class="token comment"># list of groups / additional groups</span>\n            <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>writer\n        <span class="token punctuation">-</span> <span class="token key atrule">username</span><span class="token punctuation">:</span> header<span class="token punctuation">-</span>admin\n          <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> admin\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ul><li><code>user-header</code> is mandatory in order to map the user with <code>users</code> list or to display the user on the ui if no <code>users</code> is provided.</li><li><code>groups-header</code> is optional and can be used in order to inject a list of groups for all the users. This list will be merged with <code>groups</code> for the current users.</li><li><code>groups-header-separator</code> is optional and can be used to customize group separator used when parsing <code>groups-header</code> header, defaults to <code>,</code>.</li><li><code>ip-patterns</code> limits the IP addresses that header authentication will accept, given as a list of Java regular expressions, omit or set to <code>[0.0.0.0]</code> to allow all addresses</li><li><code>default-group</code> default AKHQ group, used when no groups were read from <code>groups-header</code></li><li><code>groups</code> maps external group names read from headers to AKHQ groups.</li><li><code>users</code> assigns additional AKHQ groups to users.</li></ul>',4),t={},o=(0,s(3744).Z)(t,[["render",function(n,a){return e}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,e]of a)n[s]=e;return n}}}]);