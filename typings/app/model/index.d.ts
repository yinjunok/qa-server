// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnswer from '../../../app/model/answer';
import ExportAnswerFavorites from '../../../app/model/answer_favorites';
import ExportFavorites from '../../../app/model/favorites';
import ExportQuestion from '../../../app/model/question';
import ExportTopic from '../../../app/model/topic';
import ExportUser from '../../../app/model/user';
import ExportUserRelation from '../../../app/model/user_relation';
import ExportUserThankful from '../../../app/model/user_thankful';
import ExportUserVote from '../../../app/model/user_vote';

declare module 'sequelize' {
  interface Sequelize {
    Answer: ReturnType<typeof ExportAnswer>;
    AnswerFavorites: ReturnType<typeof ExportAnswerFavorites>;
    Favorites: ReturnType<typeof ExportFavorites>;
    Question: ReturnType<typeof ExportQuestion>;
    Topic: ReturnType<typeof ExportTopic>;
    User: ReturnType<typeof ExportUser>;
    UserRelation: ReturnType<typeof ExportUserRelation>;
    UserThankful: ReturnType<typeof ExportUserThankful>;
    UserVote: ReturnType<typeof ExportUserVote>;
  }
}
