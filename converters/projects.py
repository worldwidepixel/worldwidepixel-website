import json

with open('projects.json', 'r') as projects:
  oldProjects = json.load(projects)

newProjects = []

for project in oldProjects.values():
   newProject = {}
   newProject['name'] = project['name']
   newProject['icon'] = project['icon']
   newProject['colour'] = '#041d30'
   newProject['description'] = [project['desc']]
   newProjectLinks = []
   for link in project['links'].values():
      newProjectLink = {}
      newProjectLink['name'] = link['name']
      newProjectLink['to'] = link['to']
      newProjectLinks.append(newProjectLink)
   newProject['links'] = newProjectLinks
   newProjects.append(newProject)

with open("projects_out.json", "w") as projects_out:
    writableProjects = json.dumps(newProjects, indent=4)
    projects_out.write(writableProjects)

print('done')
