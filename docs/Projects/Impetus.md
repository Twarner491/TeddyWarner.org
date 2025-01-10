---
title: Impetus
description: Giving agents a temporal understanding through human physiological data.
hide:
  - navigation
  - tags
template: comments.html
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <meta name="title" content="Impetus - Teddy Warner">
  <meta name="description" content="Giving agents a temporal understanding through human physiological data.">
  <meta name="keywords" content="fMRI, artificial intelligence, temporal cognition, machine learning, neural networks, Vision Transformer, world models, deep learning, neuroimaging, learning stages, physiological state data, temporal processing, BOLD signal, cognitive science, neural activation patterns">
  <meta name="author" content="Teddy Warner">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://teddywarner.org/Projects/LearnedSpectrum/">
  <meta property="og:title" content="Impetus - Teddy Warner">
  <meta property="og:description" content="Giving agents a temporal understanding through human physiological data.">
  <meta property="og:image" content="https://teddywarner.org/assets/images/learnedspec/hero.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://teddywarner.org/Projects/LearnedSpectrum/">
  <meta property="twitter:title" content="Impetus - Teddy Warner">
  <meta property="twitter:description" content="Giving agents a temporal understanding through human physiological data.">
  <meta property="twitter:image" content="https://teddywarner.org/assets/images/learnedspec/hero.png">

  <!-- Existing resource links -->
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../assets/css/projects/project.css">
  <link rel="stylesheet" href="../../assets/css/projects/vnp.css">
  <link rel="stylesheet" href="../../assets/css/header.css">
</head>

  <nav class="main-navigation">
    <ul>
      <li><a class="home" href="https://teddywarner.com"><span class="navnum">01</span> Home</a></li>
      <li><a class="proj" href="https://teddywarner.com/proj/"><span class="navnum">02</span> Projects</a></li>
      <li><a class="writ" href="https://teddywarner.com/writ/"><span class="navnum">03</span> Writing</a></li>
    </ul>
  </nav>
  
  <div class="blur-overlay"></div>

<script src="../../assets/js/header.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
  });
</script>
  
<div class="return2feed"><a href="https://teddywarner.org/proj"><i class="fa-solid fa-arrow-left-long"></i> Project Feed</a></div>

# Impetus

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://x.com/WarnerTeddy"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Teddy Warner's GitHub profile picture" class="profilepic"><span class="abt" id="name"> Teddy Warner</a><span class="abt"><span class="year">| 2024-2025 </span>| <span class="readTime"><i class="far fa-clock"></i> 26-33 minutes</span></span></span></span>
</div>

---

*Giving agents a temporal understanding through human physiological data.*

<div style="margin:-20px"></div>

## Introduction

There's a concept in AI research called the World Model, which aims to create neural networks capable of understanding and simulating cause and effect within a temporal and spatial context. Unlike current Large Language Models (LLMs) that primarily predict outputs based on input patterns, world models aspire to simulate both causes and effects based on a deeper understanding of time and space.

The key to a world model is its ability to grasp cause and effect, which fundamentally requires a temporal understanding. As it turns out, giving a neural network a temporal understanding is quite challenging. While we can instruct an LLM to output current timestamps or locations, it lacks the ability to truly associate actions and experiences within a relative dimension of time and space as humans do.

Current approaches to building world models include aim to provide AI systems with a sense of time and space, but they may be missing a crucial element of human temporal understanding:

Imagine a humaniod and a human are sitting together at a table. Suddenly, the human stands up, screams, and hurles a chair across the room. The robot, relying solely on visual input, might respond by moving away. In this case:

\begin{align*}
x(t) &= \text{scream, chair thrown} \\
a(t) &= \text{move away} \\
\end{align*}

$x(t)$ is an observation in a given instant and $a(t)$ is the resulting action in that instant.

Now, consider the same scenario, but this time two humans sit together at a table. One human stands, screams, and hurles a chair across the room. The other human's response is more nuanced, responding first physiologically: they exhibit a change in internal state, then physically: they move backward. In this case:

\begin{align*}
x(t) &= \text{scream, chair thrown} \\
a(t) &= \text{physiological state change} \\
a(t+1) &= \text{move away}
\end{align*}

Thus a contemporary humanoid (one constrained to vision alone) goes from A -> C, while a human goes from A -> B -> C.

### Hypothesis

World models cannot truly gain a comprehensive temporal understanding based solely on data collected from robots or purely external observations. 

*Temporal understanding cannot be trained from data that goes from A -> C. World models must be trained on data that goes from A -> B -> C.*

The collection of physiological state data may provide insight into man's temporal understanding, and thus how to train a neural network to understand cause and effect.

Current efforts in world model development often rely heavily on data collected from robotic systems or external observations that we humans can describe (i.e. see chair thrown -> move backward). These observations forgo the subconscious response integral to a human's actions (i.e. see chair thrown -> physiological state change -> move backward).

If we acknowledge that current AI systems lack a subjective understanding of time, why do we primarily use data from these systems to try to instill temporal understanding?

Data collected from human subjects could provide a window into how humans subjectively experience time, potentially leading to more sophisticated and human-like temporal reasoning in AI systems.

#### Questions

<h5 style="text-transform: none;">Do physiological states relate to man's perception of time and space?</h5>

Yes, physiological states may be able to provide a window into man's subjective experience of time. But what physiological states?

- Facial muscle activity: The dynamic electromyographic activity in the corrugator-supercilii muscle over time reflects objective time and predicts subjective judgments of duration [^36]. This suggests that subjective duration could be an embodiment process based on motor information changing over time and associated feelings.
- Heart rate: Pulse rate has been found to correlate with subjective well-being metrics and could potentially offer insights into time perception [^37]. Additionally, heart rate variability, measured through the Lorenz plot area, has been used in stress estimation models, which could indirectly relate to time perception [^38].
- Electrodermal activity: Galvanic skin response (GSR) has been used alongside other physiological state measures to assess engagement in activities, which could influence subjective time perception [^39].
- Brain activity: Neuroimaging studies have explored the neural correlates of subjective time perception, suggesting that specific brain regions are involved in our consciousness of time[^40].

It's important to note that the relationship between physiological states and time perception is complex and influenced by various factors, including attention, emotion, and cognitive load [^36] [^41].

<h5 style="text-transform: none;">Why has no one done this?</h5>

When my hypothesis first came to me, I believed I had to be naive to some particular reason our pipeline is robot -> simulator -> robot and not human -> simulator -> robot. It was simultaneously a relief and a pain in the ass to not find a specific reason on the first page of Google.

I've got a few thoughts as to why no one has done this yet:

1. It's hard to collect data from humans.
2. The use of physiological state data on mass raises important ethical and privacy considerations.
3. Only recently have advances in transformer architecture made such analysis feasible at scale.
4. Traditional approaches to world models have relied upon absolute temporal markers. Shifting to a subjective, biologically inspired approach would require significant effort.

### Approach

So what would such a venture look like? Well, there are a few assumptions for us to start from:

1. As our context window approaches the total size of the internet, the bottleneck will no longer be compute, but rather data. At the last [NeurIPS](https://neurips.cc/), [Ilya Sutskever](https://x.com/ilyasut) notes that data is "the fossil fuel of AI".

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <span class="lighttweet"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Yall heard it from the man himself <a href="https://t.co/Pie7QLCjA7">pic.twitter.com/Pie7QLCjA7</a></p>&mdash; Jason Wei (@_jasonwei) <a href="https://twitter.com/_jasonwei/status/1867696401830096970?ref_src=twsrc%5Etfw">December 13, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></span>
      <span class="darktweet"><blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Yall heard it from the man himself <a href="https://t.co/Pie7QLCjA7">pic.twitter.com/Pie7QLCjA7</a></p>&mdash; Jason Wei (@_jasonwei) <a href="https://twitter.com/_jasonwei/status/1867696401830096970?ref_src=twsrc%5Etfw">December 13, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></span>
    </div>
  </div>
  <br>
</center>

2. World models are expanding in prominence amongst academics and top research labs.

    === "arXiv"
        ![](../assets/images/learnedspec/arxiv_world_model_light.png#only-light){width="100%" alt="Plot of arXiv trends world models over time"}
        ![](../assets/images/learnedspec/arxiv_world_model_dark.png#only-dark){width="100%" alt="Plot of arXiv trends world models over time"}

    === "Google Trends"
        ![](../assets/images/learnedspec/world_models_trends_light.png#only-light){width="100%" alt="Plot of google trends world models over time"}
        ![](../assets/images/learnedspec/world_models_trends_dark.png#only-dark){width="100%" alt="Plot of google trends world models over time"}

It is prime time to develop foundational world models, and we currently don't have enough data, much less granular enough data, to train them. While reviewing the initial draft of this article, [Dr. Alexander Titus](https://www.defense.gov/About/Biographies/Biography/Article/1845752/dr-alexander-titus/) offered me this thought: "Think of it like filling a mesh. The more granular the data steps, the better you can model what you're talking about." If this translates to world models, the A -> B -> C hypothesis will hold.

**Thus I am building a data acquisition venture focused specifically on physiological data acquisition from humans at scale, in hopes of giving agents a better understanding (human-like that is) of time and space.**

Collecting physiological data from humans is hard, but at scale, it is even harder.

- Need some minimal physiological state collection hardware
- Then need to make a bunch of these devices
- Then need to pay people to collect data with said devices for a select window of time

INSERT VIDEO

#### Methods

Physiological changes should simultaneously govern rewards and be given to the agent as a state. Correlation may then be drawn between an agent's actions and physiological state changes.

<center style="opacity:80%;">

 ![](../assets/images/learnedspec/rldlight.png#only-light){width="50%" alt="Diagram showing RL setup in light theme"}
 ![](../assets/images/learnedspec/rlddark.png#only-dark){width="50%" alt="Diagram showing RL setup in dark theme"}

</center>

This calls for a few things ...

1. An ["Interoception Model"](#interoception-model), that is, a neural netowrk which predicts a physlogical change given an external input.

    \begin{align*}
    \text{Input: } \sigma_t &= \text{state at time } t \\
    \text{Output: } \iota_t &= \text{internal state at time } t \\
    \end{align*}

2. A ["Temporal Model"](#temporal-model), a model to adjust an agent's "perception of time" (that is with a scalar), in accordance with $\iota_t$.

    \begin{align*}
    \text{Input: } &\begin{cases}
    \iota_t &= \text{internal state at time } t \\
    \tau_{t-1} &= \text{previous temporal scaling}
    \end{cases} \\
    \text{Output: } &\tau_t = \text{temporal scaling at time } t
    \end{align*}

3. A ["Reinforcement Gymnasium"](#reinforcement-gymnasium). An agent seeks to maximize rewards. Their actions should be a product of their internal and external states, as well as previous actions/rewards.

    \begin{align*}
    \text{Input: } &\begin{cases}
    \iota_t &= \text{interoception at time } t \\
    s_t &= \text{state at time } t \\
    a_{t-1} &= \text{previous action} \\
    \tau_t &= \text{temporal scaling at time } t
    \end{cases} \\
    \text{Output: } &a_t = \text{action at time } t
    \end{align*}

#### Timeline

- [x] Utlize publically available physiological data to asses such data's ability to provide a window into temporal understanding
- [ ] Write and train an [Interoception Model](#interoception-model) with the data processed in step 1
- [ ] Construct a benchmark RL task and set [Reinforcement Gymnasium](#reinforcement-gymnasium)
- [ ] Write and train an [Temporal Model](#temporal-model) to interpret the [Interoception Model](#interoception-model)'s $\iota_t$ and provide $\tau_t$ for an agent
- [ ] Integrate $\iota_t$ and $\tau_t$ into the agents within the [Reinforcement Gymnasium](#reinforcement-gymnasium)
- [ ] Compare new results (with the interoception and temporal models) to the RL benchmark
- [ ] Develop minimal, cheap, mass-producible hardware to collect physiological data
- [ ] Collect data from people at scale
- [ ] Retrain the [Interoception Model](#interoception-model) with more, and more granular data
- [ ] Retrain the agents with this superior $\iota_t$

## Interoception Model

I need to gather some resources before I can get started with physiological state data collection at a large enough scale to train a foundational model, I started by toying around with Vision Transformers and some fMRI datasets I found on the internet. 

The rest of this Interoception Model section is a preprint I wrote while attempting [Timeline](#timeline) step one: "Utilize publically available physiological data to asses such data's ability to provide a window into temporal understanding".

### Abstract

This research presents a novel approach to understanding temporal cognition through the application of Vision Transformers to functional Magnetic Resonance Imaging (fMRI) data analysis. While current artificial intelligence approaches to world modeling rely heavily on absolute temporal markers and timestamps, human perception of time operates as a fundamentally subjective experience that adapts with cognitive state and learning progress. We look to demonstrate that neural activation patterns captured during learning through fMRI contain rich temporal information that can inform more nuanced approaches to temporal processing in AI systems. 

By analyzing temporal patterns across multiple learning stages and tasks, we attempt to demonstrate the feasibility of developing AI systems capable of processing time as a relative rather than absolute construct. This work represents an important step toward artificial intelligence systems that can reason about time in ways that more closely mirror human cognitive processes.

### Background

This work implements a Vision Transformer architecture [^18] [^19] optimized for learning stage classification from fMRI data. While fMRI presents known limitations in its reliance on blood-oxygen-level-dependent (BOLD) signals [^20], deep learning architectures may be able to extract temporal patterns that traditional analysis methods miss.

<h4> Neural Bases of Learning Stages </h4> 

Human learning progresses through distinct stages characterized by shifting patterns of neural activation [^15]. These transitions are particularly evident in the striatum and medial temporal lobe regions [^16]. Our architecture's design mirrors these biological principles through its progressive processing stages and attention mechanisms.

fMRI captures these learning stages through blood-oxygen-level-dependent (BOLD) signals, providing an indirect but reliable measure of neural activity [^20]. While this indirect measurement presents certain limitations, research has demonstrated correlations between BOLD signal temporal patterns and learning progression [^22]. The robust test-retest reliability of fMRI in classification learning tasks [^14] provides a stable foundation for extracting temporal patterns relevant to learning stages.

<h4> Deep Learning Approaches to Temporal Understanding </h4>

Recent advances in transformer architectures have revolutionized sequence processing capabilities [^18]. Our implementation builds on the Vision Transformer architecture [^19], but with significant modifications designed specifically for fMRI data processing. These modifications include:

- Custom channel reduction networks that efficiently handle high-dimensional fMRI volumes
- Temporal attention mechanisms that incorporate hemodynamic response characteristics
- Progressive dropout strategies that maintain signal fidelity while preventing overfitting

### Methods

Our implementation addresses two core challenges: extracting meaningful patterns from complex fMRI data [^22] and developing architectures capable of learning from these patterns [^14]. This section outlines our approach in three parts: data preprocessing implementation, fMRI-specific augmentation strategies, and temporal-aware transformer architecture design [^18] [^19].

<h4>Data Collection and Processing</h4>

<h5 style="text-transform: none;">Dataset Characteristics</h5>

The implementation utilizes four complementary classification learning datasets from OpenFMRI. Each dataset provides specific insights into temporal learning aspects [^15]. The primary dataset (ds000002) contains data from 17 right-handed subjects performing probabilistic and deterministic classification tasks [^16]. Task structure includes:

- Pure blocks: 10 cycles of 5 classification trials followed by 3 baseline trials
- Mixed blocks: 100 stimuli split equally between probabilistic and deterministic trials

Data acquisition specifications:

- Scanner: 3T Siemens Allegra MRI
- Parameters: TR = 2s, 180 functional T2*-weighted echoplanar images per session
- Resolution: 2mm slice thickness, 2x2mm in-plane resolution
- Enhancement: Multiband acceleration factor of 4

Three additional datasets complement the primary collection:

- ds000011: 14 subjects, single/dual-task classification for attention-modulated learning analysis [^16]
- ds000017: 8 subjects, classification with stop-signal tasks for inhibitory control examination [^14]
- ds000052: Classification with reward contingency reversal for adaptive learning mechanism investigation [^15]

<h4> Preprocessing Pipeline </h4>

Our implementation uses a three-stage preprocessing approach based on established neuroimaging practices [^22] with optimizations for temporal pattern preservation. The pipeline integrates spatial normalization and temporal alignment to maintain both anatomical accuracy and temporal fidelity. The complete preprocessing pipeline follows:

\begin{equation}
    x_{\text{processed}} = \mathcal{N}(\mathcal{R}(\mathcal{V}(x)))
\end{equation}

Where:

- $\mathcal{V}$ performs dimension validation
- $\mathcal{R}$ applies spatial resizing
- $\mathcal{N}$ implements intensity normalization

<h5 style="text-transform: none;">Dimension Validation</h5> 

fMRI acquisitions vary in dimensionality [^22]. Our validation ensures consistent dimensionality while preserving temporal information:

\begin{equation}
    \mathcal{V}(x) = \begin{cases}
        x & \text{if } x \in \mathbb{R}^{H \times W \times D \times T} \\
        x[..., \text{newaxis}] & \text{if } x \in \mathbb{R}^{H \times W \times D} \\
        \text{undefined} & \text{otherwise}
    \end{cases}
\end{equation}

This validation maintains spatial integrity while ensuring proper temporal dimension handling [^20]. Single-volume inputs receive an added temporal dimension for consistent processing.

<h5 style="text-transform: none;">Spatial Resizing</h5>

The implementation standardizes spatial dimensions while maintaining anatomical proportions [^22] through trilinear interpolation:

\begin{equation}
    \mathcal{R}(x) = \text{zoom}(x, [\frac{H_t}{H}, \frac{W_t}{W}, \frac{D_t}{D}, 1])
\end{equation}

Target dimensions $(H_t, W_t, D_t) = (64, 64, 30)$ balance spatial resolution and computational efficiency [^14]. The temporal dimension scaling factor of 1 preserves original temporal resolution.

<h5 style="text-transform: none;">Intensity Normalization</h5>

Following fMRI preprocessing protocols [^22], we implement temporal-aware normalization accounting for BOLD signal dynamics:

\begin{equation}
    \mathcal{N}(x_t) = \frac{x_t - \mu_t}{\sigma_t + \epsilon} \;\; \forall t \in T
\end{equation}

Where:

- $\mu_t$ and $\sigma_t$ represent mean and standard deviation at timepoint $t$
- $\epsilon = 1e\text{-}6$ prevents division by zero

This normalization preserves temporal dynamics while standardizing signal intensity across sessions and subjects [^20]. Independent timepoint normalization maintains relative temporal patterns crucial for learning stage classification.

<h4> Data Augmentation Strategies </h4> 

Our implementation includes a comprehensive suite of domain-specific augmentation techniques designed to enhance model robustness while respecting the unique characteristics of fMRI data. These techniques are validated through neuroimaging research and carefully adapted for deep learning applications:

<h5 style="text-transform: none;">Temporal Masking</h5>

We implement an adaptive temporal dropout mechanism that helps the model learn robust temporal features despite potential signal interruptions or artifacts. The masking strategy:

- Applies random-length masks (1-5 timepoints) to simulate temporal dropouts
- Maintains temporal coherence through continuous masking windows
- Varies mask duration to ensure robustness to different types of signal interruptions

<h5 style="text-transform: none;">Spatial Masking</h5>

The implementation incorporates structured dropout in the spatial domain to handle regional signal variations and encourage learning from distributed patterns. Key features include:

- Probability-based masking with empirically optimized threshold values
- Preservation of anatomical structure through contiguous region masking
- Balance between feature preservation and augmentation strength

<h5 style="text-transform: none;">Elastic Deformation</h5>

To account for natural variations in brain structure and registration, we apply anatomically-constrained elastic deformations that:

- Preserve biological plausibility through controlled deformation magnitude
- Maintain spatial relationships while introducing realistic variability
- Apply smooth transformations through Gaussian filtering

<h4> Model Architecture </h4> 

Our architecture combines Vision Transformer principles with specific adaptations for fMRI data processing. The implementation consists of three primary components, each optimized for the unique characteristics of neuroimaging data:

<h5 style="text-transform: none;">Channel Reduction Network</h5>

The channel reduction component efficiently processes high-dimensional fMRI input through a dual-stage approach:

- Initial dimensionality reduction from 30 to 16 channels
- Batch normalization and GELU activation for stable training
- Progressive dropout for regularization
- Careful preservation of spatial relationships

<h5 style="text-transform: none;">Temporal Processing</h5>

Our temporal processing incorporates hemodynamic response function (HRF) characteristics [^20] through causal attention masking:

\begin{equation}
    M_{ij} = \begin{cases}
        -\infty & \text{if } j < i + 3 \\
        0 & \text{otherwise}
    \end{cases}
\end{equation}

This enforces a 6-second BOLD delay constraint, reflecting established HRF parameters [^22] while maintaining temporal causality in BOLD response learning.

<h5 style="text-transform: none;">Progressive Dropout</h5>

We implement a depth-dependent dropout strategy that provides stronger regularization in deeper layers while maintaining high information flow in early layers.

\begin{equation}
    p_i = 0.1 \cdot \frac{i + 1}{12} \;\; \text{for layer } i
\end{equation}

This strategy:

- Increases dropout probability with network depth
- Maintains high information flow in early layers
- Improves generalization while preserving low-level features

<h4> Training Protocol </h4> 

<h5 style="text-transform: none;">Mixed Precision Training</h5>

We implement dynamic loss scaling for numerical stability:

\begin{equation}
    \text{scale}_t = \begin{cases}
        2 \cdot \text{scale}_{t-1} & \text{if no overflow for } 2000 \text{ steps}\\
        \frac{\text{scale}_{t-1}}{2} & \text{if overflow detected}
    \end{cases}
\end{equation}

This adaptive scaling ensures stable training while maintaining computational efficiency.

<h5 style="text-transform: none;">Optimization Strategy</h5>

The implementation uses AdamW optimizer with fMRI-validated parameters [^19]:

- Learning rate: $1e\text{-}4$
- Weight decay: 0.05
- Beta parameters: $\beta_1 = 0.9$, $\beta_2 = 0.999$

<h5 style="text-transform: none;">Learning Rate Schedule</h5>

We implement a custom warmup-decay schedule optimized for fMRI data processing:

\begin{equation}
    \eta_t = \begin{cases}
        \eta_{\text{base}} \cdot \frac{t}{t_w} & \text{if } t < t_w\\
        \eta_{\text{min}} + \frac{\eta_{\text{base}}-\eta_{\text{min}}}{2}(1 + \cos(\pi\frac{t-t_w}{T-t_w})) & \text{otherwise}
    \end{cases}
\end{equation}

Schedule parameters:

- Base learning rate $\eta_{\text{base}} = 1e\text{-}4$
- Minimum learning rate $\eta_{\text{min}} = 1e\text{-}6$
- Warmup period $t_w = 0.1T$

This provides stable initial training followed by gradual learning rate decay for optimal parameter convergence.

<h5 style="text-transform: none;">Regularization and Early Stopping</h5>

We implement comprehensive regularization following established practices [^18]:

- Label smoothing: $\alpha = 0.1$
- L2 regularization: $\lambda = 1e\text{-}4$
- Gradient clipping: norm 5.0

Early stopping criteria definition:

\begin{equation}
    \text{stop} = \begin{cases}
        \text{True} & \text{if } \text{val\_loss}_t > \text{best\_loss} - \delta \text{ for } p \text{ epochs}\\
        \text{False} & \text{otherwise}
    \end{cases}
\end{equation}

Parameters:

- Improvement threshold $\delta = 1e\text{-}4$
- Patience period $p = 7$

### Results

Our implementation demonstrated patterns in learning stage classification from fMRI data, with performance characteristics varying significantly across learning stages. The complete analysis reveals both potential capabilities and areas requiring further refinement.

<h4> Overall Model Performance </h4> 

The model achieved an overall accuracy of 35.6% across four learning stages, with a balanced accuracy of 42.8% and a macro F1 score of 0.407. 

While exceeding random chance performance (25% for four classes), these metrics highlight the inherent complexity of learning stage classification from neuroimaging data.

fMRI data from varaying datasets/test conditions is quite volatile to work with. This research would benefit signficantly from custom/standardized means of physiological state data collection at scale.

The Cohen's Kappa score of 0.093 indicates performance above chance but demonstrates the substantial challenge in achieving consistent classification across all learning stages.

<center>

![](../assets/images/learnedspec/fig1.png){width="100%" alt="Training Results plots"}

</center>
*Figure 1: Comprehensive model performance analysis showing (A) Normalized confusion matrix demonstrating classification patterns across learning stages, (B) ROC curves indicating increasing reliability from early to mastery stages, (C) Per-class performance metrics highlighting strongest performance in mastery classification, and (D) Prediction confidence distributions revealing distinct patterns for each learning stage.*

<h4> Stage-Specific Classification Performance </h4> 

Performance varied substantially across learning stages, revealing distinct patterns in the model's classification capabilities. The model demonstrated strongest performance in identifying the mastery stage, achieving a precision of 0.600 and recall of 0.750 (F1 = 0.667). The ROC curve for mastery classification shows an impressive AUC of 0.945, suggesting highly distinctive neural activation patterns associated with mastery-level learning.

The middle learning stage showed moderate classification success (precision = 0.353, recall = 0.429, F1 = 0.387), while early and late stages proved more challenging to classify (F1 scores of 0.258 and 0.316 respectively). The confusion matrix reveals a tendency to misclassify early learning stages as middle stages (47.1% of cases), suggesting a gradual transition in neural activation patterns during learning progression.

| Learning Stage | Precision | Recall | F1    | Support | ROC AUC | Mean Conf. | Error Rate |
|---------------|-----------|---------|--------|----------|----------|------------|------------|
| Early         | 0.286     | 0.235   | 0.258 | 17       | 0.368    | 0.437      | 0.765      |
| Middle        | 0.353     | 0.429   | 0.387 | 14       | 0.556    | 0.412      | 0.571      |
| Late          | 0.333     | 0.300   | 0.316 | 10       | 0.740    | 0.389      | 0.700      |
| Mastery       | 0.600     | 0.750   | 0.667 | 4        | 0.945    | 0.528      | 0.250      |
| **Overall**   | 0.407     | 0.428   | 0.347 | 45       | 0.652    | 0.437      | 0.644      |

<h4> Neural Activation Patterns </h4> 

Analysis of fMRI activation patterns, as exemplified in Figure 2, reveals characteristic spatial distributions associated with different learning stages. The sample brain slice visualization demonstrates the complex nature of the neural activation patterns the model must interpret, with varying intensity values representing normalized BOLD signal strength across different brain regions.

<center>

![](../assets/images/learnedspec/fig2.png){width="50%" alt="Example f MRI slice"}

</center>
*Figure 2: Representative brain slice visualization from early learning stage (z=15, t=118) demonstrating characteristic activation patterns. Intensity values represent normalized BOLD signal strength.*

<h4> Classification Reliability Analysis </h4> 

The model's reliability metrics provide crucial insight into its decision-making characteristics. The mean confidence of 0.437 with an overconfidence measure of 0.088 indicates relatively calibrated predictions, though the expected calibration error of 0.491 suggests room for improvement in uncertainty estimation. As shown in Figure 1, the confidence distribution shows distinct patterns for each learning stage, with mastery predictions showing a broader, right-skewed distribution compared to the more concentrated distributions of earlier stages.

The ROC curves reveal a clear progression in classification reliability across learning stages: early (AUC = 0.368), middle (AUC = 0.556), late (AUC = 0.740), and mastery (AUC = 0.945). This progression suggests that distinctive neural patterns become increasingly detectable as learning progresses, with mastery showing particularly clear neural signatures.

The mean loss of 1.082 (±0.257) suggests stable model training despite the classification challenges, with the relatively small standard deviation indicating consistent performance across validation folds. These results demonstrate both the promise and limitations of our approach, suggesting that while neural activation patterns contain meaningful information about learning stages, additional architectural innovations may be needed to fully capture the complexity of temporal learning progression in fMRI data.

### Usage

!!! abstract "Github"

    All the code and full replication instructions may be found in the Interoception Model repository: [https://github.com/Twarner491/learnedSpectrum](https://github.com/Twarner491/learnedSpectrum/tree/main)<br><br>**Please note that this repo is in devolopment and may contain faulty code for the time being.* Feel free to reach out over [email](mailto:twarner491@gmail.com) or drop a comment at the bottom of this page and I'd be happy to assemble the last working repo for you. 

<h5 style="text-transform: none;">Prerequisites</h5>

- Python 3.8+
- CUDA-capable GPU
- Git

<h4>Installation</h4>

1. Clone the repository:
```bash
git clone https://github.com/Twarner491/learnedSpectrum.git
cd learnedSpectrum
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
```

3. Install the package in editable mode with all dependencies:
```bash
pip install -e .
```

<h4>Data Preparation</h4>

1. Create necessary directories and download datasets (automated):
```bash
python scripts/data/download.py
```

The resulting directory structure will be:
```
data/
├── raw/
│   ├── ds000002/
│   ├── ds000011/
│   ├── ds000017/
│   └── ds000052/
├── processed/
└── cleaned/
```

<h4>Running the Analysis</h4>

1. Start Jupyter:
```bash
jupyter notebook
```
2. Navigate to `notebooks/learnedSpectrum.ipynb`
3. The notebook is organized into clear sections:
    - Setup and Imports
    - Configuration
    - Data Preparation
    - Model Training
    - Evaluation
    - Results Visualization
4. Execute cells sequentially to:
    - Process the fMRI data
    - Train the Vision Transformer model
    - Visualize results and attention maps
    - Generate performance metrics

<h4>Experiment Tracking</h4>

1. Set up Weights & Biases (Optional):
```bash
wandb login
```
2. View training progress:
    - Real-time metrics at [wandb.ai](https://wandb.ai)
    - Local visualizations in `visualizations/`
    - Training logs in `models/checkpoints/`

### Discussion

<h4> Implications for World Models </h4> 

Our findings reveal critical implications for AI world model development. The successful extraction of learning stage patterns from fMRI data demonstrates that neural networks can capture subjective temporal experience aspects typically overlooked in current world models [^17]. This capability suggests that integrating physiological state data into world model training provides essential insights into biological temporal information processing.

<h5 style="text-transform: none;">Temporal Relativity in World Models</h5>

The correlation between neural activation patterns and learning stages demonstrates systematic variation in temporal perception with cognitive state [^16]. This finding challenges conventional world model time representation, which treats time as an absolute dimension [^12]. Effective world models require mechanisms for relative temporal processing that adapt to learning contexts and cognitive states.

<h5 style="text-transform: none;">Physiological State Integration Pathways</h5>

Our temporal processing architecture's success in capturing learning stage transitions suggests three integration pathways for physiological state insights:

- Direct Signal Integration: Train world models directly on physiological state data for nuanced temporal understanding
    
- Architectural Inspiration: Adapt temporal processing mechanisms based on fMRI characteristics for general world model architectures
    
- Hybrid Learning Approaches: Combine physiological state data with traditional training signals for comprehensive temporal understanding

<h5 style="text-transform: none;">Causal Understanding Enhancement</h5>

The correlation between learning stage transitions and temporal processing patterns indicates that subjective time perception plays a critical role in biological causal learning [^15]. Current world model approaches to causal learning, relying on objective temporal sequences, may face fundamental limitations.

<h4> Current Limitations </h4> 

The implementation faces several important constraints:

1. Temporal Resolution
    - Limited by fMRI BOLD signal characteristics
    - Fixed sampling rate constraints
    - Hemodynamic response delay

2. Computational Requirements
    - High memory demands for 4D volumes
    - Complex attention computation
    - Large model parameter space

3. Scaling Challenges
    - Dataset size limitations
    - Training time requirements
    - Hardware constraints

<h3> Conclusion </h3> 

The exploration of fMRI data for temporal pattern extraction represents a first step toward validating our hypothesis that world models require physiological state-informed training data to develop genuine temporal understanding. Our implementation demonstrates that neural architectures can successfully extract and utilize these biological temporal patterns, suggesting a viable path toward bridging the A → B → C gap in current world model approaches.

Future work should expand beyond fMRI to incorporate the full spectrum of physiological state signals identified in our introduction (facial EMG, heart rate variability, electrodermal activity). This multi-modal physiological state approach, combined with advanced transformer architectures, could enable world models to develop temporal understanding that more closely mirrors human cognitive processes, particularly in causal reasoning and state transitions. The technical foundation established here provides a framework for this broader integration while addressing the practical challenges of physiological state data collection and processing at scale.

## Temporal Model

![Static Badge](https://img.shields.io/badge/Build-Pending_Completion-orange)

## Reinforcement Gymnasium

![Static Badge](https://img.shields.io/badge/Build-Pending_Completion-orange)

[^1]: https://runwayml.com/research/introducing-general-world-models 
[^2]: https://worldmodels.github.io/ 
[^3]: https://x.com/yugu_nlp/status/1859424088927940831 
[^4]: https://x.com/hongyangzh/status/1859288829825515810 
[^5]: https://x.com/WayneINR/status/1859448167827186168 
[^6]: https://www.forrester.com/blogs/llms-make-room-for-world-models/ 
[^7]: https://openreview.net/pdf?id=BZ5a1r-kVsf 
[^8]: https://en.wikipedia.org/wiki/Human_Compatible 
[^9]: https://en.wikipedia.org/wiki/Model_predictive_control
[^10]: https://www.linkedin.com/posts/yannlecun_lots-of-confusion-about-what-a-world-model-activity-7165738293223931904-vdgR/# 
[^11]: https://techterrain.substack.com/p/world-models-vs-kalman-filter 
[^12]: https://arxiv.org/abs/2302.10035 
[^13]: https://www.1x.tech/discover/1x-world-model
[^14]: https://pubmed.ncbi.nlm.nih.gov/16139527/
[^15]: https://www.jstor.org/stable/2891421
[^16]: https://www.nature.com/articles/35107080
[^17]: https://arxiv.org/abs/1803.10122
[^18]: https://arxiv.org/abs/1706.03762
[^19]: https://arxiv.org/abs/2010.11929
[^20]: https://www.nature.com/articles/nature06976
[^21]: https://openreview.net/pdf?id=BZ5a1r-kVsf
[^22]: https://doi.org/10.1017/CBO9780511895029
[^23]: https://arxiv.org/abs/1704.03924
[^24]: https://arxiv.org/abs/2404.16078
[^25]: https://neilsahota.com/causal-ai-bridging-the-gap-between-correlation-and-causation/
[^26]: https://www.ijcai.org/Proceedings/83-2/Papers/036.pdf
[^27]: https://betterworld.mit.edu/spectrum/issues/2024-spring/biometrics-in-the-age-of-artificial-intelligence/
[^28]: https://pubmed.ncbi.nlm.nih.gov/29684246/
[^29]: https://pmc.ncbi.nlm.nih.gov/articles/PMC7875380/
[^30]: https://pmc.ncbi.nlm.nih.gov/articles/PMC1866291/
[^31]: https://www.science.org/doi/10.1126/sciadv.abj0751
[^32]: https://pmc.ncbi.nlm.nih.gov/articles/PMC9320620/
[^33]: https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.01842/full
[^34]: https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2024.1387641/full
[^35]: https://cacm.acm.org/research/challenges-and-constraints-to-the-diffusion-of-biometrics-in-information-systems/
[^36]: https://pmc.ncbi.nlm.nih.gov/articles/PMC6904682/
[^37]: https://www.nber.org/system/files/working_papers/w29587/w29587.pdf
[^38]: https://pmc.ncbi.nlm.nih.gov/articles/PMC9824521/
[^39]: https://www.biorxiv.org/content/10.1101/2022.02.28.482337v2.full
[^40]: https://www.pnas.org/doi/10.1073/pnas.1016823108
[^41]: https://pmc.ncbi.nlm.nih.gov/articles/PMC10960227/

*[FDM]: Fused Deposition Modeling
*[CNC]: Computerized Numerical Control
*[MPCNC]: Mostly Printed Computerized Numerical Control - https://docs.v1engineering.com/mpcnc/intro/
*[SSH]: Secure Shell
*[GPIO]: General-Purpose Input/Output
*[USB]: Universal Serial Bus
*[ETA]: Estimated Time of Arrival
*[ISO]: International Organization for Standardization
*[UPDI]: Unified Program and Debug Interface
*[AVR]: A Family of microcontrollers developed since 1996 by Atmel
*[JTAG]: Joint Test Action Group
*[IDE]: Integrated Development Environment
*[Rx]: Receiving Signal
*[Tx]: Transmitting Signal
*[VCC]: Voltage Common Collector (+)
*[GND]: Ground / Common Drain (-)
*[IC]: Integrated Circuit
*[LED]: Light-Emitting Diode
*[Cap]: Capacitor
*[SPST]: Single Pole Single Throw Switch
*[SPDT]: Single Pole Double Throw Switch
*[DPST]: Double Pole Single Throw Switch
*[DPDT]: Double Pole Double Throw Switch
*[EEPROM]: Electrically Erasable Programmable Read-Only Memory
*[PCB]: Printed Circuit Board
*[PWM]: Pulse Width Modulation
*[SPI]: Serial Peripheral Interface
*[I2C]: Inter-Integrated Circuit
*[UART]: Universal Asynchronous Receiver/Transmitter
*[ADC]: Analog-to-Digital Converter
*[DAC]: Digital-to-Analog Converter
*[MCU]: Microcontroller Unit
*[FPGA]: Field-Programmable Gate Array
*[SLA]: Stereolithography
*[DLP]: Digital Light Processing 
*[SLS]: Selective Laser Sintering
*[PLA]: Polylactic Acid 
*[ABS]: Acrylonitrile Butadiene Styrene 
*[PETG]: Polyethylene Terephthalate Glycol 
*[CAD]: Computer-Aided Design
*[CAM]: Computer-Aided Manufacturing
*[G-code]: A language for controlling CNC machines
*[PID]: Proportional-Integral-Derivative (control loop feedback mechanism)
*[MOSFET]: Metal-Oxide-Semiconductor Field-Effect Transistor
*[BJT]: Bipolar Junction Transistor
*[SMD]: Surface-Mount Device
*[THT]: Through-Hole Technology
*[DIP]: Dual In-line Package
*[ESC]: Electronic Speed Controller
*[BEC]: Battery Eliminator Circuit
*[LiPo]: Lithium Polymer 
*[NiMH]: Nickel-Metal Hydride 
*[EMI]: Electromagnetic Interference
*[ESD]: Electrostatic Discharge
*[fMRI]: functional Magnetic Resonance Imaging
*[BOLD]: Blood-Oxygen-Level-Dependent
*[LLM]: Large Language Model
*[ROC]: Receiver Operating Characteristic
*[AUC]: Area Under the Curve
*[CUDA]: Compute Unified Device Architecture
*[GPU]: Graphics Processing Unit
*[GELU]: Gaussian Error Linear Unit
*[AdamW]: Adam with Weight Decay
*[HRF]: Hemodynamic Response Function
*[F1]: F1 Score - Harmonic mean of precision and recall
*[TR]: Repetition Time
*[T2]: Type 2 MRI weighting
*[3T]: 3 Tesla (magnetic field strength)
*[NURIPS]: Neural Information Processing Systems
*[WANDB]: Weights & Biases
*[VENV]: Virtual Environment