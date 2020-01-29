---
title: "A classification model for thyroid disease prediction"
layout: post

image: https://image.flaticon.com/icons/png/128/1397/1397656.png
date: 2019-10-24 22:44
headerImage: true
projects: true
hidden: false # don't count this post in blog pagination
description: "this is a  Multiclass classification to predict whether a patient is normal  or suffers from hyperthyroidism  or hypothyroidism."
category: project
author: Eslam Khaled
permalink: thyroid-disease-prediction
tag: mahcine learning
published : true
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

<p size="18" style="font-family:courier;">Thyroid disease is the most familiar disease among the humans but it's not deadly. Thyroid hormones created by the thyroid gland introduce two active thyroid hormones T4 and T3 which are controlled by TSH to control the body's metabolism, these hormones are necessary to help each cell in each tissue and organ to work right and to produce proteins in the regulation of body temperature, and in overall energy production and regulation. Hypothyroidism is an underactive thyroid that the glands can't generate enough thyroid hormones and Hyperthyroidism is an overactive thyroid that the gland can produce more thyroid hormone. Hypothyroid symptoms include constipation, weight gain, slowed heart rate, fatigue, depression, dry skin, puffy face, muscle weakness, thinning hair and Hyperthyroid symptoms include weight loss, irregular heartbeat, nervousness, difficulty sleeping, hair loss and shortness of breath.

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
 



### kfold
K-nearestneighbors(K-NN)model: K-NN or k-nearest neighbors is the simplest classiﬁcation algorithm. This classiﬁcation algorithm does not depend on the structure of the data. Whenever a new example is encountered, its k nearest neighbors from the training data are examined. Distance between two examples can be the euclidean distance between their feature vectors. The majority class among the k nearest neighbors is taken to be the class for the encountered example. There is a study that shows how magniﬁcent the results of using K-NN method are, they have applied k-nearest neighbor classiﬁer on two standardthyroiddatasets. Theseresultsshowthatthek-NN classiﬁer presented a very high classiﬁcation accuracy of 97 percent using Euclidean and Manhattan Distances respectively. The high accuracy encourages us to validate the system using a larger and a different medical dataset in order to establish its clinical applicability to assist doctors in thyroid classiﬁcation and subsequent treatment regime



### decision trees

Classiﬁcation and regression trees are machine-learning methods for constructing prediction models from data. The models are obtained by recursively partitioning the data space and ﬁtting a simple prediction model within each partition. As a result, the partitioning can be represented graphically as a decision tree. Classiﬁcation trees are designed for dependent variables that take a ﬁnite number of unordered values, with prediction error measured in terms of misclassiﬁcation cost. Regression trees are for dependentvariablesthattakecontinuousorordereddiscrete values, with prediction error typically measured by the squared difference between the observed and predicted values.

Decision tree classiﬁer is a systematic approach for multiclass classiﬁcation. It poses a set of questions to the dataset (related to its attributes/features). The decision tree classiﬁcation algorithm can be visualized on a binary tree. On the root and each of the internal nodes, a question is posed and the data on that node is further split into separate records that have different characteristics. The leaves of thetreerefertotheclassesinwhichthedatasetissplit





### logistic regression
It is one of the most popular ways to ﬁt models for categorical data, especially for binary response data in Data Modeling. It is the most important (and probably most used) member of a class of models called generalized linearmodels. Unlikelinearregression,logisticregressioncan directly predict probabilities (values that are restricted to the(0,1)interval);furthermore,thoseprobabilitiesarewellcalibrated when compared to the probabilities predicted by some other classiﬁers, such as Naive Bayes. Logistic regression preserves the marginal probabilities of the training data. The coefﬁcients of the model also provide some hint of the relative importance of each input variable. Logistic Regression is used when the dependent variable (target) is categorical. For example: 
• To predict whether an email is spam (1) or (0) 
• Whether the tumor is malignant (1) or not (0)


# Results
 


## knn classifier
   **hyperparameter tuning**
![ne](https://i.ibb.co/JzN7R4S/F1QgU.png)

**KNN sensitivity**

|                |Sensitivity1 |Sensitivity2 |Sensitivity3 
|----------------|-------------------------------|-----------------------------|---
|**knn**|100          |55.5          |56.66

## Decision Trees

# Final result

|     Methods           |KNN                          |Decission Trees                          | Logistic Regression
|----------------|-------------------------------|-----------------------------|---
|accuracy| 86.55           |90.67           |96.77



Enjoy :metal:
