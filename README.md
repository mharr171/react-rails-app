# Bootstrap - React - Rails

Setup was done using
[this](https://medium.com/superhighfives/a-top-shelf-web-stack-rails-5-api-activeadmin-create-react-app-de5481b7ec0b) very helpful tutorial by Charlie Gleason with a few adjustments.

**Includes:**
- React Front End
  - Bootstrap
- Rails 5 API
  - ActiveAdmin
- (heroku-ready)
---
**Instructions:**
1. ```git clone {github-project-url}```
2. ```cd {project-folder}/client```
3. ```npm install```
4. ```cd ..```
5. ```rails start```

---

#### Rails Controllers
```rb
class _____Controller < ApiController
end
```
---

#### ActiveAdmin
after running ```rails start``` check that the admin panel can be accessed at ```http://localhost:3001/admin```

---

#### Rails Models

```rails g scaffold {Model}```

```rails g active_admin::resource {Model}```

in ```app/admin/{model}.rb``` add
``` permit_params :{param_name}```
