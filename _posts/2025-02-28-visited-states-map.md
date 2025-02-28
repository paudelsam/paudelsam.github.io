---
layout: default
title: "Types of Graphs in Machine Learning"
date: 2025-02-28
categories: general
---

# US States Visited Map
Last year, I have this idea of making a state map of USA so that I can shade the states I have visited. Let me show you how I did it using Python.

## Prerequisites
### Dependencies
We will need following Python packages installed. I am using `pip` to install the packages. Run this only once.

```python
!pip install geopandas
!pip install geodatasets
```
### Shape files
Download shape files from [fs](fd). Alternatively, you can find updated shape files from internet as well.

## Create the map
Now that we have everything we need, let's start creating the map. Import required packages

```python
from matplotlib import pyplot as plt
from matplotlib.patches import Patch
import geopandas
import os
```

Ensure the SHX file is restored. 
```python
os.environ["SHAPE_RESTORE_SHX"] = "YES"
```

Load the shape file. Ensure you are pointing to the correct directory
```python
states = geopandas.read_file("/shape_files/States_shapefile.shp")
```

To make the map look beautiful I am removign Alaska and Hawaii for now. View the edited map and confirm everything is fine. Also, note the format of state names and their symbol.
```python
states_small = states[(states.State_Name != "ALASKA") & (states.State_Name != "HAWAII")]
states_small
```

Make a list of visited states by year. You can either use full states' names or abbreviations.
```python
visited_states_2023 = ["INDIANA", "GEORGIA", "MASSACHUSETTS", "ILLINOIS", "NEW YORK"]
visited_states_2024 = ["NEW HAMPSHIRE", "NORTH CAROLINA", "VIRGINIA"]
```

Plot the entire map.
```python
fig, ax = plt.subplots(1, 1, figsize=(16, 9))
states_small.plot(ax=ax, edgecolor="Black", linewidth=0.5, facecolor="lightgray")
```

Now, plot visited states for 2023 and 2024. If you use state abbreviation, use the appropriate header in the shape file for state abbreviation.
```python
visited_2023 = states[states.State_Name.isin(visited_states_2023)]
visited_2024 = states[states.State_Name.isin(visited_states_2024)]

visited_2023.plot(ax=ax, edgecolor="Black", linewidth=0.5, facecolor="plum", label="Year 2023")
visited_2024.plot(ax=ax, edgecolor="Black", linewidth=0.5, facecolor="turquoise", label="Year 2024")
```

Show state names for visited states
```python
visited_list = [visited_2023, visited_2024]
for visited_year in visited_list:
    for idx, row in visited_year.iterrows():
        centroid = row.geometry.centroid
        ax.text(centroid.x, centroid.y, row["State_Code"], fontsize=8, ha='center', va='center')
```

Create a custom legend. The regular method was not working
```python
handles = [Patch(color="plum"), Patch(color="turquoise")]
labels = ["2023", "2024"]
ax.legend(handles, labels, title="Year Visited", loc=[0.875, 0.05])
```

Set a title and remove the axis
```python
ax.set_title("States Visited")
ax.set_axis_off()
```

Finally save and show the map
```python
plt.savefig("visited_states.png", dpi=300, bbox_inches=None)
plt.show()
```
A sample map produced by the script is shown below.
![state_visited]([https://github.com/user-attachments/assets/535a80a3-afd5-4d80-99ca-6facc3fc2b9b](https://github.com/paudelsam/paudelsam.github.io/blob/main/data/image_blog/state_visited.png))
