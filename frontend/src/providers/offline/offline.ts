import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Zip } from "@ionic-native/zip";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { BehaviorSubject } from "rxjs";
import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy";
import { Storage } from "@ionic/storage";
import { Events } from "ionic-angular";
import { File } from "@ionic-native/file";
import { config } from "../../config";

declare var cordova: any;

@Injectable()
export class OfflineProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;
  constructor(
    public http: HttpClient,
    private zip: Zip,
    private sqlite: SQLite,
    private sqliteCopy: SqliteDbCopy,
    private storage: Storage,
    private events: Events,
    private file: File
  ) {
    this.databaseReady = new BehaviorSubject(false);
    this.storage.get("db_copied").then(val => {
      if (val != null) {
        this.sqlite
          .create({
            name: `${config.db_name}`,
            location: "default"
          })
          .then((db: SQLiteObject) => {
            this.database = db;
            this.databaseReady.next(true);
          });
      }
    });

    this.events.subscribe("db_hascopied", () => {
      this.storage.get("db_copied").then(val => {
        if (val != null) {
          this.sqlite
            .create({
              name: `${config.db_name}`,
              location: "default"
            })
            .then((db: SQLiteObject) => {
              this.database = db;
              this.databaseReady.next(true);
            });
        }
      });
    });
  }

  // public async unzipDatabase() {
  //   const file_path = await this.file.resolveLocalFilesystemUrl(
  //     this.file.applicationDirectory + "www/data.zip"
  //   );

  //   const destination = await this.file.resolveLocalFilesystemUrl(
  //     this.file.applicationDirectory + "www/"
  //   );

  //   const file_dir = await this.file.resolveLocalFilesystemUrl(
  //     this.file.applicationDirectory + "www/data/"
  //   );

  //   console.log(file_path.nativeURL);

  //   this.zip
  //     .unzip(file_path.nativeURL, destination.nativeURL)
  //     .then(result => {
  //       console.log("result", result);
  //       if (result == 0) {
  //         this.file
  //           .moveFile(
  //             file_dir.nativeURL,
  //             `${config.db_name}`,
  //             destination.nativeURL,
  //             `${config.db_name}`
  //           )
  //           .then(moved => {
  //             console.log("File moved and unzipped succesffuly");
  //           });
  //         // this.initializeDb();
  //       }

  //       if (result == -1) {
  //         console.log("Error in unzipping");
  //       }
  //     })
  //     .catch(err => {
  //       console.log("err", err);
  //     });
  // }

  public setupDb() {

    this.sqliteCopy
      .copy(`${config.db_name}`, 2)
      .then(copied => {
        this.storage.set("db_copied", true);
        this.events.publish("db_setup");
      })
      .catch((err: any) => {
        console.log("unabled to cp", err);
        if (err.code == 516) {
          this.sqliteCopy.remove(`${config.db_name}`, 2);
          this.setupDb();
        }
      });
  }

  public fetchSubjects() {
    return this.database
      .executeSql("Select * from subjects Where display=1", [])
      .then(data => {
        let subjects = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            subjects.push({
              name: data.rows.item(i).name,
              color: data.rows.item(i).color,
              id: data.rows.item(i).id,
              image_url: data.rows.item(i).image_url
            });
          }
        }
        return subjects;
      });
  }

  public fetchTopics(id) {
    return this.database
      .executeSql(
        `select * from topics where topics. subject_id=${id} and topics.subject_id is not null and (select count(*) from questions where topics.id = questions.topic_id and explanation is not null and explanation <> '' and questions.deleted_at is null) > 9 and display = 1 order by index_number IS NULL, index_number ASC;`,
        []
      )
      .then(data => {
        console.log(data);
        let topics = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            topics.push({
              id: data.rows.item(i).id,
              topic: data.rows.item(i).topic,
              subject_id: data.rows.item(i).subject_id
            });
          }
        }
        return topics;
      });
  }

  public fetchQuestionForEvalutation(topic_id) {
    return this.database
      .executeSql(
        `SELECT * FROM Questions WHERE topic_id=${topic_id} ORDER BY RANDOM() LIMIT 20;`,
        []
      )
      .then(data => {
        let questions = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            let current_Que = {
              id: data.rows.item(i).id,
              question: data.rows.item(i).question,
              topic_id: data.rows.item(i).topic_id,
              explanation: data.rows.item(i).explanation,
              options: [],
              answer: {}
            };

            let q_id = data.rows.item(i).id;
            this.database
              .executeSql(`Select * From options WHERE q_id= ${q_id}`, [])
              .then(opt_data => {
                if (opt_data.rows.length > 0) {
                  for (var j = 0; j < opt_data.rows.length; j++) {
                    let current_ans = {
                      id: opt_data.rows.item(j).id,
                      q_id: q_id,
                      option_text: opt_data.rows.item(j).option_text,
                      correct: opt_data.rows.item(j).correct
                    };

                    if (opt_data.rows.item(j).correct == 1) {
                      current_Que.answer = current_ans;
                    }
                    current_Que.options.push(current_ans);
                  }
                }
              });

            questions.push(current_Que);
          }
        }

        return questions;
      });
  }

  public fetchQuestionForTest(topic_id) {
    return this.database
      .executeSql(
        `SELECT * FROM Questions WHERE topic_id=${topic_id} ORDER BY RANDOM() LIMIT 20;`,
        []
      )
      .then(data => {
        let questions = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            let current_Que = {
              id: data.rows.item(i).id,
              topic_id: data.rows.item(i).topic_id,
              question: data.rows.item(i).question,
              explanation: data.rows.item(i).explanation,
              options: [],
              answer: {}
            };

            let q_id = data.rows.item(i).id;
            this.database
              .executeSql(`Select * From options WHERE q_id= ${q_id}`, [])
              .then(opt_data => {
                if (opt_data.rows.length > 0) {
                  for (var j = 0; j < opt_data.rows.length; j++) {
                    let current_ans = {
                      id: opt_data.rows.item(j).id,
                      q_id: q_id,
                      option_text: opt_data.rows.item(j).option_text,
                      correct: opt_data.rows.item(j).correct
                    };

                    if (opt_data.rows.item(j).correct == 1) {
                      current_Que.answer = current_ans;
                    }
                    current_Que.options.push(current_ans);
                  }
                }
              });

            questions.push(current_Que);
          }
        }

        return questions;
      });
  }

  public fetchSuperExamByID(id) {
    return this.database
      .executeSql(`Select * from SuperExams where id=${id}`, [])
      .then(data => {
        return data.rows.item(0);
      })
      .catch(err => {
        console.log(err);
      });
  }

  public fetchQuestionFromExamList(subject_id, super_exam_id) {
    return this.database
      .executeSql(
        `SELECT * FROM Questions WHERE subject_id=${subject_id} AND super_exam_id=${super_exam_id} ORDER BY RANDOM() LIMIT 20;`,
        []
      )
      .then(async data => {
        let questions = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            let current_Que = {
              id: data.rows.item(i).id,
              question: data.rows.item(i).question,
              topic_id: data.rows.item(i).topic_id,
              explanation: data.rows.item(i).explanation,
              options: [],
              answer: {}
            };

            let q_id = data.rows.item(i).id;
            this.database
              .executeSql(`Select * From options WHERE q_id= ${q_id}`, [])
              .then(opt_data => {
                if (opt_data.rows.length > 0) {
                  for (var j = 0; j < opt_data.rows.length; j++) {
                    let current_ans = {
                      id: opt_data.rows.item(j).id,
                      q_id: q_id,
                      option_text: opt_data.rows.item(j).option_text,
                      correct: opt_data.rows.item(j).correct
                    };

                    if (opt_data.rows.item(j).correct == 1) {
                      current_Que.answer = current_ans;
                    }
                    current_Que.options.push(current_ans);
                  }
                }
              });

            questions.push(current_Que);
          }
        }

        return questions;
      });
  }

  public fetchQuestionFromExamListCount(subject_id, super_exam_id) {
    return this.database
      .executeSql(`SELECT count(*) FROM Questions WHERE subject_id=${subject_id} AND super_exam_id=${super_exam_id}`, [])
      .then(data => {
        console.log('total count: ', data.rows.item(0)['count(*)']);
        return data.rows.item(0)['count(*)']
      })
  }

  public fetchTopicByID(id) {
    return this.database
      .executeSql(`Select * from topics where id=${id}`, [])
      .then(data => {
        return data.rows.item(0);
      })
      .catch(err => {
        console.log(err);
      });
  }

  public updateTable(table, data) {
    console.log(`updating ${table}........................................................................`)

    switch (table) {
      case "subjects":
        return this.updateSubjects(data)
      case "topics":
        return this.updateTopics(data)
      case "super_exams":
        return this.updateSuperExams(data)
      case "options":
        return this.updateOptions(data)
      case "questions":
        return this.updateQuestions(data)
      default:
        console.log(`${table} doesn't exist`)
        return;
    }
  }

  public updateSubjects = async (dataToInsert) => {
    console.log('updating subjects.......')
    for (const row of dataToInsert) {
      await this.database.executeSql(`INSERT  or REPLACE INTO subjects (id, name, display, color, image_url , createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [row.id, row.name, row.display, row.color, row.image_url, row.createdAt || new Date().toISOString(), row.updatedAt || new Date().toISOString()])
        .then(data => {
          console.log('updating subject...................')
          return true
        }).catch(err => console.log('error while updating subjects: ', err))

    }
    console.log('.................. finished updating subjects..............')
  }



  public updateTopics = async (dataToInsert) => {


    for (const row of dataToInsert) {
      await this.database.executeSql(`INSERT or REPLACE INTO topics (id, display, topic, index_number, subject_id, description, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [row.id, row.display, row.topic, row.index_number, row.subject_id, row.description, row.createdAt || new Date().toISOString(), row.updatedAt || new Date().toISOString()])
        .then(data => {
          console.log('updated topic..................................')
          return true
        }).catch(err => console.log('error while updating topics: ', err))
    }
    console.log('.................. finished updating topics..............')

  }

  public updateSuperExams = async (dataToInsert) => {

    for (const row of dataToInsert) {
      await this.database.executeSql(`INSERT  or REPLACE INTO SuperExams (id, name, similar_name, rank, has_subexam, parent_id, subjects_list, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [row.id, row.name, row.similar_name, row.rank, row.has_subexam, row.parent_id, row.subjects_list, row.createdAt || new Date().toISOString(), row.updatedAt || new Date().toISOString()])
        .then(data => {
          console.log('updated super_exam.................')
          return true;
        }).catch(err => console.log('error while updating super_exams: ', err))

    }
    console.log('.................. finished updating super exams..............')
  }

  public updateOptions = async (dataToInsert) => {
    console.log('updating options....')

    for (const row of dataToInsert) {
      await this.database.executeSql(`INSERT  or REPLACE INTO options (id, q_id, option_text, correct, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6)`, [row.id, row.q_id, row.option_text, row.correct, row.createdAt || new Date().toISOString(), row.updatedAt || new Date().toISOString()])
        .then(data => {
          console.log('updated option............................................')
          return true;
        }).catch(err => console.log('error while updating options: ', err))

    }
    console.log('.................. finished updating super options..............')

  }

  public updateQuestions = async (dataToInsert) => {
    console.log('updating questions....')


    for (const row of dataToInsert) {
      // insert new data into table          
      await this.database.executeSql(`INSERT  or REPLACE INTO Questions (id, author_id, subject_id, topic_id, difficulty_number, question, year_tag, explanation, deleted_at, super_exam_id, school_id, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`, [row.id, row.author_id, row.subject_id, row.topic_id, row.difficulty_number, row.question, row.year_tag, row.explanation, row.deleted_at, row.super_exam_id, row.school_id, row.createdAt || new Date().toISOString(), row.updatedAt || new Date().toISOString()])
        .then(data => {
          console.log('updated question...........................: ')
          return true;
        }).catch(err => console.log('error while updating Questions: ', err))

    }
    console.log('.................. finished updating questions..............')
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
}
