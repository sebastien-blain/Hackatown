import pandas as pd
import requests

df = pd.read_csv('Hackatown2021Dataset - Sheet1.csv')

info = df[['id', 'Tags']]
url = 'http://127.0.0.1:5000/gifts/add'

for index, row in info.iterrows():
    id = row['id']
    tags = [i.strip() for i in row['Tags'].split(',')]
    myobj = {'id': id, 'tags':tags}
    x = requests.post(url, json=myobj)
    print(x)

