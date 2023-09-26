<template><div><h2 id="_1-数字型「int、float」" tabindex="-1"><a class="header-anchor" href="#_1-数字型「int、float」" aria-hidden="true">#</a> 1 数字型「int、float」</h2>
<h3 id="_1-1-代码示例" tabindex="-1"><a class="header-anchor" href="#_1-1-代码示例" aria-hidden="true">#</a> 1.1 代码示例</h3>
<ol>
<li>整型</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>int_num <span class="token operator">=</span> <span class="token number">1</span>
t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>int_num<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"int num type is:>>>"</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"直接检测数据类型，并输出:>>>"</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>int_num<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token builtin">int</span> num <span class="token builtin">type</span> <span class="token keyword">is</span><span class="token punctuation">:</span><span class="token operator">>></span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'int'</span><span class="token operator">></span>
直接检测数据类型，并输出<span class="token punctuation">:</span><span class="token operator">>></span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'int'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>浮点数</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>float_num <span class="token operator">=</span> <span class="token number">1.5</span>
t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>float_num<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>float_num<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"float num type is:>>>"</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"直接检测数据类型，并输出:>>>"</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>float_num<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">1.5</span>
<span class="token builtin">float</span> num <span class="token builtin">type</span> <span class="token keyword">is</span><span class="token punctuation">:</span><span class="token operator">>></span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'float'</span><span class="token operator">></span>
直接检测数据类型，并输出<span class="token punctuation">:</span><span class="token operator">>></span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'float'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-字符串「str」" tabindex="-1"><a class="header-anchor" href="#_2-字符串「str」" aria-hidden="true">#</a> 2 字符串「str」</h2>
<h3 id="_2-1-代码示例" tabindex="-1"><a class="header-anchor" href="#_2-1-代码示例" aria-hidden="true">#</a> 2.1 代码示例</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">"Hello qz"</span>
t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"string type is:>>>"</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"直接检测数据类型，并输出:>>>"</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
Hello qz
string <span class="token builtin">type</span> <span class="token keyword">is</span><span class="token punctuation">:</span><span class="token operator">>></span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str'</span><span class="token operator">></span>
直接检测数据类型，并输出<span class="token punctuation">:</span><span class="token operator">>></span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-字符串三大特性" tabindex="-1"><a class="header-anchor" href="#_2-2-字符串三大特性" aria-hidden="true">#</a> 2.2 字符串三大特性</h3>
<ol>
<li>有序性</li>
</ol>
<p>a 从左到右，下标是从 0 开始；</p>
<p>b 从右到左，下标是从 -1 开始；</p>
<p>c 引号中出现的，都算一个下标；</p>
<ol start="2">
<li>不可变性</li>
</ol>
<p>a 字符串被创建出来后就不能被改变；</p>
<p>注意：修改不等于覆盖，我们说的不可变，是在代码运行的过程中，不能对字符串有修改、添加、删除之类的操作；</p>
<ol start="3">
<li>任意字符</li>
</ol>
<p>a 键盘上可以输入的字符，都可以是字符串的元素；</p>
<p>b 字符放到字符串中，都将成为字符串类型。「也就是说：里面每一个元素都可以称为子字符」</p>
<h2 id="_3-列表「list」" tabindex="-1"><a class="header-anchor" href="#_3-列表「list」" aria-hidden="true">#</a> 3. 列表「list」</h2>
<h3 id="_3-1-代码示例" tabindex="-1"><a class="header-anchor" href="#_3-1-代码示例" aria-hidden="true">#</a> 3.1 代码示例</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Hello QZ"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.1</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">"look"</span><span class="token punctuation">,</span><span class="token string">"book"</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token string">"qzz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">]</span>
t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"lst type is:>>>"</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"直接检测数据类型，并输出:>>>"</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">[</span><span class="token string">'Hello QZ'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">'look'</span><span class="token punctuation">,</span> <span class="token string">'book'</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">'qzz'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">]</span>
lst <span class="token builtin">type</span> <span class="token keyword">is</span><span class="token punctuation">:</span><span class="token operator">>></span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'list'</span><span class="token operator">></span>
直接检测数据类型，并输出<span class="token punctuation">:</span><span class="token operator">>></span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'list'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-列表的三大特性" tabindex="-1"><a class="header-anchor" href="#_3-2-列表的三大特性" aria-hidden="true">#</a> 3.2 列表的三大特性</h3>
<ol>
<li>有序性</li>
</ol>
<p>a 从左到右，下标是从 0 开始；</p>
<p>b 从右到左，下标是从 -1 开始；</p>
<p>c 列表里的每个元素算一个；</p>
<ol>
<li>
<p>比如：lst = [“qzzzzzz”,12]</p>
</li>
<li>
<p>上面 lst 有两个元素，下标分别是：</p>
<p>1.qzzzzzz 是 0，也是 -2；</p>
<p>2.12下标是 1，也是 -1；</p>
</li>
<li>
<p>可变性</p>
</li>
</ol>
<p>在程序运行过程中，列表可以「添加、删除、修改」</p>
<ol start="3">
<li>任意数据类型</li>
</ol>
<p>注意：这里说的任意数据类型，指的是 Python 所拥有的数据类型；比如♾️️不能直接使用，必须当作字符串来使用，或是当作变量来使用</p>
<details class="hint-container details"><summary>Python 所拥有的数据类型。</summary>
<figure><img src="@source/column/skill-sharing/programming/python/data-type.assets/image-20230922071752720.png" alt="image-20230922071752720" tabindex="0" loading="lazy"><figcaption>image-20230922071752720</figcaption></figure>
</details>
<h2 id="_4-0-元组" tabindex="-1"><a class="header-anchor" href="#_4-0-元组" aria-hidden="true">#</a> 4.0 元组</h2>
<h3 id="_4-1-代码示例" tabindex="-1"><a class="header-anchor" href="#_4-1-代码示例" aria-hidden="true">#</a> 4.1 代码示例</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">"aiyc"</span><span class="token punctuation">,</span><span class="token number">1.1</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"tup type is:>>>"</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"直接检测数据类型，并输出:>>>"</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-元组的三大特性" tabindex="-1"><a class="header-anchor" href="#_4-2-元组的三大特性" aria-hidden="true">#</a> 4.2 元组的三大特性</h3>
<ol>
<li>有序性</li>
</ol>
<p>a 从左到右，下标是从 0 开始；</p>
<p>b 从右到左，下标是从 -1 开始；</p>
<ol start="2">
<li>不可变性</li>
</ol>
<p>a 字符串被创建出来后就不能被改变；</p>
<p>注意：修改不等于覆盖，我们说的不可变，是在代码运行的过程中，不能对字符串有修改、添加、删除之类的操作；</p>
<ol start="3">
<li>任意数据类型</li>
</ol>
<h2 id="_5-0-探究「列表-元组」" tabindex="-1"><a class="header-anchor" href="#_5-0-探究「列表-元组」" aria-hidden="true">#</a> 5.0 探究「列表&amp;元组」</h2>
<div class="hint-container info">
<p class="hint-container-title">温馨提示</p>
<p>为什么有列表后，还需要元组</p>
</div>
<ol>
<li>如果存储的数据或数量是可变的，比如社交平台上的一个日志功能，是统计一个用户在一周之内看了哪些用户的帖子——那么则用列表更合适。</li>
<li>如果存储的数据和数量不变，比如你有一个系统（软件），需要返回的是一个地点的经纬度，然后直接传给用户查看——那么肯定选用元组更合适。</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>注意：需要根据情况灵活机动应变。如你需要每天更新一些经纬度，那就可以把一组设为元组，总体设为列表。</p>
<p>可以全列表，也可以全元组，也可元组列表结合</p>
<p>区别：1. 列表可直接添加，元组需新建后添加</p>
<p>2.列表需时时跟踪状态，元组不需要，可直接新建添加</p>
<p>既有确定，也有不确定的部分比较难？</p>
</div>
<ul>
<li>
<p><strong>假设</strong></p>
<ul>
<li>
<p>假设1：现在有一个仓库，你要向仓库添加物品。仓库很大，现用的物品也很多，你不知道还有没有位置可以存放。此时我们是不是需要聘请一个仓库管理员，这样我们就可以直接问仓库管理员：里面还有哪个位置（是否有位置？）仓库管理员会告诉你，并且你可以直接把你的物品，添加进去。</p>
<p>问题来了，仓库管理员为什么知道仓库是否有位置？——因为仓库管理员会一直跟踪这个仓库的状态；</p>
</li>
<li>
<p>假设2：现在有一个原子弹的仓库，仓库创建之后，只能存放一个原子弹。那么，我们需要设立一个专门的人员跟踪：原子弹仓库的状态吗？——不需要，此时在聘请一个就显得浪费了。（不然，领导没油水了～hhhhh）</p>
</li>
</ul>
</li>
<li>
<p><strong>Why？</strong></p>
<ul>
<li>用户日志📔，是不是会一直变动（记录📝看了哪些帖子），我们是不是需要有一个类似仓库管理员的“人”，来跟踪并且知道：是否有位置（是否有空间/内存），还需要知道在哪里添加。——列表更合适，因为列表可变。「可变意味着：添加、删除、修改」
<ul>
<li>元组为什么不合适？——因为，你每当需要添加数据的时候，就得重新创建一个新的元组。（就类似于：你创建原子弹的仓库，肯定是刚刚好可以存放一个，那么你想存放两个的时候，只能重新再创建一个仓库。）</li>
</ul>
</li>
<li>经纬度会改变吗？显然是不会的，那么就不需要一个多余的“人”去跟踪状态。——用列表可以吗？可以！但是没必要。「因为我们不需要仓库管理员」用列表有点浪费资源了。元组的功能刚刚好够用。</li>
<li><strong><span style="color:orange">我们讲究：不浪费，合适就好。</span></strong></li>
</ul>
</li>
</ul>
<h2 id="_6-0-字典" tabindex="-1"><a class="header-anchor" href="#_6-0-字典" aria-hidden="true">#</a> 6.0 字典</h2>
<h3 id="_6-1-代码示例" tabindex="-1"><a class="header-anchor" href="#_6-1-代码示例" aria-hidden="true">#</a> 6.1 代码示例</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"qz"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token string">"int"</span><span class="token punctuation">,</span><span class="token number">1.1</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"tup"</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"tup type is:>>>"</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"直接检测数据类型，并输出:>>>"</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-字典的特性" tabindex="-1"><a class="header-anchor" href="#_6-2-字典的特性" aria-hidden="true">#</a> 6.2 字典的特性</h3>
<ol>
<li>
<p>无序性</p>
</li>
<li>
<p>字典的组成：</p>
</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span>“key1” <span class="token punctuation">:</span> “value1” <span class="token punctuation">,</span> “key2” <span class="token punctuation">:</span> “value2” <span class="token punctuation">,</span> ……<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>
<p>key：不可变的数据类型才可以当key，比如：字符串，数字，布尔，元组</p>
</li>
<li>
<p>value：任意数据类型</p>
</li>
<li>
<p>可变性：可以添加、修改、删除键对值</p>
</li>
</ol>
</div></template>


