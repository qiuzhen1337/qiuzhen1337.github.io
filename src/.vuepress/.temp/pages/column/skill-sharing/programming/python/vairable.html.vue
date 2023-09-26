<template><div><p>你好，我是仇真。</p>
<h2 id="_1-理解变量" tabindex="-1"><a class="header-anchor" href="#_1-理解变量" aria-hidden="true">#</a> 1. 理解变量</h2>
<h3 id="_1-1-从字面意思去理解" tabindex="-1"><a class="header-anchor" href="#_1-1-从字面意思去理解" aria-hidden="true">#</a> 1.1 从字面意思去理解</h3>
<p>变量—变化的数量/大小</p>
<h3 id="_1-2-形象的比喻" tabindex="-1"><a class="header-anchor" href="#_1-2-形象的比喻" aria-hidden="true">#</a> 1.2 形象的比喻</h3>
<p>在计算机内存中开辟一个可以放东西的空间，如信封、冰箱……</p>
<h3 id="_1-3-举个例子" tabindex="-1"><a class="header-anchor" href="#_1-3-举个例子" aria-hidden="true">#</a> 1.3 举个例子</h3>
<p>假如，你是班级当中的课代表，每个月需要统计班级中每个学生的月考成绩。月考成绩会每个月一张纸，每张纸上都会依次记录每个学生的成绩月考成绩，例如：</p>
<ol>
<li>李雷    98分</li>
<li>马冬梅    89分</li>
<li>刘奕彤     96分</li>
<li>......</li>
</ol>
<p>某一天，老师要看刘奕彤 1月、2月、3月的成绩，这个时候作为课代表的你需要怎么办。——总不能直接把每个月的月考成绩单直接给老师，显然是不合适的。</p>
<p>我们应该把刘奕彤 1月、2月、3月的成绩抄写到单独的一张纸上，接着给老师。</p>
<p>那么，我们为什么不一开始直接为每一个学生分配一个信封呢？（也可以是档案袋）信封在一开始是扁的，当我们放东西（数据）进去之后，是不是鼓起来了？——是不是变化了？是不是有大小了呢？显然是的。</p>
<p>那么信封，是不是在我们当前所处的空间当中开辟空间，来存放数据并且说这是信封。</p>
<p>类似的有：冰箱，不也是在我们当前所处的空间中，开辟空间。</p>
<p>——所以，变量不就是在计算机的内存当中开辟空间，来存储数据。</p>
<h3 id="_1-4-变量会被覆盖" tabindex="-1"><a class="header-anchor" href="#_1-4-变量会被覆盖" aria-hidden="true">#</a> 1.4 变量会被覆盖</h3>
<p>空间中只有一个位置，只能把数据叠放，所以最终显示出的是最后赋予的值。</p>
<h2 id="_2-如何创建变量—赋值语句" tabindex="-1"><a class="header-anchor" href="#_2-如何创建变量—赋值语句" aria-hidden="true">#</a> 2. 如何创建变量—赋值语句</h2>
<h3 id="_2-1-变量" tabindex="-1"><a class="header-anchor" href="#_2-1-变量" aria-hidden="true">#</a> 2.1 变量</h3>
<p>通过变量名代表或引用某个值</p>
<h3 id="_2-2-初始化赋值语句" tabindex="-1"><a class="header-anchor" href="#_2-2-初始化赋值语句" aria-hidden="true">#</a> 2.2 初始化赋值语句</h3>
<p>变量名 = 表达式</p>
<p>注意：“=”为赋值运算符，并不是相等，而是赋值。举例：x=3</p>
<p>程序的运行逻辑：先从上到下，再从右到左，最后才是赋值（先一行行运算，再运算右边，最后赋值给左边）</p>
<CodeTabs id="91" :data='[{"id":"demo1"},{"id":"demo2"}]'>
<template #title0="{ value, isActive }">demo1</template>
<template #title1="{ value, isActive }">demo2</template>
<template #tab0="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">1</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># print 打印输出</span>
<span class="token comment"># 井号是注释作用：我们看得见，计算机看不算，属于代码的注解、说明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>name1 <span class="token operator">=</span> <span class="token string">"lilei"</span>
name2 <span class="token operator">=</span> name1 <span class="token comment"># 变量值的传递</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name2<span class="token punctuation">)</span>
<span class="token comment"># 注释快捷键：Command + /</span>

name1 <span class="token operator">=</span> <span class="token string">"lilei"</span>
name1 <span class="token operator">=</span> <span class="token string">"qiuzhen"</span> <span class="token comment"># 变量值的覆盖</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name1<span class="token punctuation">)</span>

<span class="token comment"># output</span>
lilei
qiuzhen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="_3-探究print" tabindex="-1"><a class="header-anchor" href="#_3-探究print" aria-hidden="true">#</a> 3. 探究print</h2>
<h3 id="_3-1-同时输出多个数据" tabindex="-1"><a class="header-anchor" href="#_3-1-同时输出多个数据" aria-hidden="true">#</a> 3.1 同时输出多个数据</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment"># print 同时输出多个变量，默认以空格间隔</span>

<span class="token comment"># output</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认以空格间隔，可以使用sep修改。</p>
<h3 id="_3-2-sep-修改多个变量同时输出的间隔" tabindex="-1"><a class="header-anchor" href="#_3-2-sep-修改多个变量同时输出的间隔" aria-hidden="true">#</a> 3.2 sep 修改多个变量同时输出的间隔</h3>
<CodeTabs id="112" :data='[{"id":"demo1"},{"id":"demo2"}]'>
<template #title0="{ value, isActive }">demo1</template>
<template #title1="{ value, isActive }">demo2</template>
<template #tab0="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment"># print 同时输出多个变量，默认以空格间隔</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">)</span> <span class="token comment"># 双引号里是什么就以什么间隔</span>

<span class="token comment"># output</span>
<span class="token number">1</span> <span class="token number">1</span> <span class="token number">1</span>
<span class="token number">111</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">"xdsnqlo"</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
1xdsnqlo1xdsnqlo1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_3-3-end-修改-print-输出结尾的方式" tabindex="-1"><a class="header-anchor" href="#_3-3-end-修改-print-输出结尾的方式" aria-hidden="true">#</a> 3.3 end 修改 print 输出结尾的方式</h3>
<CodeTabs id="123" :data='[{"id":"原本"},{"id":"1"}]'>
<template #title0="{ value, isActive }">原本</template>
<template #title1="{ value, isActive }">1</template>
<template #tab0="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment"># 默认以换行结尾</span>

<span class="token comment"># output</span>
<span class="token number">1</span>
<span class="token number">1</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">"\n\n\n"</span><span class="token punctuation">)</span> <span class="token comment"># \n 代表一次换行</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">"xsolanqxaojsc"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">","</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">1</span>


1xsolanqxaojsc1<span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_3-4-end-和-sep-可以同时使用" tabindex="-1"><a class="header-anchor" href="#_3-4-end-和-sep-可以同时使用" aria-hidden="true">#</a> 3.4 end 和 sep 可以同时使用</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">"-"</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">"love qz"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">" "</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">"\n"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">"love qz"</span><span class="token punctuation">)</span> <span class="token comment"># end 只会针对此 print</span>

<span class="token comment"># output</span>
<span class="token number">1</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>1love qz1 <span class="token number">1</span> <span class="token number">1</span>
<span class="token number">111</span>
<span class="token number">1</span> <span class="token number">1</span> 1love qz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量专项练习-例题-1-交换果汁" tabindex="-1"><a class="header-anchor" href="#变量专项练习-例题-1-交换果汁" aria-hidden="true">#</a> 变量专项练习 例题 1 交换果汁</h3>
<p>假如你有两个小孩，哥哥叫：Austin，弟弟叫：Jaden。</p>
<p>Austin 想喝<strong>果汁</strong>，Jaden 想喝<strong>可乐</strong>。<strong>哥哥和弟弟都有专属的杯子，不喜欢用对方的杯子。</strong></p>
<p>家中仅剩一杯果汁、一杯可乐，你不小心把哥哥的杯子装了可乐，弟弟的杯子装了果汁。</p>
<p><strong>问：如何交换哥哥与弟弟杯中的果汁？</strong></p>
<CodeTabs id="150" :data='[{"id":"通用"},{"id":"python专属"}]'>
<template #title0="{ value, isActive }">通用</template>
<template #title1="{ value, isActive }">python专属</template>
<template #tab0="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">"Coke"</span>  <span class="token comment"># 该赋值可以理解为倒果汁的过程</span>
Jaden <span class="token operator">=</span> <span class="token string">"juice"</span>  <span class="token comment"># 该赋值可以理解为倒果汁的过程</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
cup1 <span class="token operator">=</span> Jaden     <span class="token comment"># 答案 #注意：在没有新饮料的情况下，要交换饮料，而不是重新到两杯</span>
Jaden <span class="token operator">=</span> Austin   <span class="token comment"># 答案 #思路：必须有一个新容器来存放其中一种饮料，一个杯子空了之后就可以换入对的饮料，再把空杯子内的饮料倒入另一个杯子</span>
Austin <span class="token operator">=</span> cup1    <span class="token comment"># 答案</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>

<span class="token comment"># output</span>
Austin Coke
Jaden juice
Austin juice
Jaden Coke
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">"Coke"</span>  <span class="token comment"># 该赋值可以理解为倒果汁的过程</span>
Jaden <span class="token operator">=</span> <span class="token string">"juice"</span>  <span class="token comment"># 该赋值可以理解为倒果汁的过程</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
Austin<span class="token punctuation">,</span>Jaden <span class="token operator">=</span> Jaden<span class="token punctuation">,</span>Austin  <span class="token comment"># 答案 </span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>

<span class="token comment"># output</span>
Austin Coke
Jaden juice
Austin juice
Jaden Coke
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="例题-2-创建变量并输出" tabindex="-1"><a class="header-anchor" href="#例题-2-创建变量并输出" aria-hidden="true">#</a> 例题 2 创建变量并输出</h3>
<ol>
<li>输出效果：</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>Austin Jaden Alex Cava
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>输出效果如下：</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>Austin$Jaden$Alex$Cava<span class="token operator">%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a<span class="token operator">=</span><span class="token string">"Austin"</span>
b<span class="token operator">=</span><span class="token string">"Jaden"</span>
c<span class="token operator">=</span><span class="token string">"Alex"</span>
d<span class="token operator">=</span><span class="token string">"Cava"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>sep<span class="token operator">=</span><span class="token string">"$"</span><span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">"%"</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
Austin Jaden Alex Cava
Austin$Jaden$Alex$Cava<span class="token operator">%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-变量命名规则" tabindex="-1"><a class="header-anchor" href="#_3-5-变量命名规则" aria-hidden="true">#</a> 3.5 变量命名规则</h3>
<ul>
<li>
<p>大小写英文、数字和<code v-pre>_</code>的结合，且不能用数字开头；</p>
</li>
<li>
<p>系统关键词不能做变量名使用； 获取关键字列表：help(‘keywords’)</p>
</li>
<li>
<p>python中的变量名区分大小写；</p>
</li>
<li>
<p>变量名不能包含空格，但可以使用下划线来分隔其中的单词；</p>
</li>
<li>
<p>不要使用python的内置函数名称做变量名；</p>
<figure><img src="@source/column/skill-sharing/programming/python/vairable.assets/image-20230913083608030.png" alt="image-20230913083608030" tabindex="0" loading="lazy"><figcaption>image-20230913083608030</figcaption></figure>
</li>
</ul>
<CodeTabs id="211" :data='[{"id":"Code1"},{"id":"Code2"},{"id":"Code3"},{"id":"Code4"},{"id":"Code5"}]'>
<template #title0="{ value, isActive }">Code1</template>
<template #title1="{ value, isActive }">Code2</template>
<template #title2="{ value, isActive }">Code3</template>
<template #title3="{ value, isActive }">Code4</template>
<template #title4="{ value, isActive }">Code5</template>
<template #tab0="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>n <span class="token operator">=</span> <span class="token string">"A"</span>
N <span class="token operator">=</span> <span class="token string">"a"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment"># 如果不区分大小写的话，输出什么结果？---a</span>
<span class="token comment"># 但是，它区分大小写，所以输出 A</span>

<span class="token comment"># output</span>
A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 数字不能开头</span>
a121iy212c21 <span class="token operator">=</span> <span class="token string">"a"</span> <span class="token comment"># 数字不能开头，除了开头，其他都可以</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>user_name <span class="token operator">=</span> <span class="token string">"aiyc"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span> <span class="token operator">=</span> <span class="token string">"aiyc"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">print</span><span class="token punctuation">)</span> <span class="token comment"># 内置函数名不能当做变量名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab4="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 关键词不能当做变量名</span>
<span class="token keyword">await</span> <span class="token operator">=</span> <span class="token string">"aiyc"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">while</span><span class="token punctuation">)</span> <span class="token comment"># await 在 Python 当中有特殊功能，比如 while</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>


