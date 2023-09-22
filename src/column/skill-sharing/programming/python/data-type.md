---

title: 数据类型
date: 2023-09-22 07:16:10
author: 仇真
isOriginal: true
category: 
    - python学习
tag:
    - python学习
icon: jiqiren
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
---

## 1 数字型「int、float」

### 1.1 代码示例

1. 整型

```python
int_num = 1
t = type(int_num)
print("int num type is:>>>",t)
print("直接检测数据类型，并输出:>>>",type(int_num))
```

2. 浮点数

```python
float_num = 1.5
t = type(float_num)
print(float_num)
print("float num type is:>>>",t)
print("直接检测数据类型，并输出:>>>",type(float_num))
```

## 2 字符串「str」

### 2.1 代码示例

```python
string = "Hello qz"
t = type(string)
print(string)
print("string type is:>>>",t)
print("直接检测数据类型，并输出:>>>",type(string))
```

### 2.2 字符串三大特性

#### 有序性

a 从左到右，下标是从 0 开始；

b 从右到左，下标是从 -1 开始；

c 引号中出现的，都算一个下标；

#### 不可变性

a 字符串被创建出来后就不能被改变；

注意：修改不等于覆盖，我们说的不可变，是在代码运行的过程中，不能对字符串有修改、添加、删除之类的操作；

#### 任意字符

a 键盘上可以输入的字符，都可以是字符串的元素；

b 字符放到字符串中，都将成为字符串类型。「也就是说：里面每一个元素都可以称为子字符」

## 3. 列表「list」

### 3.1 代码示例

```python
lst = ["Hello QZ",1,1.1,("look","book",11),[12,"qzz"],True,False]
t = type(lst)
print(lst)
print("lst type is:>>>",t)
print("直接检测数据类型，并输出:>>>",type(lst))
```

### 3.2 列表的三大特性

#### 有序性

a 从左到右，下标是从 0 开始；

b 从右到左，下标是从 -1 开始；

c 列表里的每个元素算一个；

1. 比如：lst = [“qzzzzzz”,12]

2. 上面 lst 有两个元素，下标分别是：

    1.qzzzzzz 是 0，也是 -2；

    2.12下标是 1，也是 -1；

#### 可变性

在程序运行过程中，列表可以「添加、删除、修改」

#### 任意数据类型

注意：这里说的任意数据类型，指的是 Python 所拥有的数据类型；比如♾️️不能直接使用，必须当作字符串来使用，或是当作变量来使用

::: details Python 所拥有的数据类型

![image-20230922071752720](./data-type.assets/image-20230922071752720.png)

:::

