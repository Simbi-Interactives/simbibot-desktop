## SETUP
- Install backend node_modules ```npm install``` 
- Install frontend node_modules ``` cd frontend && npm install```


* Build `npm run build:exe`

* Script for migrating json to sqlite 
```
const fs = require('fs');

const rawdata = fs.readFileSync('./simbi_db2.json');
let parsed_data = JSON.parse(rawdata);


var knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./data.db"
    },
    useNullAsDefault: true
  });

async function add() {
    let opt_data = parsed_data[2].data;
    let q_data = parsed_data[3].data;
    let subject_data = parsed_data[4].data;
    let super_exams = parsed_data[5].data;
    let topics = parsed_data[6].data;


    for(let opt of opt_data) {
        try {
            await knex('options').insert({ id: opt.id, q_id: opt.q_id, option_text: opt.option_text, correct: opt.correct, created_at: opt.created_at, updated_at: opt.updated_at});

        } catch(e) {
            console.log('options.........', e, opt);
        }
    }

    for (let q of q_data) {
        try {
            await knex('questions').insert({id: q.id, author_id: q.author_id, subject_id: q.subject_id, topic_id: q.topic_id, difficulty_number: q.difficulty_number, question: q.question, year_tag: q.year_tag, explanation: q.explanation, deleted_at: q.deleted_at, super_exam_id: q.super_exam_id, school_id: q.school_id, created_at: q.created_at, updated_at: q.updated_at});

        } catch(e) {
            console.log('questions.............', e, q);
        }
    }

    for(let subj_data of subject_data) {
        try {
            await knex('subjects').insert({ id: subj_data.id,  name: subj_data.name, color: subj_data.color, created_at: subj_data.created_at, updated_at: subj_data.updated_at, image_url: subj_data.image_url, display: subj_data.display })

        } catch(e) {
            console.log('subjects...............', e, subj_data)
        }
    }

    for(let sup_exam of super_exams) {
        try {
            await knex('super_exams').insert({ id: sup_exam.id, name: sup_exam.name, similar_name: sup_exam.similar_name, rank: sup_exam.rank, has_subexam: sup_exam.has_subexam, parent_id: sup_exam.parent_id, subjects_list: sup_exam.subjects_list, created_at: sup_exam.created_at, updated_at: sup_exam.updated_at});

        } catch(e) {
            console.log('super exams ............', e, sup_exam);
        }
    }

    for(let topic of topics) {
        try {
            await knex('topics').insert({ id: topic.id, topic: topic.topic, subject_id: topic.subject_id, index_number: topic.index_number, description: topic.description, display: topic.display, created_at: topic.created_at, updated_at: topic.updated_at});

        } catch(e) {
            console.log('topicssss .........', e, topic);
        }
    }

}


add();
```
### PUBLISHING APP UPDATES USING GITHUB RELEASES

In the package.json, go to the build#publish section,
there you can change the repo to push to and the owner of the repo to host the release on your own repo

- create a PUBLIC ACCESS TOKEN on your repo and add it to your environment as GH_TOKEN or GITHUB_TOKEN so the app can use it to pull updates from the repo.

## WINDOWS
To publish updates for windows run
``` npm run publish:win ```
To build  32bit updates run 
 ``` npm run build:32bit```

Make sure you commit your changes and push to the repo.

## PUBLISHING RELEASES
 after running the publish command, a github release draft is created on the target repository, go to the repo and edit the release and publish it.

The app will automatically detect this updates and pull.