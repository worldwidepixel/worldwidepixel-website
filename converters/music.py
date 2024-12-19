import json

with open('music_in.json', 'r') as music:
  oldMusic = json.load(music)

newMusics = []

for music in oldMusic.values():
   newMusic = {}
   newMusic['title'] = music['title']
   newMusic['icon'] = music['icon']
   newMusic['date'] = music['date']
   newMusic['colour'] = '#041d30'
   newMusic['description'] = [music['desc']]
   newMusicLinks = []
   for link in music['links'].values():
      newMusicLink = {}
      newMusicLink['name'] = link['title']
      newMusicLink['to'] = link['to']
      newMusicLinks.append(newMusicLink)
   newMusic['links'] = newMusicLinks
   newMusics.append(newMusic)

with open("music_out.json", "w") as music_out:
    writableMusic = json.dumps(newMusics, indent=4)
    music_out.write(writableMusic)

print('done')
