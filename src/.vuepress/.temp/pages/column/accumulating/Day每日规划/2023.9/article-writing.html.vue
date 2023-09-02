<template><div><h2 id="_1标题编写" tabindex="-1"><a class="header-anchor" href="#_1标题编写" aria-hidden="true">#</a> 1标题编写</h2>
<h2 id="标题二" tabindex="-1"><a class="header-anchor" href="#标题二" aria-hidden="true">#</a> 标题二</h2>
<h3 id="标题三" tabindex="-1"><a class="header-anchor" href="#标题三" aria-hidden="true">#</a> 标题三</h3>
<p>……</p>
<h6 id="标题六" tabindex="-1"><a class="header-anchor" href="#标题六" aria-hidden="true">#</a> 标题六</h6>
<h2 id="_2图片" tabindex="-1"><a class="header-anchor" href="#_2图片" aria-hidden="true">#</a> 2图片</h2>
<figure><img src="@source/column/accumulating/Day每日规划/2023.9/2023.9.1.assets/image-20230901082027927.png" alt="image-20230901082027927" tabindex="0" loading="lazy"><figcaption>image-20230901082027927</figcaption></figure>
<h2 id="_3代码" tabindex="-1"><a class="header-anchor" href="#_3代码" aria-hidden="true">#</a> 3代码</h2>
<p>英文输入法下 “1”左边按键，按三次，并输入编程语言的类型，然后回车。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>```python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4任务列表" tabindex="-1"><a class="header-anchor" href="#_4任务列表" aria-hidden="true">#</a> 4任务列表</h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 减号+空格+英文中括号+x+空格   必须要在每行顶格</label></li>
</ul>
<h2 id="_5无序列表" tabindex="-1"><a class="header-anchor" href="#_5无序列表" aria-hidden="true">#</a> 5无序列表</h2>
<ul>
<li>减号+空格</li>
</ul>
<h2 id="_6有序列表" tabindex="-1"><a class="header-anchor" href="#_6有序列表" aria-hidden="true">#</a> 6有序列表</h2>
<ol>
<li>数字+.+空格</li>
<li></li>
</ol>
<h2 id="_7选项卡" tabindex="-1"><a class="header-anchor" href="#_7选项卡" aria-hidden="true">#</a> 7选项卡</h2>
<Tabs id="63" :data='[{"id":"xxxx"},{"id":"xx"}]'>
<template #title0="{ value, isActive }">xxxx</template>
<template #title1="{ value, isActive }">xx</template>
<template #tab0="{ value, isActive }">
<p>123</p>
</template>
<template #tab1="{ value, isActive }">
<p>abc</p>
</template>
</Tabs>
<h2 id="_8代码块分组" tabindex="-1"><a class="header-anchor" href="#_8代码块分组" aria-hidden="true">#</a> 8代码块分组</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>:::code-tabs
@tab code1
```python
print('a')
```
@tab code2
```python
print('b')
```
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在代码块中只是为了内部显示</p>
<CodeTabs id="82" :data='[{"id":"code1"},{"id":"code2"}]'>
<template #title0="{ value, isActive }">code1</template>
<template #title1="{ value, isActive }">code2</template>
<template #tab0="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="_9图表" tabindex="-1"><a class="header-anchor" href="#_9图表" aria-hidden="true">#</a> 9图表</h2>
<h2 id="_10数学语法" tabindex="-1"><a class="header-anchor" href="#_10数学语法" aria-hidden="true">#</a> 10数学语法</h2>
<div style="text-align:center">
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathsize="1.2em"><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></mfrac></mstyle></mrow><annotation encoding="application/x-tex">\large\frac{x^2}{x+y}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.7738em;vertical-align:-0.5696em;"></span><span class="mord sizing reset-size6 size7"><span class="mopen nulldelimiter sizing reset-size7 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0036em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size7 size4 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span><span class="mbin mtight">+</span><span class="mord mathnormal mtight" style="margin-right:0.03588em;">y</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size7 size4 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9143em;"><span style="top:-3.031em;margin-right:0.0625em;"><span class="pstrut" style="height:2.6em;"></span><span class="sizing reset-size4 size2 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4746em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size7 size6"></span></span></span></span></span></p>
</div>
<h2 id="_11卡片功能-跳转链接" tabindex="-1"><a class="header-anchor" href="#_11卡片功能-跳转链接" aria-hidden="true">#</a> 11卡片功能（跳转链接）</h2>
<figure><img src="@source/column/accumulating/Day每日规划/2023.9/2023.9.1.assets/image-20230901085929845.png" alt="image-20230901085929845" tabindex="0" loading="lazy"><figcaption>image-20230901085929845</figcaption></figure>
<VPCard v-bind='{"title":"qz","desc":"仇真","logo":"/logo.png","color":"rgba(253,230,138,0.15)"}' /><h2 id="_12访达内显示隐藏文件" tabindex="-1"><a class="header-anchor" href="#_12访达内显示隐藏文件" aria-hidden="true">#</a> 12访达内显示隐藏文件</h2>
<p>command+shift+。</p>
<figure><img src="@source/column/accumulating/Day每日规划/2023.9/2023.9.1.assets/image-20230901090901403.png" alt="image-20230901090901403" tabindex="0" loading="lazy"><figcaption>image-20230901090901403</figcaption></figure>
<p>所有图片放到public里面，/代表public起步</p>
<h2 id="_13-b站插入" tabindex="-1"><a class="header-anchor" href="#_13-b站插入" aria-hidden="true">#</a> 13 b站插入</h2>
<BiliBili bvid="BV1wG411o7nq" /><figure><img src="@source/column/accumulating/Day每日规划/2023.9/2023.9.1.assets/image-20230902082141485.png" alt="image-20230902082141485" tabindex="0" loading="lazy"><figcaption>image-20230902082141485</figcaption></figure>
<h2 id="_14-pdf插入" tabindex="-1"><a class="header-anchor" href="#_14-pdf插入" aria-hidden="true">#</a> 14 PDF插入</h2>
<PDF url="/sample.pdf" /><p>写public下面的路径</p>
<h2 id="_15自定义容器" tabindex="-1"><a class="header-anchor" href="#_15自定义容器" aria-hidden="true">#</a> 15自定义容器</h2>
<div class="hint-container info">
<p class="hint-container-title">温馨提示</p>
<p>大家好，我是仇真</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">注释</p>
<p>注释容器</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">我是你的提示</p>
<p>提示容器</p>
</div>
<p>更多容器</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>::: info

信息容器。

:::

::: note

注释容器。

:::

::: tip

提示容器

:::

::: warning

警告容器

:::

::: danger

危险容器

:::

::: details

详情容器

:::

::: info 自定义标题

一个有 `代码` 和 [链接](#演示) 的信息容器。

```js
const a = 1;
```

:::

::: note 自定义标题

一个有 `代码` 和 [链接](#演示) 的注释容器。

```js
const a = 1;
```

:::

::: tip 自定义标题

一个有 `代码` 和 [链接](#演示) 的提示容器。

```js
const a = 1;
```

:::

::: warning 自定义标题

一个有 `代码` 和 [链接](#演示) 的警告容器。

```js
const a = 1;
```

:::

::: danger 自定义标题

一个有 `代码` 和 [链接](#演示) 的危险容器。

```js
const a = 1;
```

:::

::: details 自定义标题

一个有 `代码` 和 [链接](#演示) 的详情容器。

```js
const a = 1;
```

:::

::: info 自定义信息
:::

::: note 自定义注释
:::

::: tip 自定义提示
:::

::: warning 自定义警告
:::

::: danger 自定义危险
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>信息容器。</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>注释容器。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>提示容器</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>警告容器</p>
</div>
<div class="hint-container danger">
<p class="hint-container-title">警告</p>
<p>危险容器</p>
</div>
<details class="hint-container details"><summary>详情</summary>
<p>详情容器</p>
</details>
<div class="hint-container info">
<p class="hint-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的信息容器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="hint-container note">
<p class="hint-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的注释容器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的提示容器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="hint-container warning">
<p class="hint-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的警告容器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="hint-container danger">
<p class="hint-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的危险容器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<details class="hint-container details"><summary>自定义标题</summary>
<p>一个有 <code v-pre>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的详情容器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<div class="hint-container info">
<p class="hint-container-title">自定义信息</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">自定义注释</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">自定义提示</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">自定义警告</p>
</div>
<div class="hint-container danger">
<p class="hint-container-title">自定义危险</p>
</div>
<h2 id="_16自定义对齐" tabindex="-1"><a class="header-anchor" href="#_16自定义对齐" aria-hidden="true">#</a> 16自定义对齐</h2>
<div style="text-align:left">
<p>左对齐的内容</p>
</div>
<div style="text-align:center">
<p>居中的内容</p>
</div>
<div style="text-align:right">
<p>右对齐的内容</p>
<div style="text-align:justify">
<p>两端对齐的内容</p>
</div>
</div>
<h2 id="_17插入链接" tabindex="-1"><a class="header-anchor" href="#_17插入链接" aria-hidden="true">#</a> 17插入链接</h2>
<p><a href="https://weonlygettoday.com" target="_blank" rel="noopener noreferrer">我的网站<ExternalLinkIcon/></a></p>
<h2 id="_18详细信息展开" tabindex="-1"><a class="header-anchor" href="#_18详细信息展开" aria-hidden="true">#</a> 18详细信息展开</h2>
<details class="hint-container details"><summary>详细信息</summary>
<p>xxxxxxx</p>
</details>
</div></template>


