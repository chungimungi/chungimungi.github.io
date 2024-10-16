---
layout: page
title: Research & Projects
permalink: /research/
order: 2
---

## Publications

**Coming Soon**

## Projects

### [DocQA GitHub](https://github.com/chungimungi/DocQA)
A custom 13.2M parameter cross encoder QA model that gives a diagnosis based on the input of symptoms a user describes in natural language, trained on 24 disease symptoms. An accuracy of 94.5% was achieved in predicting the disease from the symptoms.

---

### [Learning to Forget GitHub](https://github.com/chungimungi/Learning-to-Forget)
This project aims to create a model that learns to forget by randomizing the weights of a custom-trained text classifier on a wine-review dataset. The original model achieved a 90% accuracy, and after randomizing the weights and evaluating the model again, the accuracy dropped to 50%.

---

### [Schrodinger’s Cat Neural Network GitHub](https://github.com/chungimungi/Schrodingers-Cat-Neural-Network)
An interpretation of the quantum mechanics thought experiment where a cat is both alive and dead until observed, using two models to represent these states and incorporating probabilistic behaviors in training. Over 10 individual runs, the findings were:
- Model has successfully learned (Collapse: Learned state) with probability 0.46
- Cat is alive in 50% of runs
- Model learned in 30% of runs

---

### [ReCoT: Recursive Chain of Thought GitHub](https://github.com/chungimungi/ReCoT)
A recursive chain of thought mechanism that continues reasoning until a threshold score is met or exceeded. Trained and evaluated the folowing models on the GPQA dataset.
- **RoBERTa-base**
- **debertaV3-xsmall**
- **BERT-base**
- **ELECTRA-base**

Achieved competitive performance with LLMs like:
- **Llama2-70b** (zero and few shot)
- **GPT-4** (with search)
- **CoT+GPT-3.5** (zero and few shot)
- **GPT-3.5** (zero and few shot)
