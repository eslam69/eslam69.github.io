---
title: "A classification model for thyroid disease prediction"
layout: post

image: https://image.flaticon.com/icons/png/128/1397/1397656.png

headerImage: false
projects: true
hidden: false # don't count this post in blog pagination
description: "this is a  Multiclass classification to predict whether a patient is normal  or suffers from hyperthyroidism  or hypothyroidism."
category: project
author: Eslam Khaled
externalLink: false
---

![thyroid](https://www.nm.org//-/media/Northwestern/healthbeat/images/healthy-tips/nm-7-things-thyroid_preview.jpg)

## Table of contents

- [Introduction](#Introduction)
- [Motivation](#Motivation)
- [What's inside?](#What's inside?)
- [Data](#Data)
- [Exploratory data analysis (EDA)](#Exploratory dataanalysis (EDA))
- [Contributing](#contributing)
- [Creators](#creators)
- [Thanks](#thanks)
- [Copyright and license](#copyright-and-license)


## Introduction

<p style="font-family:courier;">Thyroid disease is the most familiar disease among the humans but it's not deadly. Thyroid hormones created by the thyroid gland introduce two active thyroid hormones T4 and T3 which are controlled by TSH to control the body's metabolism, these hormones are necessary to help each cell in each tissue and organ to work right and to produce proteins in the regulation of body temperature, and in overall energy production and regulation. Hypothyroidism is an underactive thyroid that the glands can't generate enough thyroid hormones and Hyperthyroidism is an overactive thyroid that the gland can produce more thyroid hormone. Hypothyroid symptoms include constipation, weight gain, slowed heart rate, fatigue, depression, dry skin, puffy face, muscle weakness, thinning hair and Hyperthyroid symptoms include weight loss, irregular heartbeat, nervousness, difficulty sleeping, hair loss and shortness of breath.
![thyrodism patient] (https://files.ketodietapp.com/Blog/files/Articles-photos/health-thyroid.jpg)
As thyroid functions affects every essential organ in the body so identifying the disease early helps to get the proper treatment. In earlier days the disease is diagnosed by the symptoms, so we want to make a prediction model using the data given. By analyzing the data by three classification methods and comparing the results we get the best analysis and least error to help predict the disease early</p>

## Motivation

Thyroid disease's symptoms are very common in our daily life, almost everyone can have a symptom or two as tiredness, unexplained weight gain, depressed mood, memory difficulty and a lot more so we were so curious to know more about it and how we can detect it using the statistics given, We have great enthusiasm for this project because it meets our research interests and will provide us a great opportunity to learn new skills 
##What's inside
In this article we will discuss about 3 different classification methods :
* **K- Nearest Neighbourhood**
* **Decision Trees**
* **Logestic regression**

We will apply these methods on the dataset provided by Garavan Institute ,dataset files can be downloaded from here [Dataset!](https://sci2s.ugr.es/keel/dataset.php?cod=66##sub2).

## Data
**Here is some information about the dataset**

Type         | Classification
------------ | -------------
Features   | 5
Instances   | 215
Missing values? |No
Origin              |Real world
(Real / Integer / Nominal) |(4 / 1 / 0)
Classes                             |3

**Attribute description**

Attribute| Domain
------------ | -------------
T3resin |[65, 144]
Thyroxin |[0.5, 25.3]
Triiodothyronine |[0.2, 10.0]
Thyroidstimulating |[0.1, 56.4]
TSHvalue |[-0.7, 56.3]
Class |3, 2, 1

## Exploratory dataanalysis (EDA) 
let's visualize the our correlation matrix of the dataset which is an important concept to find the correlated attributes.  

 ![](https://i.ibb.co/WnK5ZSc/Rplot.png)
 
 
 And here we find that there is a semi-high correlation between **Thyroxin** and **Triiodothyronine**,
 but, since our dataset only has 5 independent features, then there is no need for **feature selection**.
 



## Contributing



## Creators

**Creator 1**

- <https://github.com/usernamecreator1>

## Thanks


## Copyright and license


Enjoy :metal:
