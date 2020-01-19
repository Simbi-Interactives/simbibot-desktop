var express = require('express');
var router = express.Router();
var db = require('../database/db');
var util = require('util');

const runasync = util.promisify(db.all.bind(db));

router.get('/fetch_subjects', (req, res) => {
  try {
    db.serialize(() => {
      db.all(`Select * from subjects Where display=1`, [], (err, data) => {
        if(err) {
          console.log(err);
          return res.status(422).send(err);
        }
        return res.status(200).send(data);
      });
    })
  } catch(e) {
    console.log(e);
    return res.status(422).send(err);
  }
});

router.get('/fetch_topics/:subject_id', (req, res) => {
  try {
    const id = req.params.subject_id;

    db.serialize(() => {
      db.all(`select * from topics where topics.subject_id=${id} and topics.subject_id is not null and (select count(*) from questions where topics.id = questions.topic_id and explanation is not null and explanation <> '' and questions.deleted_at is null) > 9 and display = 1 order by index_number IS NULL, index_number ASC;`, [], (err, data) => {
        if(err) {
          console.log(err);
          return res.status(422).send(err);
        }

        return res.status(200).send(data);
      })
    })
  } catch(e) {
    console.log(e);
    return res.status(422).send(e);
  }
});

router.get('/fetch_questions/:topic_id', (req, res) => {
  try {
    const topic_id = req.params.topic_id;

    db.serialize(() => {
      db.all(`SELECT * FROM Questions WHERE topic_id=${topic_id} ORDER BY RANDOM() LIMIT 20;`, [], async (err, data) => {
        let questions = [];
        if (data.length > 0) {
          for (var i = 0; i < data.length; i++) {
            let current_Que = {
              id: data[i].id,
              question: data[i].question,
              topic_id: data[i].topic_id,
              explanation: data[i].explanation,
              options: [],
              answer: {}
            };

            let q_id = data[i].id;

            let opt_data = await runasync(`select * from options where q_id=${q_id}`);
              
              if (opt_data.length > 0) {
                for (var j = 0; j < opt_data.length; j++) {
                  let current_ans = {
                    id: opt_data[j].id,
                    q_id: q_id,
                    option_text: opt_data[j].option_text,
                    correct: opt_data[j].correct
                  };

                  if (opt_data[j].correct == 1) {
                    current_Que.answer = current_ans;
                  }
                  current_Que.options.push(current_ans);
                }
                
              }
            questions.push(current_Que);
          }
        }
        
        return res.status(200).send(questions);
      });
    });
  } catch(e) {
    console.log(e);
    
  }
});

router.get('/fetch_super_exams', (req, res) => {
  try {
    db.serialize(() => {
      db.all(`select * from superexams where rank='first_level'`, [], (err, data) => {
        if(err) {
          console.log(err);
          return res.status(422).send(err);
        }

        return res.status(200).send(data);
      });
    })
  } catch(e) {  
    console.log(e);
    return res.status(422).send(e);
  }
});


router.get('/fetch_post_utme', (req, res) => {
  db.serialize(() => {
    db.all(`select * from superexams where rank='second_level'`, [], (err, data) => {
      if(err) {
        console.log(err)
        return res.status(422).send(e)
      }


      return res.status(200).send(data);
    })
  })
});


router.get('/fetch_questions_from_exam_list', (req, res) => {
  const subject_id = req.query.subject_id;
  const super_exam_id = req.query.super_exam_id;

  console.log(subject_id, super_exam_id);
  db.serialize(() => {
    db.all(`SELECT * FROM Questions WHERE subject_id=${subject_id} AND super_exam_id=${super_exam_id} ORDER BY RANDOM() LIMIT 20;`, [], async (err, data) => {
      let questions = [];
      if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
          let current_Que = {
            id: data[i].id,
            question: data[i].question,
            topic_id: data[i].topic_id,
            explanation: data[i].explanation,
            options: [],
            answer: {}
          };

          let q_id = data[i].id;

          let opt_data = await runasync(`select * from options where q_id=${q_id}`);
            if (opt_data.length > 0) {
              for (var j = 0; j < opt_data.length; j++) {
                let current_ans = {
                  id: opt_data[j].id,
                  q_id: q_id,
                  option_text: opt_data[j].option_text,
                  correct: opt_data[j].correct
                };

                if (opt_data[j].correct == 1) {
                  current_Que.answer = current_ans;
                }
                current_Que.options.push(current_ans);
              }
              
            }
          questions.push(current_Que);
        }
      }
      return res.status(200).send(questions);
    });
  })
});

router.get('/fetch_questions_from_exam_list_count', (req, res) => {
  const subject_id = req.query.subject_id;
  const super_exam_id = req.query.super_exam_id;
  db.serialize(() => {
    db.all(`SELECT count(*) FROM Questions WHERE subject_id=${subject_id} AND super_exam_id=${super_exam_id}`, [], (err, data) => {
      if(err) {
        console.log(err);
        return res.status(422).send(err);
      }

      return res.status(200).json({count: data[0]['count(*)']})
    });
  })
});

router.get('/fetch_topic_by_id/:topic_id', (req, res) => {
  const topic_id = req.params.topic_id;

  db.serialize(() => {
    db.all(`Select * from topics where id=${topic_id}`, [], (err, data) => {
      if(err) {
        console.log(err);
        return res.status(422).send(err);
      }

      return res.status(200).send(data[0]);
    })
  })
});

router.post('/store_evaluation_result', (req, res) => {
  const body = req.body;

  db.serialize(() => {
    db.run(`insert into evaluations(topic_id, subject_id, status, user_id, score, completed_at, start_time, end_time) values ('${body.topic_id}', '${body.subject_id}', '${body.status}', '${body.user_id}', '${body.score}', '${body.completed_at}', '${body.start_time}', '${body.end_time}') `,  function(err)  {
      if(err) {
        console.log(err);
        return res.status(422).send(err);
      }

      return res.status(200).json({id: this.lastID});  
    });
  })
});

router.post('/update_evaluation_result', (req, res) => {
  const body = req.body;

  db.serialize(() => {
    db.run(`update evaluations set score=${body.score}, end_time='${body.end_time}', completed_at='${body.completed_at}', status='${body.status}' where id=${body.id}`, function(err) {
      if(err) {
        console.log(err);
        return res.status(422).send(err);
      }

      return res.status(200).send('succesful');
    });
  });
});

router.post('/store_examination_result',  (req, res) => {
  const body = req.body;
  db.serialize(() => {
    db.run(`insert into examresults(exam_id, subject_id, score, user_id, completed_at, start_time, end_time, recommended_topic) values ('${body.exam_id}', '${body.subject_id}', '${body.score}',  '${body.user_id}', '${body.completed_at}', '${body.start_time}', '${body.end_time}', '${body.recommended_topic}') `,  function(err)  {
      if(err) {
        console.log(err);
        return res.status(422).send(err);
      }

      return res.status(200).json({id: this.lastID});  
    });
  })
});

router.post('/update_examination_result', (req, res) => {
  const body = req.body;

  db.serialize(() => {
    db.run(`update examresults set score=${body.score}, end_time='${body.end_time}', completed_at='${body.completed_at}', recommended_topic='${body.recommended_topic}' where id=${body.id}`, function(err) {
      if(err) {
        console.log(err);
        return res.status(422).send(err);
      }

      return res.status(200).send('succesful');
    });
  })
});





module.exports = router;
