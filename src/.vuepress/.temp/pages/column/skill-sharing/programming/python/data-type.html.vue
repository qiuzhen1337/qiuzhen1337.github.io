<template><div><h2 id="_1-数字型「int、float」" tabindex="-1"><a class="header-anchor" href="#_1-数字型「int、float」" aria-hidden="true">#</a> 1 数字型「int、float」</h2>
<h3 id="_1-1-代码示例" tabindex="-1"><a class="header-anchor" href="#_1-1-代码示例" aria-hidden="true">#</a> 1.1 代码示例</h3>
<ol>
<li>整型</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>int_num <span class="token operator">=</span> <span class="token number">1</span>
t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>int_num<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"int num type is:>>>"</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"直接检测数据类型，并输出:>>>"</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>int_num<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>浮点数</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>float_num <span class="token operator">=</span> <span class="token number">1.5</span>
t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>float_num<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>float_num<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"float num type is:>>>"</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"直接检测数据类型，并输出:>>>"</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>float_num<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-字符串「str」" tabindex="-1"><a class="header-anchor" href="#_2-字符串「str」" aria-hidden="true">#</a> 2 字符串「str」</h2>
<h3 id="_2-1-代码示例" tabindex="-1"><a class="header-anchor" href="#_2-1-代码示例" aria-hidden="true">#</a> 2.1 代码示例</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">"Hello qz"</span>
t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"string type is:>>>"</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"直接检测数据类型，并输出:>>>"</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-字符串三大特性" tabindex="-1"><a class="header-anchor" href="#_2-2-字符串三大特性" aria-hidden="true">#</a> 2.2 字符串三大特性</h3>
<h4 id="有序性" tabindex="-1"><a class="header-anchor" href="#有序性" aria-hidden="true">#</a> 有序性</h4>
<p>a 从左到右，下标是从 0 开始；</p>
<p>b 从右到左，下标是从 -1 开始；</p>
<p>c 引号中出现的，都算一个下标；</p>
<h4 id="不可变性" tabindex="-1"><a class="header-anchor" href="#不可变性" aria-hidden="true">#</a> 不可变性</h4>
<p>a 字符串被创建出来后就不能被改变；</p>
<p>注意：修改不等于覆盖，我们说的不可变，是在代码运行的过程中，不能对字符串有修改、添加、删除之类的操作；</p>
<h4 id="任意字符" tabindex="-1"><a class="header-anchor" href="#任意字符" aria-hidden="true">#</a> 任意字符</h4>
<p>a 键盘上可以输入的字符，都可以是字符串的元素；</p>
<p>b 字符放到字符串中，都将成为字符串类型。「也就是说：里面每一个元素都可以称为子字符」</p>
<h2 id="_3-列表「list」" tabindex="-1"><a class="header-anchor" href="#_3-列表「list」" aria-hidden="true">#</a> 3. 列表「list」</h2>
<h3 id="_3-1-代码示例" tabindex="-1"><a class="header-anchor" href="#_3-1-代码示例" aria-hidden="true">#</a> 3.1 代码示例</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Hello QZ"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.1</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">"look"</span><span class="token punctuation">,</span><span class="token string">"book"</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token string">"qzz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">]</span>
t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"lst type is:>>>"</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"直接检测数据类型，并输出:>>>"</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-列表的三大特性" tabindex="-1"><a class="header-anchor" href="#_3-2-列表的三大特性" aria-hidden="true">#</a> 3.2 列表的三大特性</h3>
<h4 id="有序性-1" tabindex="-1"><a class="header-anchor" href="#有序性-1" aria-hidden="true">#</a> 有序性</h4>
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
</ol>
<h4 id="可变性" tabindex="-1"><a class="header-anchor" href="#可变性" aria-hidden="true">#</a> 可变性</h4>
<p>在程序运行过程中，列表可以「添加、删除、修改」</p>
<h4 id="任意数据类型" tabindex="-1"><a class="header-anchor" href="#任意数据类型" aria-hidden="true">#</a> 任意数据类型</h4>
<p>注意：这里说的任意数据类型，指的是 Python 所拥有的数据类型；比如♾️️不能直接使用，必须当作字符串来使用，或是当作变量来使用</p>
<details class="hint-container details"><summary>Python 所拥有的数据类型</summary>
<figure><img src="@source/column/skill-sharing/programming/python/data-type.assets/image-20230922071752720.png" alt="image-20230922071752720" tabindex="0" loading="lazy"><figcaption>image-20230922071752720</figcaption></figure>
</details>
</div></template>


