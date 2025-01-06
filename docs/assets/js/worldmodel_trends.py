import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime, timedelta
import numpy as np

# Create sample data (you should replace this with your actual data)

# 1. Google Trends Data
dates = pd.date_range(start='2020-01-01', end='2024-01-01', freq='M')
trend_values = [10, 12, 15, 18, 20, 25, 30, 35, 40, 45, 50, 55,
                60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115,
                120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175,
                180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235]

google_trends_df = pd.DataFrame({
    'Date': dates,
    'Interest': trend_values
})

# 2. Academic Literature Mentions
years = list(range(2020, 2025))
mentions = [50, 150, 450, 1200, 2500]

mentions_df = pd.DataFrame({
    'Year': years,
    'Mentions': mentions
})

# 3. Citations Data
papers = ['World Models (Ha & Schmidhuber, 2018)',
          'DreamerV3 (2023)',
          'RT-2 (2023)',
          'General World Models (2024)']
citations = [2500, 800, 400, 150]

citations_df = pd.DataFrame({
    'Paper': papers,
    'Citations': citations
})

# Create the plots

# 1. Google Trends Plot
fig1 = px.line(google_trends_df, x='Date', y='Interest',
               title='Google Trends Interest in "World Models" (AI Context)',
               template='plotly_white')
fig1.update_traces(line_color='#2196f3')
fig1.update_layout(
    xaxis_title='Date',
    yaxis_title='Search Interest (normalized)',
    showlegend=False,
    hovermode='x unified'
)

# 2. Academic Mentions Plot
fig2 = px.bar(mentions_df, x='Year', y='Mentions',
              title='Mentions of "World Models" in Academic Literature',
              template='plotly_white')
fig2.update_traces(marker_color='#4caf50')
fig2.update_layout(
    xaxis_title='Year',
    yaxis_title='Number of Mentions',
    showlegend=False,
    hovermode='x unified'
)

# 3. Citations Plot
fig3 = px.bar(citations_df, x='Paper', y='Citations',
              title='Citations of Key World Model Papers',
              template='plotly_white')
fig3.update_traces(marker_color='#ff9800')
fig3.update_layout(
    xaxis_title='Paper',
    yaxis_title='Number of Citations',
    showlegend=False,
    hovermode='x unified',
    xaxis_tickangle=-45
)

# Save the plots
fig1.write_html('docs/assets/misc/world_models_trends.html')
fig2.write_html('docs/assets/misc/world_models_mentions.html')
fig3.write_html('docs/assets/misc/world_models_citations.html')

# Also save as CSV files for future reference
google_trends_df.to_csv('docs/assets/misc/world_models_trends.csv', index=False)
mentions_df.to_csv('docs/assets/misc/world_models_mentions.csv', index=False)
citations_df.to_csv('docs/assets/misc/world_models_citations.csv', index=False) 